import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../i18n";
import "./languageSwitcher.scss";

function LanguageSwitcher({ className = "" }) {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);

    const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className={`lang-switcher ${className}`.trim()} ref={rootRef}>
            <button
                type="button"
                className="lang-switcher__toggle"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                {current.label}
                <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isOpen && (
                <ul className="lang-switcher__menu" role="listbox">
                    {LANGUAGES.map((lang) => (
                        <li key={lang.code}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={lang.code === current.code}
                                className={lang.code === current.code ? "is-active" : ""}
                                onClick={() => selectLanguage(lang.code)}
                            >
                                {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSwitcher;
