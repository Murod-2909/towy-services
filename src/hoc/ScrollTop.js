import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo({ left: 0, top: 0, behavior: "auto" });
    }
};

const ScrollTop = (Component) => {
    const WrappedComponent = (props) => {
        const { pathname } = useLocation();

        useEffect(() => {
            scrollToTop();
        }, [pathname]);

        return <Component {...props} />;
    };

    return WrappedComponent;
};

export default ScrollTop;
