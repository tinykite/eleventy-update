---
title: "Moon Watching"
summary: "Playful data visualization tools for lunar exploration"
displayOrder: 1
image: "images/moon-watching.jpg"
featured: true
---

I've always felt fascinated by the moon. Especially as a kid: on camping trips at state parks across Minnesota, I could spend what felt like hours casually observing the big, beautiful blob above me.

But I don't always remember that it even exists anymore. And there aren't any websites I can name that make it feel genuinely fun to look up the current moon phase: many have a "more is more" approach that eschews a good user experience in favor of dense, text-heavy data dumps.

So for Postlight Labs, I decided to explore how to make lunar cycle exploration more participatory — and even provide the creative spark individuals might need to get outside and soak up the intrigue of the world around them.

[Visit Website >>](https://www.moon-watching.com)

## One phase at a time

My first goal was the simplest: make it easy to see the current moon phase. I knew the experience needed to focus on simplicity to avoid overwhelming viewers or repeating the same user experience mistakes of other learning resources.

On the other hand, a website that only displays a couple of words (like "Full Moon") could feel incredibly... well, boring.

To avoid that, I dug deep and emerged with a hyper-stylized art direction inspired by sci-fi, retro video games, and comic book art. I hoped that by tapping into the adventurous spirit of these iconic forms, I could create something joyfully offbeat rather than overly academic.

![Animation of individual moon phases, feature science-fiction-like lettering that reads "Full Moon" or "New Moon" according to the phase, alongside a minimalist drawing of the moon](/images/moonphases-lessframes.gif)

After building an initial proof of concept with Sveltekit and a Supabase-hosted Postgres database, I felt accomplished — like I did what I set out to do. Almost immediately, however, I felt an insistent question at the back of my head.

Did I need to limit someone to seeing one moon phase? What if they could look up what moon phase happened on their birthday, or the day astronauts first landed on the moon?

![Depiction of desktop view of the Moon Watching homepage, which displays a minimalist depiction of the Waxing Crescent moon and the date May 15, 2023.](/images/moonwatching-landing.jpg)

Data visualizations that promote an easy way to explore complex datasets by letting individuals ask questions like these are often my favorite. So I knew I had to pursue a way to do it. And now, without compromising on simplicity, the website enables it. You can view the current moon phase, research the moon associated with the first fateful moonwalk, or any other illustrious date — in the past or future.

![Depiction of desktop view of the Moon Watching homepage, which displays a minimalist depiction of the Waxing Gibbous moon and a date field with a user-inputted date of January 2nd, 1988.](/images/moonwatching-date.jpg)

## Every phase for the month

The next hurdle was to create an interactive way to explore every moon phase associated with the current month. Many websites provide this information already, but it's almost always in a static, more analytical format — either as a data table or a two-dimensional calendar mockup.

I wanted to explore how creative technology and illustration could communicate more nuance about how the moon ebbs and flows. For example, according to NASA, throughout the lunar cycle, "the moon appears to tilt back and forth like a metronome" (due largely to the tilt of the Earth itself).

And that's not even the only illusion at play!

I turned back to comics for inspiration for translating that experience. Not only because I'm a book nerd at heart that lives for magical realism and oddball fantasy — but because experts like Jen Christiansen, Senior Graphics Editor at Scientific American have also spoken at length about their love of comic books and how they can transform otherwise intimidating scientific information.

Christiansen believes comics (and broadly speaking, all stylized illustrations or embellishments) have an approachability that can act as a "welcoming gesture" that draws non-experts in to learn about complicated topics.

With that in mind, I designed a hyper-stylized, almost anime-esque moon explorer that progressively morphs between every phase during the month. At the same time, the moon features playful, semi-randomized blobs that animate to and fro (depending on user interaction) to simulate how our specific vantage point of the moon changes over time.

![Depiction of desktop view of the Moon Watching lunar cycle explorer, which displays a moon that morphs between phases depending on interaction with an accessible range input](/images/moonwatching-explorer.jpg)

This is all screen reader and keyboard accessible, and without colossal effort — because it's driven by interaction with a native range input.

In creative technology projects, I think accessibility is easy to gloss over or forget about. But everyone should be able to learn about the moon. And with accessible data visualization experiments like this one, I hope they can.

## Outdoor field study

The last challenge I wanted to pursue was to find a creative way to encourage others to go outside and get firsthand experience of the moon.

The Griffith Observatory posts detailed information about when the moon will be brightest throughout the year. But without a reminder, I've often struggled to take advantage of their detailed moonrise and moonset data.

To remind myself and others to soak up the magic of the night sky, I created an email alert system that allows users to sign up to receive automatic updates on the new and full moon.

![Screenshot of a newsletter signup form that lets users recover updates about the new and full moon](/images/moonwatching-alerts.jpg)

The magic of it is pretty simple. I set up a cron job (also known as a scheduled function) to check the current moon phase every day. If a full or new moon occurs at any point during the day, the cron job will send out an email newsletter that details information from the Griffith Observatory about when the moon will be brightest (or dimmest).

The newsletter also includes gentle encouragement to "go outside and look at the moon" — in case someone needs a little nudge. Which is a pretty good summary of the whole project.
