import { motion, useReducedMotion } from 'motion/react'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function StudioPage() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <header className="studio-profile-hero section-shell">
        <motion.div
          className="studio-profile-hero__portrait"
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/caitlyn.png" alt="Caitlyn" loading="eager" decoding="async" />
        </motion.div>

        <motion.div
          className="studio-profile-hero__copy"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>Hello, I'm Caitlyn!</h1>
          <p className="studio-profile-hero__intro">
            I'm a self-taught solo developer. I've been building projects for years, and I handle pretty
            much everything myself. I love storytelling, world building, programming, and figuring out how all the
            little pieces of a game connect.
          </p>
        </motion.div>
      </header>

      <article className="studio-story-list section-shell" aria-label="More about Caitlyn">
        <ScrollReveal className="studio-story-section studio-story-section--single-heading">
          <div className="studio-story-section__heading">
            <h2 className="eyebrow">Where it started</h2>
          </div>
          <div className="studio-story-section__body">
            <p>
              I've always been a very creative storyteller and world builder. When I was a kid, I played
              LittleBigPlanet on PlayStation. I loved the game, and then I saw there was a level editor. I could
              create my own characters and my own world as a mini-game.
            </p>
            <p>
              When I tried it, I noticed there were very complicated components I did not fully understand. I
              couldn't just add a character, I had to build one from machine parts and components. I experimented
              with them to make them work.
            </p>
            <p>
              I didn't realize it at the time since I was little, but the game was actually teaching engineering
              and computers to kids. Brilliant! Looking back, I think that was the first introduction to the logical
              part of my mind.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="studio-story-section studio-story-section--single-heading" delay={0.04}>
          <div className="studio-story-section__heading">
            <h2 className="eyebrow">Minecraft modding</h2>
          </div>
          <div className="studio-story-section__body">
            <p>
              Years later, I started making Minecraft mods in Java under KitKait2001. Roamers and The Otherworld
              were some of my first big projects, and Roamers eventually passed 880,000 downloads.
            </p>
            <p>
              I learned how to master the way I think through years of developing Minecraft mods in Java. I
              didn't just learn programming, I learned how to think ahead of the logic as well.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="studio-story-section studio-story-section--single-heading" delay={0.08}>
          <div className="studio-story-section__heading">
            <h2 className="eyebrow">How I think</h2>
          </div>
          <div className="studio-story-section__body">
            <p>
              The best part of developing for me is not just programming. I see it as designing a system and a world
              using that system. What I mean by that is not just writing a function in code. I love to think ahead
              and see how it affects everything as a whole.
            </p>
            <div className="studio-story-section__aside">
              <p>
                If I make the roamer in my Minecraft mod build a house, how would he get the materials? When he gets
                the materials, how would that affect the land around him? Would he break down a player's house if
                the player built their house from the needed material?
              </p>
              <p>
                What happens when the roamer gets hungry? He should hunt. But then he'll hunt all animals. He
                should farm instead. How would that work?
              </p>
            </div>
            <p>
              All these connecting questions are important to think about, along with all the possibilities that can
              happen in a game. That's the part I love.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="studio-story-section studio-story-section--single-heading" delay={0.12}>
          <div className="studio-story-section__heading">
            <h2 className="eyebrow">Becoming CaveBit</h2>
          </div>
          <div className="studio-story-section__body">
            <p>
              I started as KitKait2001, then KitCaitie on YouTube. When I wanted to make a studio, I thought of
              Rosegold Games. It was a good alias, I just felt it was more of a caricature of me than... me.
            </p>
            <p>
              CaffeineCavern came to mind as a joke, because all I do is drink coffee and develop in my cave. Then...
              it morphed into a really cool name. CaveBit Studios. I wanted to use that moving forward.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="studio-story-section studio-story-section--single-heading" delay={0.16}>
          <div className="studio-story-section__heading">
            <h2 className="eyebrow">What I want to make</h2>
          </div>
          <div className="studio-story-section__body">
            <p>
              To the core, I want to make games that feel like you want to be a part of that world. Storytelling is
              great for that, but I've learned game mechanics are just as, or even more, important for achieving
              that immersive experience.
            </p>
            <p>
              I don't have a specific genre in mind. I'm open to developing any type of game or app that comes
              to mind.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="studio-ollie-section" delay={0.16}>
          <div className="studio-ollie-section__copy">
            <h2>My dog Ollie.</h2>
            <p>He's a cutie!</p>
          </div>
          <div className="studio-ollie-section__figure">
            <img
              className="studio-ollie-section__photo"
              src="/ollie.png"
              alt="Ollie"
              loading="lazy"
              decoding="async"
            />
            <img
              className="studio-ollie-section__arrow"
              src="/ollie-arrow.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </div>
        </ScrollReveal>
      </article>
    </>
  )
}
