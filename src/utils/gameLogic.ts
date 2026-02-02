import { GameState, Resources, FactionId, Faction, Monarch } from '../types';

export const INITIAL_RESOURCES: Resources = {
    gold: 1000,
    food: 500,
    wood: 500,
    iron: 200,
    soldiers: 25,
    gems: 0
};

export const INITIAL_PER_MONTH: Resources = {
    gold: 50,
    food: 50,
    wood: 50,
    iron: 20,
    soldiers: 1,
    gems: 0
};



export const PARENT_TEMPLATES: Record<string, {
    stock: Partial<Resources>,
    perMonth: Partial<Resources>,
    rep: Partial<Record<FactionId, number>>
}> = {
    Banker: {
        stock: { gold: 500 },
        perMonth: { gold: 30 },
        rep: { merchant: 20 }
    },
    Farmer: {
        stock: { food: 600 },
        perMonth: { food: 40 },
        rep: { peasant: 10 }
    },
    Lumberjack: {
        stock: { wood: 500 },
        perMonth: { wood: 30 },
        rep: { peasant: 10 }
    },
    Blacksmith: {
        stock: { iron: 200 },
        perMonth: { iron: 20 },
        rep: { peasant: 10 }
    },
    Assassin: {
        stock: { gems: 5 },
        perMonth: {},
        rep: { shadow: 40 }
    },
    Peasant: {
        stock: {},
        perMonth: { gold: 10, food: 10, wood: 10, iron: 10 },
        rep: { peasant: 30 }
    },
    Noble: {
        stock: { soldiers: 60 },
        perMonth: {},
        rep: { noble: 30 }
    }
};



export function generateMonarch(parent1: string, parent2: string, generation: number): Monarch {
    const p1 = PARENT_TEMPLATES[parent1];
    const p2 = PARENT_TEMPLATES[parent2];

    // Logic to combine names or just random name
    const names = ["Arthur", "Eleanor", "Henry", "Matilda", "Richard", "Isabella", "Edward", "Mary"];
    const name = names[Math.floor(Math.random() * names.length)] + " " + toRoman(generation);

    return {
        name,
        age: 18,
        generation,
        traits: [parent1, parent2],
        parents: [parent1, parent2]
    };
}

function toRoman(num: number): string {
    // Simple implementation for low numbers
    if (num === 1) return "I";
    if (num === 2) return "II";
    if (num === 3) return "III";
    if (num === 4) return "IV";
    if (num === 5) return "V";
    return String(num);
}

export function applyTemplateBonuses(templateName: string, stock: Resources, perMonth: Resources, factions: Record<FactionId, Faction>) {
    const template = PARENT_TEMPLATES[templateName];
    if (!template) return;

    // Apply Stock
    Object.entries(template.stock).forEach(([k, v]) => {
        stock[k as keyof Resources] += v || 0;
    });

    // Apply Per Month
    Object.entries(template.perMonth).forEach(([k, v]) => {
        perMonth[k as keyof Resources] += v || 0;
    });

    // Apply Rep
    Object.entries(template.rep).forEach(([k, v]) => {
        if (factions[k as FactionId]) {
            factions[k as FactionId].reputation += v || 0;
            // Cap at 100
            if (factions[k as FactionId].reputation > 100) factions[k as FactionId].reputation = 100;
        }
    });
}
