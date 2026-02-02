import { GameEvent } from '../../types';

export const artisanEvents: GameEvent[] = [
    {
        id: 'E046',
        title: 'THE FORGE OF FURY',
        description: 'The Royal Blacksmiths are in a union-authorized huff. They want a "Magical Bellows" that costs 150 Iron and 100 Gold. They claim it\'ll melt steel like butter. I claim it\'ll just blow more soot into the throne room. Your call, boss.',
        category: 'artisan',
        weight: 6,
        requirements: { minResource: { iron: 150, gold: 100 } },
        options: [
            {
                text: 'Fund the Bellows! 150 Iron and 100 Gold. Let\'s see some real heat! +30 Iron per month.',
                effects: {
                    resources: { iron: -150, gold: -100 },
                    perMonthMod: { iron: 30 },
                    reputation: { artisan: 15, merchant: 5 }
                }
            },
            {
                text: 'Tell them to blow harder themselves. Reject the bellows. The blacksmiths have entered a state of "Union-Mandated Stillness," or whatever they call it when they stop making things.',
                effects: {
                    reputation: { artisan: -20, army: -10 }
                }
            }
        ]
    },
    {
        id: 'E047',
        title: 'WOODEN WOES',
        description: 'A "Forest Spirit" (likely just a very drunk lumberjack with leaves in his hair) is blocking the logging camp. He says the trees have feelings. The lumberjacks say their axes also have feelings—specifically, they feel like chopping.',
        category: 'artisan',
        weight: 5,
        options: [
            {
                text: 'Evict the "Spirit." Send in the guards to "relocate" the protesters. Logging resumes, but the local vibe has shifted toward "Aggressively Haunted."',
                effects: {
                    perMonthMod: { wood: 20 },
                    reputation: { artisan: -25, army: 10 }
                }
            },
            {
                text: 'Establish a "Sacred Sylvan Preserve." 100 Gold for signage and fences. The spirit is happy, but our wood supply is performing a very convincing impression of "Non-Existent."',
                effects: {
                    resources: { gold: -100 },
                    perMonthMod: { wood: -20 },
                    reputation: { artisan: 25 }
                }
            }
        ]
    },
    {
        id: 'E048',
        title: 'THE GLASS CANNON',
        description: 'A glassblower has accidentally created "Invisible Steel." It\'s as strong as iron but clear as glass. He wants 200 Gold to refine the process. Or he might just be selling you empty air. It\'s hard to tell.',
        category: 'artisan',
        weight: 4,
        options: [
            {
                text: 'Invest in "Invisible Tech." 200 Gold. If it works, our soldiers will be terrifying! +40 Soldiers (it\'s the invisibility, see?)',
                effects: {
                    resources: { gold: -200, soldiers: 40 },
                    reputation: { shadow: 15, merchant: 10 }
                }
            },
            {
                text: 'Throw a rock at his "Invisible Steel." If it breaks, he\'s a fraud. (It breaks). Reject the "tech."',
                effects: {
                    reputation: { shadow: -5, artisan: -10 }
                }
            }
        ]
    },
    {
        id: 'E049',
        title: 'THE SMELTER\'S SMELL',
        description: 'The royal smelter has achieved a state of "Unscheduled Internal Liquefaction." Literally. It\'s leaking liquid iron everywhere. We can shut it down for repairs (expensive) or just hope it stops before it reaches the wine cellar.',
        category: 'artisan',
        weight: 5,
        options: [
            {
                text: 'EMERGENCY REPAIRS! 150 Gold and 100 Wood. Better than a puddle of iron where the throne used to be.',
                effects: {
                    resources: { gold: -150, wood: -100 },
                    reputation: { merchant: 10, artisan: 10 }
                }
            },
            {
                text: 'Let it flow. Iron is valuable, right? +200 Iron stock, but the smiths have taken on a distinctly "over-toasted" quality.',
                effects: {
                    resources: { iron: 200 },
                    reputation: { artisan: -30, army: -10 }
                }
            }
        ]
    },
    {
        id: 'E050',
        title: 'THE GREAT LOG-OFF',
        description: 'The lumberjacks have found a "Mega-Oak." It\'s the size of a small village. Chopping it down will give us a decade\'s worth of wood, but it\'ll also probably piss off every bird in the kingdom.',
        category: 'artisan',
        weight: 3,
        options: [
            {
                text: 'CHOP IT. +1000 Wood immediately. The sky will be empty of birds, but your palace will be Made of Oak.',
                effects: {
                    resources: { wood: 1000 },
                    reputation: { artisan: -20, merchant: 20 }
                }
            },
            {
                text: 'Leave it standing. It\'s a "National Landmark." Boring! But the birds are grateful. I think.',
                effects: {
                    reputation: { artisan: 15 }
                }
            }
        ]
    },
    {
        id: 'E051',
        title: 'THE GEAR GRIND',
        description: 'A gnome (or just a very short, very hairy man) wants to build a "Clockwork Tax Collector." He says it never sleeps, never takes bribes, and has a very firm grip on coins. +50 Gold per month if it works.',
        category: 'artisan',
        weight: 4,
        requirements: { minResource: { iron: 200, gold: 200 } },
        options: [
            {
                text: 'Automate the Greed! 200 Iron and 200 Gold. Let the gears do the shaking! +50 Gold per month.',
                effects: {
                    resources: { iron: -200, gold: -200 },
                    perMonthMod: { gold: 50 },
                    reputation: { merchant: 20, shadow: 10, artisan: -30 }
                }
            },
            {
                text: 'Stick to human corruption. Reject the robot. The short man has set about disassembling his prototype—and his hopes—with impressive speed.',
                effects: {
                    reputation: { artisan: -10 }
                }
            }
        ]
    },
    {
        id: 'E052',
        title: 'THE QUARRY QUANDARY',
        description: 'A sinkhole has opened in the royal quarry. Good news: It revealed a vein of pure Gems! Bad news: The quarry has developed a taste for "High-Protein Stonecutters." Do we keep digging?',
        category: 'artisan',
        weight: 4,
        options: [
            {
                text: 'Dig deeper! +5 Gems stock! Yes, a few stonecutters fell in, but think of the sparkle!',
                effects: {
                    resources: { gems: 5 },
                    reputation: { artisan: -25, merchant: 20 }
                }
            },
            {
                text: 'Fill the hole. 100 Wood and 100 Iron. Safety first! Or at least, "Safety Second, After Not Being Eaten By The Ground."',
                effects: {
                    resources: { wood: -100, iron: -100 },
                    reputation: { artisan: 20 }
                }
            }
        ]
    },
    {
        id: 'E053',
        title: 'THE RUSTY REGRET',
        description: 'CRITICAL ALERT! The armory has suddenly adopted "Rust-Orange" as its primary color palette. A mysterious rust is eating our weapons. The smiths can fix it with a "Salt-Bath," but it\'s going to cost a mountain of Gold.',
        category: 'artisan',
        weight: 0,
        isLocked: true,
        requirements: { minResource: { soldiers: 100 } },
        options: [
            {
                text: 'Save the Steel! 300 Gold. Our swords will be shiny and salty. -300 Gold stock.',
                effects: {
                    resources: { gold: -300 },
                    reputation: { army: 15, artisan: 5 }
                }
            },
            {
                text: 'Let it rust. We\'ll fight with... very sharp orange sticks? -50 Soldiers because their equipment just disintegrated.',
                effects: {
                    resources: { soldiers: -50 },
                    reputation: { army: -35, artisan: -10 }
                }
            }
        ]
    },
    {
        id: 'E054',
        title: 'THE COULTER CONTROVERSY',
        description: 'The blacksmiths want to patented a new "Double-Edge Plow." They say it cuts twice as fast. They also want 10% of all future harvests as a "Licensing Fee." These guys are basically the patent trolls of the medieval world.',
        category: 'artisan',
        weight: 5,
        options: [
            {
                text: 'Buy the Patent Outright. 400 Gold! A hefty price, but the farmers get the plows for free. +40 Food per month.',
                effects: {
                    resources: { gold: -400 },
                    perMonthMod: { food: 40 },
                    reputation: { artisan: 25 }
                }
            },
            {
                text: 'Tell them to stick it. We\'ll just "reverse engineer" it (copy it poorly). +10 Food per month, but the smiths are busily composing a "Cease and Desist" order for your copyright-infringing face.',
                effects: {
                    perMonthMod: { food: 10 },
                    reputation: { artisan: 5, merchant: -20 }
                }
            }
        ]
    },
    {
        id: 'E055',
        title: 'CHARCOAL CHAOS',
        description: 'We\'ve run out of charcoal for the high-yield furnaces. The options are: A) Burn more wood (a lot more), or B) Pay the Coal-Guild a fortune to bring in the good stuff.',
        category: 'artisan',
        weight: 6,
        options: [
            {
                text: 'Burn the Forest! -250 Wood stock. The furnaces are roaring, but the lumberjacks have found themselves with a lot of free time and a lot of sharpened axes.',
                effects: {
                    resources: { wood: -250 },
                    perMonthMod: { iron: 15 },
                    reputation: { artisan: -20, merchant: 10 }
                }
            },
            {
                text: 'Pay the Guild. 200 Gold. +20 Iron per month. The air has achieved a status of "Viscous and Obsidian," but at least we have metal.',
                effects: {
                    resources: { gold: -200 },
                    perMonthMod: { iron: 20 },
                    reputation: { merchant: 15, artisan: 5 }
                }
            }
        ]
    },
    {
        id: 'E056',
        title: 'THE SHINY SHINGLES',
        description: 'The Royal Architect wants to cover the palace roof in "Glimmer-Iron." He says it\'ll reflect the sunlight and "blind our enemies." It\'ll also surely blind the guards. And anyone within a three-mile radius.',
        category: 'artisan',
        weight: 4,
        requirements: { minResource: { iron: 300 } },
        options: [
            {
                text: 'BLIND THE WORLD! 300 Iron. The palace is now a giant mirror. The Nobles have been forced to adopt the "Squint-and-Shield" method for palace navigation.',
                effects: {
                    resources: { iron: -300 },
                    reputation: { noble: 30, artisan: 10 }
                }
            },
            {
                text: 'Keep the thatched roof. It\'s cozy and doesn\'t cause permanent retinal damage. The local architecture remains stuck in a cycle of "Functional but Forgettable."',
                effects: {
                    reputation: { artisan: -15 }
                }
            }
        ]
    },
    {
        id: 'E057',
        title: 'THE BRITTLE BLADE BUMMER',
        description: 'Our latest batch of swords are performing a series of "Unsolicited Glass-Impressions." Turns out, the iron was mixed with "Fool\'s Zinc." The Army has resorted to very aggressive handle-waving at the enemy.',
        category: 'artisan',
        weight: 5,
        options: [
            {
                text: 'Execute the Supplier! He happens to be a high-ranking Merchant. +100 Gold (seized), but the Guild has retreated into dark rooms to "Discuss Succession" with themselves.',
                effects: {
                    resources: { gold: 100 },
                    reputation: { army: 20, merchant: -40, artisan: -10 }
                }
            },
            {
                text: 'Pay to re-smelt the whole lot. 150 Iron and 100 Gold. A costly mistake, but at least the swords work now.',
                effects: {
                    resources: { iron: -150, gold: -100 },
                    reputation: { army: 25, artisan: 15 }
                }
            }
        ]
    },
    {
        id: 'E058',
        title: 'THE WEAVING WIZARD',
        description: 'A weaver claims she can spin "Liquid Armor" from silk and iron dust. It\'s light as a feather and twice as expensive. The Army is interested. The Treasury is making a noise like a cat in a blender.',
        category: 'artisan',
        weight: 3,
        requirements: { minResource: { gold: 400, iron: 100 } },
        options: [
            {
                text: 'Invest in "Liquid Silk." 400 Gold and 100 Iron. Our troops will be the most fashionable, most protected pigeons on the continent!',
                effects: {
                    resources: { gold: -400, iron: -100, soldiers: 60 },
                    reputation: { noble: 20, artisan: 20 }
                }
            },
            {
                text: 'Steel is supposed to be heavy. Reject the silk. The weaver has packed up her loom to go "Consult" for your rivals.',
                effects: {
                    reputation: { noble: -10, artisan: -10 }
                }
            }
        ]
    },
    {
        id: 'E059',
        title: 'THE TIMBER TREACHERY',
        description: 'A massive log jam has blocked the river, stopping all wood shipments. The local artisans have achieved a level of "Professional Idleness" involving darts and pictures of your head.',
        category: 'artisan',
        weight: 5,
        options: [
            {
                text: 'Blow it up with "Alchemist\'S Fire." 50 Gold. +300 Wood immediately! The river is a mess, but the wood is moving.',
                effects: {
                    resources: { gold: -50, wood: 300 },
                    reputation: { merchant: 15, artisan: -10 }
                }
            },
            {
                text: 'Send in the Army to clear it by hand. -20 Soldiers (crushed by logs). A slow, painful process. +100 Wood.',
                effects: {
                    resources: { soldiers: -20, wood: 100 },
                    reputation: { army: -20, artisan: 15 }
                }
            }
        ]
    },
    {
        id: 'E060',
        title: 'THE MASTERPIECE MEASURE',
        description: 'A Master Artisan wants to create the "Crown of Infinite Sparkle." It requires 10 Gems and 500 Gold. If finished, it\'ll be a relic of legendary status. If he fails, he\'s just going to have a very nice retirement in the Bahamas.',
        category: 'artisan',
        weight: 2,
        requirements: { minResource: { gems: 10, gold: 500 } },
        options: [
            {
                text: 'COMMISSION THE CROWN! 10 Gems and 500 Gold. We\'ll be the envy of the known world! +100 Prestige (Rep all factions).',
                effects: {
                    resources: { gems: -10, gold: -500 },
                    reputation: { noble: 50, artisan: 50, peasant: 20, merchant: 20, army: 20, clergy: 20, shadow: 20 }
                }
            },
            {
                text: 'My current crown is sparkly enough. Reject the commission. The Artisan is busily critiquing your aesthetic choices to anyone who will listen.',
                effects: {
                    reputation: { artisan: -20 }
                }
            }
        ]
    }
];
