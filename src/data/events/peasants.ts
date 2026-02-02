import { GameEvent } from '../../types';

export const peasantEvents: GameEvent[] = [
    {
        id: 'E001',
        title: 'CRUNCHY CLOUD OF DOOM',
        description: 'Oh look, it\'s raining bugs! A biblical-sized swarm of locusts has decided your peasants\' hard-earned grain looks delicious. They\'re basically tiny, flying chainsaws with a hunger that would make a garbage disposal blush. Your fields are disappearing faster than your dignity during a royal scandal.',
        category: 'peasant',
        weight: 10,
        options: [
            {
                text: 'BURN IT ALL. If we can\'t have the grain, nobody—especially not these six-legged squatters—can. Extra points for the smell of toasted chitin.',
                effects: {
                    resources: { food: -200 },
                    reputation: { peasant: -15, merchant: 5 } // Merchants like the scarcity? 
                }
            },
            {
                text: 'Bail them out. Cry as 200 Gold vanishes from the treasury to buy overpriced grain from the neighbors. They\'re laughing at you, by the way.',
                effects: {
                    resources: { gold: -200 },
                    reputation: { peasant: 25, noble: -10 } // Nobles hate "handouts"
                }
            }
        ]
    },
    {
        id: 'E002',
        title: 'THIRSTY TIMES IN TURTLE-BACK HOLLOW',
        description: 'The main well in the outer village have gone bone dry. The peasants have resorted to squeezing moisture out of mud, an exercise in futility that roughly matches your recent tax reforms. They\'re parched, grumpy, and eyeing the royal moat with treasonous levels of thirst.',
        category: 'peasant',
        weight: 8,
        options: [
            {
                text: 'Spend 50 Gold to dig deeper. It\'s likely just hitting more dirt, but it keeps them busy and hopeful.',
                effects: {
                    resources: { gold: -50 },
                    reputation: { peasant: 15 }
                }
            },
            {
                text: 'Tell them the river is "only" a six-hour walk away. Exercise is good for the soul! And the feet. Mostly the feet.',
                effects: {
                    reputation: { peasant: -15, army: 5 } // Army likes the "tough love" training?
                }
            }
        ]
    },
    {
        id: 'E003',
        title: 'THE POACHER\'S PREDICAMENT',
        description: 'A starving father was caught red-handed—literally, he was holding a bloody rabbit—in the Royal Woods. The law says he dies. The peasants say he was just trying to not die. It\'s a real "damned if you do, damned if you don\'t" situation. My favorite!',
        category: 'peasant',
        weight: 6,
        options: [
            {
                text: 'Off with his head! The law is the law, and rabbits are for winners. The Nobles will toast to your consistency.',
                effects: {
                    reputation: { noble: 15, peasant: -25 }
                }
            },
            {
                text: 'Spare the poor sap and give him some bread. You\'re such a softie. The Nobles are already calling you "The Rabbit-Lover" behind your back.',
                effects: {
                    resources: { food: -10 },
                    reputation: { noble: -15, peasant: 20 }
                }
            }
        ]
    },
    {
        id: 'E004',
        title: 'THE SOGGY ORPHAN SITUATION',
        description: 'The roof of the local orphanage is less of a "shelter" and more of a "suggestion." It is raining inside with such enthusiasm that the orphans have effectively moved into a high-density vertical swamp. The Matron is at your gates, and she\'s brought the loudest, soggiest children she could find.',
        category: 'peasant',
        weight: 6,
        options: [
            {
                text: 'Fine, fix the damn roof. 30 Gold down the drain. Well, onto the roof, then down the drain.',
                effects: {
                    resources: { gold: -30 },
                    reputation: { peasant: 15 }
                }
            },
            {
                text: '"They should learn to enjoy the outdoor aesthetic." Ignore them. You might want to invest in some earplugs for the screaming.',
                effects: {
                    reputation: { peasant: -15, noble: 5 } // Nobles approve of fiscal "discipline"
                }
            }
        ]
    },
    {
        id: 'E005',
        title: 'THE CHAOTIC CARNIVAL CONUNDRUM',
        description: 'A traveling circus has arrived! They have "bears" that are clearly just large dogs in costumes and a bearded lady who looks suspiciously like your cousin Steve. They want entry. It\'ll be a mess, it\'ll be loud, and someone will definitely lose a finger.',
        category: 'peasant',
        weight: 5,
        options: [
            {
                text: 'Let the circus in! 20 Gold for setup. The peasants need a distraction from their miserable lives.',
                effects: {
                    resources: { gold: -20 },
                    reputation: { peasant: 20, noble: -5 } // Nobles hate the "rabble" in the streets
                }
            },
            {
                text: 'Boot them. We have enough clowns in the advisory council already. No fun for anyone!',
                effects: {
                    reputation: { peasant: -10, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E006',
        title: 'THE GRAIN GREED GAME',
        description: 'Rumor has it some of the "wealthy" farmers—which in this economy means they have three shoes between them—are hoarding grain to artificially pump up prices. It\'s classic capitalism, and the rest of the peasants are hungry enough to eat their own hats.',
        category: 'peasant',
        weight: 7,
        options: [
            {
                text: 'Seize the grain! This is a command economy now, boys. The peasants will cheer, and the merchants will hide their silver.',
                effects: {
                    resources: { food: 150 },
                    perMonthMod: { food: 5 },
                    reputation: { peasant: 20, merchant: -20 }
                }
            },
            {
                text: 'Let the "Invisible Hand" of the market do its thing. The market\'s hand is mostly busy slapping the peasants in the face.',
                effects: {
                    perMonthMod: { food: -15 },
                    reputation: { peasant: -10, merchant: 15 }
                }
            }
        ]
    },
    {
        id: 'E007',
        title: 'BONE-DRY BUMMER',
        description: 'Congratulations! It hasn\'t rained in weeks. The ground is cracking, the crops are shriveling, and the peasants are starting to do weird dances to appease the sky. Spoiler: It\'s not working.',
        category: 'peasant',
        weight: 4,
        options: [
            {
                text: 'Enforce strict water rationing. No baths for anyone! The smell will be legendary, but we might survive.',
                effects: {
                    perMonthMod: { food: -25 },
                    reputation: { peasant: -15, noble: 5 } // Nobles like the control
                }
            },
            {
                text: 'Host a Grand Prayer to the Rain Gods. It costs 50 Gold in incense and fancy robes, but it makes everyone feel like we\'re "doing something".',
                effects: {
                    resources: { gold: -50 },
                    reputation: { peasant: 10, clergy: 15 },
                    perMonthMod: { food: -20 } // Still a drought, but slightly less panic
                }
            }
        ]
    },
    {
        id: 'E008',
        title: 'THE CANAL CHASE',
        description: 'Some "engineers" (guys with shovels and big ideas) want to build a canal system. They claim it\'ll fix the drought issues forever. All they need is a mountain of wood and for you to sign off on a project that definitely won\'t collapse into a giant mud pit.',
        category: 'peasant',
        weight: 5,
        requirements: { minResource: { wood: 100 } },
        options: [
            {
                text: 'Dump 150 Wood into the project. If it works, we\'re geniuses. If not, it\'s a very long, very expensive hole.',
                effects: {
                    resources: { wood: -150 },
                    perMonthMod: { food: 25 },
                    reputation: { peasant: 15, merchant: 10 }
                }
            },
            {
                text: 'Wood is for castles, not ditches. Reject the project and watch the engineers trudge away in disappointment.',
                effects: {
                    reputation: { peasant: -10, noble: 5 }
                }
            }
        ]
    },
    {
        id: 'E009',
        title: 'WEDDING CRASHER',
        description: 'A couple of local peasants are getting hitched! They\'ve invited you, the "Most Generous Monarch," to their muddy field to witness the blessed union. They\'re mostly hoping you\'ll bring some of the "good" wine.',
        category: 'peasant',
        weight: 3,
        options: [
            {
                text: 'Go to the wedding and drop 30 Gold into the collection plate. You\'ll be a local hero for at least a week.',
                effects: {
                    resources: { gold: -30 },
                    reputation: { peasant: 30 }
                }
            },
            {
                text: 'Send a polite "No" and a stiff tax reminder. Weddings are expensive; they should really be focusing on their productivity.',
                effects: {
                    reputation: { peasant: -5, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E010',
        title: 'THE DOOMSDAY DERBY',
        description: 'A ragged man in a loincloth is standing on a crate in the square, screaming that your reign is a "harbinger of the Great Squish." The peasants are gathered around, nodding like he\'s actually making sense.',
        category: 'peasant',
        weight: 5,
        options: [
            {
                text: 'Throw him in the dungeon for disturbing the peace. Silence is golden, and so is the treasury once we stop these rumors.',
                effects: {
                    reputation: { peasant: -15, army: 10, noble: 5 }
                }
            },
            {
                text: 'Let him speak. Maybe he has a point? Plus, it\'s free entertainment. The peasants love a good end-times rant.',
                effects: {
                    reputation: { peasant: 10, noble: -15 } // Nobles hate the instability
                }
            }
        ]
    },
    {
        id: 'E011',
        title: 'THE GREAT COW CAPER',
        description: 'Villages A and B have declared a low-stakes civil war over a herd of cows that wandered across a border. They\'re using pitchforks, loud words, and very aggressive gesturing. It\'s messy, it\'s loud, and frankly, it\'s embarrassing for everyone involved.',
        category: 'peasant',
        weight: 5,
        options: [
            {
                text: 'Split the herd evenly. Everyone gets a cow, and everyone stays slightly grumpy. The "Fair" approach.',
                effects: {
                    reputation: { peasant: 10 }
                }
            },
            {
                text: 'Confiscate the entire herd for the Royal Kitchens. They clearly can\'t handle the responsibility of livestock. Steak for dinner!',
                effects: {
                    resources: { food: 100 },
                    reputation: { peasant: -25, noble: 10 }
                }
            }
        ]
    },
    {
        id: 'E012',
        title: 'THE GRUMPY MILLED-OFF',
        description: 'The millers have stopped milling. They say the taxes are too high and the flour is too heavy. They\'ve decided to spend their days sitting on grain sacks, playing cards and looking aggressively unhelpful.',
        category: 'peasant',
        weight: 6,
        options: [
            {
                text: 'Give in and lower the grain tax. You lose 20 Gold a month, but at least the bread starts being baked again.',
                effects: {
                    perMonthMod: { gold: -20 },
                    reputation: { peasant: 15 }
                }
            },
            {
                text: 'Send in the tax collectors with some "persuasion." We\'ll get our flour, but the peasants might start accidentally putting sawdust in the royal bread.',
                effects: {
                    perMonthMod: { food: -10 }, // Sabotage/Inefficiency
                    reputation: { peasant: -20, army: 10 }
                }
            }
        ]
    },
    {
        id: 'E013',
        title: 'THE PLOW UPGRADE',
        description: 'The farmers have realized that digging in the dirt with sticks is "so last century." They want 80 Iron to forge proper plows. They claim it\'ll double the harvest, but they also claimed the moon was made of cheese last Tuesday.',
        category: 'peasant',
        weight: 5,
        requirements: { minResource: { iron: 80 } },
        options: [
            {
                text: 'Hand over 80 Iron. Invest in the future of dirt-flipping! The farmers will be thrilled.',
                effects: {
                    resources: { iron: -80 },
                    perMonthMod: { food: 20 },
                    reputation: { peasant: 20 }
                }
            },
            {
                text: 'Iron is for swords and taxes, not gardens. Tell them to keep using their sticks. It builds character.',
                effects: {
                    reputation: { peasant: -15, army: 10 } // Army likes the iron for weapons
                }
            }
        ]
    },
    {
        id: 'E014',
        title: 'THE SACRED STICKS',
        description: 'Your lumberjacks found a grove of ancient, twisted trees that look perfect for building a new wing of the palace. Unfortunately, the local peasants think the trees are "holy" and house the spirits of their ancestors. Spirits or floorboards? Tough call.',
        category: 'peasant',
        weight: 5,
        options: [
            {
                text: 'Protect the grove. The ancestors can keep their leaf-covered real estate. The peasants will rejoice in their superstition.',
                effects: {
                    reputation: { peasant: 20 },
                    perMonthMod: { wood: -10 }
                }
            },
            {
                text: 'Chop it down! 250 Wood for the taking! Who cares about tree spirits when you need a new ballroom?',
                effects: {
                    resources: { wood: 250 },
                    reputation: { peasant: -30, noble: 15 }
                }
            }
        ]
    },
    {
        id: 'E015',
        title: 'THE HARVEST HYPE',
        description: 'Holy moly! The fields are so full of grain it\'s actually getting a bit ridiculous. It\'s a Bumper Harvest! The peasants are dancing, the birds are too fat to fly, and you have some decisions to make about this sudden mountain of food.',
        category: 'peasant',
        weight: 3,
        requirements: { minReputation: { peasant: 60 } },
        options: [
            {
                text: 'Shove it all into the Royal Granary. 600 Food in stock! We\'ll be eating well even if the world ends tomorrow.',
                effects: {
                    resources: { food: 600 },
                    reputation: { peasant: 10 }
                }
            },
            {
                text: 'Throw a Kingdom-wide Feast! Everyone eats, everyone drinks, and someone definitely starts a fire. 400 Food stock, but massive Rep.',
                effects: {
                    resources: { food: 400 },
                    reputation: { peasant: 40, noble: 20, army: 10 }
                }
            }
        ]
    }
];
