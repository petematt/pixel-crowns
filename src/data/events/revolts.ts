import { GameEvent } from '../../types';

export const revoltEvents: GameEvent[] = [
    {
        id: 'REV_PEASANT',
        title: 'THE PITCHFORK PARADE',
        description: "The peasantry has decided that 'Taxes' is just a fancy word for 'State-Sponsored Robbery.' They've gathered outside with torches, pitchforks, and a very unflattering effigy of you made of old turnips. They're demanding bread, lower taxes, and for the Royal Jester to stop 'doing that one face.'",
        category: 'peasant',
        weight: 0, // Engine triggered
        options: [
            {
                text: 'Bribe them with Grain. -400 Food. The mob disperses to go have a literal bread-fight. +30 Rep.',
                effects: {
                    resources: { food: -400 },
                    reputation: { peasant: 30 }
                }
            },
            {
                text: 'Send in the Guards. +20 Army Rep, -50 Peasant Rep. The town square is now significantly more quiet and significantly more blood-stained.',
                effects: {
                    reputation: { army: 20, peasant: -50 }
                }
            }
        ]
    },
    {
        id: 'REV_NOBLE',
        title: 'THE POLITE COUP',
        description: "The Nobles have invited you to a 'Surprise Meeting' in the dungeon. They've already signed your abdication papers and are currently arguing over who gets your favorite hat. They suggest you retire to a very small, very damp tower for the rest of your life.",
        category: 'noble',
        weight: 0, // Engine triggered
        options: [
            {
                text: 'Bribe the Ring-leader. -1000 Gold. Duke Moneybags decides he likes you again. +30 Rep.',
                effects: {
                    resources: { gold: -1000 },
                    reputation: { noble: 30 }
                }
            },
            {
                text: 'Call upon your Spies. Use the Shadow network to "silence" the dissent. -20 Gems. The coup is canceled due to a sudden outbreak of "Backstabbings."',
                effects: {
                    resources: { gems: -20 },
                    reputation: { shadow: 20, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'REV_MERCHANT',
        title: 'ECONOMIC EMBARGO',
        description: "The Merchants have stopped the flow of goods into the palace. There is no silk, no spices, and worse—no fancy cheese. They're sitting on their gold piles like grumpy dragons, waiting for you to lower the trade tariffs or admit that merchants are 'the real backbone of the kingdom.'",
        category: 'merchant',
        weight: 0,
        options: [
            {
                text: 'Grant Trade Monopoly. +40 Rep. The cheese returns, but your coffers feel lighter. -50 Gold / mo.',
                effects: {
                    perMonthMod: { gold: -50 },
                    reputation: { merchant: 40 }
                }
            },
            {
                text: 'Seize the Warehouses. -50 Rep. You get 500 Gold worth of inventory immediately, but the shops are now boarded up.',
                effects: {
                    resources: { gold: 500 },
                    reputation: { merchant: -50 }
                }
            }
        ]
    },
    {
        id: 'REV_CLERGY',
        title: 'THE HOLY HUNGER STRIKE',
        description: "The High Priest has declared you 'Spiritually Incompatible' with the crown. The bells are ringing backward, the holy water has been replaced with vinegar, and the monks are refusing to chant anything but insults about your lineage. The people are starting to fear for their souls.",
        category: 'clergy',
        weight: 0,
        options: [
            {
                text: 'Build a Golden Cathedral. -500 Gold, -200 Stone (Wood/Iron). The Priest declares you a Saint! +40 Rep.',
                effects: {
                    resources: { gold: -500, wood: -100, iron: -100 },
                    reputation: { clergy: 50 }
                }
            },
            {
                text: 'Declare yourself a God. Who needs a High Priest when you have a mirror? -60 Rep. The Shadow network thrives in the heresy. +20 Shadow Rep.',
                effects: {
                    reputation: { clergy: -60, shadow: 20 }
                }
            }
        ]
    },
    {
        id: 'REV_ARMY',
        title: 'MUTINY AT THE MESS HALL',
        description: "The soldiers are tired of eating boots and being paid in 'Exposure.' General Iron-Grip has marched the infantry into the throne room and they aren't here for a promotion ceremony. They want actual coin and edible meat, or your head on a pike. Maybe both.",
        category: 'army',
        weight: 0,
        options: [
            {
                text: 'Pay the Arrears. -500 Gold, -200 Food. +40 Rep. The soldiers go back to stabbing the enemy instead of the furniture.',
                effects: {
                    resources: { gold: -500, food: -200 },
                    reputation: { army: 40 }
                }
            },
            {
                text: 'Decimation. Execute every tenth soldier to restore discipline. -20 Soldiers. +10 Rep, but the survivors really, really hate you. -30 Peasant Rep (their sons!).',
                effects: {
                    resources: { soldiers: -20 },
                    reputation: { army: 10, peasant: -30 }
                }
            }
        ]
    },
    {
        id: 'REV_SHADOW',
        title: 'THE NIGHT OF LONG DAGGERS',
        description: "You woke up with a dagger pinned to your pillow. The Shadows are tired of being your 'dirty secret' and not getting their cut of the dark-alley economy. The city is full of whispers, and half your guards have disappeared into the night. It's time to negotiate or bleed.",
        category: 'shadow',
        weight: 0,
        options: [
            {
                text: 'Legalize the Guild. Give them a seat on the council. +40 Rep. -20 Noble Rep. Your secrets are safe... for now.',
                effects: {
                    reputation: { shadow: 40, noble: -20 }
                }
            },
            {
                text: 'The Purge. Burn the slums to find the hideouts. -50 Rep. +20 Noble Rep. The smoke is black, and the silence is terrifying.',
                effects: {
                    reputation: { shadow: -60, noble: 20, peasant: -30 }
                }
            }
        ]
    },
    {
        id: 'REV_ARTISAN',
        title: 'THE GUILD STRIKE',
        description: "The hammers have stopped falling. The Blacksmiths, Masons, and Carpenters have organized a 'Day of Non-Creation.' Nothing is being built, nothing is being fixed, and the royal plumbing is starting to make a noise like a dying walrus. They want better wages and more respect for the 'Master Crafters.'",
        category: 'artisan',
        weight: 0,
        options: [
            {
                text: 'Grant Guild Charters. +40 Rep. -30 Gold / mo. The Walrus noise stops, and the walls feel sturdier.',
                effects: {
                    perMonthMod: { gold: -30 },
                    reputation: { artisan: 40 }
                }
            },
            {
                text: "Force Labor. Bring in the Army to 'encourage' productivity. +10 Rep, but -10% Production (PerMonth). -40 artisan rep.",
                effects: {
                    perMonthMod: { iron: -5, wood: -5 },
                    reputation: { artisan: -40, army: 10 }
                }
            }
        ]
    }
];
