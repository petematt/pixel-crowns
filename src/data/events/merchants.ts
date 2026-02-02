import { GameEvent } from '../../types';

export const merchantEvents: GameEvent[] = [
    {
        id: 'E031',
        title: 'THE SILK SLIDE',
        description: 'A merchant with a very shiny hat wants 500 Gold to open a "Silk Road." He says it\'s a guaranteed profit. He also says he once met a dragon that spoke fluent French. Do you trust this man with a mountain of the treasury\'s gold?',
        category: 'merchant',
        weight: 5,
        requirements: { minResource: { gold: 500 } },
        options: [
            {
                text: 'Invest the 500 Gold. Let\'s get rich! The Merchants are already counting the commissions.',
                effects: {
                    resources: { gold: -500 },
                    perMonthMod: { gold: 40 },
                    reputation: { merchant: 25, noble: -10 }
                }
            },
            {
                text: 'Tell Mr. Shiny Hat to take a hike. We don\'t need French dragons or risky roads. The Merchants have retreated to their counting houses to sulk in luxurious silence.',
                effects: {
                    reputation: { merchant: -15, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E032',
        title: 'THE FUNNY-MONEY FIASCO',
        description: 'Someone is flooding the market with "Lead-Gold"—it looks like gold, it weighs like gold, but it tastes like sadness and poison. Inflation is skyrocketing, and the local economy has achieved a state of "Uncontrolled Combustion."',
        category: 'merchant',
        weight: 6,
        options: [
            {
                text: 'Mint New Coins. 120 Gold for a total recall. The Merchants are impressed by your "Fiscal Integrity," whatever that means.',
                effects: {
                    resources: { gold: -120 },
                    reputation: { merchant: 20, peasant: 10 }
                }
            },
            {
                text: 'Ignore the fake coins and hope for the best. The economy has entered a graceful backflip aimed directly at a spiked pit.',
                effects: {
                    perMonthMod: { gold: -30 },
                    reputation: { merchant: -25, peasant: -15 }
                }
            }
        ]
    },
    {
        id: 'E033',
        title: 'THE TOLL TROLL',
        description: 'The Merchants\' Guild wants to build a "Maintenance Bridge" across the Red River. By "Maintenance," they mean "charging everyone who crosses it three days\' wages." The peasants are already practicing their angry-torch-lighting.',
        category: 'merchant',
        weight: 6,
        options: [
            {
                text: 'Approve the bridge! Passive income! The Merchants will love the cut, and you get a steady Gold per month.',
                effects: {
                    perMonthMod: { gold: 20 },
                    reputation: { merchant: 20, peasant: -25 }
                }
            },
            {
                text: 'Bridges should be free! Reject the toll. The peasants are thrilled, but the Merchants have occupied themselves with calculating the exact opportunity cost of this "Freedom."',
                effects: {
                    reputation: { peasant: 15, merchant: -20 }
                }
            }
        ]
    },
    {
        id: 'E034',
        title: 'THE ZOO CHOO-CHOO',
        description: 'A exotic trader has arrived with a "Glow-Panda" and a "Fire-Lizard" (it\'s just a gecko with a candle taped to its back). He wants 200 Gold. It\'s completely useless, but think of the prestige!',
        category: 'merchant',
        weight: 4,
        options: [
            {
                text: 'Buy the "Menagerie." 200 Gold for things that poop in the hallway. The Nobles are strangely impressed by your frivolous spending.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { noble: 25, shadow: 10 }
                }
            },
            {
                text: 'Eat the Lizard. Wait, no, don\'t do that. Just send him away. The court feels a bit "lacks-luster" now.',
                effects: {
                    reputation: { noble: -10 }
                }
            }
        ]
    },
    {
        id: 'E035',
        title: 'DOCK-STATION DEEP-STATE',
        description: 'The harbor is too small for our new "Mega-Galley" merchant ships. The captains have developed a new hobby: scraping barnacles off their hulls using the royal rocks. We need Wood. Lots of Wood.',
        category: 'merchant',
        weight: 5,
        requirements: { minResource: { wood: 300 } },
        options: [
            {
                text: 'Expand the Docks! 300 Wood for a bigger harbor. Trade will boom, and the captains will stop calling you "The Land-Locked Loser."',
                effects: {
                    resources: { wood: -300 },
                    perMonthMod: { gold: 30 },
                    reputation: { merchant: 20, army: 10 }
                }
            },
            {
                text: 'The rocks add character. No expansion. The Merchants are busy scouting for a port that doesn\'t consider "rocks" a valid architectural feature.',
                effects: {
                    reputation: { merchant: -20, army: -5 }
                }
            }
        ]
    },
    {
        id: 'E036',
        title: 'THE IRON BANK IS CALLING',
        description: 'CRITICAL FINANCIAL CRISIS! The treasury is empty, and the "Gilded Hand" bank wants to "repossess" the Crown. They\'re offering a deal: they take the monthly customs, you get a one-time pile of gold. It\'s basically selling your soul, but with more paperwork.',
        category: 'merchant',
        weight: 0,
        isLocked: true,
        requirements: { minResource: { gold: -50 } },
        options: [
            {
                text: 'Sign the "Bailout Pact." +1200 Gold immediately, but -60 Gold a month forever. The bankers are grinning like sharks.',
                effects: {
                    resources: { gold: 1200 },
                    perMonthMod: { gold: -60 },
                    reputation: { merchant: -10, noble: -20 }
                }
            },
            {
                text: 'Refuse the deal. We\'ll build a economy out of... rocks? The Bank has officially transitioned from "Passive-Aggressive" to "Active-Aggressive."',
                effects: {
                    gameOver: "The Bank Repossessed the Throne"
                }
            }
        ]
    },
    {
        id: 'E037',
        title: 'THE OVERSEAS OVER-DRAFT',
        description: 'The Empire of Shiny-Things offers you a "Friendly Loan." A massive pile of gold now, for a "Small Administrative Fee" every month. It\'s like a credit card, but with more beheadings if you miss a payment.',
        category: 'merchant',
        weight: 4,
        options: [
            {
                text: 'Take the Gold! +1000 Gold. We\'ll worry about the 30 Gold monthly interest later. Future-Me\'s problem!',
                effects: {
                    resources: { gold: 1000 },
                    perMonthMod: { gold: -30 },
                    reputation: { merchant: 15 }
                }
            },
            {
                text: 'Debt is for Suckers. Reject the loan. The Empire of Shiny-Things has begun muttering dark oaths about "Economic Sanctions."',
                effects: {
                    reputation: { merchant: -10, noble: 15 }
                }
            }
        ]
    },
    {
        id: 'E038',
        title: 'WOOL WARS',
        description: 'The Merchant Guild wants a "Strategic Monopoly" on wool. They say it\'ll "Stabilize the Market." The peasants say it\'ll make pants cost four months\' salary. Someone is getting sheared here, and I don\'t think it\'s the sheep.',
        category: 'merchant',
        weight: 5,
        options: [
            {
                text: 'Grant the Monopoly. The Guild is happy, and you get a kickback. The peasants have been forced to adopt "Burlap & Despair" as their primary fashion choice.',
                effects: {
                    perMonthMod: { gold: 15 },
                    reputation: { merchant: 30, peasant: -30 }
                }
            },
            {
                text: 'Keep the market open! Free wool for everyone! The peasants cheer, but the Guild has organized a "Regicide & Mimosas" brunch in your honor.',
                effects: {
                    reputation: { merchant: -30, peasant: 20 }
                }
            }
        ]
    },
    {
        id: 'E039',
        title: 'THE SPICE STEAL',
        description: 'A merchant fleet is heading for the "Island of Tingly-Tongues" to bring back rare spices. They need funding in Gems. If it works, the gold will be generated per month. If not, you just threw your jewelry into the ocean.',
        category: 'merchant',
        weight: 3,
        requirements: { minResource: { gems: 3 } },
        options: [
            {
                text: 'Invest 3 Gems. Spice must be traded! Let\'s hope the sailors like swimming. +1000 Gold if they return!',
                effects: {
                    resources: { gems: -3, gold: 1000 },
                    reputation: { merchant: 20 }
                }
            },
            {
                text: 'Keep the Gems. The world is flavorful enough as it is. The Pirates of the South are disappointed they don\'t get to sink your investment.',
                effects: {
                    reputation: { merchant: -10 }
                }
            }
        ]
    },
    {
        id: 'E040',
        title: 'INFLATION NATION',
        description: 'Bread now costs as much as a small horse. The peasants are attempting to bake horse-sized loaves of bread in a desperate bid for value. The economy is screaming. We need to do something before the "Great Squish" happens early.',
        category: 'merchant',
        weight: 5,
        options: [
            {
                text: 'Hard Caps on Prices! Fix the price of bread. The peasants love it, but the Merchants have suddenly decided to "Go on Vacation" with every single one of their grain sacks.',
                effects: {
                    perMonthMod: { gold: -20 }, // Market distortion
                    reputation: { peasant: 25, merchant: -35 }
                }
            },
            {
                text: 'Let the Market Fix itself. The "Invisible Hand" of the market is primarily busy reaching into everyone\'s wallets.',
                effects: {
                    reputation: { peasant: -30, merchant: 15 }
                }
            }
        ]
    },
    {
        id: 'E041',
        title: 'THE WET WALLET',
        description: 'A storm wrecked a merchant ship on your coast. They were clearly smugglers, because the crates are full of "Forbidden Gold." It\'s technically yours by "Right of Salvage," or as the survivors call it, "Theft."',
        category: 'merchant',
        weight: 3,
        options: [
            {
                text: 'Claim the loot! +400 Gold. Smugglers should have sailed better. The treasury is happy.',
                effects: {
                    resources: { gold: 400 },
                    reputation: { shadow: 10, merchant: -10 }
                }
            },
            {
                text: 'Return the goods. Be a "Moral King." Boring! But the Merchants\' Guild might actually respect you for five minutes.',
                effects: {
                    reputation: { merchant: 20, shadow: -10 }
                }
            }
        ]
    },
    {
        id: 'E042',
        title: 'THE FAIR-WEATHER FRIENDS',
        description: 'The Merchants want to host a "Grand Market Fair" in the capital. It\'ll bring in trade, but it also brings in pickpockets, loud music, and a lot of very drunk travelers. Are you in?',
        category: 'merchant',
        weight: 5,
        options: [
            {
                text: 'Sponsor the Fair! 150 Gold for setup. The city is a mess, but the gold is appearing! +20 Gold per month for a bit.',
                effects: {
                    resources: { gold: -150 },
                    perMonthMod: { gold: 20 },
                    reputation: { merchant: 20, noble: 10, peasant: 10 }
                }
            },
            {
                text: 'Reject the rabble. We don\'t like fun or profit. The city is quiet, and so is the treasury.',
                effects: {
                    reputation: { merchant: -15, noble: 5 }
                }
            }
        ]
    },
    {
        id: 'E043',
        title: 'THE LOOPHOLE LAMENT',
        description: 'The Nobles found a law from 400 years ago that says they "Don\'t have to pay taxes on anything that has feathers." Now everyone is wearing chicken-hats and refusing to pay. Close the loophole, or start liking poultry.',
        category: 'merchant',
        weight: 5,
        options: [
            {
                text: 'Close the Loophole! Tax everything. Chicken-hats included. The Nobles have achieved a state of dual-track "Outrage and Embarrassment."',
                effects: {
                    perMonthMod: { gold: 30 },
                    reputation: { noble: -30, merchant: 10 }
                }
            },
            {
                text: 'Let them have their feathers. Poultry is the future? The treasury is performing a slow, shrinking dance into oblivion.',
                effects: {
                    perMonthMod: { gold: -15 },
                    reputation: { noble: 20 }
                }
            }
        ]
    },
    {
        id: 'E044',
        title: 'MINT CONDITION',
        description: 'Our coins are presently manufactured by several men hitting metal with heavy rocks. It\'s "Artisanal," but it\'s also slow. A Merchant suggests a "Steam-Powered Mint." 500 Gold to build. It screams, it smokes, and it poops gold.',
        category: 'merchant',
        weight: 4,
        requirements: { minResource: { gold: 500 } },
        options: [
            {
                text: 'Build the Mega-Mint! 500 Gold for a permanent +40 Gold per month. Industrialization rocks!',
                effects: {
                    resources: { gold: -500 },
                    perMonthMod: { gold: 40 },
                    reputation: { merchant: 15, peasant: -10 } // Peasants hate the noise
                }
            },
            {
                text: 'Rocks are fine. Reject the machine. The Merchants have added "Technophobic" to the list of things they whisper about you.',
                effects: {
                    reputation: { merchant: -10 }
                }
            }
        ]
    },
    {
        id: 'E045',
        title: 'THE SHINY BRIBE',
        description: 'The Merchant Guildmaster has sent you a "Token of Respect." It\'s a Gem the size of a pigeon\'s egg. He also mentioned something about a "Relaxation of the Customs Laws" in the same breath. Coincidence? Unlikely.',
        category: 'merchant',
        weight: 3,
        options: [
            {
                text: 'Accept the "Gift." +1 Gem and +100 Gold. Look, a lobbyist! Corruption is just another word for "Efficiency."',
                effects: {
                    resources: { gems: 1, gold: 100 },
                    perMonthMod: { gold: -10 }, // Tax evasion
                    reputation: { merchant: 20, noble: -15 }
                }
            },
            {
                text: 'Throw the Gem at his head! No bribes! The Merchants are busily drafting a support contract for your cousin instead.',
                effects: {
                    reputation: { merchant: -30, noble: 15 }
                }
            }
        ]
    }
];
