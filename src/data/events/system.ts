import { GameEvent } from '../../types';

export const systemEvents: GameEvent[] = [
    {
        id: 'E091',
        title: 'HEIR-APP-ARENTLY SUCCESSFUL',
        description: 'You\'ve hired a "Royal Tutor" for your heir. He\'s a man who has read every book in existence and still manages to mispronounce the word "Succession." Your heir is learning... things. Mostly how to look bored in meetings.',
        category: 'system',
        weight: 10,
        options: [
            {
                text: 'Invest in Education! -100 Gold. Your heir has achieved a status of "10% More Competent," mostly by learning which end of the quill to hold.',
                effects: {
                    resources: { gold: -100 },
                    reputation: { noble: 10 }
                }
            },
            {
                text: 'Let them learn on the streets. Street-smarts are vital for a monarch! And cheaper.',
                effects: {
                    reputation: { peasant: 10, noble: -10 }
                }
            }
        ]
    },
    {
        id: 'E092',
        title: 'THE SICKLY SUCCESSION',
        description: 'You\'ve entered the final stage of your reign: "Active Decomposition." It\'s a natural process, really. Like a sunset, but with more phlegm and lawyers. We need to finalize the trust fund before the "Great Squish" happens for you.',
        category: 'system',
        weight: 5,
        requirements: { minTurn: 50 },
        options: [
            {
                text: 'Stash 500 Gold for the next guy. -500 Gold stock, but the heir starts with a "Golden Parachute."',
                effects: {
                    resources: { gold: -500 },
                    trustFund: { gold: 500 }
                }
            },
            {
                text: 'Spend it all now! Use the last 500 Gold for a "Deathbed Disco." +50 Rep All Factions.',
                effects: {
                    resources: { gold: -500 },
                    reputation: { peasant: 50, noble: 50, merchant: 50, army: 50, clergy: 50, shadow: 50 }
                }
            }
        ]
    },
    {
        id: 'E093',
        title: 'THE TRUST FUND TRIUMPH',
        description: 'Congratulations! You found a "Secret Stash" of gems in your father\'s old gym socks. I don\'t want to know why they were there, and neither do you. +10 Gems immediately!',
        category: 'system',
        weight: 0,
        isLocked: true,
        options: [
            {
                text: 'Claim the "Sock Gems." +10 Gems. Your legacy has achieved a state of "Radiant Foot-Wear."',
                effects: {
                    resources: { gems: 10 }
                }
            },
            {
                text: 'Donate them to the Clergy to "Purify" the socks. +50 Clergy Rep.',
                effects: {
                    reputation: { clergy: 50 }
                }
            }
        ]
    },
    {
        id: 'E094',
        title: 'REBELLION RATIO REDLINE',
        description: 'CRITICAL ALERT! Your reputation with the Peasantry is lower than your chances of surviving this conversation. They\'re sharpening their pitchforks. They aren\'t even using them for hay anymore. They\'re using them for... well, you.',
        category: 'system',
        weight: 0,
        isLocked: true,
        requirements: { maxReputation: { peasant: 5 } },
        options: [
            {
                text: 'Bribe them with 400 Food. "Hey look, bread!" Hunger has been downgraded to "Aggressive Grumbling." +20 Rep.',
                effects: {
                    resources: { food: -400 },
                    reputation: { peasant: 20 }
                }
            },
            {
                text: 'Let them riot. I\'ve always wanted to see a pitchfork in action from this close.',
                effects: {
                    gameOver: "The Peasants Decided You Tasted Like Pork"
                }
            }
        ]
    },
    {
        id: 'E095',
        title: 'THE NOBLE NAPTIME',
        description: 'CRITICAL ALERT! The Nobles have officially "Exited the Fan Club." They\'ve already picked out your replacement—a very nice statue of a better King. They\'re voting on whether to move you to the dungeon now or later.',
        category: 'system',
        weight: 0,
        isLocked: true,
        requirements: { maxReputation: { noble: 5 } },
        options: [
            {
                text: 'Acknowledge their "Supreme Wisdom." -200 Gold "Admin Fee." +20 Rep. Your dignity is performing a slow, downward spiral into the palace moats.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { noble: 20 }
                }
            },
            {
                text: 'Tell them to vote on "This!" (Gesture rudely). The Nobles have graduated to the "Active Deposition" phase of their plan.',
                effects: {
                    gameOver: "Deposed by the Bored Billionaires"
                }
            }
        ]
    },
    {
        id: 'E096',
        title: 'THE ARMY\'S ABSENCE',
        description: 'CRITICAL ALERT! The Army has completed its "Great Strategic Disappearance" act. Turns out, if you don\'t pay them or respect them, they just... leave. Usually with the royal silverware.',
        category: 'system',
        weight: 0,
        isLocked: true,
        requirements: { maxReputation: { army: 5 } },
        options: [
            {
                text: 'Double Salaries! -50 Gold per month. +30 Rep. The Army is sheepishly marching back, reportedly "finding" the royal silverware in their pockets.',
                effects: {
                    perMonthMod: { gold: -50 },
                    reputation: { army: 30 }
                }
            },
            {
                text: 'Who needs an army? I have a very sharp letter-opener! (You get invaded five minutes later).',
                effects: {
                    gameOver: "The Neighbors Realized You Were Defenseless"
                }
            }
        ]
    },
    {
        id: 'E097',
        title: 'BEYOND THE BRINK',
        description: 'You\'ve survived 100 turns! Congratulations, you\'re ancient. You\'re basically a piece of jerky on a throne. It\'s time to choose: Retire in glory, or keep going until you literally turn into dust?',
        category: 'system',
        weight: 1,
        requirements: { minTurn: 100 },
        options: [
            {
                text: 'Retire to a nice farm. Succession! Choose your heir and pass on the Trust Fund.',
                effects: {
                    softReset: true
                }
            },
            {
                text: 'One... more... month... Keep going! Your legend is attempting a world record for "Longest Time Spent Occupying a Throne."',
                effects: {
                    reputation: { noble: 10, peasant: 10 }
                }
            }
        ]
    },
    {
        id: 'E098',
        title: 'THE BANKRUPTCY BOUNCE',
        description: 'CRITICAL ALERT! Your Gold stock has achieved the status of "Imaginary." The creditors are at the door. They aren\'t knocking, they\'re using a battering ram made of invoices.',
        category: 'system',
        weight: 0,
        isLocked: true,
        requirements: { minResource: { gold: -1 } },
        options: [
            {
                text: 'Sell the Royal Jewels. -5 Gems for +1000 Gold. Solvency is back, though your vault feels suspiciously roomy.',
                effects: {
                    resources: { gems: -5, gold: 1000 }
                }
            },
            {
                text: 'Declare "Royal Immunity." (The bankers don\'t care).',
                effects: {
                    gameOver: "The Iron Bank Repossessed Your Pants"
                }
            }
        ]
    },
    {
        id: 'E099',
        title: 'THE FINAL COUNTDOWN',
        description: 'The world is ending. I don\'t know why, I just report the messages. There\'s a giant meteor, or maybe a giant foot. Either way, it\'s been a pleasure being your System. Decision time, [User]!',
        category: 'system',
        weight: 1,
        requirements: { minTurn: 200 },
        options: [
            {
                text: 'Build a Bunker! -10 Gems and -1000 Gold. Survival has been upgraded from "Zero" to "Extremely Unlikely but Non-Zero."',
                effects: {
                    resources: { gems: -10, gold: -1000 },
                    reputation: { noble: 50 }
                }
            },
            {
                text: 'Go out with a party! Use everything. The world is going out in a blaze of "Oh God, Everything is Happening at Once."',
                effects: {
                    resources: { gold: -5000, food: -5000, iron: -5000, wood: -5000, gems: -50, soldiers: -500 },
                    reputation: { peasant: 100, noble: 100, merchant: 100, army: 100, clergy: 100, shadow: 100 }
                }
            }
        ]
    },
    {
        id: 'E100',
        title: 'THE END OF THE LINE',
        description: 'You\'ve died. Don\'t worry, everyone does it once. You left behind a legacy of "Mostly survived." Your heir is waiting. Let\'s see if they\'re any better at this than you were.',
        category: 'system',
        weight: 0,
        isLocked: true,
        options: [
            {
                text: 'LONG LIVE THE NEW KING! Soft reset and pass the legacy.',
                effects: {
                    softReset: true
                }
            },
            {
                text: 'Game Over. Show me the final Scroll of Records.',
                effects: {
                    gameOver: "Natural Causes (Old Age and Too Many Decisions)"
                }
            }
        ]
    }
];
