import { GameEvent } from '../../types';

export const nobleEvents: GameEvent[] = [
    {
        id: 'E016',
        title: 'THE WALL OF WORRY',
        description: 'Duke Horatio "The Haughty" wants to build a massive wall on the border. He claims it\'s to keep "The Stinky Outsiders" away, but we all know he just wants a better view of his neighbor\'s pool. It\'ll cost a fortune in Gold and Wood, but the Army is already polishing their spears in anticipation.',
        category: 'noble',
        weight: 8,
        requirements: { minResource: { gold: 300, wood: 200 } },
        options: [
            {
                text: 'Fund the Great Wall. 300 Gold and 200 Wood gone forever. At least the Duke will stop whining, and we get a few new recruits out of the rubble.',
                effects: {
                    resources: { gold: -300, wood: -200, soldiers: 50 },
                    reputation: { noble: 25, army: 15 }
                }
            },
            {
                text: 'Tell the Duke to buy a telescope instead. Reject the wall. The Nobles have begun drafting a very strongly worded letter of complaint.',
                effects: {
                    reputation: { noble: -20, army: -5 }
                }
            }
        ]
    },
    {
        id: 'E017',
        title: 'BORED BILLIONAIRES',
        description: 'The court is bored! And when nobles get bored, they start plotting coups or writing terrible poetry. They demand a Grand Ball. They want glitter, they want swan-shaped ice sculptures, and they want you to pay for all of it.',
        category: 'noble',
        weight: 6,
        options: [
            {
                text: 'Throw the party! 150 Gold on table-cloths and tiny appetizers. The Nobles will love you, but the starving peasants might set your carriage on fire.',
                effects: {
                    resources: { gold: -150 },
                    reputation: { noble: 30, peasant: -20 }
                }
            },
            {
                text: 'Tell them to play a board game or something. No Ball. The palace atmosphere has taken on a distinctly "icy" quality, and not the swan-shaped kind.',
                effects: {
                    reputation: { noble: -25, peasant: 10 }
                }
            }
        ]
    },
    {
        id: 'E018',
        title: 'VALLEY OF THE SQUABBLING VULTURES',
        description: 'Baron A and Baron B have chosen the throne room as the venue for their latest sweaty wrestling match over a "Fertile Valley." It\'s mostly just a patch of grass with a very confused cow, but they both want it. Pick a winner, or they\'ll never stop hug-fighting on the royal carpet.',
        category: 'noble',
        weight: 5,
        options: [
            {
                text: 'Support Baron A. He promised to give his soldiers extra training. The Army is pleased, but Baron B is already sharpening his daggers.',
                effects: {
                    reputation: { noble: 15, army: 15, peasant: -10 }
                }
            },
            {
                text: 'Support Baron B. He knows how to move a profit. The Merchants are happy, but Baron A\'s screams are echoing through the hallway with impressive resonance.',
                effects: {
                    reputation: { noble: 15, merchant: 15, shadow: 5 }
                }
            }
        ]
    },
    {
        id: 'E019',
        title: 'THE PARANOIA PROTOCOL',
        description: 'Someone tried to put arsenic in the King\'s soup! Luckily, the soup was so salty the poison couldn\'t compete. Your advisor suggests a full-time poison taster. It\'s a steady job, if you don\'t mind the occasional seizure.',
        category: 'noble',
        weight: 4,
        options: [
            {
                text: 'Hire a taster. 10 Gold a month for the "Living Meat-Shield" program. The Shadows approve of this level of caution.',
                effects: {
                    perMonthMod: { gold: -10 },
                    reputation: { shadow: 15 }
                }
            },
            {
                text: '"I\'ll just eat my soup cold." Trust in your immunity. The court has opened a high-stakes betting pool on how long you last.',
                effects: {
                    reputation: { shadow: -10, noble: 5 } // Nobles like the "strength"
                }
            }
        ]
    },
    {
        id: 'E020',
        title: 'THE ROYAL RANSOM... I MEAN, MARRIAGE',
        description: 'The Kingdom of Over-There wants to marry off their Princess to your heir. They say she\'s "lovely," but their last three alliances ended in "accidental" fires. Still, she comes with a dowry of actual trained soldiers.',
        category: 'noble',
        weight: 3,
        options: [
            {
                text: 'Accept the alliance. Sign the papers and welcome 120 new Soldiers. Just keep a fire extinguisher near the wedding cake.',
                effects: {
                    resources: { soldiers: 120 },
                    reputation: { noble: 15, army: 10, shadow: -5 }
                }
            },
            {
                text: 'Decline. Tell them your heir is "already married to the state." Over-There has officially downgraded our relationship to "Incredibly Awkward."',
                effects: {
                    reputation: { noble: -15, merchant: -5 }
                }
            }
        ]
    },
    {
        id: 'E021',
        title: 'THE RUNAWAY RED-COAT',
        description: 'A soldier was caught deserting his post. He says his mom is sick. The General says his head should be on a spike to remind the others that "sick moms" are a luxury we can\'t afford. Discipline or Mercy? Choose fast, the executioner is charging by the hour.',
        category: 'army',
        weight: 5,
        options: [
            {
                text: 'SPIKE TIME! Desertion is a sin against the Crown. The Army is now terrified and obedient. Perfect.',
                effects: {
                    reputation: { army: 20, peasant: -20, noble: 5 }
                }
            },
            {
                text: 'Let him go home. Give him 5 Food for the trip. You\'re a saint! A saint whose grip on the military is slipping faster than a greased pig at a county fair.',
                effects: {
                    resources: { food: -5 },
                    reputation: { army: -25, peasant: 25 }
                }
            }
        ]
    },
    {
        id: 'E022',
        title: 'TREASURY IS LOOKING THIN',
        description: 'The Royal Vault is now an exclusive sanctuary for cobwebs and one very hungry spider. The Generals suggest a "Defense Levy"—which is fancy talk for "shaking the peasants until gold falls out." It\'s for national security!',
        category: 'army',
        weight: 5,
        options: [
            {
                text: 'Levy the Tax! 400 Gold immediately. The peasants have formed a "Regicide Enthusiasts" club, but hey, you can pay the troops!',
                effects: {
                    resources: { gold: 400 },
                    reputation: { peasant: -30, merchant: -15, noble: -10 }
                }
            },
            {
                text: 'Try to find "efficiency savings" instead. The Army has found a new hobby: sharpening their swords while maintaining unsettling eye contact with you.',
                effects: {
                    reputation: { army: -15, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E023',
        title: 'THE SWORDS FOR HIRE',
        description: 'The "Grinning Skulls" mercenary company is outside the gates. They have very sharp steel and very flexible morals. For 250 Gold, they\'ll work for you. For 0 Gold, they might start working for your neighbors.',
        category: 'army',
        weight: 6,
        options: [
            {
                text: 'Hire the Skulls! 250 Gold for 80 elite Soldiers. They\'re rude, they drink too much, but they\'re killers.',
                effects: {
                    resources: { gold: -250, soldiers: 80 },
                    reputation: { army: -10, shadow: 15 } // Regular army hates mercs
                }
            },
            {
                text: 'Send them away. We don\'t need "freelancers." The Skulls have moved on to "aggressively pitch" their services to the nearest border town.',
                effects: {
                    reputation: { army: 15, shadow: -5 }
                }
            }
        ]
    },
    {
        id: 'E024',
        title: 'POINTY STICK PARADE',
        description: 'It\'s Tournament Season! Knights from across the land are here to hit each other with sticks until someone falls off a horse. It\'s a great way to show off... if you pay for the prizes and the medical bills.',
        category: 'noble',
        weight: 5,
        options: [
            {
                text: 'Sponsor the Grand Joust! 120 Gold for shiny prizes. Everyone loves a good show, even if Sir Lancelot did just lose all his teeth.',
                effects: {
                    resources: { gold: -120 },
                    reputation: { noble: 20, army: 15, peasant: 10 }
                }
            },
            {
                text: 'Let them hit each other for free. No prizes! The Tournament is a dull affair, and the boredom levels are critical.',
                effects: {
                    reputation: { noble: -10, army: -10 }
                }
            }
        ]
    },
    {
        id: 'E025',
        title: 'THE ROGUE RAMPAGE',
        description: 'A band of "Totally-Not-Sponsored-By-The-Neighbors" raiders is attacking a border fort. We need to do something, or they\'re going to start stealing the royal silverware next.',
        category: 'army',
        weight: 4,
        options: [
            {
                text: 'Send in the Heavy Cavalry! We\'ll lose some men, but those raiders will be stains on the grass. -40 Soldiers.',
                effects: {
                    resources: { soldiers: -40 },
                    reputation: { army: 25, noble: 10 }
                }
            },
            {
                text: 'Pay them to go bother someone else. 200 Gold "Diplomacy." The Army is toasted to your "strategic retreat" while calling you "His Royal Yellowness" into their beer.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { army: -30, merchant: 5 }
                }
            }
        ]
    },
    {
        id: 'E026',
        title: 'THE BASTARD\'S BOAST',
        description: 'A handsome young man is in the square claiming to be your father\'s "Other-Other Heir." He has the family jawline and a very annoying amount of charisma. The Nobles are listening. Too much.',
        category: 'noble',
        weight: 3,
        options: [
            {
                text: 'Lock him in the deepest, darkest hole we have. Out of sight, out of mind, and definitely out of the succession line.',
                effects: {
                    reputation: { noble: -15, shadow: 20 }
                }
            },
            {
                text: 'Give him a minor estate and title. Keep your friends close and your bastard half-brothers closer.',
                effects: {
                    resources: { gold: -50 },
                    reputation: { noble: 15, peasant: 5 }
                }
            }
        ]
    },
    {
        id: 'E027',
        title: 'SHINY NEW MURDER-SUITS',
        description: 'Our blacksmiths have developed "Feather-Plate" armor. It\'s strong, it\'s light, and it makes our soldiers look like very dangerous pigeons. All it needs is 150 Iron and a heap of Gold.',
        category: 'army',
        weight: 5,
        requirements: { minResource: { iron: 150, gold: 150 } },
        options: [
            {
                text: 'Equip the Elite Guard! 150 Iron and 150 Gold. Our troops will be unstoppable! Or at least very well-protected pigeons.',
                effects: {
                    resources: { iron: -150, gold: -150 },
                    reputation: { army: 30, noble: 10 }
                }
            },
            {
                text: 'They survived in boiled leather before, they\'ll survive now. Deny the upgrade. The Army\'s morale has reached depths usually reserved for bottom-feeding sea life.',
                effects: {
                    reputation: { army: -20 }
                }
            }
        ]
    },
    {
        id: 'E028',
        title: 'THE GENERAL\'S GRIEVANCE',
        description: 'General Kael "The Krabby" is in your office. He won a minor skirmish against some goats and thinks he deserves a triumph in the capital. He is very loud and he smells like wet horse.',
        category: 'army',
        weight: 5,
        options: [
            {
                text: 'Give him a shiny medal and a parade. It costs 40 Gold to clean the streets afterwards, but Kael is beaming.',
                effects: {
                    resources: { gold: -40 },
                    reputation: { army: 15, noble: 10 }
                }
            },
            {
                text: 'Give him 100 Gold and tell him to go away. Cash is King, right? Kael takes the money but feels a bit "commercialized."',
                effects: {
                    resources: { gold: -100 },
                    reputation: { army: -5, merchant: 5 }
                }
            }
        ]
    },
    {
        id: 'E029',
        title: 'THE PRETORIAN PROPOSAL',
        description: 'A group of elite veterans wants to form "The Dragon Guard"—a personal protection unit for you. They want a mountain of gold and a few shiny gems to show off their status.',
        category: 'army',
        weight: 2,
        requirements: { minResource: { gems: 3, gold: 300 } },
        options: [
            {
                text: 'Establish the Guard! 3 Gems and 300 Gold. You\'re now 40% less likely to be stabbed in your sleep. Nice!',
                effects: {
                    resources: { gems: -3, gold: -300, soldiers: 30 },
                    reputation: { army: 20, noble: 15, shadow: -10 }
                }
            },
            {
                text: 'I\'ll just lock my bedroom door. Reject the Guard. The veterans have marched off to join the "Bastard Heir\'s" official fan club.',
                effects: {
                    reputation: { army: -15, shadow: 5 }
                }
            }
        ]
    },
    {
        id: 'E030',
        title: 'SOLDIER SALTINESS',
        description: 'CRITICAL ALERT! The soldiers haven\'t seen a paycheck in months and have resorted to the "Leather & Laces" diet. They\'re threatening to pack up and leave... or worse, stay and help themselves to the palace pantry.',
        category: 'army',
        weight: 0,
        isLocked: true,
        requirements: { maxReputation: { army: 15 } },
        options: [
            {
                text: 'Empty the treasury to pay the arrears! 600 Gold. It hurts, but a loyal army is better than a hungry mob with spears.',
                effects: {
                    resources: { gold: -600 },
                    reputation: { army: 40, noble: -10 }
                }
            },
            {
                text: 'Let the deserters go. 150 Soldiers march out the gate. The Kingdom is defense-less, but hey, your vault is still... slightly full?',
                effects: {
                    resources: { soldiers: -150 },
                    reputation: { army: -50 }
                }
            }
        ]
    }
];
