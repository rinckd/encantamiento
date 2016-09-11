export class Tone {
    id: number;
    name: string;
    mayanName: string;
    verb: string;
    essence: string;
    action: string;
    purpose: string;
};

export class Seal {
    id: number;
    color: string;
    name: string;
    mayanName: string;
    verb: string;
    essence: string;
    power: string;
}
export const Seals: Seal[] = [
    { id: 0, color: "Yellow", name: "Sun", mayanName: "Ahau", verb: "Enlightens", essence: "Life", power:"Universal Fire" },
    { id: 1, color: "Red", name: "Dragon", mayanName: "Imix", verb: "Nurtures", essence:"Being", power:"Birth" }, 
    { id: 2, color: "White", name: "Wind", mayanName: "Ik", verb: "Communicates", essence: "Breath", power: "Spirit" }, 
    { id: 3, color: "Blue", name: "Night", mayanName: "Akbal", verb:"Dreams", essence:"Intuition", power:"Abundance" }, 
    { id: 4, color: "Yellow", name: "Seed", mayanName: "Kan", verb:"Targets", essence:"Awareness", power:"Flowering (ideas)" }, 
    { id: 5, color: "Red", name: "Serpent", mayanName: "Chiccan", verb: "Survives", essence:"Awareness", power: "Life-force (instinct)" }, 
    { id: 6, color: "White", name: "World-Bridger", mayanName:"Cimi", verb:"Equalizes", essence:"Opportunity", power:"Death (span dimensions)" },
    { id: 7, color: "Blue", name: "Hand", mayanName: "Manik", verb:"Knows", essence:"Healing", power:"Accomplishment (heals)" }, 
    { id: 8, color: "Yellow", name: "Star", mayanName: "Lamat", verb: "Beautifies", essence:"Art", power:"Elegance" }, 
    { id: 9, color: "Red", name: "Moon", mayanName: "Muluc", verb:"Purifies", essence:"Flow", power:"Universal Water" }, 
    { id: 10, color: "White", name: "Dog", mayanName: "Oc", verb: "Loves", essence: "Loyalty", power:"Heart (truth)" }, 
    { id: 11, color: "Blue", name: "Monkey", mayanName:"Chuen", verb:"Plays", essence:"Illusion", power:"Magic" },
    { id: 12, color: "Yellow", name: "Human", mayanName:"Eb", verb:"Influences", essence:"Wisdom", power:"Free Will" }, 
    { id: 13, color: "Red", name: "Skywalker", mayanName: "Ben", verb:"Explores", essence:"Wisdom", power:"Space" }, 
    { id: 14, color: "White", name: "Wizard", mayanName: "Ix", verb:"Enchants", essence: "Receptivity", power:"Timelessness" }, 
    { id: 15, color: "Blue", name: "Eagle", mayanName: "Men", verb: "Creates", essence: "Mind", power:"Vision" }, 
    { id: 16, color: "Yellow", name: "Warrior", mayanName:"Cib", verb:"Questions", essence:"Fearlessness", power:"Intelligence" },
    { id: 17, color: "Red", name: "Earth", mayanName:"Caban", verb:"Evolves", essence:"Synchronicity", power:"Navigation" }, 
    { id: 18, color: "White", name: "Mirror", mayanName: "Etznab", verb: "Reflects", essence: "Order", power:"Endlessness" }, 
    { id: 19 , color: "Blue", name: "Storm", mayanName: "Cauac", verb:"Catalyzes", essence:"Energy", power:"Self-Generation" }
];		
export const Tones: Tone[] = [
    { id: 0, name: 'Zero', mayanName: 'Xix im', verb: '', essence: '', action: '', purpose: '' },
    { id: 1, name: 'Magnetic', mayanName: 'Hun', verb: 'Unify', essence: 'Purpose', action: 'Attraction', purpose: "What is this wavespell's Goal?" },
    { id: 2, name: 'Lunar', mayanName: 'Caa', verb: 'Polarize', essence: 'Challenge', action: 'Stabilizing', purpose: "What are the Obstacles for this wavespell's goal?" },
    { id: 3, name: 'Electric', mayanName: 'Ox', verb: 'Activate', essence: 'Service', action: 'Bonding', purpose: "How can this wavespell's goal be Obtained?" },
    { id: 4, name: 'Self-Existing', mayanName: 'Kan', verb: 'Define', essence: 'Form', action: 'Measuring', purpose: 'What is the form of the action to obtain the wavespell goal?' },
    { id: 5, name: 'Overtone', mayanName: 'Can', verb: 'Empower', essence: 'Radiance', action: 'Commanding', purpose: 'Gather Resources' },
    { id: 6, name: 'Rhythmic', mayanName: 'Hoo', verb: 'Organize', essence: 'Equality', action: 'Balancing', purpose: 'Administer Challenge.' },
    { id: 7, name: 'Resonant', mayanName: 'Uac', verb: 'Channel', essence: 'Attunement', action: 'Inspiring', purpose: 'Attune Service to Action.' },
    { id: 8, name: 'Galactic', mayanName: 'Uaxac', verb: 'Harmonize', essence: 'Integrity', action: 'Modeling', purpose: 'Action attains form.' },
    { id: 9, name: 'Solar', mayanName: 'Bolon', verb: 'Pulse', essence: 'Intention', action: 'Realizing', purpose: 'Action set in motion.' },
    { id: 10, name: 'Planetary', mayanName: 'Lahun', verb: 'Perfect', essence: 'Manifestation', action: 'Producing', purpose: 'Action and challenge meet.' },
    { id: 11, name: 'Spectral', mayanName: 'Buluc', verb: 'Dissolve', essence: 'Liberation', action: 'Releasing', purpose: 'Action dissolves service.' },
    { id: 12, name: 'Crystal', mayanName: 'Lahca', verb: 'Dedicate', essence: 'Cooperation', action: 'Universalize', purpose: 'Round table meets.' },
    { id: 13, name: 'Cosmic', mayanName: 'Oxlahun', verb: 'Endure', essence: 'Presence', action: 'Transcend', purpose: 'Transformation of the end to the beginning.' }
];

export class Day {
    constructor(private id: number, private kin: [number, number]) {
        this.id_ = id;
        this.kin_ = kin;
    }
    id_: number;
    kin_: [number, number];
}
//{ id: 0, kin: [1, 1] }
// Dynamically Created 1 - 260
//export const Tzolkin: Day[] = [
//];