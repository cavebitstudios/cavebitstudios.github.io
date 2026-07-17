import { JournalEntry } from '../models/JournalEntry'

export const journalEntries = [
    new JournalEntry({
    slug: 'project-glyphrune',
    title: 'Project Glyphrune',
    date: '2026',
    category: 'Project',
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
