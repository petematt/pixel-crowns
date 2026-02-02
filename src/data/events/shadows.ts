import { GameEvent } from '../../types';

export const shadowEvents: GameEvent[] = [
    {
        id: 'E061',
        title: 'THE WHISPERING WALLS',
        description: 'A "Shadow Agent" (a guy in a cloak who refuses to stop leaning against damp walls) has info on a Noble coup. He wants 100 Gold. He also wants a hug, but mostly the gold. Do we pay for the gossip?',
        category: 'shadow',
        weight: 6,
        options: [
            {
                text: 'Pay the Creep. 100 Gold. "Knowledge is Power," or in this case, "Knowledge is a Cloaked Guy who now has your lunch money."',
                effects: {
                    resources: { gold: -100 },
                    reputation: { shadow: 20, noble: -10 }
                }
            },
            {
                text: 'Ignore him. If they\'re going to coup, let them do it with some style. The Shadow has adopted a posture of "Profound Professional Neglect."',
                effects: {
                    reputation: { shadow: -15, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E062',
        title: 'POISONOUS POTENTIAL',
        description: 'Someone has developed a new poison called "The Slow Tickle." It\'s undetectable, painless, and makes the victim laugh until they... well, stop laughing. Forever. The Shadows want to stock up.',
        category: 'shadow',
        weight: 5,
        options: [
            {
                text: 'Buy a batch. 200 Gold. You never know when you\'ll need a good laugh. +20 Shadow Rep.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { shadow: 25 }
                }
            },
            {
                text: 'Too cruel. Stick to regular stabbings. The Shadows are busily drafting a memo regarding your distinct lack of comedic timing.',
                effects: {
                    reputation: { shadow: -10 }
                }
            }
        ]
    },
    {
        id: 'E063',
        title: 'THE SNITCH\'S STITCH',
        description: 'A low-level thief has offered to snitch on the Smuggler\'s Guild. He says they\'re hiding 5 Gems in a hollowed-out log. He just wants a pardon for stealing the royal chickens.',
        category: 'shadow',
        weight: 4,
        options: [
            {
                text: 'Pardon the Chicken-Thief. +5 Gems stock! The Smugglers have dedicated their afternoon to searching for an empty log and a very dead snitch.',
                effects: {
                    resources: { gems: 5 },
                    reputation: { shadow: -20, merchant: -10 }
                }
            },
            {
                text: 'Hang him anyway. Stealing chickens is a high crime. The Gems stay in the log. The Law has achieved a state of smug, blood-soaked satisfaction.',
                effects: {
                    reputation: { shadow: 10, noble: 15 }
                }
            }
        ]
    },
    {
        id: 'E064',
        title: 'THE INVISIBLE INTRUDER',
        description: 'A shadow was seen in the royal bedroom last night. It didn\'t steal anything, it just... rearranged your socks. It\'s a power move. We need better security.',
        category: 'shadow',
        weight: 5,
        options: [
            {
                text: 'Triple the Guard! -20 Gold per month. The room is now full of sweaty guys with spears. At least your socks are safe.',
                effects: {
                    perMonthMod: { gold: -20 },
                    reputation: { army: 15, shadow: -20 }
                }
            },
            {
                text: 'Rearrange them back. Start a Sock-War. The intruder is watching from the rafters, reportedly "Delighted" by your retaliatory sock-rearrangement.',
                effects: {
                    reputation: { shadow: 15 }
                }
            }
        ]
    },
    {
        id: 'E065',
        title: 'THE BOUNTY BRAWL',
        description: 'There\'s a bounty on the "Crimson Cape"—a local rebel who loves to give long speeches and rob tax carriages. We can send the Army (loud) or a Shadow Assassin (quiet).',
        category: 'shadow',
        weight: 3,
        options: [
            {
                text: 'Send the Assassin. 150 Gold. The Cape will be handled... quietly. No one likes a long speech anyway.',
                effects: {
                    resources: { gold: -150 },
                    reputation: { shadow: 20, noble: 10, peasant: -15 }
                }
            },
            {
                text: 'Send the Army. -30 Soldiers in the ambush, but it\'s a show of force. The Cape is Captured! (And then he gives another speech).',
                effects: {
                    resources: { soldiers: -30 },
                    reputation: { army: 20, noble: 15 }
                }
            }
        ]
    },
    {
        id: 'E066',
        title: 'THE SECRET STORAGE',
        description: 'The Royal Spymaster found a "Hidden Stockpile" of iron in a noble\'s basement. It\'s clearly for a revolt, but we can just say we "found" it. +400 Iron if we seize it.',
        category: 'shadow',
        weight: 4,
        options: [
            {
                text: 'Seize the Iron! "I found this in the garden, I swear." +400 Iron. The Noble is performing a high-quality impression of a man who just lost his retirement fund to a "Found" garden ornament.',
                effects: {
                    resources: { iron: 400 },
                    reputation: { noble: -35, army: 15 }
                }
            },
            {
                text: 'Leave it. Let them have their little revolt collection. We\'ll just tax it later. +20 Gold per month.',
                effects: {
                    perMonthMod: { gold: 20 },
                    reputation: { noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E067',
        title: 'THE PHANTOM PLAGUE',
        description: 'A "Shadow Virus" is spreading through the capital. It doesn\'t kill, it just makes people\'s skin turn slightly blue. It\'s very bad for morale. The Merchants say it\'s "The New Autumn Look."',
        category: 'shadow',
        weight: 3,
        options: [
            {
                text: 'Quarantine the Blue People. 100 Gold for walls and soup. The city is a mess, but at least the blue isn\'t spreading.',
                effects: {
                    resources: { gold: -100 },
                    reputation: { peasant: 10, merchant: -15 }
                }
            },
            {
                text: '"Blue is my favorite color!" Do nothing. The capital has officially transitioned into its "Azure & Oversized" phase.',
                effects: {
                    reputation: { shadow: 15, noble: -20, peasant: -10 }
                }
            }
        ]
    },
    {
        id: 'E068',
        title: 'THE SPY-MASTER\'S SALARY',
        description: 'Your Spy-Master wants a raise. He says he knows what you did last summer. He also knows what you\'re doing *now*. It\'s a very effective negotiation tactic.',
        category: 'shadow',
        weight: 2,
        options: [
            {
                text: 'Double his Pay. -30 Gold monthly. He stops mentioning "Last Summer." A victory for privacy!',
                effects: {
                    perMonthMod: { gold: -30 },
                    reputation: { shadow: 30 }
                }
            },
            {
                text: 'Replace him. (With a guy who is definitely not a counter-spy). He has opened a pop-up boutique dedicated to auctioning off your most embarrassing secrets.',
                effects: {
                    reputation: { shadow: -40, noble: -10, merchant: -10 }
                }
            }
        ]
    },
    {
        id: 'E069',
        title: 'THE BLACK-MAIL BUNDLE',
        description: 'A bundle of letters was dropped at your door. They contain evidence that the Head Priest likes to gamble on turtle racing. This could be useful.',
        category: 'shadow',
        weight: 4,
        options: [
            {
                text: 'Blackmail the Priest! +20 Gold per month as "Religious Donations." The Priest has developed a sudden, expensive-looking twitch.',
                effects: {
                    perMonthMod: { gold: 20 },
                    reputation: { clergy: -40, shadow: 15 }
                }
            },
            {
                text: 'Burn the letters. Be a "Good Person." Boring! But the Priest is grateful. I guess.',
                effects: {
                    reputation: { clergy: 20 }
                }
            }
        ]
    },
    {
        id: 'E070',
        title: 'THE SHADOW STRIKE',
        description: 'CRITICAL ALERT! The Shadows have decided you\'re "Too Honest." They\'ve poisoned the royal wine. You have one month to pay a 500 Gold "Anti-Poison Fee" or it\'s Game Over.',
        category: 'shadow',
        weight: 0,
        isLocked: true,
        requirements: { maxReputation: { shadow: 15 } },
        options: [
            {
                text: 'Pay the Ransom! 500 Gold. You live! Your wine now tastes like expensive medicine.',
                effects: {
                    resources: { gold: -500 },
                    reputation: { shadow: 40 }
                }
            },
            {
                text: 'Refuse. I\'ll drink water. (The water is also poisoned).',
                effects: {
                    gameOver: "The Shadows Tidied Up Thy Life"
                }
            }
        ]
    },
    {
        id: 'E071',
        title: 'THE GHOST GUARDIAN',
        description: 'A "Spirit-Assassin" wants to join your service. He\'s legally dead, which makes him great for taxes. He just wants a Gem every year to keep his soul attached to his sword.',
        category: 'shadow',
        weight: 2,
        requirements: { minResource: { gems: 1 } },
        options: [
            {
                text: 'Hire the Ghost. -1 Gem and +10 Gold per month. He is occupying his afterlife by "Downsizing" your political rivals.',
                effects: {
                    resources: { gems: -1 },
                    perMonthMod: { gold: 10 },
                    reputation: { shadow: 20, clergy: -20 }
                }
            },
            {
                text: 'Stick to the living. Reject the ghost. He has retired to the royal pantry to spoil the milk out of pure, spectral spite.',
                effects: {
                    reputation: { shadow: -10 }
                }
            }
        ]
    },
    {
        id: 'E072',
        title: 'THE FALSE FLAG',
        description: 'The Shadows propose a "False Flag" operation. We dress up as the Neighboring Kingdom and burn a few of our own farms. It\'ll justify a war tax!',
        category: 'shadow',
        weight: 3,
        options: [
            {
                text: 'Burn the Farms! (Sorry, guys). +300 Gold immediately from the new "War Fund." The peasants have achieved a dual-status of "Deeply Confused" and "Moderately Ablaze."',
                effects: {
                    resources: { gold: 300, food: -100 },
                    reputation: { peasant: -40, army: 20, shadow: 15 }
                }
            },
            {
                text: 'No, that\'s evil. Even for me. The Shadows are reportedly "Yawning with Intensity" at your sudden onset of conscience.',
                effects: {
                    reputation: { shadow: -10, peasant: 10 }
                }
            }
        ]
    },
    {
        id: 'E073',
        title: 'THE LOCK-PICK LOTTERY',
        description: 'A master thief wants to teach your guards how to pick locks. "To better understand the criminal mind," he says. He just wants a small "Tuition Fee" of 100 Iron.',
        category: 'shadow',
        weight: 4,
        options: [
            {
                text: 'Pay the Tuition. 100 Iron. Our guards are now 20% more likely to be able to open a door. And 50% more likely to steal from the kitchen.',
                effects: {
                    resources: { iron: -100 },
                    reputation: { army: 10, shadow: 20, merchant: -10 }
                }
            },
            {
                text: 'Locked doors are locked for a reason. Reject the training. The thief is amusing himself by proving that a "No" from you is just a "Maybe" for a lockpick.',
                effects: {
                    reputation: { shadow: 10 }
                }
            }
        ]
    },
    {
        id: 'E074',
        title: 'THE COUNTER-COUP',
        description: 'The Shadow Guild has info that the Noble council is planning to replace you with a very polite dog. They can "handle it" for 3 Gems.',
        category: 'shadow',
        weight: 2,
        requirements: { minResource: { gems: 3 } },
        options: [
            {
                text: 'Pay the Shadows. 3 Gems. The Nobles have formed an "Apology & Ice-Pack" support group in the aftermath.',
                effects: {
                    resources: { gems: -3 },
                    reputation: { shadow: 30, noble: -20 }
                }
            },
            {
                text: 'I want to see the dog. Reject the help. The Nobles have been spotted shopping for high-end leashes and organic dog biscuits.',
                effects: {
                    reputation: { noble: 20, shadow: -15 }
                }
            }
        ]
    },
    {
        id: 'E075',
        title: 'THE DOUBLE-CROSS',
        description: 'You\'ve been offered a bribe to betray the Shadow Guild to the Merchants. +800 Gold if you give up their hideout. They\'ll probably kill you later, but think of the gold!',
        category: 'merchant',
        weight: 1,
        options: [
            {
                text: 'Betray them! +800 Gold. The Merchants are cheering. The Shadows have declared a "National Sharpening Day" in anticipation of your funeral.',
                effects: {
                    resources: { gold: 800 },
                    reputation: { merchant: 40, shadow: -100 }
                }
            },
            {
                text: 'Loyalty to the Shadows. Reject the bribe. The Shadows have downgraded your assassination priority to "Wait and See."',
                effects: {
                    reputation: { shadow: 40, merchant: -20 }
                }
            }
        ]
    }
];
