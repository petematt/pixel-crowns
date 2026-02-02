import { GameEvent } from '../../types';

export const narrativeEvents: GameEvent[] = [
    {
        id: 'E076',
        title: 'THE PLAGUE PULSE',
        description: 'A "Friendly Traveler" (who is currently coughing up a lung in the town square) has brought a gift: The Red Death! It\'s fast, it\'s messy, and it makes people\'s eyes fall out. Fun for the whole family!',
        category: 'narrative',
        weight: 5,
        options: [
            {
                text: 'Quarantine the city! -300 Gold and -100 Food for relief. The city has officially achieved the status of "Worlds Largest and Most Boring Prison."',
                effects: {
                    resources: { gold: -300, food: -100 },
                    reputation: { peasant: 20, noble: -15 }
                }
            },
            {
                text: 'Let it run its course. Bodies are great fertilizer! -150 Soldiers and -200 Peasant Rep. The local air quality has achieved a status best described as "Legendary and Possibly Lethal."',
                effects: {
                    resources: { soldiers: -150 },
                    reputation: { peasant: -50, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E077',
        title: 'THE DRAGON DILEMMA',
        description: 'A dragon has decided your royal treasury is a very comfortable bed. He\'s busily occupied with snoring fire while using your gold as a mattress. He\'s polite enough, but he keeps asking when "Breakfast" (you) will be served.',
        category: 'narrative',
        weight: 3,
        options: [
            {
                text: 'Try to slay the beast! -80 Soldiers. If it works, you get a cool rug. If not, you get a very hot death.',
                effects: {
                    resources: { soldiers: -80 },
                    reputation: { army: 30, noble: 20 }
                }
            },
            {
                text: 'Bribe him with Gems. 5 Gems to go bother the neighbors. Dragons are essentially just armored extortionists with better marketing.',
                effects: {
                    resources: { gems: -5 },
                    reputation: { noble: -10, merchant: -10 }
                }
            }
        ]
    },
    {
        id: 'E078',
        title: 'THE SINKHOLE SURPRISE',
        description: 'The Royal Library just fell into a hole. Apparently, the "Infinite Wisdom" contained within was too heavy for the dirt. We can try to save the scrolls, or just call it a "Modern Art Installation."',
        category: 'narrative',
        weight: 4,
        options: [
            {
                text: 'Save the Knowledge! 100 Gold and 100 Wood. Some history is preserved. The Clergy has reportedly reached a status of "Marginally Less Ignorant."',
                effects: {
                    resources: { gold: -100, wood: -100 },
                    reputation: { clergy: 20, noble: 10 }
                }
            },
            {
                text: 'Let it bury the past. Books are just fire-starters anyway. +200 Wood (Wait, what? Oh, the shelves).',
                effects: {
                    resources: { wood: 200 },
                    reputation: { noble: -15, clergy: -30 }
                }
            }
        ]
    },
    {
        id: 'E079',
        title: 'THE ALCHEMIST\'S ACCIDENT',
        description: 'An alchemist tried to turn lead into gold but accidentally turned his lab into a "Zone of Infinite Stickiness." He needs 200 Gold for a "Cleaning Serum." Or we can just leave him there as a warning.',
        category: 'narrative',
        weight: 5,
        options: [
            {
                text: 'Clean the mess. 200 Gold. +10 Gold per month (he actually found something useful!). Efficiency levels have reached a point of being "Impressively Sticky but Improving."',
                effects: {
                    resources: { gold: -200 },
                    perMonthMod: { gold: 10 },
                    reputation: { merchant: 15 }
                }
            },
            {
                text: 'Leave him stuck. He looks like a very weird statue. The Artisans have entered a state of "Collective and Vocal Confusion."',
                effects: {
                    reputation: { peasant: -5 }
                }
            }
        ]
    },
    {
        id: 'E080',
        title: 'THE GHOST OF KINGS PAST',
        description: 'A ghost is floating in the hallway screaming about "Taxes" and "Poor Life Choices." He looks suspiciously like your grandfather. He wants you to build a Monument to his "Radiance."',
        category: 'narrative',
        weight: 4,
        options: [
            {
                text: 'Build the "Tomb of Radiance." 250 Stone... I mean, Iron and Wood. The ghost stops screaming. Your royal dignity has been officially restored to its former, non-monumental glory.',
                effects: {
                    resources: { iron: -100, wood: -150 },
                    reputation: { noble: 25, clergy: 15 }
                }
            },
            {
                text: 'Call an Exorcist. 50 Gold for salt and yelling. The ghost has been officially evicted from the temporal plane.',
                effects: {
                    resources: { gold: -50 },
                    reputation: { clergy: 10, noble: -10 }
                }
            }
        ]
    },
    {
        id: 'E081',
        title: 'THE SILK ROAD SUCCESS',
        description: 'HUGE SUCCESS! Your investment in the Silk Road has paid off! A caravan has arrived with enough gold to make the floorboards groan. Unfortunately, they also brought a lot of "Exotic Flies."',
        category: 'narrative',
        weight: 2,
        requirements: { minTurn: 24, minResource: { gold: 100 } },
        options: [
            {
                text: 'Take the Loot! +2000 Gold. The flies have achieved a state of absolute, buzzing omnipresence.',
                effects: {
                    resources: { gold: 2000 },
                    reputation: { merchant: 30, peasant: -10 }
                }
            },
            {
                text: 'Tax the caravan heavily. +500 Gold and +20 Gold per month. The flies have been granted "Honorary Citizenship" due to their sheer numbers.',
                effects: {
                    resources: { gold: 500 },
                    perMonthMod: { gold: 20 },
                    reputation: { merchant: 15 }
                }
            }
        ]
    },
    {
        id: 'E082',
        title: 'THE FALSE PROPHET',
        description: 'A woman is in the bazaar claiming she can talk to "The Great System." She says the world is just a bunch of numbers and logic gates. The Clergy says she\'s crazy. I say she\'s a genius.',
        category: 'narrative',
        weight: 5,
        options: [
            {
                text: 'Appoint her as Royal Advisor. +20 Monthly Gold (Logic!). The Clergy is busy perfecting their "Hissing-Like-a-Nest-of-Vipers" impression.',
                effects: {
                    perMonthMod: { gold: 20 },
                    reputation: { clergy: -40, noble: 15 }
                }
            },
            {
                text: 'Burn her for Heresy. The Clergy is happy. The world has been officially designated as "Safe from the Corrupting Influence of Math."',
                effects: {
                    reputation: { clergy: 30, noble: -10 }
                }
            }
        ]
    },
    {
        id: 'E083',
        title: 'THE GREAT FLOOD',
        description: 'It didn\'t just rain, the sky literally fell. The river is now the "New Main Street." Half the city is underwater, and the fish have begun conducting "Open House" tours of the local taverns.',
        category: 'narrative',
        weight: 3,
        options: [
            {
                text: 'Build Dams! 400 Wood and 200 Iron. Save the city! The peasants have achieved a status of "Impressively Soggy but Grateful."',
                effects: {
                    resources: { wood: -400, iron: -200 },
                    reputation: { peasant: 30, merchant: 15 }
                }
            },
            {
                text: 'Invest in Boating. Sell everyone a canoe. +300 Gold (Profit!). The capital has successfully transitioned into its "Venetian Mud-Hole" phase.',
                effects: {
                    resources: { gold: 300 },
                    reputation: { peasant: -30, merchant: 25 }
                }
            }
        ]
    },
    {
        id: 'E084',
        title: 'THE MYSTERIOUS MONOLITH',
        description: 'A giant black cube has appeared in the royal gardens. It hums at a frequency that makes people\'s teeth ache. The Scholars want to study it. The Army wants to hit it with hammers.',
        category: 'narrative',
        weight: 4,
        options: [
            {
                text: 'Study the Cube. 100 Gold for "Hum-Blocking Earplugs." +5 Gems (it\'s a very fancy cube!). Royal intelligence reports that everyone\'s skull is currently achieving a status of "High-Frequency Ache."',
                effects: {
                    resources: { gold: -100, gems: 5 },
                    reputation: { noble: 15, clergy: 10 }
                }
            },
            {
                text: 'HIT IT WITH HAMMERS! -100 Iron (broken hammers). The Cube has reportedly remained "Entirely Unimpressed" by your choice of weaponry.',
                effects: {
                    resources: { iron: -100 },
                    reputation: { army: 20 }
                }
            }
        ]
    },
    {
        id: 'E085',
        title: 'THE METEOR MELEE',
        description: 'A shooting star didn\'t shoot—it crashed. Right into a farm. It\'s made of "Star-Metal" (Gems!) but it also vaporized three cows and a very surprised farmer named Bob.',
        category: 'narrative',
        weight: 3,
        options: [
            {
                text: 'Harvest the Star-Metal! +10 Gems! Bob would have wanted it this way. The economy has achieved a literal, radioactive-looking glow.',
                effects: {
                    resources: { gems: 10 },
                    reputation: { peasant: -15, merchant: 25 }
                }
            },
            {
                text: 'Declare the site "Holy Ground." The Clergy is happy. Bob has been posthumously promoted to the status of "The Patron Saint of Staying Indoors During Meteor Showers."',
                effects: {
                    reputation: { clergy: 30, peasant: 10 }
                }
            }
        ]
    },
    {
        id: 'E086',
        title: 'THE BORDER BRAWLER',
        description: 'King "Thrust-a-Lot" from the North is insulting your lineage. He called your father a "Damp Lumberjack." The honor of the Crown is at stake! Do we send a polite letter, or a thousand guys with swords?',
        category: 'narrative',
        weight: 5,
        options: [
            {
                text: 'WAR! Send 100 Soldiers to "Negotiate." +500 Gold (loot!) but loss of men. The honor of the Crown has been officially upgraded to "Bloody and Splattered."',
                effects: {
                    resources: { soldiers: -100, gold: 500 },
                    reputation: { army: 40, noble: 20 }
                }
            },
            {
                text: 'Send a "Polite Letter." 50 Gold for the fancy stamp. You look weak, but your soldiers have achieved the rare status of "Remaining Entirely Attached to Their Heads."',
                effects: {
                    resources: { gold: -50 },
                    reputation: { army: -25, merchant: 10 }
                }
            }
        ]
    },
    {
        id: 'E087',
        title: 'THE FESTIVAL OF FOOLS',
        description: 'It\'s that time of year! Everyone dresses up as the person they hate most. Statistically, 40% of the city is busily occupied with dressing up as you. Do you join the fun, or ban the masks?',
        category: 'narrative',
        weight: 5,
        options: [
            {
                text: 'Join the Festival! 100 Gold for the "Best King" prize. Everyone laughs, and your approval rating has achieved literal, cloud-piercing heights.',
                effects: {
                    resources: { gold: -100 },
                    reputation: { peasant: 40, noble: 15 }
                }
            },
            {
                text: 'Ban the masks! "I am not a costume!" The capital has officially transitioned to its "Visible and Irritated" phase.',
                effects: {
                    reputation: { peasant: -30, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E088',
        title: 'THE SILK ROAD SABOTAGE',
        description: 'CRITICAL ALERT! Your rival kingdom has blocked the Silk Road with a literal mountain of manure. It\'s gross, it\'s smelly, and it\'s stopping our Gold per month. We need a "Cleaning Crew" (the Army).',
        category: 'narrative',
        weight: 2,
        requirements: { minTurn: 40 },
        options: [
            {
                text: 'Clear the Sh*t! -50 Soldiers (from the smell alone). Gold per month resumes! Your royal pride has achieved a status of "Impressively Pungent."',
                effects: {
                    resources: { soldiers: -50 },
                    perMonthMod: { gold: 30 },
                    reputation: { merchant: 25, army: -10 }
                }
            },
            {
                text: 'Find a New Route. 400 Gold for "Explorers." +10 Gold per month. Diplomatic relations have reached a status of "Barely Tolerable but Functional."',
                effects: {
                    resources: { gold: -400 },
                    perMonthMod: { gold: 10 },
                    reputation: { merchant: 10 }
                }
            }
        ]
    },
    {
        id: 'E089',
        title: 'LIBRARY OF THE VOID',
        description: 'A "Void-Scholar" wants to build a portal in the library. He says it\'ll let us "Search the Stars for Gold." He also mentions a "Small chance of world-ending demons." He\'s a glass-half-full kind of guy.',
        category: 'narrative',
        weight: 2,
        requirements: { minResource: { gems: 5, gold: 500 } },
        options: [
            {
                text: 'Open the Portal! 5 Gems and 500 Gold. +100 Monthly Gold if it works! The world has entered a phase of "Existential Vibration."',
                effects: {
                    resources: { gems: -5, gold: -500 },
                    perMonthMod: { gold: 100 },
                    reputation: { noble: 10 } // Intelligence (Noble substitute here)
                }
            },
            {
                text: 'Close the portal. Stick to the physical world. Boring! But safe. The world remains in its preferred state of "Not Being Actively On Fire."',
                effects: {
                    reputation: { noble: -10 }
                }
            }
        ]
    },
    {
        id: 'E090',
        title: 'THE FINAL FEAST',
        description: 'You\'ve been King for a long time. The court wants a "Legacy Feast" to celebrate your reign. It\'ll cost a fortune, but everyone who matters will be there. Even that one Duke who always steals the silverware.',
        category: 'narrative',
        weight: 1,
        requirements: { minTurn: 60 },
        options: [
            {
                text: 'Throw the Feast of Feasts! 1000 Gold. +50 Rep All Factions! You\'re a Legend! Your legacy has been officially designated as "Spectacularly Golden."',
                effects: {
                    resources: { gold: -1000 },
                    reputation: { peasant: 50, noble: 50, merchant: 50, army: 50, clergy: 50, shadow: 50 }
                }
            },
            {
                text: 'Save the gold for the next guy. Your legacy has achieved a status of "Impossibly Frugal."',
                effects: {
                    resources: { gold: 0 },
                    reputation: { noble: -20, peasant: -10 }
                }
            }
        ]
    }
];
