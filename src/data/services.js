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

export const SERVICES = [
    {
        id: "car-towing",
        title: "Car Towing",
        desc: "We provide fast and safe car towing services across the city. Our flatbed trucks ensure your vehicle arrives without any additional damage.",
        icon: iconTowing,
        image: imgTowing,
        description: "Whether you're stuck on the highway or parked outside your own driveway, our flatbed and wheel-lift trucks get your car moving again without adding a scratch. Every driver on our team is trained to secure a vehicle correctly for its make and drivetrain, so front-wheel, rear-wheel and all-wheel-drive cars are all towed the right way.",
        checklist: [
            "Flatbed and wheel-lift trucks for every vehicle type",
            "Drivers trained on drivetrain-safe towing methods",
            "Available citywide, 24 hours a day",
            "Upfront pricing with no hidden fees",
        ],
        extra: "Most calls are answered in under a minute, and our dispatch system routes the closest available truck to you automatically. From a simple relocation to a long-distance tow, we handle the paperwork and logistics so you only have to make one call.",
    },
    {
        id: "hail-damage",
        title: "Hail Damage",
        desc: "Caught in a storm? We respond immediately to hail damage emergencies and tow your vehicle to the nearest certified repair center.",
        icon: iconHail,
        image: imgHail,
        description: "A bad hailstorm can leave a vehicle undriveable in minutes. We prioritize storm-damage calls and dispatch the nearest truck as soon as you reach out, getting your car off the road and away from any further exposure to the weather.",
        checklist: [
            "Priority dispatch during active storm events",
            "Careful loading to avoid further body damage",
            "Direct transport to certified repair centers",
            "Help documenting damage for your insurance claim",
        ],
        extra: "We work with most major insurers, so once your vehicle is secured we can help you start the claims process right away instead of leaving you to sort it out on your own.",
    },
    {
        id: "flood-insurance",
        title: "Flood Insurance Coverage",
        desc: "Flood damaged your vehicle? Our team works with all major insurance providers and handles the towing and documentation process for you.",
        icon: iconFlood,
        image: imgFlood,
        description: "Flood water can cause damage that isn't obvious right away, which is why a flooded vehicle should be moved and inspected as soon as possible. We tow flood-affected cars to a safe, dry location and can coordinate directly with your insurance provider on your behalf.",
        checklist: [
            "Safe removal from flooded roads and parking areas",
            "Photo documentation for your insurance claim",
            "Coordination with major insurance providers",
            "Transport to assessment or repair facilities",
        ],
        extra: "Because flood damage claims often require specific documentation, our drivers photograph the water line and vehicle condition on-site before towing, saving you time later in the claims process.",
    },
    {
        id: "accident-insurance",
        title: "Accident Insurance",
        desc: "After a collision, the last thing you need is more stress. We coordinate with your insurer and get your car to the repair shop quickly.",
        icon: iconAccident,
        image: imgAccident,
        description: "The minutes after a collision are stressful enough without worrying about how your car gets off the road. Our accident-response drivers arrive quickly, clear the vehicle safely, and can take it directly to your preferred repair shop or insurance drop-off point.",
        checklist: [
            "Rapid response to collision sites",
            "Safe clearance to keep traffic moving",
            "Direct coordination with your insurance adjuster",
            "Delivery to your chosen repair shop",
        ],
        extra: "If you're unsure who to call first, call us — we can guide you through the immediate next steps while your truck is already on the way.",
    },
    {
        id: "fire-insurance",
        title: "Fire Insurance",
        desc: "Vehicle fire damage requires immediate response. We secure and tow your vehicle safely while you focus on filing your insurance claim.",
        icon: iconFire,
        image: imgFire,
        description: "A vehicle fire is one of the most dangerous roadside situations a driver can face. Once the fire department has cleared the scene, our team safely secures and removes the vehicle so you're not left with a burned-out car blocking traffic or sitting on your property.",
        checklist: [
            "Coordination with fire and emergency services on-site",
            "Safe handling of fire-damaged vehicles",
            "Storage options while your claim is processed",
            "Full documentation to support your insurance claim",
        ],
        extra: "We know a vehicle fire is an unsettling experience. Our dispatchers stay on the phone with you until a truck arrives, and our drivers handle everything from that point so you can focus on what matters.",
    },
    {
        id: "motorcycle-towing",
        title: "Motorcycle Towing",
        desc: "Motorcycles need special care during towing. Our trained crew uses proper equipment to transport your bike without scratches or damage.",
        icon: iconMotorcycle,
        image: imgMotorcycle,
        description: "Motorcycles can't be towed like a car — the wrong equipment or an inexperienced driver can easily scratch the paint or damage the frame. Our crews use motorcycle-specific wheel chocks and soft tie-downs, and every bike rides flat and secured for the entire trip.",
        checklist: [
            "Motorcycle-specific flatbeds and tie-down equipment",
            "Soft straps that won't mark paint or chrome",
            "Trained crew experienced with all bike sizes",
            "Available for breakdowns, accidents and long-distance moves",
        ],
        extra: "Whether it's a quick tow to your regular mechanic or a longer trip after a breakdown on tour, your bike is loaded, secured and unloaded by someone who treats it like their own.",
    },
];

export function getServiceById(id) {
    return SERVICES.find((service) => service.id === id);
}
