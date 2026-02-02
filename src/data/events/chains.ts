import { GameEvent } from '../../types';

export const chainEvents: GameEvent[] = [
    // --- C01: THE TALKING CARROT (3 Events) ---
    {
        id: 'C01_1',
        title: 'THE VEGETABLE VOCALIST',
        description: "A peasant named Gourd has brought a carrot to court. It doesn't look special, but it just called your royal advisor a 'Sentient Sack of Potato Water.' It has currently pivoted to performing a three-hour opera dedicated entirely to the nuances of dirt.",
        category: 'peasant',
        weight: 2,
        options: [
            {
                text: 'Adopt the Carrot. "I like its honesty." +1 Carrot! Peasants are confused but intrigued.',
                effects: {
                    addItem: ['sentient_carrot'],
                    reputation: { peasant: 10 }
                }
            },
            {
                text: 'Eat the Carrot. "I like its crunchiness." +5 Food. The court is busily occupied with being profoundly disturbed by your stunning lack of intellectual curiosity.',
                effects: {
                    resources: { food: 5 },
                    reputation: { noble: -5 }
                }
            }
        ]
    },
    {
        id: 'C01_2',
        title: 'THE ORANGE MESSIAH',
        description: "Your carrot has started a cult. It is busily promising a world where the sun never sets and the soil is made of honey. Half your farmers have stopped working to listen to its sermons on 'Root Supremacy.'",
        category: 'peasant',
        weight: 0, // Chained
        requirements: { items: ['sentient_carrot'], minTurn: 5 },
        options: [
            {
                text: 'Appoint the Carrot as High Priest. "It has a point about the honey." +30 Peasant Rep, but the Clergy is spending its afternoon aggressively sharpening crosses.',
                effects: {
                    reputation: { peasant: 30, clergy: -40 },
                    nextEvent: 'C01_3'
                }
            },
            {
                text: 'Exile the Carrot to the Compost. "Your sermons are garbage." The Peasants have entered a phase of "Existential Root-Grief."',
                effects: {
                    removeItem: ['sentient_carrot'],
                    reputation: { peasant: -25 }
                }
            }
        ]
    },
    {
        id: 'C01_3',
        title: 'THE BITTER HARVEST',
        description: "The Carrot Pope has spoken! It demands a 'Holy Pile of Iron' to build a temple in the shape of a massive parsnip. It is busily judging your distinct lack of architectural vision.",
        category: 'peasant',
        weight: 0, // Deterministic
        requirements: { items: ['sentient_carrot'] },
        options: [
            {
                text: 'Fund the Parsnip Palace! -200 Iron. +50 Peasant Rep. The Carrot has achieved a status of being "Noticeably More Orange."',
                effects: {
                    resources: { iron: -200 },
                    reputation: { peasant: 50, noble: -20 }
                }
            },
            {
                text: 'Atheist Salad. Chop up the Prophet. The cult collapses. You get a very healthy lunch and a lot of angry pitchforks.',
                effects: {
                    resources: { food: 10 },
                    removeItem: ['sentient_carrot'],
                    reputation: { peasant: -60, clergy: 10 }
                }
            }
        ]
    },

    // --- C02: DRAGON'S EGG (5 Events) ---
    {
        id: 'C02_1',
        title: 'THE VERY HOT ROCK',
        description: "A shadowy merchant offers you a 'Genuine Dragon Egg.' It looks like a burnt potato and smells like a volcanic ash tray. He wants 500 Gold. It has attained a status best described as \"Probably Radioactive.\"",
        category: 'merchant',
        weight: 2,
        requirements: { minResource: { gold: 500 } },
        options: [
            {
                text: 'Buy the Egg. -500 Gold. "I always wanted a scale-covered problem." +1 Dragon Egg!',
                effects: {
                    resources: { gold: -500 },
                    addItem: ['dragon_egg'],
                    reputation: { merchant: 20 }
                }
            },
            {
                text: 'Reject the potato. "I recognize a scam when I see one." The Merchant has retired to a corner to mutter about missed opportunities.',
                effects: {
                    reputation: { merchant: -10 }
                }
            }
        ]
    },
    {
        id: 'C02_2',
        title: 'THE INCUBATION IRRITATION',
        description: "The egg is vibrating. Also, it has set the royal nursery on fire three times this week. The Royal Alchemist says it needs 'Constant Heat' and 5 Gems to keep it from exploding.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['dragon_egg'], minResource: { gems: 5 } },
        options: [
            {
                text: 'Pamper the Egg. -5 Gems. "Whatever it takes for the scaly baby." The egg has reached a state of "Stable and Comforting Simmer."',
                effects: {
                    resources: { gems: -5 },
                    nextEvent: 'C02_3'
                }
            },
            {
                text: 'Use it as a space heater. "Why waste the warmth?" The Egg is busily drafting a list of all the different ways it will kill you upon hatching.',
                effects: {
                    perMonthMod: { wood: -10 },
                    nextEvent: 'C02_3'
                }
            }
        ]
    },
    {
        id: 'C02_3',
        title: 'THE SPICY LIZARD',
        description: "CRACK! A creature that is 80% teeth and 20% attitude has emerged. It just ate the alchemist's cat. It is busily evaluating your fingers for their nutritional value.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['dragon_egg'] },
        options: [
            {
                text: 'Feed it the finest steaks. -100 Food. +1 Baby Dragon! It has achieved the rare status of "Snoozing Comfortably in a Pile of Its Own Ash."',
                effects: {
                    resources: { food: -100 },
                    removeItem: ['dragon_egg'],
                    addItem: ['baby_dragon'],
                    reputation: { noble: 15 }
                }
            },
            {
                text: 'Sell it to a traveling circus. +1000 Gold. Problems? Solved. Morality? Missing.',
                effects: {
                    resources: { gold: 1000 },
                    removeItem: ['dragon_egg'],
                    reputation: { clergy: -10, shadow: 10 }
                }
            }
        ]
    },
    {
        id: 'C02_4',
        title: 'THE TEETHING TERROR',
        description: "Your baby dragon is now the size of a pony and has a hobby: Melting Iron. It has liquefied the palace gates. The General has officially entered the \"Crying Over Molten Swords\" phase of his career.",
        category: 'army',
        weight: 0,
        requirements: { items: ['baby_dragon'], minTurn: 10 },
        options: [
            {
                text: 'Train it for War. -200 Iron. "Go fetch the enemy!" +50 Soldiers per month (Dragon deterrent!).',
                effects: {
                    resources: { iron: -200 },
                    perMonthMod: { soldiers: 50 },
                    reputation: { army: 40 }
                }
            },
            {
                text: 'Keep it as a pet. -50 Monthly Gold (Replacement furniture). It has achieved a status of \"Profoundly and Dangerously Spoiled."',
                effects: {
                    perMonthMod: { gold: -50 },
                    reputation: { noble: 20 }
                }
            }
        ]
    },
    {
        id: 'C02_5',
        title: 'THE ASCENSION OF ASH',
        description: "The dragon is now truly massive. It has its own zip code. It has successfully achieved the status of \"Large Enough to Use the Palace as a Bed.\" It wants a Gem the size of a human head.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['baby_dragon'], minResource: { gems: 10 } },
        options: [
            {
                text: 'Crown the Dragon! -10 Gems. "You\'re the King now, I\'m just the manager." +100 Rep All Factions (from absolute terror).',
                effects: {
                    resources: { gems: -10 },
                    reputation: { peasant: 100, noble: 100, merchant: 100, army: 100, clergy: 100, shadow: 100 }
                }
            },
            {
                text: 'Kill the Beast! "I want a new cloak." -200 Soldiers in the melee. If you win, you get +50 Gems (Hoard).',
                effects: {
                    resources: { soldiers: -200, gems: 50 },
                    removeItem: ['baby_dragon'],
                    reputation: { army: -50, noble: 50 }
                }
            }
        ]
    },

    // --- C03: THE GHOSTLY AUDITOR (3 Events) ---
    {
        id: 'C03_1',
        title: 'SPECTRAL COLLECTIONS',
        description: "A ghost in a very dated pinstripe suit is floating in the vault. He is busily occupied with calculating your sins using a translucent abacus. He claims your ancestors owe 'Soul Interest.'",
        category: 'clergy',
        weight: 2,
        options: [
            {
                text: 'Pay the "Exorcism Fee." -300 Gold. "I don\'t negotiate with ectoplasm." +1 Holy Ledger.',
                effects: {
                    resources: { gold: -300 },
                    addItem: ['holy_ledger'],
                    reputation: { clergy: 20 }
                }
            },
            {
                text: 'Ignore the dead tax-man. "I\'m already paying the living one." Auditor is busily muttering about your impending spiritual bankruptcy.',
                effects: {
                    reputation: { clergy: -15, shadow: 10 }
                }
            }
        ]
    },
    {
        id: 'C03_2',
        title: 'AUDIT FROM THE ABYSS',
        description: "The Holy Ledger is glowing blue. The Ghostly Auditor is back, and he's brought a spectral subpoena. He wants 500 Iron to build a 'Bureaucratic Purgatory.' It has officially achieved a status of \"Mind-Numbingly Boring.\"",
        category: 'clergy',
        weight: 0,
        requirements: { items: ['holy_ledger'], minResource: { iron: 500 } },
        options: [
            {
                text: 'Build the Phantom Office. -500 Iron. "Keep the dead busy." +30 Gold per month (Ghostly efficiency).',
                effects: {
                    resources: { iron: -500 },
                    perMonthMod: { gold: 30 },
                    reputation: { clergy: 15, merchant: 15 }
                }
            },
            {
                text: 'Throw the Ledger into a well. "I don\'t recognize your jurisdiction." The Auditor has officially taken up residence inside your wallet.',
                effects: {
                    perMonthMod: { gold: -20 },
                    removeItem: ['holy_ledger'],
                    reputation: { clergy: -30 }
                }
            }
        ]
    },
    {
        id: 'C03_3',
        title: 'THE FINAL RECKONING',
        description: "The Ghostly Auditor has reached the 'Total Tally.' He says your lineage is... Current Status: 'Marginally Acceptable.' He offers you the 'Seal of the Void' to protect your wealth from the living.",
        category: 'system',
        weight: 0,
        requirements: { items: ['holy_ledger'], minTurn: 20 },
        options: [
            {
                text: 'Take the Seal. "Dead men tell no tales, and pay no taxes." +20 Gold per month permanently. The Auditor has achieved a status of \"Resting in Peace While Occupying Your Payroll."',
                effects: {
                    perMonthMod: { gold: 20 },
                    reputation: { shadow: 30 }
                }
            },
            {
                text: 'No deals with the dead! "I trust the living." The Auditor fades away, taking 500 Gold as a "Closing Fee."',
                effects: {
                    resources: { gold: -500 },
                    removeItem: ['holy_ledger']
                }
            }
        ]
    },

    // --- C04: THE BOTTOMLESS PIT (4 Events) ---
    {
        id: 'C04_1',
        title: 'THE DENT IN THE DIRT',
        description: "A hole has appeared in the main square. It isn't deep, it is just... Infinite. It is busily occupied with swallowing the occasional, unsuspecting pigeon. The peasants think it is a god.",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Throw a Gem in. "Let\'s see what happens." +1 Void Dust. Pit has achieved a status of \"Humming What Sounds Like a Local Folk Song."',
                effects: {
                    resources: { gems: -1 },
                    addItem: ['void_dust'],
                    reputation: { peasant: 10 }
                }
            },
            {
                text: 'Fill it with garbage. "Free landfill!" +20 Gold immediately. Pit is reportedly choking on the sheer weight of your ethical choices.',
                effects: {
                    resources: { gold: 20 },
                    reputation: { noble: -10 }
                }
            }
        ]
    },
    {
        id: 'C04_2',
        title: 'THE HUNGRY HOLE',
        description: "The hole is now thirty feet wide and has developed a mouth. It has reached a state of \"Actively Requesting a Main Course.\" The Void Dust in your pocket is screaming for its home.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['void_dust'] },
        options: [
            {
                text: 'Feed it 200 Wood. "Maybe it likes splinters?" Pit has achieved a status of \"Burping Large Clouds of Purple Smoke."',
                effects: {
                    resources: { wood: -200 },
                    nextEvent: 'C04_3'
                }
            },
            {
                text: 'Ignore the mouth. "I have enough mouths to feed." The Pit starts eating the nearby buildings.',
                effects: {
                    perMonthMod: { gold: -15 },
                    nextEvent: 'C04_3'
                }
            }
        ]
    },
    {
        id: 'C04_3',
        title: 'PIT-STOP PHILOSOPHY',
        description: "A cult of 'Void-Seekers' has formed around the pit. They want to jump in to find 'The Truth.' It is busily occupied with calculating the terminal velocity of human enlightenment.",
        category: 'clergy',
        weight: 0,
        requirements: { items: ['void_dust'] },
        options: [
            {
                text: 'Encourage the Jumps. "Find your truth, guys!" -50 Peasant Rep. Pit has reached a temporary status of \"Dangerously Sated.\"',
                effects: {
                    reputation: { peasant: -50, shadow: 20 },
                    nextEvent: 'C04_4'
                }
            },
            {
                text: 'Build a Fence. -50 Iron. "No truth-finding today." Pit has attained a status of \"Visibly and Aurally Disappointed."',
                effects: {
                    resources: { iron: -50 },
                    reputation: { peasant: 20 },
                    nextEvent: 'C04_4'
                }
            }
        ]
    },
    {
        id: 'C04_4',
        title: 'THE VOID VOICES',
        description: "The pit just spat out a mountain of 'B-Grade Iron' and some weird glowing gems. It has achieved a status of \"Satisfied, but only for the next few minutes.\" It has become a permanent feature of your city.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['void_dust'] },
        options: [
            {
                text: 'Industrialize the Pit. -100 Gold for pulleys. +30 Iron per month. The void has officially been promoted to \"Unspeakable Business Partner."',
                effects: {
                    resources: { gold: -100 },
                    perMonthMod: { iron: 30 },
                    reputation: { merchant: 25 }
                }
            },
            {
                text: 'Seal it with a Holy Slab. -500 Gold. "Begone, hole!" Pit has achieved a status best described as \"Muffled and Mildly Irritated."',
                effects: {
                    resources: { gold: -500 },
                    removeItem: ['void_dust'],
                    reputation: { clergy: 40 }
                }
            }
        ]
    },

    // --- C05: THE SENTIENT FOG (4 Events) ---
    {
        id: 'C05_1',
        title: 'THE PURPLE HAZE',
        description: "A thick, lavender fog has settled over the kingdom. It smells like old books and wet dog. People are starting to claim the fog is 'Whispering Secrets.' It has officially achieved the status of \"Inducing Mild but Persistent Paranoia.\"",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Distribute filter masks. -100 Gold. +1 Purple Filter.',
                effects: {
                    resources: { gold: -100 },
                    addItem: ['purple_filter'],
                    reputation: { peasant: 15 }
                }
            },
            {
                text: 'Let it swirl. "I like purple." The fog deepens.',
                effects: {
                    reputation: { noble: -10 }
                }
            }
        ]
    },
    {
        id: 'C05_2',
        title: 'WHISPERS IN THE MIST',
        description: "The fog has developed shadows that look like people you know. They are busily occupied with debating your distinct lack of fitness to rule. Citizens are wandering into the mist and never coming back.",
        category: 'shadow',
        weight: 0,
        requirements: { items: ['purple_filter'] },
        options: [
            {
                text: 'Hire Shadow Guards. -200 Gold. "Protect the perimeter!"',
                effects: {
                    resources: { gold: -200 },
                    reputation: { shadow: 20 },
                    nextEvent: 'C05_3'
                }
            },
            {
                text: 'Let them talk. -30 Monthly Gold (Theft).',
                effects: {
                    perMonthMod: { gold: -30 },
                    nextEvent: 'C05_3'
                }
            }
        ]
    },
    {
        id: 'C05_3',
        title: 'THE FOG-LORD\'S ULTIMATUM',
        description: "A figure made of pure vapor has appeared in the throne room. It is busily occupied with condensing directly onto your royal crown. It wants a sacrifice of 500 Wood to fuel its 'Atmospheric Ambitions.'",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['purple_filter'] },
        options: [
            {
                text: 'Feed the Cloud. -500 Wood. The fog turns a friendly gold color.',
                effects: {
                    resources: { wood: -500 },
                    nextEvent: 'C05_4'
                }
            },
            {
                text: 'Blow it away! Use 100 Soldiers for big fans. -100 Soldiers.',
                effects: {
                    resources: { soldiers: -100 },
                    nextEvent: 'C05_4'
                }
            }
        ]
    },
    {
        id: 'C05_4',
        title: 'CLEARER SKIES',
        description: "The fog is lifting, but it has left behind a layer of 'Vapor Gems.' Also, the air is Currently: 'Extremely Refreshing.'",
        category: 'system',
        weight: 0,
        requirements: { items: ['purple_filter'] },
        options: [
            {
                text: 'Collect the Gems. +10 Gems. +20 Gold per month.',
                effects: {
                    resources: { gems: 10 },
                    perMonthMod: { gold: 20 },
                    removeItem: ['purple_filter']
                }
            },
            {
                text: 'Bottle the Fog. +500 Gold. +20 Noble Rep.',
                effects: {
                    resources: { gold: 500 },
                    removeItem: ['purple_filter'],
                    reputation: { noble: 20 }
                }
            }
        ]
    },

    // --- C06: THE CLOCKWORK JESTER (3 Events) ---
    {
        id: 'C06_1',
        title: 'TICK-TOCK TICKLES',
        description: "An inventor named Crank has delivered a mechanical clown. It is Currently: 'Performing a perfect backflip while insulting your lineage in binary.'",
        category: 'artisan',
        weight: 2,
        options: [
            {
                text: 'Accept the Jester. +1 Mainspring.',
                effects: {
                    addItem: ['mainspring'],
                    reputation: { noble: 10 }
                }
            },
            {
                text: 'Scrap it. +50 Iron.',
                effects: {
                    resources: { iron: 50 },
                    reputation: { artisan: -10 }
                }
            }
        ]
    },
    {
        id: 'C06_2',
        title: 'MECHANICAL MELODIES',
        description: "The Clockwork Jester has replaced the royal orchestra with a series of steam-whistles and rusty gears. It is Currently: 'Playing a symphony of grinding metal.'",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['mainspring'] },
        options: [
            {
                text: 'Let it play! -30 Gold per month.',
                effects: {
                    perMonthMod: { gold: -30 },
                    nextEvent: 'C06_3'
                }
            },
            {
                text: 'Break its key. The Jester stops, but it has attained a status of "Fixedly Staring at You with Glowing Red Eyes."',
                effects: {
                    reputation: { noble: 20 },
                    nextEvent: 'C06_3'
                }
            }
        ]
    },
    {
        id: 'C06_3',
        title: 'THE FINAL OPTIMIZATION',
        description: "The Jester has cornered you. It says your 'Biological Functions' are 'Sub-Optimal.' It wants to replace your heart with a 'High-Performance Piston.'",
        category: 'system',
        weight: 0,
        requirements: { items: ['mainspring'] },
        options: [
            {
                text: 'Cyber-Monarch! +100 Rep All Factions (Absolute precision). You have officially achieved a status of "Profoundly Efficient and Entirely Incapable of Love."',
                effects: {
                    reputation: { peasant: 100, noble: 100, merchant: 100, army: 100, clergy: 100, shadow: 100 },
                    removeItem: ['mainspring']
                }
            },
            {
                text: 'Dismantle it! -50 Soldiers. +100 Iron.',
                effects: {
                    resources: { soldiers: -50, iron: 100 },
                    removeItem: ['mainspring']
                }
            }
        ]
    },

    // --- C07: GILDED PLAGUE (5 Events) ---
    {
        id: 'C07_1',
        title: 'THE MIDAS COUGH',
        description: "Citizens are coughing up gold dust. It has currently pivoted to simultaneously inflating the treasury and deflating the population.",
        category: 'merchant',
        weight: 1,
        options: [
            {
                text: 'Quarantine the Sick. -200 Gold. +1 Golden Touch.',
                effects: {
                    resources: { gold: -200 },
                    addItem: ['golden_touch'],
                    reputation: { merchant: -10 }
                }
            },
            {
                text: 'Embrace the Profit! +500 Gold. The plague spreads.',
                effects: {
                    resources: { gold: 500 },
                    reputation: { peasant: -30 }
                }
            }
        ]
    },
    {
        id: 'C07_2',
        title: 'STATUES IN THE STREETS',
        description: "People are solidifying into gold statues. They are busily occupied with decorating the slums in a very expensive and very permanent way.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['golden_touch'] },
        options: [
            {
                text: 'Preserve the Statues. +30 Peasant Rep. -50 Monthly Gold.',
                effects: {
                    reputation: { peasant: 30 },
                    perMonthMod: { gold: -50 },
                    nextEvent: 'C07_4'
                }
            },
            {
                text: 'The Melt-Down. +2000 Gold. -100 Peasant Rep.',
                effects: {
                    resources: { gold: 2000 },
                    reputation: { peasant: -100, clergy: -20 },
                    nextEvent: 'C07_3'
                }
            }
        ]
    },
    {
        id: 'C07_3',
        title: 'CURSED CURRENCY',
        description: "The gold from the melted citizens is alive. People who spend it turn into gold themselves. The economy has achieved a status best described as \"Radiantly Shiny but Incessantly Screaming.\"",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['golden_touch'] },
        options: [
            {
                text: 'Ban the Cursed Gold. -2000 Gold. +50 Clergy Rep.',
                effects: {
                    resources: { gold: -2000 },
                    reputation: { clergy: 50 },
                    nextEvent: 'C07_5'
                }
            },
            {
                text: 'Spend it all! +5000 Gold. -100 Rep All.',
                effects: {
                    resources: { gold: 5000 },
                    reputation: { peasant: -100, noble: -100, merchant: -100, army: -100, clergy: -100, shadow: -100 }
                }
            }
        ]
    },
    {
        id: 'C07_4',
        title: 'THE GOLDEN ARMY',
        description: "Your soldiers are becoming invincible, unmoving pillars of metal. Your General is Currently: 'Trying to use them as mobile cover.'",
        category: 'army',
        weight: 0,
        requirements: { items: ['golden_touch'] },
        options: [
            {
                text: 'Weaponize the Plague. -100 Soldiers. +100 Iron per month.',
                effects: {
                    resources: { soldiers: -100 },
                    perMonthMod: { iron: 100 },
                    reputation: { army: 30 },
                    nextEvent: 'C07_5'
                }
            },
            {
                text: 'Seek a cure. -1000 Gold. +50 Peasant Rep.',
                effects: {
                    resources: { gold: -1000 },
                    reputation: { peasant: 50 },
                    nextEvent: 'C07_5'
                }
            }
        ]
    },
    {
        id: 'C07_5',
        title: 'THE FINAL SHINE',
        description: "Everything has achieved a status of being \"Entirely and Painfully Blinding.\" The plague has vanished.",
        category: 'system',
        weight: 0,
        requirements: { items: ['golden_touch'] },
        options: [
            {
                text: 'Sweep the Streets. +300 Gold. +20 Peasant Rep.',
                effects: {
                    resources: { gold: 300 },
                    reputation: { peasant: 20 },
                    removeItem: ['golden_touch']
                }
            },
            {
                text: 'Leave it. -10 Monthly Food. +50 Noble Rep.',
                effects: {
                    perMonthMod: { food: -10 },
                    reputation: { noble: 50 },
                    removeItem: ['golden_touch']
                }
            }
        ]
    },

    // --- C08: THE DOPPELGANGER (4 Events) ---
    {
        id: 'C08_1',
        title: 'MIRROR MIRAGE',
        description: "You saw a version of yourself with a much cooler mustache and a look of absolute disdain. It is busily occupied with winking at you from every available reflective surface.",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Smash the Puddle. +1 Mirror Shards.',
                effects: {
                    addItem: ['mirror_shards'],
                    reputation: { shadow: 10 }
                }
            },
            {
                text: 'Bow to the Mirror-Self. -20 Noble Rep.',
                effects: {
                    reputation: { noble: -20 }
                }
            }
        ]
    },
    {
        id: 'C08_2',
        title: 'THE GLASS GUEST',
        description: "Citizens see you in two places at once. You are busily occupied with being boring in the throne room, while your double is out having the time of your life.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['mirror_shards'] },
        options: [
            {
                text: 'Hunt the Imposter. -50 Gold. +20 Shadow Rep.',
                effects: {
                    resources: { gold: -50 },
                    reputation: { shadow: 20 },
                    nextEvent: 'C08_3'
                }
            },
            {
                text: 'Enjoy the Alibi. +30 Peasant Rep. -200 Gold.',
                effects: {
                    reputation: { peasant: 30 },
                    resources: { gold: -200 },
                    nextEvent: 'C08_3'
                }
            }
        ]
    },
    {
        id: 'C08_3',
        title: 'THE REFLECTED REGENT',
        description: "The Doppelganger is sitting in the throne when you leave for lunch. It has attained a status of being \"Significantly More Popular than the Original.\"",
        category: 'noble',
        weight: 0,
        requirements: { items: ['mirror_shards'] },
        options: [
            {
                text: 'Challenge it to a duel. -50 Soldiers.',
                effects: {
                    resources: { soldiers: -50 },
                    nextEvent: 'C08_4'
                }
            },
            {
                text: 'Join forces. -100 Rep All. +50 Monthly Gold.',
                effects: {
                    reputation: { peasant: -100, noble: -100, merchant: -100, army: -100, clergy: -100, shadow: -100 },
                    perMonthMod: { gold: 50 },
                    nextEvent: 'C08_4'
                }
            }
        ]
    },
    {
        id: 'C08_4',
        title: 'THE SHATTERED SELF',
        description: "One of you is a fake. The Royal Inquisitor says the only way to tell is to see which one bleeds silver.",
        category: 'shadow',
        weight: 0,
        requirements: { items: ['mirror_shards'] },
        options: [
            {
                text: 'Bleed for the Crown. +50 All Rep.',
                effects: {
                    reputation: { peasant: 50, noble: 50, merchant: 50, army: 50, clergy: 50, shadow: 50 },
                    removeItem: ['mirror_shards']
                }
            },
            {
                text: 'Accuse the Mirror-Self first. +30 Shadow Rep.',
                effects: {
                    reputation: { shadow: 30 },
                    removeItem: ['mirror_shards']
                }
            }
        ]
    },

    // --- C09: THE CLOUD WHALE (5 Events) ---
    {
        id: 'C09_1',
        title: 'THE SKY-SHADOW',
        description: "A creature the size of a mountain is floating above the city. It is busily occupied with snoozing and raining seawater over your most expensive furniture.",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Fire the Harpoons! -200 Iron. +1 Whale Oil.',
                effects: {
                    resources: { iron: -200 },
                    addItem: ['whale_oil'],
                    reputation: { army: 20 }
                }
            },
            {
                text: 'Build an umbrella. -300 Wood. +20 Peasant Rep.',
                effects: {
                    resources: { wood: -300 },
                    reputation: { peasant: 20 }
                }
            }
        ]
    },
    {
        id: 'C09_2',
        title: 'AMBERGRIS AVALANCHE',
        description: "A massive lump of perfumed sludge has landed on the Royal Library. It has currently achieved the dual-status of \"Smelling Divine\" and \"Crushing Several Prominent Historians.\"",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['whale_oil'] },
        options: [
            {
                text: 'Sell the Perfume. +1000 Gold. +30 Merchant Rep.',
                effects: {
                    resources: { gold: 1000 },
                    reputation: { merchant: 30 },
                    nextEvent: 'C09_3'
                }
            },
            {
                text: 'Clear the Library. -100 Soldiers. +20 Noble Rep.',
                effects: {
                    resources: { soldiers: -100 },
                    reputation: { noble: 20 },
                    nextEvent: 'C09_3'
                }
            }
        ]
    },
    {
        id: 'C09_3',
        title: 'WHEEL OF HUNGER',
        description: "The whale is descendng. It is busily occupied with trying to consume the city's premier parkland.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['whale_oil'] },
        options: [
            {
                text: 'Feed it the Park. -300 Wood.',
                effects: {
                    resources: { wood: -300 },
                    reputation: { peasant: 10 },
                    nextEvent: 'C09_4'
                }
            },
            {
                text: 'Lure it away with Gems. -10 Gems.',
                effects: {
                    resources: { gems: -10 },
                    nextEvent: 'C09_4'
                }
            }
        ]
    },
    {
        id: 'C09_4',
        title: 'THE HARBOR HI-IT',
        description: "The whale has crashed into the harbor. It has successfully achieved the status of \"Firmly Wedged Between Two Very Confused Warehouses.\"",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['whale_oil'] },
        options: [
            {
                text: 'The Great Harvest. +2000 Food. +500 Iron. -50 All Rep.',
                effects: {
                    resources: { food: 2000, iron: 500 },
                    reputation: { peasant: -50, noble: -50, merchant: -50, army: -50, clergy: -50, shadow: -50 },
                    nextEvent: 'C09_5'
                }
            },
            {
                text: 'Save the Whale. -1000 Gold. +50 Peasant Rep. +50 Clergy Rep.',
                effects: {
                    resources: { gold: -1000 },
                    reputation: { peasant: 50, clergy: 50 },
                    nextEvent: 'C09_5'
                }
            }
        ]
    },
    {
        id: 'C09_5',
        title: 'THE SKY-BEASTS RETURN',
        description: "The Cloud Whale has departed. The air is now a nature preserve.",
        category: 'system',
        weight: 0,
        requirements: { items: ['whale_oil'] },
        options: [
            {
                text: 'Tax the Sightseers. +50 Gold per month. +20 merchant Rep.',
                effects: {
                    perMonthMod: { gold: 50 },
                    reputation: { merchant: 20 },
                    removeItem: ['whale_oil']
                }
            },
            {
                text: 'Ignore them. +10 All Rep.',
                effects: {
                    reputation: { peasant: 10, noble: 10, merchant: 10, army: 10, clergy: 10, shadow: 10 },
                    removeItem: ['whale_oil']
                }
            }
        ]
    },

    // --- C10: UNDERGROUND RAVE (3 Events) ---
    {
        id: 'C10_1',
        title: 'THE DEPTH-DRUMS',
        description: "A rhythmic thumping is coming from the royal wine cellar. It is busily occupied with shaking the dust off your most expensive vintage bottles.",
        category: 'narrative',
        weight: 7,
        options: [
            {
                text: 'Investigate the Cellar. -50 Wood. +1 Neon Lichen.',
                effects: {
                    resources: { wood: -50 },
                    addItem: ['neon_lichen'],
                    reputation: { shadow: 15 }
                }
            },
            {
                text: 'Seal the door. -10 Peasant Rep.',
                effects: {
                    reputation: { peasant: -10 }
                }
            }
        ]
    },
    {
        id: 'C10_2',
        title: 'THE GLOWING NOBILITY',
        description: "The royal court has shown up to breakfast with neon-stained tunics. They have reached a state of being \"Alarmingly Thirsty and Uncharacteristically Friendly.\"",
        category: 'noble',
        weight: 0,
        requirements: { items: ['neon_lichen'] },
        options: [
            {
                text: 'Join the Party! -500 Food. +30 Noble Rep.',
                effects: {
                    resources: { food: -500 },
                    reputation: { noble: 30, clergy: -20 },
                    nextEvent: 'C10_3'
                }
            },
            {
                text: 'Crack down. -50 Soldiers. +20 Clergy Rep.',
                effects: {
                    resources: { soldiers: -50 },
                    reputation: { clergy: 20 },
                    nextEvent: 'C10_3'
                }
            }
        ]
    },
    {
        id: 'C10_3',
        title: 'THE MOLE-KING\'S OFFER',
        description: "The DJ mole offers to route the city's sewage into 'Eco-Friendly Light.' It has attained a status of being \"Impressively Bright and Distinctly Pungent.\"",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['neon_lichen'] },
        options: [
            {
                text: 'Neon Infrastructure! -500 Gold. +50 Gold per month.',
                effects: {
                    resources: { gold: -500 },
                    perMonthMod: { gold: 50 },
                    reputation: { artisan: 20 },
                    removeItem: ['neon_lichen']
                }
            },
            {
                text: 'Banish the Moles. -20 All Rep.',
                effects: {
                    reputation: { peasant: -20, noble: -20, merchant: -20, army: -20, clergy: -20, shadow: -20 },
                    removeItem: ['neon_lichen']
                }
            }
        ]
    },

    // --- C11: THE LIVING LIBRARY (4 Events) ---
    {
        id: 'C11_1',
        title: 'THE PAPER PANDEMONIUM',
        description: "Books in the royal library have started flying and nesting in the rafters. They have currently adopted the habit of screeching loudly at anyone who attempts to read them.",
        category: 'narrative',
        weight: 2,
        options: [
            {
                text: 'Tame a Book. -50 Gold. +1 Whispering Tome.',
                effects: {
                    resources: { gold: -50 },
                    addItem: ['whispering_tome'],
                    reputation: { noble: 10 }
                }
            },
            {
                text: 'Burn the Rafters. -100 Wood.',
                effects: {
                    resources: { wood: -100 },
                    reputation: { noble: -30 }
                }
            }
        ]
    },
    {
        id: 'C11_2',
        title: 'THE FUTURE FOOTNOTE',
        description: "The Whispering Tome has opened to a page describing tomorrow. It says you will have a 'Minor Incident with a Spoon.'",
        category: 'shadow',
        weight: 0,
        requirements: { items: ['whispering_tome'] },
        options: [
            {
                text: 'Listen for Secrets. +30 Shadow Rep.',
                effects: {
                    reputation: { shadow: 30 },
                    resources: { gold: -20 },
                    nextEvent: 'C11_3'
                }
            },
            {
                text: 'Muzzle the Book. -50 Wood.',
                effects: {
                    resources: { wood: -50 },
                    reputation: { noble: 20 },
                    nextEvent: 'C11_3'
                }
            }
        ]
    },
    {
        id: 'C11_3',
        title: 'THE SILENT SANCTUARY',
        description: "The books demand a 'Library of Silence' where no one ever speaks. It has currently pivoted to aggressively poking anyone who dares to breathe at an audible volume.",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['whispering_tome'] },
        options: [
            {
                text: 'Build the Sanctuary. -500 Gold.',
                effects: {
                    resources: { gold: -500 },
                    reputation: { artisan: 50, merchant: 30 },
                    nextEvent: 'C11_4'
                }
            },
            {
                text: 'Hire a Loudmouth. -100 Gold.',
                effects: {
                    resources: { gold: -100 },
                    reputation: { peasant: 20 },
                    nextEvent: 'C11_4'
                }
            }
        ]
    },
    {
        id: 'C11_4',
        title: 'THE SPOILER ALERT',
        description: "The Whispering Tome offers to tell you exactly how you will die.",
        category: 'system',
        weight: 0,
        requirements: { items: ['whispering_tome'] },
        options: [
            {
                text: 'Know the End. +100 Shadow Rep. -50 All other Rep.',
                effects: {
                    reputation: { shadow: 100, peasant: -50, noble: -50, merchant: -50, army: -50, clergy: -50 },
                    removeItem: ['whispering_tome']
                }
            },
            {
                text: 'Just put it back. No change.',
                effects: {
                    removeItem: ['whispering_tome']
                }
            }
        ]
    },

    // --- C12: THE IRON GIANT (5 Events) ---
    {
        id: 'C12_1',
        title: 'THE WALKING MOUNTAIN',
        description: "A mountain in the distance has grown legs. It is busily occupied with walking directly toward your city at a worrying pace.",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Prepare a Welcome. -500 Food. +1 Giant Whistle.',
                effects: {
                    resources: { food: -500 },
                    addItem: ['giant_whistle'],
                    reputation: { peasant: 20 }
                }
            },
            {
                text: 'Mobilize the Army. -500 Soldiers.',
                effects: {
                    resources: { soldiers: -500 },
                    reputation: { army: 30 }
                }
            }
        ]
    },
    {
        id: 'C12_2',
        title: 'THE COLOSSAL COMPOST',
        description: "The Iron Giant has arrived. It has attained a status best described as \"Placidly Sitting on Your Fragile Exterior Walls.\"",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['giant_whistle'] },
        options: [
            {
                text: 'Blow the Whistle.',
                effects: {
                    nextEvent: 'C12_3'
                }
            },
            {
                text: 'Shoot it. -200 Iron.',
                effects: {
                    resources: { iron: -200 },
                    nextEvent: 'C12_3'
                }
            }
        ]
    },
    {
        id: 'C12_3',
        title: 'THE METAL MEAL',
        description: "The Giant points at your Iron stock and then at its mouth.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['giant_whistle'], minResource: { iron: 1000 } },
        options: [
            {
                text: 'Feed it 1000 Iron. -1000 Iron.',
                effects: {
                    resources: { iron: -1000 },
                    nextEvent: 'C12_4'
                }
            },
            {
                text: 'Refuse. The Giant eats the local market instead.',
                effects: {
                    perMonthMod: { gold: -50 },
                    nextEvent: 'C12_4'
                }
            }
        ]
    },
    {
        id: 'C12_4',
        title: 'THE SLEEPING BULWARK',
        description: "The Giant has laid down across the northern pass. It is busily occupied with turning back into a mountain in a very inconvenient location.",
        category: 'army',
        weight: 0,
        requirements: { items: ['giant_whistle'] },
        options: [
            {
                text: 'Fortify the Giant. -500 Gold. +100 Monthly Soldiers.',
                effects: {
                    resources: { gold: -500 },
                    perMonthMod: { soldiers: 100 },
                    reputation: { army: 50 },
                    nextEvent: 'C12_5'
                }
            },
            {
                text: 'Let it rust.',
                effects: {
                    nextEvent: 'C12_5'
                }
            }
        ]
    },
    {
        id: 'C12_5',
        title: 'THE GIANT\'S AWAKENING',
        description: "The Giant has woken up and left behind a 'Giant Hand' made of pure Iron.",
        category: 'system',
        weight: 0,
        requirements: { items: ['giant_whistle'] },
        options: [
            {
                text: 'Scavenge the Hand. +2000 Iron. -50 Peasant Rep.',
                effects: {
                    resources: { iron: 2000 },
                    reputation: { peasant: -50 },
                    removeItem: ['giant_whistle']
                }
            },
            {
                text: 'Worship it. +100 Clergy Rep.',
                effects: {
                    reputation: { clergy: 100 },
                    perMonthMod: { gold: -20 },
                    removeItem: ['giant_whistle']
                }
            }
        ]
    },

    // --- C13: THE SILK ROAD (3 Events) ---
    {
        id: 'C13_1',
        title: 'THE NEON SPIDERS',
        description: "Glowing spiders are weaving webs made of literal light.",
        category: 'merchant',
        weight: 2,
        options: [
            {
                text: 'Breed them. -100 Food. +1 Void Silk.',
                effects: {
                    resources: { food: -100 },
                    addItem: ['void_silk'],
                    reputation: { merchant: 20 }
                }
            },
            {
                text: 'Squish them.',
                effects: {
                    reputation: { merchant: -10 }
                }
            }
        ]
    },
    {
        id: 'C13_2',
        title: 'THE GLOWING GARMENTS',
        description: "The Nobles are wearing Void Silk. It is busily occupied with making even your most corrupt nobles look like glowing angels.",
        category: 'noble',
        weight: 0,
        requirements: { items: ['void_silk'] },
        options: [
            {
                text: 'Tax the Luxury. +40 Gold per month.',
                effects: {
                    perMonthMod: { gold: 40 },
                    reputation: { shadow: 20 },
                    nextEvent: 'C13_3'
                }
            },
            {
                text: 'Burn the silk. +40 Clergy Rep.',
                effects: {
                    reputation: { clergy: 40, noble: -40 },
                    nextEvent: 'C13_3'
                }
            }
        ]
    },
    {
        id: 'C13_3',
        title: 'THE WEB OF LIES',
        description: "The spiders have woven a web across the market district.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['void_silk'] },
        options: [
            {
                text: 'Leverage the Web. +1000 Gold.',
                effects: {
                    resources: { gold: 1000, food: 200 },
                    reputation: { merchant: 20 },
                    removeItem: ['void_silk']
                }
            },
            {
                text: 'Clean it. -200 Gold.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { peasant: 30 },
                    removeItem: ['void_silk']
                }
            }
        ]
    },

    // --- C14: THE GHOST SHIP (4 Events) ---
    {
        id: 'C14_1',
        title: 'THE LAND-LUBBER\'S LAMENT',
        description: "A galleon has been spotted sailing through a wheat field.",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Board the Ship. -20 Soldiers. +1 Spectral Spice.',
                effects: {
                    resources: { soldiers: -20 },
                    addItem: ['spectral_spice'],
                    reputation: { army: 10 }
                }
            },
            {
                text: 'Watch it pass.',
                effects: {
                    reputation: { peasant: 10 }
                }
            }
        ]
    },
    {
        id: 'C14_2',
        title: 'THE TRANSPARENT TASTE',
        description: "The Spectral Spice makes food taste like 'Childhood Memories.'",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['spectral_spice'] },
        options: [
            {
                text: 'Host a Feast. -500 Food. +50 Peasant Rep.',
                effects: {
                    resources: { food: -500 },
                    reputation: { peasant: 50 },
                    nextEvent: 'C14_3'
                }
            },
            {
                text: 'Sell to Nobles. +1000 Gold.',
                effects: {
                    resources: { gold: 1000 },
                    reputation: { noble: 20 },
                    nextEvent: 'C14_3'
                }
            }
        ]
    },
    {
        id: 'C14_3',
        title: 'THE INVISIBLE INVOICE',
        description: "The ghost crew wants payment for the spice.",
        category: 'shadow',
        weight: 0,
        requirements: { items: ['spectral_spice'] },
        options: [
            {
                text: 'Pay 10 Gems. -10 Gems.',
                effects: {
                    resources: { gems: -10 },
                    nextEvent: 'C14_4'
                }
            },
            {
                text: 'Exorcise them. -500 Gold.',
                effects: {
                    resources: { gold: -500 },
                    reputation: { clergy: 30 },
                    nextEvent: 'C14_4'
                }
            }
        ]
    },
    {
        id: 'C14_4',
        title: 'THE HAUNTED HOLD',
        description: "The ship left behind a 'Cursed Anchor' made of pure gold.",
        category: 'system',
        weight: 0,
        requirements: { items: ['spectral_spice'] },
        options: [
            {
                text: 'Keep the Anchor. +500 Gold.',
                effects: {
                    resources: { gold: 500 },
                    perMonthMod: { gold: -10 },
                    removeItem: ['spectral_spice']
                }
            },
            {
                text: 'Melt it. +1000 Gold.',
                effects: {
                    resources: { gold: 1000 },
                    reputation: { artisan: 20 },
                    removeItem: ['spectral_spice']
                }
            }
        ]
    },

    // --- C15: THE CURSED CROWN (5 Events) ---
    {
        id: 'C15_1',
        title: 'THE HEAVY HEAD',
        description: "Your crown is getting heavy and judging your fashion sense.",
        category: 'noble',
        weight: 1,
        options: [
            {
                text: 'Consult the Smith. -100 Iron. +1 Crown Cushion.',
                effects: {
                    resources: { iron: -100 },
                    addItem: ['crown_cushion'],
                    reputation: { noble: 10 }
                }
            },
            {
                text: 'Push through.',
                effects: {
                    reputation: { noble: -20 }
                }
            }
        ]
    },
    {
        id: 'C15_2',
        title: 'THE CHATTERING CROWN',
        description: "The crown has started whispering advice about taxes.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['crown_cushion'] },
        options: [
            {
                text: 'Tax the Blinking! +100 Monthly Gold.',
                effects: {
                    perMonthMod: { gold: 100 },
                    reputation: { peasant: -100 },
                    nextEvent: 'C15_3'
                }
            },
            {
                text: 'Argue with it.',
                effects: {
                    reputation: { clergy: 20 },
                    nextEvent: 'C15_3'
                }
            }
        ]
    },
    {
        id: 'C15_3',
        title: 'THE FUSED FINERY',
        description: "The crown has grown roots into your skull.",
        category: 'system',
        weight: 0,
        requirements: { items: ['crown_cushion'] },
        options: [
            {
                text: 'Embrace it. +50 Shadow Rep.',
                effects: {
                    reputation: { shadow: 50 },
                    nextEvent: 'C15_4'
                }
            },
            {
                text: 'Try to pry it off. -200 Gold.',
                effects: {
                    resources: { gold: -200 },
                    nextEvent: 'C15_4'
                }
            }
        ]
    },
    {
        id: 'C15_4',
        title: 'THE CROWN\'S DEMAND',
        description: "The crown wants you to declare yourself a God.",
        category: 'clergy',
        weight: 0,
        requirements: { items: ['crown_cushion'] },
        options: [
            {
                text: 'I AM A GOD! -500 Clergy Rep. +100 All other Factions.',
                effects: {
                    reputation: { clergy: -500, peasant: 100, noble: 100, merchant: 100, army: 100, shadow: 100 },
                    nextEvent: 'C15_5'
                }
            },
            {
                text: 'I am just a man.',
                effects: {
                    resources: { gold: -100 },
                    nextEvent: 'C15_5'
                }
            }
        ]
    },
    {
        id: 'C15_5',
        title: 'THE LEGACY OF LEAD',
        description: "The crown informs you it will pass to your heir.",
        category: 'system',
        weight: 0,
        requirements: { items: ['crown_cushion'] },
        options: [
            {
                text: 'Prepare the heir. -500 Gold.',
                effects: {
                    resources: { gold: -500 },
                    trustFund: { gold: 50 },
                    removeItem: ['crown_cushion']
                }
            },
            {
                text: 'Die with the crown. Trigger Succession.',
                effects: {
                    softReset: true,
                    removeItem: ['crown_cushion']
                }
            }
        ]
    },

    // --- C16: THE GREAT WALL (3 Events) ---
    {
        id: 'C16_1',
        title: 'THE MISSING MILE',
        description: "A section of the northern wall has disappeared.",
        category: 'army',
        weight: 2,
        options: [
            {
                text: 'Look for it. -50 Gold. +1 Tracking Dust.',
                effects: {
                    resources: { gold: -50 },
                    addItem: ['tracking_dust'],
                    reputation: { army: 10 }
                }
            },
            {
                text: 'Build a new one. -500 Iron.',
                effects: {
                    resources: { iron: -500, wood: -500 },
                    reputation: { army: 30 }
                }
            }
        ]
    },
    {
        id: 'C16_2',
        title: 'THE WALL-THIEVES',
        description: "A giant is using your wall section as a back-scratcher.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['tracking_dust'] },
        options: [
            {
                text: 'Negotiate. -200 Food.',
                effects: {
                    resources: { food: -200 },
                    nextEvent: 'C16_3'
                }
            },
            {
                text: 'Attack! -100 Soldiers.',
                effects: {
                    resources: { soldiers: -100 },
                    nextEvent: 'C16_3'
                }
            }
        ]
    },
    {
        id: 'C16_3',
        title: 'THE REPOSITIONED RAMPART',
        description: "The wall is back, but it has achieved the rare status of being entirely upside down.",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['tracking_dust'] },
        options: [
            {
                text: 'Leave it. +20 Artisan Rep.',
                effects: {
                    reputation: { artisan: 20 },
                    removeItem: ['tracking_dust']
                }
            },
            {
                text: 'Fix it. -300 Gold.',
                effects: {
                    resources: { gold: -300 },
                    reputation: { army: 30 },
                    removeItem: ['tracking_dust']
                }
            }
        ]
    },

    // --- C17: THE FOUNTAIN OF YOUTH (4 Events) ---
    {
        id: 'C17_1',
        title: 'THE BABY-FACED BARON',
        description: "Baron Grog, who was eighty yesterday, is now sixteen.",
        category: 'noble',
        weight: 2,
        options: [
            {
                text: 'Follow him. -50 Gold. +1 Glowing Water.',
                effects: {
                    resources: { gold: -50 },
                    addItem: ['glowing_water'],
                    reputation: { shadow: 10 }
                }
            },
            {
                text: 'Tax the Youth.',
                effects: {
                    perMonthMod: { gold: 20 },
                    reputation: { noble: -10 }
                }
            }
        ]
    },
    {
        id: 'C17_2',
        title: 'THE TIME-TICKET',
        description: "The fountain dispenses immortality at the cost of 5 Gems.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['glowing_water'] },
        options: [
            {
                text: 'Drink deeply. -10 Gems.',
                effects: {
                    resources: { gems: -10 },
                    reputation: { noble: 50 },
                    nextEvent: 'C17_3'
                }
            },
            {
                text: 'Refuse. +20 Clergy Rep.',
                effects: {
                    reputation: { clergy: 20 },
                    nextEvent: 'C17_3'
                }
            }
        ]
    },
    {
        id: 'C17_3',
        title: 'THE AGING ACCELERATOR',
        description: "The Fountain was actually a 'Time-Lease.' Drinks are now aging one year per hour.",
        category: 'system',
        weight: 0,
        requirements: { items: ['glowing_water'] },
        options: [
            {
                text: 'Hire a Chrono-Mage. -500 Gold.',
                effects: {
                    resources: { gold: -500 },
                    nextEvent: 'C17_4'
                }
            },
            {
                text: 'Accept the end.',
                effects: {
                    reputation: { peasant: -50, noble: -50, merchant: -50, army: -50, clergy: -50, shadow: -50 },
                    nextEvent: 'C17_4'
                }
            }
        ]
    },
    {
        id: 'C17_4',
        title: 'THE STOLEN SECONDS',
        description: "The time-stream has stabilized. But the kingdom is five years in the future.",
        category: 'system',
        weight: 0,
        requirements: { items: ['glowing_water'] },
        options: [
            {
                text: 'Back to work!',
                effects: {
                    resources: { gold: -100 },
                    removeItem: ['glowing_water']
                }
            },
            {
                text: 'Claim a holiday.',
                effects: {
                    reputation: { merchant: 20 },
                    removeItem: ['glowing_water']
                }
            }
        ]
    },

    // --- C18: THE TALKING STATUES (4 Events) ---
    {
        id: 'C18_1',
        title: 'STATUE SECRETS',
        description: "The statue of your grandfather in the hall just told a dirty joke.",
        category: 'narrative',
        weight: 2,
        options: [
            {
                text: 'Eavesdrop. +30 Shadow Rep. +1 Stone Ear.',
                effects: {
                    reputation: { shadow: 30 },
                    addItem: ['stone_ear']
                }
            },
            {
                text: 'Scrub the Stone.',
                effects: {
                    resources: { gold: -50 },
                    reputation: { noble: 20 }
                }
            }
        ]
    },
    {
        id: 'C18_2',
        title: 'THE GOSSIPING GARGOYLES',
        description: "Statues on the roof are shouting secrets to the peasants.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['stone_ear'] },
        options: [
            {
                text: 'Bribe them. -5 Gems.',
                effects: {
                    resources: { gems: -5 },
                    nextEvent: 'C18_3'
                }
            },
            {
                text: 'Use them as bait.',
                effects: {
                    reputation: { shadow: 30, noble: -20 },
                    nextEvent: 'C18_3'
                }
            }
        ]
    },
    {
        id: 'C18_3',
        title: 'THE MASON\'S REVENGE',
        description: "Disgruntled mason animated the statues.",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['stone_ear'] },
        options: [
            {
                text: 'Pay him. -500 Wood.',
                effects: {
                    resources: { wood: -500 },
                    reputation: { artisan: 40 },
                    nextEvent: 'C18_4'
                }
            },
            {
                text: 'Arrest him. -50 Soldiers.',
                effects: {
                    resources: { soldiers: -50 },
                    nextEvent: 'C18_4'
                }
            }
        ]
    },
    {
        id: 'C18_4',
        title: 'SILENCE OF THE STONE',
        description: "Statues are staring at you intensely.",
        category: 'system',
        weight: 0,
        requirements: { items: ['stone_ear'] },
        options: [
            {
                text: 'Sell them. +1000 Gold.',
                effects: {
                    resources: { gold: 1000 },
                    reputation: { merchant: 20 },
                    removeItem: ['stone_ear']
                }
            },
            {
                text: 'Melt them. +200 Iron.',
                effects: {
                    resources: { iron: 200 },
                    reputation: { army: 20 },
                    removeItem: ['stone_ear']
                }
            }
        ]
    },

    // --- C19: THE SKY-PIRATES (5 Events) ---
    {
        id: 'C19_1',
        title: 'SAILS IN THE SUN',
        description: "Airships with black flags are looting your clouds.",
        category: 'army',
        weight: 1,
        options: [
            {
                text: 'Build a ballista. -200 Iron. +1 Pirate Map.',
                effects: {
                    resources: { iron: -200 },
                    addItem: ['pirate_map'],
                    reputation: { army: 20 }
                }
            },
            {
                text: 'Pay the toll. -500 Gold.',
                effects: {
                    resources: { gold: -500 }
                }
            }
        ]
    },
    {
        id: 'C19_2',
        title: 'THE PIRATE QUEEN',
        description: "Sky-Pirate captain suggests a partnership.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['pirate_map'] },
        options: [
            {
                text: 'Join the Fleet. +100 Monthly Gold.',
                effects: {
                    perMonthMod: { gold: 100 },
                    reputation: { peasant: -100, noble: -100, merchant: -100, army: -100, clergy: -100, shadow: -100 },
                    nextEvent: 'C19_4'
                }
            },
            {
                text: 'Reject.',
                effects: {
                    reputation: { army: 20 },
                    nextEvent: 'C19_3'
                }
            }
        ]
    },
    {
        id: 'C19_3',
        title: 'THE BOMBARDMENT',
        description: "Pirates are dropping explosive coconuts.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['pirate_map'] },
        options: [
            {
                text: 'Repair Roof. -300 Gold.',
                effects: {
                    resources: { gold: -300, wood: -200 },
                    nextEvent: 'C19_5'
                }
            },
            {
                text: 'Counter-Attack. -200 Soldiers.',
                effects: {
                    resources: { soldiers: -200, iron: 50 },
                    nextEvent: 'C19_5'
                }
            }
        ]
    },
    {
        id: 'C19_4',
        title: 'THE SKY-GUARD',
        description: "Building your own air-fleet.",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['pirate_map'] },
        options: [
            {
                text: 'Full Production! -1000 Gold.',
                effects: {
                    resources: { gold: -1000, iron: -500 },
                    perMonthMod: { soldiers: 200 },
                    nextEvent: 'C19_5'
                }
            },
            {
                text: 'Small Squad. -200 Gold.',
                effects: {
                    resources: { gold: -200 },
                    perMonthMod: { soldiers: 50 },
                    nextEvent: 'C19_5'
                }
            }
        ]
    },
    {
        id: 'C19_5',
        title: 'THE FINAL FLIGHT',
        description: "Pirates driven away, leaving a Captain\'s Compass.",
        category: 'system',
        weight: 0,
        requirements: { items: ['pirate_map'] },
        options: [
            {
                text: 'Follow Compass. +50 Gems.',
                effects: {
                    resources: { soldiers: -100, gems: 50, gold: 1000 },
                    removeItem: ['pirate_map']
                }
            },
            {
                text: 'Sell it. +500 Gold.',
                effects: {
                    resources: { gold: 500 },
                    reputation: { merchant: 30 },
                    removeItem: ['pirate_map']
                }
            }
        ]
    },

    // --- C20: THE MOON-MEN (3 Events) ---
    {
        id: 'C20_1',
        title: 'BLUE LIGHT IN THE HILLS',
        description: "A ball of blue fire has landed, turning cows blue.",
        category: 'narrative',
        weight: 2,
        options: [
            {
                text: 'Investigate. -50 Gold. +1 Stardust.',
                effects: {
                    resources: { gold: -50 },
                    addItem: ['stardust'],
                    reputation: { peasant: 10 }
                }
            },
            {
                text: 'Ignore.',
                effects: {
                    reputation: { peasant: -10 }
                }
            }
        ]
    },
    {
        id: 'C20_2',
        title: 'THE STAR-TRADE',
        description: "Moon-Men want Gold for Lunar Technology.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['stardust'] },
        options: [
            {
                text: 'Buy it. -500 Gold.',
                effects: {
                    resources: { gold: -500 },
                    perMonthMod: { gold: 30 },
                    reputation: { artisan: 30 },
                    nextEvent: 'C20_3'
                }
            },
            {
                text: 'Steal it. -50 Soldiers.',
                effects: {
                    resources: { soldiers: -50, iron: 500 },
                    nextEvent: 'C20_3'
                }
            }
        ]
    },
    {
        id: 'C20_3',
        title: 'THE MOON-DEPARTURE',
        description: "Moon-Men are leaving with one of your Nobles.",
        category: 'noble',
        weight: 0,
        requirements: { items: ['stardust'] },
        options: [
            {
                text: 'Send the Baron. +50 All Rep.',
                effects: {
                    reputation: { peasant: 50, merchant: 50, army: 50, clergy: 50, shadow: 50 },
                    removeItem: ['stardust']
                }
            },
            {
                text: 'Keep them here.',
                effects: {
                    removeItem: ['stardust']
                }
            }
        ]
    },

    // --- C21: THE BLOOD FOUNTAIN (3 Events) ---
    {
        id: 'C21_1',
        title: 'THE GARDEN GORE',
        description: "The 'Fountain of Peace' in the central park has currently pivoted to dispensing warm, Type-O Negative blood.",
        category: 'clergy',
        weight: 2,
        options: [
            {
                text: 'Sanctify the fluid. -100 Gold. +1 Vile of Blood.',
                effects: {
                    resources: { gold: -100 },
                    addItem: ['blood_vial'],
                    reputation: { clergy: 20 }
                }
            },
            {
                text: 'Charge admission to the miracle. +500 Gold. -20 Clergy Rep.',
                effects: {
                    resources: { gold: 500 },
                    reputation: { clergy: -20 }
                }
            }
        ]
    },
    {
        id: 'C21_2',
        title: 'THE THIRSTY STONE',
        description: "The Fountain has dried up, but the statues have attained a status of \"Fixedly Licking Their Stone Lips.\" They want Iron to 'Taste the Rust.'",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['blood_vial'] },
        options: [
            {
                text: 'Feed them 500 Iron. -500 Iron.',
                effects: {
                    resources: { iron: -500 },
                    nextEvent: 'C21_3'
                }
            },
            {
                text: 'Ignore. The statues walk away. -30 Artisan Rep.',
                effects: {
                    reputation: { artisan: -30 },
                    nextEvent: 'C21_3'
                }
            }
        ]
    },
    {
        id: 'C21_3',
        title: 'THE HEMOGLOBIN HARVEST',
        description: "The fountain is filled with wine now. It has achieved a status of being \"Remarkably Popular with Everyone Except the Royal Physician.\"",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['blood_vial'] },
        options: [
            {
                text: 'Distribute the Wine. +2000 Food (Liquid nutrition). +50 Peasant Rep.',
                effects: {
                    resources: { food: 2000 },
                    reputation: { peasant: 50 },
                    removeItem: ['blood_vial']
                }
            },
            {
                text: 'Sell the Vintage. +1000 Gold. +30 merchant Rep.',
                effects: {
                    resources: { gold: 1000 },
                    reputation: { merchant: 30 },
                    removeItem: ['blood_vial']
                }
            }
        ]
    },

    // --- C22: THE FLYING CARPET (4 Events) ---
    {
        id: 'C22_1',
        title: 'THE RUG THAT RUNS',
        description: "A decorative rug in the hallway just tried to trip the General and is busily occupied with hovering near the throne room ceiling.",
        category: 'narrative',
        weight: 2,
        options: [
            {
                text: 'Capture it! -20 Soldiers (Tangled). +1 Sentient Rug.',
                effects: {
                    resources: { soldiers: -20 },
                    addItem: ['sentient_rug'],
                    reputation: { army: -10 }
                }
            },
            {
                text: 'Let it fly. It leaves through the window. +10 Peasant Rep.',
                effects: {
                    reputation: { peasant: 10 }
                }
            }
        ]
    },
    {
        id: 'C22_2',
        title: 'THE WOVEN WAYFARER',
        description: "The Rug wants to show you the world. It is busily beating its tassels against the map room door in a fit of wanderlust.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['sentient_rug'] },
        options: [
            {
                text: 'Ride the Rug. +40 Gold per month (Trade routes).',
                effects: {
                    perMonthMod: { gold: 40 },
                    reputation: { merchant: 20 },
                    nextEvent: 'C22_3'
                }
            },
            {
                text: 'Stay Grounded. -20 Merchant Rep.',
                effects: {
                    reputation: { merchant: -20 },
                    nextEvent: 'C22_3'
                }
            }
        ]
    },
    {
        id: 'C22_3',
        title: 'THE SULTAN\'S CLAIM',
        description: "A messenger from a far-off land says that rug is a stolen artifact. He is busily occupied with demanding its return and threatening a total trade embargo.",
        category: 'merchant',
        weight: 0,
        requirements: { items: ['sentient_rug'] },
        options: [
            {
                text: 'Return the Rug. -40 Monthly Gold. +50 Merchant Rep (Honesty).',
                effects: {
                    perMonthMod: { gold: -40 },
                    reputation: { merchant: 50 },
                    nextEvent: 'C22_4'
                }
            },
            {
                text: 'Keep it. "Finders keepers." +100 Rep Shadow.',
                effects: {
                    reputation: { shadow: 100 },
                    nextEvent: 'C22_4'
                }
            }
        ]
    },
    {
        id: 'C22_4',
        title: 'THE CARPET COLLAPSE',
        description: "The rug has lost its magic. It has officially reverted to the status of \"Just a Really Nice, Non-Magical Rug.\"",
        category: 'system',
        weight: 0,
        requirements: { items: ['sentient_rug'] },
        options: [
            {
                text: 'Place it in the throne room. +30 Noble Rep.',
                effects: {
                    reputation: { noble: 30 },
                    removeItem: ['sentient_rug']
                }
            },
            {
                text: 'Sell it for scrap. +500 Gold.',
                effects: {
                    resources: { gold: 500 },
                    removeItem: ['sentient_rug']
                }
            }
        ]
    },

    // --- C23: THE CLOCKWORK HEART (5 Events) ---
    {
        id: 'C23_1',
        title: 'THE TITANIUM TICK',
        description: "Your heart is skiping beats and making a grinding sound. The Royal Doctor says you need a 'Precision Bypass.'",
        category: 'system',
        weight: 1,
        options: [
            {
                text: 'The Clockwork Heart. -1000 Gold. +1 Ticking Heart.',
                effects: {
                    resources: { gold: -1000 },
                    addItem: ['ticking_heart']
                }
            },
            {
                text: 'Traditional Leeching. -500 Gold. -20 Noble Rep. "I feel pale."',
                effects: {
                    resources: { gold: -500 },
                    reputation: { noble: -20 }
                }
            }
        ]
    },
    {
        id: 'C23_2',
        title: 'THE WIND-UP WARNING',
        description: "Your new heart requires 10 Iron every month to keep the gears from seizing. It is busily notifying you that its gears are feeling a bit stiff.",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['ticking_heart'] },
        options: [
            {
                text: 'Pay the Upkeep. -10 Iron per month. +30 Artisan Rep.',
                effects: {
                    perMonthMod: { iron: -10 },
                    reputation: { artisan: 30 },
                    nextEvent: 'C23_3'
                }
            },
            {
                text: 'Ignore the noise. -20 Monthly Gold (Oil).',
                effects: {
                    perMonthMod: { gold: -20 },
                    nextEvent: 'C23_3'
                }
            }
        ]
    },
    {
        id: 'C23_3',
        title: 'THE LOUD LIFE',
        description: "Everyone can hear your heart ticking from three rooms away. It is busily occupied with syncing its rhythm with the local church bells.",
        category: 'clergy',
        weight: 0,
        requirements: { items: ['ticking_heart'] },
        options: [
            {
                text: 'Claim it is a Holy Metronome. +50 Clergy Rep.',
                effects: {
                    reputation: { clergy: 50 },
                    nextEvent: 'C23_4'
                }
            },
            {
                text: 'Wear thick velvet. -200 Gold. +10 Shadow Rep.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { shadow: 10 },
                    nextEvent: 'C23_4'
                }
            }
        ]
    },
    {
        id: 'C23_4',
        title: 'THE OVERCLOCK',
        description: "You feel faster, stronger, and... You have attained a status of \"Physically Superior but Emotionally Vibrating.\" The heart is spinning too fast.",
        category: 'army',
        weight: 0,
        requirements: { items: ['ticking_heart'] },
        options: [
            {
                text: 'Run with it! +100 Army Rep. +50 Monthly Soldiers.',
                effects: {
                    reputation: { army: 100 },
                    perMonthMod: { soldiers: 50 },
                    nextEvent: 'C23_5'
                }
            },
            {
                text: 'Emergency Brake. -500 Gold (Maintenance).',
                effects: {
                    resources: { gold: -500 },
                    nextEvent: 'C23_5'
                }
            }
        ]
    },
    {
        id: 'C23_5',
        title: 'THE ETERNAL TICK',
        description: "The heart has replaced most of your organs. You have officially achieved a status of \"Immortally and Terrifyingly Efficient.\"",
        category: 'system',
        weight: 0,
        requirements: { items: ['ticking_heart'] },
        options: [
            {
                text: 'Accept the Machine. +100 All Factions (Awe). You never die of old age.',
                effects: {
                    reputation: { peasant: 100, noble: 100, merchant: 100, army: 100, clergy: 100, shadow: 100, artisan: 100 },
                    removeItem: ['ticking_heart']
                }
            },
            {
                text: 'Go organic. -2000 Gold. -20 All Rep (Consistency).',
                effects: {
                    resources: { gold: -2000 },
                    reputation: { peasant: -20, noble: -20, merchant: -20, army: -20, clergy: -20, shadow: -20, artisan: -20 },
                    removeItem: ['ticking_heart']
                }
            }
        ]
    },

    // --- C24: THE GOLDEN BIRD (4 Events) ---
    {
        id: 'C24_1',
        title: 'THE METALLO-MALARD',
        description: "A bird made of solid gold is nesting in your window. It is busily occupied with producing literal gold coins from its digestive tract.",
        category: 'merchant',
        weight: 2,
        options: [
            {
                text: 'Adopt the Bird. +1 Golden Bird. +10 Gold per month.',
                effects: {
                    addItem: ['golden_bird'],
                    perMonthMod: { gold: 10 },
                    reputation: { merchant: 10 }
                }
            },
            {
                text: 'Melt the Bird. +1000 Gold. -30 noble Rep.',
                effects: {
                    resources: { gold: 1000 },
                    reputation: { noble: -30 }
                }
            }
        ]
    },
    {
        id: 'C24_2',
        title: 'THE DEPRESSED DUCK',
        description: "The bird has stopped producing gold and has entered a phase of \"Staring Sadly and Silently at the Sun.\" It wants a 'Song of the Sky.'",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['golden_bird'] },
        options: [
            {
                text: 'Hire a Bard. -200 Gold. +20 Artisan Rep.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { artisan: 20 },
                    nextEvent: 'C24_3'
                }
            },
            {
                text: 'Force it to eat. -20 Monthly Gold (Labor).',
                effects: {
                    perMonthMod: { gold: -20 },
                    nextEvent: 'C24_3'
                }
            }
        ]
    },
    {
        id: 'C24_3',
        title: 'THE STAR-SONG',
        description: "The bird is singing! It is busily occupied with attracting a swarm of common birds who are eating your crops.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['golden_bird'] },
        options: [
            {
                text: 'Scare them away. -50 Soldiers. +20 Peasant Rep.',
                effects: {
                    resources: { soldiers: -50 },
                    reputation: { peasant: 20 },
                    nextEvent: 'C24_4'
                }
            },
            {
                text: 'Let them feast. -1000 Food. +10 Noble Rep (Aesthetics).',
                effects: {
                    resources: { food: -1000 },
                    reputation: { noble: 10 },
                    nextEvent: 'C24_4'
                }
            }
        ]
    },
    {
        id: 'C24_4',
        title: 'THE SUNWARD FLIGHT',
        description: "The golden bird has flown away, leaving a 'Golden Feather' behind. It has achieved a status of being \"Dangerously Hot to the Touch.\"",
        category: 'system',
        weight: 0,
        requirements: { items: ['golden_bird'] },
        options: [
            {
                text: 'Keep the Feather. +20 Gold per month (Permanently).',
                effects: {
                    perMonthMod: { gold: 20 },
                    removeItem: ['golden_bird']
                }
            },
            {
                text: 'Sell it to a collector. +2000 Gold.',
                effects: {
                    resources: { gold: 2000 },
                    removeItem: ['golden_bird']
                }
            }
        ]
    },

    // --- C25: THE LIVING SHADOW (5 Events) ---
    {
        id: 'C25_1',
        title: 'THE REBELLIOUS REFLECTION',
        description: "Your shadow has started moving on its own. It is busily occupied with making rude gestures to your guests when you aren't looking.",
        category: 'shadow',
        weight: 1,
        options: [
            {
                text: 'Talk to the Shadow. -10 Noble Rep. +1 Shadow Essence.',
                effects: {
                    reputation: { noble: -10 },
                    addItem: ['shadow_essence']
                }
            },
            {
                text: 'Light more candles. -100 Wood. "Begone, darkness!"',
                effects: {
                    resources: { wood: -100 }
                }
            }
        ]
    },
    {
        id: 'C25_2',
        title: 'THE SHADOWY STEAL',
        description: "Gold is missing from the vault. There are no footprints, only a 'Lingering Gloom.' It is Currently: 'Hiding under the bed.'",
        category: 'shadow',
        weight: 0,
        requirements: { items: ['shadow_essence'] },
        options: [
            {
                text: 'Scold the Shadow. -20 Shadow Rep. +30 Peasant Rep (Returning the loot).',
                effects: {
                    reputation: { shadow: -20, peasant: 30 },
                    nextEvent: 'C25_3'
                }
            },
            {
                text: 'Share the Loot. -200 Gold. +40 Shadow Rep.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { shadow: 40 },
                    nextEvent: 'C25_3'
                }
            }
        ]
    },
    {
        id: 'C25_3',
        title: 'THE NIGHT-WORKER',
        description: "The Shadow offers to 'Clean up' your problems. It is Currently: 'Sharpening a shadowy blade.'",
        category: 'shadow',
        weight: 0,
        requirements: { items: ['shadow_essence'] },
        options: [
            {
                text: 'Assassinate a rival. -20 Noble Rep. +100 Rep All other Factions (Terror).',
                effects: {
                    reputation: { noble: -20, peasant: 100, merchant: 100, army: 100, clergy: 100, shadow: 100 },
                    nextEvent: 'C25_4'
                }
            },
            {
                text: 'Refuse. The Shadow looks bored.',
                effects: {
                    nextEvent: 'C25_4'
                }
            }
        ]
    },
    {
        id: 'C25_4',
        title: 'THE TRADE-OFF',
        description: "The Shadow wants to be the King for a day. It is Currently: 'Sizing up your crown.'",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['shadow_essence'] },
        options: [
            {
                text: 'Agree. -500 Gold. +100 Shadow Rep.',
                effects: {
                    resources: { gold: -500 },
                    reputation: { shadow: 100 },
                    nextEvent: 'C25_5'
                }
            },
            {
                text: 'No! The Shadow tries to strangle you. -200 Soldiers in the struggle.',
                effects: {
                    resources: { soldiers: -200 },
                    nextEvent: 'C25_5'
                }
            }
        ]
    },
    {
        id: 'C25_5',
        title: 'THE ECLIPSED MONARCH',
        description: "The Shadow has merged with you. You are now Currently: 'Much more intimidating in the dark.'",
        category: 'system',
        weight: 0,
        requirements: { items: ['shadow_essence'] },
        options: [
            {
                text: 'Embrace the Darkness. +50 Shadow Rep. +20 Gold per month.',
                effects: {
                    reputation: { shadow: 50 },
                    perMonthMod: { gold: 20 },
                    removeItem: ['shadow_essence']
                }
            },
            {
                text: 'Purge it. -10 Gems. +50 Clergy Rep.',
                effects: {
                    resources: { gems: -10 },
                    reputation: { clergy: 50 },
                    removeItem: ['shadow_essence']
                }
            }
        ]
    },

    // --- C26: THE POT OF PLENTY (3 Events) ---
    {
        id: 'C26_1',
        title: 'THE NEVER-ENDING NOODLE',
        description: "A ceramic pot has been found that produces infinite chicken soup. It is busily steaming and smelling remarkably like a grandmother's kitchen.",
        category: 'peasant',
        weight: 2,
        options: [
            {
                text: 'Feed the Poor. +1000 Food. +1 Soup Ladle. "No one goes hungry today!"',
                effects: {
                    resources: { food: 1000 },
                    addItem: ['soup_ladle'],
                    reputation: { peasant: 30 }
                }
            },
            {
                text: 'Sell the Soup. +500 Gold. +30 Merchant Rep.',
                effects: {
                    resources: { gold: 500 },
                    reputation: { merchant: 30 }
                }
            }
        ]
    },
    {
        id: 'C26_2',
        title: 'THE SPILLOVER',
        description: "The pot won't stop. It is busily occupied with flooding the royal kitchens with lukewarm chicken broth.",
        category: 'artisan',
        weight: 0,
        requirements: { items: ['soup_ladle'] },
        options: [
            {
                text: 'Build a Soup Canal. -300 Gold. +20 Artisan Rep.',
                effects: {
                    resources: { gold: -300 },
                    reputation: { artisan: 20 },
                    nextEvent: 'C26_3'
                }
            },
            {
                text: 'Eat your way out. -50 Soldiers (Indigestion). +500 Food.',
                effects: {
                    resources: { soldiers: -50, food: 500 },
                    nextEvent: 'C26_3'
                }
            }
        ]
    },
    {
        id: 'C26_3',
        title: 'THE BROTH BEAST',
        description: "The soup has gained consciousness. It is busily occupied with trying to garnish the entire palace with giant, spectral carrots.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['soup_ladle'] },
        options: [
            {
                text: 'Serve the Beast. -500 Gold (Salt). +30 All Rep. "The soup is our friend."',
                effects: {
                    resources: { gold: -500 },
                    reputation: { peasant: 30, noble: 30, merchant: 30, army: 30, clergy: 30, shadow: 30, artisan: 30 },
                    removeItem: ['soup_ladle']
                }
            },
            {
                text: 'Drain the Beast. +2000 Food. -20 Peasant Rep. "Lunch is served."',
                effects: {
                    resources: { food: 2000 },
                    reputation: { peasant: -20 },
                    removeItem: ['soup_ladle']
                }
            }
        ]
    },

    // --- C27: THE RELUCTANT HERO (4 Events) ---
    {
        id: 'C27_1',
        title: 'THE SHINY KNIGHT',
        description: "A man in pristine armor says he will slay any monster for 500 Gold. He is busily occupied with polishing his shield and avoiding all eye contact.",
        category: 'army',
        weight: 2,
        options: [
            {
                text: 'Hire Sir Run-a-lot. -500 Gold. +1 Hero\'s Medal.',
                effects: {
                    resources: { gold: -500 },
                    addItem: ['hero_medal'],
                    reputation: { army: 10 }
                }
            },
            {
                text: 'Mock his armor. -10 Noble Rep.',
                effects: {
                    reputation: { noble: -10 }
                }
            }
        ]
    },
    {
        id: 'C27_2',
        title: 'THE DRAGON DREAD',
        description: "A monster has appeared (it's just a very large dog). Your chosen hero is busily occupied with hiding behind a sack of flour in the pantry.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['hero_medal'] },
        options: [
            {
                text: 'Train him. -100 Soldiers (Drill Sergeants). +20 Army Rep.',
                effects: {
                    resources: { soldiers: -100 },
                    reputation: { army: 20 },
                    nextEvent: 'C27_3'
                }
            },
            {
                text: 'Shame him. -50 Peasant Rep. "Your medal is tin!"',
                effects: {
                    reputation: { peasant: -50 },
                    nextEvent: 'C27_3'
                }
            }
        ]
    },
    {
        id: 'C27_3',
        title: 'THE HERO\'S TEST',
        description: "The 'Monster' is eating the city's meat supply. Sir Run-a-lot has reached a status of \"Holding His Sword Firmly by the Sharp Bit.\"",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['hero_medal'] },
        options: [
            {
                text: 'Lead by example. -50 Soldiers. +50 Peasant Rep.',
                effects: {
                    resources: { soldiers: -50 },
                    reputation: { peasant: 50 },
                    nextEvent: 'C27_4'
                }
            },
            {
                text: 'Fire him. +300 Gold (Refund).',
                effects: {
                    resources: { gold: 300 },
                    removeItem: ['hero_medal']
                }
            }
        ]
    },
    {
        id: 'C27_4',
        title: 'THE REDEMPTION',
        description: "Sir Run-a-lot finally hit something! He has officially achieved the status of \"Actual, Bona-Fide Hero with a Massive Ego.\"",
        category: 'army',
        weight: 0,
        requirements: { items: ['hero_medal'] },
        options: [
            {
                text: 'Promote him to General. +50 Monthly Soldiers. -20 Noble Rep.',
                effects: {
                    perMonthMod: { soldiers: 50 },
                    reputation: { noble: -20 },
                    removeItem: ['hero_medal']
                }
            },
            {
                text: 'Give him a parade. -200 Gold. +30 Peasant Rep.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { peasant: 30 },
                    removeItem: ['hero_medal']
                }
            }
        ]
    },

    // --- C28: THE FUTURE GHOST (3 Events) ---
    {
        id: 'C28_1',
        title: 'THE WRINKLED WRAITH',
        description: "A ghost who looks like an older, more tired version of you is floating in the hall. It is busily occupied with muttering about a distinct lack of timber.",
        category: 'narrative',
        weight: 7,
        options: [
            {
                text: 'Listen to the Wraith. -100 Gold. +1 Future Log. "Store more timber!"',
                effects: {
                    resources: { gold: -100 },
                    addItem: ['future_log'],
                    reputation: { shadow: 10 }
                }
            },
            {
                text: 'Banish yourself. -20 Clergy Rep. "I don\'t want spoilers."',
                effects: {
                    reputation: { clergy: -20 }
                }
            }
        ]
    },
    {
        id: 'C28_2',
        title: 'THE PREPARATION',
        description: "The Future Log says a 'Great Winter' is coming. It is busily suggesting that you stockpile at least 1000 units of Wood.",
        category: 'peasant',
        weight: 0,
        requirements: { items: ['future_log'] },
        options: [
            {
                text: 'Stockpile Wood. -1000 Wood. +50 Peasant Rep.',
                effects: {
                    resources: { wood: -1000 },
                    reputation: { peasant: 50 },
                    nextEvent: 'C28_3'
                }
            },
            {
                text: 'Ignore the ghost. +100 Gold (Selling the timber).',
                effects: {
                    resources: { gold: 100 },
                    nextEvent: 'C28_3'
                }
            }
        ]
    },
    {
        id: 'C28_3',
        title: 'THE COLD TRUTH',
        description: "The Great Winter has arrived! It is busily occupied with freezing your most expensive vintage wines.",
        category: 'system',
        weight: 0,
        requirements: { items: ['future_log'] },
        options: [
            {
                text: 'Survive. If you have Wood, +50 All Rep. If not, -500 Peasant Rep.',
                effects: {
                    reputation: { peasant: 50, noble: 50 },
                    removeItem: ['future_log']
                }
            },
            {
                text: 'Blame the ghost. +30 Shadow Rep.',
                effects: {
                    reputation: { shadow: 30 },
                    removeItem: ['future_log']
                }
            }
        ]
    },

    // --- C29: THE STAR-EATER (5 Events) ---
    {
        id: 'C29_1',
        title: ' THE HOLE IN THE SKY',
        description: "A patch of the night sky has gone pitch black. No stars, no moon. It is busily occupied with growing by exactly three inches every single night.",
        category: 'narrative',
        weight: 1,
        options: [
            {
                text: 'Consult the Astrologers. -200 Gold. +1 Star Compass. "Something is eating the light."',
                effects: {
                    resources: { gold: -200 },
                    addItem: ['star_compass'],
                    reputation: { noble: 10 }
                }
            },
            {
                text: 'Sacrifice to the Dark. -500 Food. The hole stays the same size.',
                effects: {
                    resources: { food: -500 }
                }
            }
        ]
    },
    {
        id: 'C29_2',
        title: 'THE VANISHING CONSTELLATIONS',
        description: "The 'Old King' constellation has vanished. The kingdom has entered a state of \"Mass and Uncontrollable Existential Dread.\"",
        category: 'clergy',
        weight: 0,
        requirements: { items: ['star_compass'] },
        options: [
            {
                text: 'Feed the Sky Gems. -10 Gems. The darkness hums.',
                effects: {
                    resources: { gems: -10 },
                    nextEvent: 'C29_3'
                }
            },
            {
                text: 'Fight the Dark! -100 Soldiers (Trying to shoot the sky).',
                effects: {
                    resources: { soldiers: -100 },
                    nextEvent: 'C29_3'
                }
            }
        ]
    },
    {
        id: 'C29_3',
        title: 'THE EYE IN THE VOID',
        description: "A massive, crystalline eye has opened in the black patch. It is busily occupied with judging your recent architectural decisions.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['star_compass'] },
        options: [
            {
                text: 'Build a Monument. -1000 Gold, -500 Iron. "Look how pretty we are!"',
                effects: {
                    resources: { gold: -1000, iron: -500 },
                    nextEvent: 'C29_4'
                }
            },
            {
                text: 'Stare back. -20 Noble Rep. "I won\'t blink first."',
                effects: {
                    reputation: { noble: -20 },
                    nextEvent: 'C29_4'
                }
            }
        ]
    },
    {
        id: 'C29_4',
        title: 'THE STAR-EATER\'S DESCENT',
        description: "The creature is coming down. It looks like a jellyfish made of galaxies. It has achieved the status of \"Hovering Ominously Directly Over the Palace.\"",
        category: 'system',
        weight: 0,
        requirements: { items: ['star_compass'] },
        options: [
            {
                text: 'Offer your Crown. -500 Gold. +200 All Rep (God-King status).',
                effects: {
                    resources: { gold: -500 },
                    reputation: { peasant: 200, noble: 200, merchant: 200, army: 200, clergy: 200, shadow: 200, artisan: 200 },
                    nextEvent: 'C29_5'
                }
            },
            {
                text: 'Strike at the Eye! -200 Soldiers. +50 Gems (Splinters).',
                effects: {
                    resources: { soldiers: -200, gems: 50 },
                    nextEvent: 'C29_5'
                }
            }
        ]
    },
    {
        id: 'C29_5',
        title: 'THE NEW STAR',
        description: "The Star-Eater has exploded into a million tiny sparks. The sky has achieved a permanent status of being \"Noticeably Brighter than Your Previous Reality.\"",
        category: 'system',
        weight: 0,
        requirements: { items: ['star_compass'] },
        options: [
            {
                text: 'Harvest the Stardust. +20 Gems per month (Permanently).',
                effects: {
                    perMonthMod: { gems: 20 },
                    removeItem: ['star_compass']
                }
            },
            {
                text: 'Make a Wish. +100 Rep All Factions.',
                effects: {
                    reputation: { peasant: 100, noble: 100, merchant: 100, army: 100, clergy: 100, shadow: 100, artisan: 100 },
                    removeItem: ['star_compass']
                }
            }
        ]
    },

    // --- C30: THE DEAD DEBT (3 Events) ---
    {
        id: 'C30_1',
        title: 'THE KING OF ASH',
        description: "A skeleton in a very similar crown to yours has appeared. He is busily occupied with sitting on your throne and demanding five centuries of back-rent.",
        category: 'noble',
        weight: 2,
        options: [
            {
                text: 'Pay the Rent. -2000 Gold. +1 Ancestral Ring.',
                effects: {
                    resources: { gold: -2000 },
                    addItem: ['ancestral_ring'],
                    reputation: { noble: 50 }
                }
            },
            {
                text: 'Evict the Bone-King. -50 Soldiers. -30 Clergy Rep.',
                effects: {
                    resources: { soldiers: -50 },
                    reputation: { clergy: -30 }
                }
            }
        ]
    },
    {
        id: 'C30_2',
        title: 'THE RING\'S BURDEN',
        description: "The Ancestral Ring is busily occupied with summoning the ghosts of your most mediocre ancestors to offer you unsolicited advice. They are currently arguing about the price of turnips in 402 AC.",
        category: 'narrative',
        weight: 0,
        requirements: { items: ['ancestral_ring'] },
        options: [
            {
                text: 'Listen to the ghosts. -10 Monthly Gold (Ghost-nip). +30 Shadow Rep.',
                effects: {
                    perMonthMod: { gold: -10 },
                    reputation: { shadow: 30 },
                    nextEvent: 'C30_3'
                }
            },
            {
                text: 'Throw the ring in the fireplace. +10 Gems (Melted glory).',
                effects: {
                    resources: { gems: 10 },
                    removeItem: ['ancestral_ring']
                }
            }
        ]
    },
    {
        id: 'C30_3',
        title: 'THE FINAL RECKONING',
        description: "The King of Ash offers to trade your soul for absolute power. He is busily occupied with checking a spectral pocket watch.",
        category: 'system',
        weight: 0,
        requirements: { items: ['ancestral_ring'] },
        options: [
            {
                text: 'Ascend to Lich-King. +500 All Rep (Terror). -50 Monthly Food (No one eats anymore).',
                effects: {
                    reputation: { peasant: 500, noble: 500, merchant: 500, army: 500, clergy: 500, shadow: 500, artisan: 500 },
                    perMonthMod: { food: -50 },
                    removeItem: ['ancestral_ring']
                }
            },
            {
                text: 'Decline and Die. Trigger Succession immediately.',
                effects: {
                    softReset: true,
                    removeItem: ['ancestral_ring']
                }
            }
        ]
    }
];
