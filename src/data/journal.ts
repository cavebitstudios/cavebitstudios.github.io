import { JournalEntry } from '../models/JournalEntry'
import { findGameBySlug } from "./games.ts";

export const journalEntries = [
    new JournalEntry({
      slug: 'glyphrune-devlog-01',
      title: 'Rebuilding Glyphrune',
      date: '2026',
      category: 'Devlog',
      focused_project: 'glyphrune',
      excerpt: 'I released Glyphrune earlier than I should have, so I went back, rebuilt it, and started expanding what comes after the original game.',
      readTime: '3 min',
      youtubeVideoId: 'DuyRGh3lIjM',
      sections: [
        {
          heading: 'Releasing Too Early',
          paragraphs: [
            'Glyphrune was the first indie game I released, and I released it earlier than I should have.',
            'The main idea worked, but there were parts of the game that needed more time. Some systems were too limited, some information was harder to read than it should have been, and the world itself did not feel as complete as I wanted it to.',
            'Instead of leaving it there, I went back and started rebuilding the parts that bothered me most.',
          ],
        },
        {
          heading: 'Rebuilding the Game',
          paragraphs: [
            'A lot of the work started with things that sound small on their own.',
            'The world map changed. Routes changed. Combat information became clearer. Enemies became more deliberate. Progression, rewards, Allies, Glyphs, Runes, and the way the game moves between different parts of a run all received more work.',
            'Eventually it stopped feeling like a patch to the first release and started feeling much closer to the game I originally wanted to make.',
          ],
        },
        {
          heading: 'Then the World Got Bigger',
          paragraphs: [
            'While I was fixing the original game, I started thinking about what happens after the player reaches the High Keep.',
            'Right now, defeating the High Keep is basically the end of the original journey. But once I made the larger world map, that ending became the point where the world opens up instead.',
            'The original map is only one part of a much larger world, with new continents built around their own enemies, mechanics, rewards, and ways of fighting.',
          ],
        },
        {
          heading: 'Kaishen',
          paragraphs: [
            'The first place I have been building beyond the original map is Kaishen.',
            'It is a misty warrior continent inspired by old Japanese and samurai settings, with mountain roads, fortresses, assassins, and disciplined fighters.',
            'It is also where I started pushing combat beyond the original one-on-one battle structure. Multiple enemies can begin appearing in these later areas, which changes how the player has to think about damage, defense, and which threat matters most.',
          ],
        },
        {
          heading: 'What Comes Next',
          paragraphs: [
            'The video above goes through the rebuild and shows some of the new direction for Glyphrune after the first release.',
            'There is still a lot I want to build, but the goal is clearer now. I want the original journey to feel complete while giving the game somewhere meaningful to go after it.',
            'Future devlogs will follow that work as the new maps, enemies, cards, and systems come together.',
          ],
        },
      ],
    }),
    new JournalEntry({
      slug: 'glyphrune-major-update',
      title: 'Major Update Announcement!',
      date: '2026',
      category: 'Glyphrune',
      focused_project: 'glyphrune',
      excerpt: 'A major game-changing update to Glyphrune! Version 1.0.0 is here!',
      readTime: '5 min',
      sections: [
        {
          heading: 'A Much Bigger Update',
          paragraphs: [
            'Glyphrune has received its first major update.',
            'I originally released the game earlier than I should have. The main idea was there, but there were parts of the game that needed more time, more clarity, and more depth.',
            'Since then, I have spent a lot of time working through player feedback and looking at the game as a whole.',
            'I did not want to make a few small changes and call it finished.',
            'This update changes how the world is explored, how battles flow, how the player grows stronger, and how information is presented throughout a run.',
            'Glyphrune is still the same game at its core, but it is much closer to the game I wanted to release.',
          ],
        },
        {
          heading: 'Rebuilding the Journey',
          paragraphs: [
            'One of the biggest changes is how travelling through the world works.',
            'The world map has been expanded into a 3D map with different regions, roads, and routes to choose from. Instead of simply moving forward through encounters, the player has more control over where they go and what risks they take.',
            'Routes can contain standard battles, stronger enemies, rest stops, Ally Trials, rewards, and other opportunities.',
            'The camera and transitions have also been reworked so moving between the world map, routes, and battles feels more connected.',
            'Progress through a route is now saved, so closing the game does not mean losing where you were in an expedition.',
            'I wanted travelling to feel like part of the game instead of something that only happens between battles.',
          ],
        },
        {
          heading: 'Making Battles Easier to Understand',
          paragraphs: [
            'Combat received a lot of attention in this update.',
            'One of the most important pieces of feedback was that the player needed better information about what was happening during a battle.',
            'Health, block, energy, damage, and status effects are now easier to read. Effects such as Weak, Vulnerable, Strength, Poison, and Shield have clearer visual feedback, and lasting effects are separated from temporary ones.',
            'Enemy behaviour has also been improved. Enemies use their own hands, choose legal combinations of cards, and make decisions based on the current battle.',
            'Turn order is more consistent between battles, and enemy-first encounters have been adjusted so they are less likely to begin with an unfair amount of damage.',
            'The goal was not to remove uncertainty. I still want the player to think about risk. I just want that risk to come from the decisions being made instead of information being difficult to understand.',
          ],
        },
        {
          heading: 'Allies',
          paragraphs: [
            'Allies are another major addition to Glyphrune.',
            'The player can now find and recruit Allies while travelling through different regions. Only one can be active at a time, and each one is designed to change how a run is played instead of simply increasing a number.',
            'Some Allies are creatures tied to particular regions, including the Wolf, Goblin, Troll, Golem, and Dragon.',
            'There are also class-based Allies with their own combat abilities and restrictions.',
            'Finding an Ally can require taking a more dangerous road through an Ally Trial, so gaining one is not always the safest choice.',
            'I wanted Allies to give the player another reason to think about the route they are taking and what kind of strategy they are building.',
          ],
        },
        {
          heading: 'Glyphs and Runes',
          paragraphs: [
            'The update also introduces the Glyph and Rune systems.',
            'Glyphs are rare symbols that can be discovered during a run. Finding one adds it to the Glyph Glossary, but discovering its name does not immediately explain everything it does.',
            'Runes are artifacts connected to those symbols. They can be collected, activated, and carried between runs.',
            'Up to three Runes can be active at once, allowing different effects to become part of the player\'s strategy.',
            'Some improve attacks, some affect block or healing, and others change how cards behave during combat.',
            'I wanted these systems to feel like something the player gradually understands instead of another menu that explains everything immediately.',
            'There are currently Glyphs and Runes for Embers, Ruin, Passage, Shelter, Burden, Hunger, Decay, Echo, Clarity, Mending, and Fury.',
          ],
        },
        {
          heading: 'More Ways to Grow',
          paragraphs: [
            'Progression during a run has also been expanded.',
            'Cards can now be upgraded, and there are more opportunities to improve the deck without simply adding another card every time a battle ends.',
            'Rest stops can give the player time to recover, prepare, or remove something they no longer want in their deck.',
            'Completing parts of the journey can also lead to training choices such as Vitality, Mastery, and Discipline.',
            'These choices can improve health, upgrade an existing card, or make the player stronger for the rest of the run.',
            'I wanted progression to be about improving what the player already has as much as finding something new.',
          ],
        },
        {
          heading: 'Learning From the First Release',
          paragraphs: [
            'Releasing Glyphrune gave me the chance to see people play the game without already knowing how everything worked.',
            'That showed me problems that were harder to notice while developing it alone.',
            'Some rewards were not clear enough. Some cards did not feel worth taking. Important combat information could be difficult to read, and parts of the interface made simple decisions harder than they needed to be.',
            'The feedback was useful because it gave me specific things to work on instead of guessing what players might struggle with.',
            'I have tried to keep the parts people enjoyed while improving the areas that got in the way.',
            'There is still much more I want to add, so stay tuned for future content updates!',
          ],
        },
        {
          heading: 'Still Glyphrune',
          paragraphs: [
            'Even with everything that has changed, I have tried to keep Glyphrune focused on the original idea.',
            'You choose a hero, travel through a dangerous world, build a deck, survive battles, and decide which risks are worth taking.',
            'Health still matters beyond a single fight. A bad decision can still affect the rest of a run. Taking the strongest-looking reward is not always the best choice.',
            'The new systems are meant to give those decisions more depth without changing what the game is trying to be.',
            'Glyphrune is a tabletop RPG built around cards, survival, exploration, and strategy.',
            'This update is a large step forward for the game, and I am looking forward to continuing to build on it.',
          ],
        },
      ],
    }),
    new JournalEntry({
    slug: 'project-astromacy',
    title: 'Project Astromacy',
    date: '2026',
    category: 'Project',
    focused_project: 'astromacy',
    excerpt: 'A 3D space-exploration sandbox where every choice matters.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Where It Started',
        paragraphs: [
          'Astromacy began with the idea of making a space game where exploration was the main reason to keep playing.',
          'I wanted the player to be able to travel between planets, land somewhere unfamiliar, leave their ship, explore, and make an impact.',
          'The scale of space gave me a lot of room to experiment with that idea. I became interested in what the player could actually do after reaching a new planet and how the environment around them could become part of the experience.',
          'I wanted the environment itself to create gameplay.',
          'Astromacy became a 3D exploration sandbox built around travelling, discovering locations, interacting with planetary systems, finding wildlife, completing activities, and deciding what is worth investigating.',
        ],
      },
      {
        heading: 'Exploring the Frontier',
        paragraphs: [
          'The heart of Astromacy is exploration.',
          'You travel through space, choose where to go, land on different planets, and explore their surfaces. Once you leave the ship, the game opens up and gives you room to understand the place you have landed in.',
          'You can find locations, unusual terrain, wildlife, environmental hazards, resources, and activities while moving through the world.',
          'Not everything needs to be part of a mission.',
          'You may begin travelling toward one location and notice something else along the way. A strange creature, a body of water, an unusual landscape, or an unexplored structure can give you a reason to change direction.',
          'I want curiosity to be part of the gameplay and give the player a reason to explore beyond their original destination.',
        ],
      },
      {
        heading: 'Making Planets Feel Alive',
        paragraphs: [
          'One of the biggest goals for Astromacy is making each planet feel like a place with its own identity.',
          'Different parts of a planet can contain their own terrain, fluids, wildlife, hazards, sites, and activities. These systems are designed to interact and influence what happens while you explore.',
          'Water is more than a visual surface. It can affect movement, create buoyancy, apply drag, contain currents, and support wildlife that would not appear on land.',
          'Lava can behave differently again. It can be dangerous to the player while still supporting creatures that are adapted to live inside or around it.',
          'Ground wildlife, water wildlife, and lava wildlife are treated as different habitats, allowing creatures to appear in environments that make sense for them.',
          'That means seeing something alive can also tell you something about the environment around it.',
        ],
      },
      {
        heading: 'The Open Frontier',
        paragraphs: [
          'The Open Frontier is the more open-ended sandbox side of Astromacy.',
          'It is where I am focusing on creating gameplay through planetary conditions, activities, locations, wildlife, resources, and environmental systems working together.',
          'An activity might send you toward a particular location, but the journey there can still involve other parts of the planet.',
          'You may cross dangerous terrain, move through water, find wildlife in a nearby habitat, discover another site, or decide that something you noticed along the way is more interesting than where you originally planned to go.',
          'I want activities to give the player direction while still leaving room for the surrounding world to become part of the experience.',
          'The Open Frontier is about having a ship, having a universe to travel through, and deciding what you want to do with it.',
        ],
      },
      {
        heading: 'Avalon Expedition',
        paragraphs: [
          'Astromacy also has a story mode called Avalon Expedition.',
          'The story begins after humanity is forced to evacuate Earth and rebuild on a new world called Avalon. Generations later, humanity is ready to travel into space again, and you play as the Captain of the Starling alongside your crewmate Jay.',
          "'What begins as a routine expedition quickly changes after an unusual discovery. It starts a larger journey across different worlds and civilizations to help piece together humanity's forgotten history.'",
          'Avalon Expedition still uses the exploration systems that Astromacy is built around. You travel between planets, leave the Starling, investigate environments, meet different species, complete assignments, and make decisions as the story develops.',
          'Your choices can also affect relationships and the direction of events. Jay, your friend and crewmate, remembers how you behave. Different civilizations have their own interests, and decisions made earlier in the expedition can matter later.',
          'Depending on how a part of the story is shaped, it can be a more focused story-telling experience or become fully explorable. Some moments can lead the player through an important event, while others can give them a planet or area and allow them to explore it more freely.',
          'I want Avalon Expedition to give Astromacy a central story without separating that story from the exploration that the rest of the game is built around.',
        ],
      },
      {
        heading: 'Keeping It Data-Driven',
        paragraphs: [
          'One of the most important technical goals for Astromacy is keeping the project entirely data-driven.',
          'I want new planets, activities, species, locations, story content, and environmental effects to use reusable systems wherever possible.',
          'Instead of programming each piece of content individually, I want to define what something is and let the existing systems decide how it behaves.',
          'That makes the project easier to expand and easier to maintain.',
          'It also means the Open Frontier and Avalon Expedition do not need to be completely separated. Story content can use the same planets, environments, wildlife, activities, and interaction systems as the rest of the game.',
          'The more Astromacy grows, the more important that becomes.',
        ],
      },
      {
        heading: 'What the Player Actually Does',
        paragraphs: [
          'Astromacy is built around small decisions made during a much larger journey.',
          'You decide where to travel, where to land, what to investigate, which locations are worth visiting, and how far you want to move away from the safety of your ship.',
          'In the Open Frontier, those decisions can be largely your own. In Avalon Expedition, they can also become part of a larger story.',
          'You may have to decide whether to cross dangerous terrain, enter water, approach unfamiliar wildlife, continue toward an activity, investigate something unexpected, or respond to a situation involving another person or civilization.',
          'I want those decisions to give the player reasons to pay attention to the world around them.',
          'Sometimes the most interesting part of exploration is not knowing exactly what you are going to find until you go there.',
        ],
      },
      {
        heading: 'What Comes Next',
        paragraphs: [
          'My current development work is focused on making both exploration and the content inside it more interesting to actually play.',
          'That means adding more activities, more environmental interactions, more wildlife behaviors, more places to discover, and more situations where several systems can affect the player at the same time.',
          'I also want to continue developing Avalon Expedition and finding the right balance between directed story moments and areas where the player is free to explore.',
          'The long-term goal is to have enough interacting systems that travelling somewhere new can create interesting situations without every moment needing to be scripted individually.',
          'I still want authored stories and designed locations, but I also want the journey between those moments to matter.',
        ],
      },
      {
        heading: 'The Game I Want to Make',
        paragraphs: [
          'Astromacy is a space game, and I want its scale to be supported by the things the player can find and do within it.',
          'I want the planets to feel worth landing on, the wildlife to feel like it belongs where it appears, the story to give the universe meaning, and the environmental systems to have a reason to exist beyond making the world look different.',
          'I want travelling somewhere new to create questions.',
          'What is here? What lives here? What can I find? What can I do? How can I progress?',
          'The Open Frontier gives the player the freedom to find their own answers. Avalon Expedition gives those same systems a larger journey to be part of.',
          'More than anything, I want Astromacy to be fun to explore.',
        ],
      },
    ],
  }),
    new JournalEntry({
    slug: 'project-glyphrune',
    title: 'Project Glyphrune',
    date: '2026',
    category: 'Project',
    focused_project: 'glyphrune',
    excerpt: 'A Solo Tabletop RPG game made using Godot Engine.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Where It Started',
        paragraphs: [
          'Glyphrune began with the first game I ever made.',
          'It was a text-based Python game where you chose between four characters: Knight, Mage, Archer, and Warrior. The game was story-based, and the goal was to explore every area of the map, collect the items you needed, and prepare for the boss at the end.',
          'I later wanted to adapt that idea into a playable visual RPG. Building an entire 3D world would have added a huge amount of work before I could focus on the part I found most interesting: choosing a character, travelling across a map, growing stronger, and preparing for increasingly difficult battles.',
          'Instead of abandoning the idea, I simplified it.',
          'I took the original gameplay loop and turned it into a card-based RPG. Glyphrune is not meant to feel like a traditional card game. It is a battle played through cards.',
        ],
      },
      {
        heading: 'More Than Winning a Battle',
        paragraphs: [
          'The heart of Glyphrune is not just fighting. It is surviving.',
          'You choose a hero, build your deck, and advance through roads and different regions of the map. The farther you travel, the harder the game becomes. Every battle can take something from you, even when you win.',
          'Death ends the entire run.',
          'That changes how every decision feels. You cannot mindlessly attack and assume you will recover afterward. Health has to be managed across the full journey. Healing cards can keep you alive during battle, while rest stops give you opportunities to recover between encounters.',
          'Sometimes the strongest move is not the one that deals the most damage. It may be blocking an attack, saving a useful card, healing before it becomes an emergency, or choosing a safer road because the next battle could end the run.',
          'I want every move to feel worth thinking about.',
        ],
      },
      {
        heading: 'Four Ways to Play',
        paragraphs: [
          'The original four-character idea is still part of Glyphrune.',
          'The current heroes are the Knight, Mage, Ranger, and Warrior. Each begins with a different deck and approaches combat in a different way.',
          'The Knight is built around defence, guarding, and counterattacks. The Mage uses wards, energy, and elemental attacks. The Ranger focuses on control, marks, and ranged attacks. The Warrior has more health and relies on strength and direct damage.',
          'The cards are the actions available to you during battle. They can deal damage, create block, restore health, draw more cards, change your available energy, or apply effects to enemies.',
          'Enemies also reveal the actions they are preparing to use. This gives you a chance to respond, but it does not always give you an easy answer. You still have to decide what matters most in that moment and what risks you are willing to take.',
        ],
      },
      {
        heading: 'Travelling Through the World',
        paragraphs: [
          'The game takes place across a dark medieval world divided into different regions.',
          'Each region has its own roads, locations, enemies, encounters, rewards, and boss. Routes branch as you travel, so you have to decide where to go instead of moving through a simple list of battles.',
          'The world currently includes forests, deserts, mountains, ruined cities, frozen areas, coastal fortresses, and fortified keeps. I am continuing to add more regions and more places to battle across different maps.',
          'The route you choose affects what you face and what opportunities you find. Card rewards change your deck during a run, while rest stops give you choices such as recovering health, removing an unwanted card, or preparing for better reward options later.',
          'The game becomes progressively harder as you move forward, so improving your deck is only one part of surviving. You also need to avoid filling it with cards that do not work well together.',
        ],
      },
      {
        heading: 'The Tone of Glyphrune',
        paragraphs: [
          'I wanted Glyphrune to have a serious and tense medieval tone, with some of the feeling of older RPGs.',
          'The interface, artwork, colours, and background effects are all built around that direction. The game uses dark materials, earthy colours, worn surfaces, smoke, embers, and a tabletop presentation to make the battles feel physical while still keeping the atmosphere of a medieval RPG.',
          'The music is designed to support concentration rather than overpower it. It keeps the theme of the game present, but it is not meant to become so intense that it makes it difficult to think.',
          'Glyphrune is a strategy game, so the player needs room to consider each move. The music should keep the game immersive while still being comfortable to listen to during longer sessions.',
        ],
      },
      {
        heading: 'Building It Alone',
        paragraphs: [
          'I have been working on Glyphrune for about a month as a solo developer.',
          'That month has included full days of work and more than a few sleepless nights. It is easier to put that amount of time into something when I do not see it only as a job. I see it as a passion.',
          'The hardest parts have been getting the user interface to feel right, building the background shader, and making the project entirely data-driven.',
          'Those are also some of the parts I am most proud of.',
          'Building the game around data means that cards, enemies, encounters, regions, locations, rewards, and other content can be updated without rewriting the main systems every time. It makes the project easier to maintain and gives me a stronger foundation for adding more content later.',
          'The current game is very close to the original vision I had for it. It did not become a completely different project during development. I had a clear idea of how I wanted it to work, and I was able to bring that idea to life.',
        ],
      },
      {
        heading: 'What Comes Next',
        paragraphs: [
          'PC is currently the main platform for Glyphrune.',
          'I am also focusing on console support and a mobile version. The game already works on mobile, but the interface still needs more refinement before it is as easy to read and play on a smartphone as I want it to be.',
          'My current development work is focused on adding more regions, areas, and battle maps.',
          'Further ahead, I want to support data packs that allow players to create their own regions. The goal is for someone to build a region in their own style, load it into the game, and play it without needing to modify the core project.',
          'That is important to me because I am not only thinking about the player. I am also thinking about the wider gaming and modding community and how the game can give people room to create.',
        ],
      },
      {
        heading: 'The Game I Want to Make',
        paragraphs: [
          'Glyphrune is being programmed and designed from the ground up by one developer, but I do not want it to feel limited by that.',
          'I want the systems to be thoughtful, the strategy to matter, and the game to remain easy to expand. I want players to feel that every battle, card choice, rest stop, and route decision has a purpose.',
          'I also want it to remain focused on being a game.',
          'It is not being made to push a political or cultural message from either side. It is meant to be something that people from different backgrounds can enjoy. It is a medieval strategy RPG built around cards, survival, and carefully considered decisions.',
          'More than anything, I want Glyphrune to be fun.',
        ],
      },
    ],
  }),
    new JournalEntry({
    slug: 'site-open',
    title: 'Site Open',
    date: '2026',
    category: 'Studio',
    focused_project: undefined,
    excerpt: 'A home for CaveBit Studios projects and updates.',
    readTime: '1 min',
    sections: [
      {
        heading: 'The CaveBit Studios Website Is Live',
        paragraphs: [
          'The CaveBit Studios website is now live.',
          'I wanted a proper home for the studio and its games, somewhere that could grow alongside each project without feeling like a generic portfolio. The site puts the games first, with dedicated project pages, screenshots, development updates, press information, and a simple way to get in touch.',
          'Glyphrune is currently the main project featured across the site. Its page will continue to expand as development moves forward, with more images, details, and updates added over time.',
        ],
      },
      {
        heading: 'Updates and Development',
        paragraphs: [
          'The Updates section will be where I write about development, share project progress, and talk more openly about the work behind CaveBit Studios. This first post is mostly here to mark the launch.',
          'The website is still something I plan to improve as the studio grows, but the main structure is now in place.',
          'Thanks for taking a look.',
        ],
      },
    ],
  }),
]

export function findJournalEntryBySlug(slug?: string) {
  return journalEntries.find((entry) => entry.slug === slug)
}

export function findGameProject(game_project?: string) {
  return findGameBySlug(game_project)
}