---
title: "Learning to Design for Dark Mode"
date: "2021-01-12"
description: "Thinking about the intersection of accessibility and branding while redesigning a dark version of my portfolio."
---

I decided to learn to design and develop a dark mode this past week, by iteratively adding it to my own website in small, doable steps. And I was a little surprised by the resources and writing that people have dedicated to design considerations.

A friend of mine had mentioned that the css media query for dark mode is (as they like to affectionately call things) pretty snazzy. And it is. A couple of articles down the web development rabbit hole that for me usually involves typing things like `mdn.io/dark mode` and `css tricks dark mode` I was pretty excited. I started to convert all my one-off color choices for my website into a single `postcss` file with namespaced css variables:

```css
:root {
  --c-background: #ffffff;
  --c-inverseBackground: #272822;
  --c-primaryText: #272822;
  --c-secondaryText: #777777;
  --c-tertiaryText: #545151;
  --c-inverseText: #ffffff;
  --c-primaryAccent: #ffc6ab;
  --c-secondaryAccent: #364883;
}
```

Your development style might be very different, but these variables all start with c because I tend to prefer BEMIT-style naming conventions, where every variable or css class is prefixed with a letter or abbreviated work (c for color, in this instance) to give other developers a better idea of its purpose and potential reusability.

All I needed to do to functionally add dark mode to my website was write a single media query that would update all of these values. And then, I don't know shout say something silly like, "bob's your uncle!" and take a nap. Right?

Maybe designing for dark mode is a little bit more of a elementary concept for someone with a background in systems design. But for me, it isn't.

What really happened is this: I discovered that my personal website had, at the time of writing out all these new css variables, no less than six different shades of gray. (Including, hilariously, just "gray") And I started to wonder, how do I keep the visual tone of the website lively and upbeat without feeling like a completely different one-off website?

The light theme for my website also has accent colors that include a sort of hot peach and deep purple, neither of which felt particularly right if I simply darkened or lightened them in an attempt to look less muddy. And maybe this is less of a difficult challenge for someone with a background in systems design, where making 9 shades of HSL-named grays is a more regular activity. But I feel like it isn't for two big reasons.

## Branding

The first one is branding. I'm not a fan of the notion of just googling Material Design recommendations or copying the off-white or off-black shades of a more complex web application (like Notion, which I'm currently writing this all in). That feels like a missed opportunity to make something that is a user need a usable constraint for how I want to communicate my point of view as a designer, for the story I want to tell about myself.

Especially because, in this instance, I am the one with the user need. I developed light sensitivity about a month after a car accident, and want to get back into web development by updating my website, but without having to stare at a dimmed white screen all day.

Material design is so famously bland, and yet still very much a product of the story that Google wants to tell. I don't want to rely on their carte blanche recommendations for my day-to-day work as a front-end engineer and definitely not for a website that showcases the more playful work I do as an illustration-focused designer and web animation super fan.

## Accessibility

If I copy and pasted hex values directly from their guidelines (or from iOS guidelines, or any other style guide) I would also be effectively writing off dark mode as an accessibility feature. I would be implicitly implementing it in a way as more of a novel feature — something that doesn't speak to an implicit need and also only needs to be just barely good enough.

I'd just be phoning it in.

And Instead of doing that, I'm now starting to think about dark mode by default. And I feel complicated about it — there's something very light and minimal and spacious feeling about my current design.

But I want to continue to grow my skills as a designer and a developer. And I think I've shied away in the past from writing about design because it not only feels so difficult — I'm not working as a designer full-time, and chatting about my interest in design has more than a couple of times made individuals question my interest and experience with web development (and vice versa) — but because design as a field is so easily compartmentalized into brand design and product design. Or advertising and app development.

But I feel like designing for dark mode is a perfect example of how silly those delineations can be. Visual design does contribute to usability, it does help or hinder individuals with short and long-term disabilities, and it does communicate storytelling.
