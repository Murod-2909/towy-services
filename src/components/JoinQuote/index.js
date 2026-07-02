import React, { useState } from 'react';
import './JoinQuote.scss';


const JoinQuote = ({ joinBg = '', quoteBg = '' }) => {
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        towFrom: '',
        towTo: '',
        vehicleType: '',
        date: '',
    });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quote submitted:', form);
        // TODO: backend / email service bilan ulash
    };

    return (
        <section className="join-quote-section">

            {/* ─── LEFT: Join Our Team ─── */}
            <div
                className="join-side"
                style={joinBg ? { backgroundImage: `url(${joinBg})` } : {}}
            >
                <h2 className="section-heading">
                    Join <strong>Our Team</strong>
                </h2>
                <p className="section-sub">Fast and courteous specialists</p>
                <div className="section-divider" />

                <p className="join-text">
                    We are always looking for dedicated, professional drivers and
                    operators who take pride in delivering fast, reliable, and
                    courteous towing services. If you're passionate about helping
                    people in tough situations, we'd love to have you on board.
                </p>

                <button className="btn-apply" type="button">
                    Apply Today
                </button>
            </div>

            {/* ─── RIGHT: Get a Quote ─── */}
            <div
                className="quote-side"
                style={quoteBg ? { backgroundImage: `url(${quoteBg})` } : {}}
            >
                <h2 className="section-heading">
                    Get a <strong>Quote</strong>
                </h2>
                <p className="section-sub">Delivers the best</p>
                <div className="section-divider" />

                <form className="quote-form" onSubmit={handleSubmit} noValidate>
                    <input
                        className="form-input"
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        value={form.fullName}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="text"
                        name="towFrom"
                        placeholder="Tow From"
                        value={form.towFrom}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="text"
                        name="towTo"
                        placeholder="Tow To"
                        value={form.towTo}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="text"
                        name="vehicleType"
                        placeholder="Vehicle Type"
                        value={form.vehicleType}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                    />
                </form>

                <button className="btn-submit" type="submit" onClick={handleSubmit}>
                    Submit Now
                </button>
            </div>

        </section>
    );
};

export default JoinQuote;