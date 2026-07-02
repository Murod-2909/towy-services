import iconTowing from "../assets/image/icon-towing.svg";
import iconHail from "../assets/image/icon-hail.svg";
import iconFlood from "../assets/image/icon-flood.svg";
import iconAccident from "../assets/image/icon-accident.svg";
import iconFire from "../assets/image/icon-fire.svg";
import iconMotorcycle from "../assets/image/icon-motorcycle.svg";

import imgTowing from "../assets/image/07-1.jpg";
import imgHail from "../assets/image/06-1.jpg";
import imgFlood from "../assets/image/02-2.jpg";
import imgAccident from "../assets/image/03-2.jpg";
import imgFire from "../assets/image/counters.jpg";
import imgMotorcycle from "../assets/image/quote.jpg";

// Structural data only (image assets) — translated text (title, desc,
// description, checklist, extra) lives in src/i18n/locales/*.json under
// services.items.<id>, since this module can't use the useTranslation hook.
export const SERVICES = [
    { id: "car-towing", icon: iconTowing, image: imgTowing },
    { id: "hail-damage", icon: iconHail, image: imgHail },
    { id: "flood-insurance", icon: iconFlood, image: imgFlood },
    { id: "accident-insurance", icon: iconAccident, image: imgAccident },
    { id: "fire-insurance", icon: iconFire, image: imgFire },
    { id: "motorcycle-towing", icon: iconMotorcycle, image: imgMotorcycle },
];

export function getServiceById(id) {
    return SERVICES.find((service) => service.id === id);
}
