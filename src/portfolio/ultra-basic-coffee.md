---
title: "Ultra Basic Coffee"
summary: "Web Development, Illustration, and Animation"
displayOrder: 1
featured: true
image: "images/ultrabasic-hero.png"
---

Ultra Basic Coffee is an illustrated guide to the fundamentals of coffee extraction, and a website that (in 2019) became a kind of personal playground for me to understand scroll-based animation. It was built with React, Framer Motion, Styled Components, and a healthy dose of Intersection Observer.

<!-- [Visit Website >>](http://ultrabasiccoffee.com) -->

![Punk house text](/images/punkhouse.png)

## Inspiration

In early 2019, I accepted a contract role as a design technologist to gain more experience with design systems at a large Minnesota-based financial services company. I felt excited — I'd apprenticed the previous summer at a design-system-focused agency called Sparkbox, and read as much as I could about how to write scaleable CSS with techniques like namespacing, BEM, and ITCSS.

But I also knew that it would be a big shift. As a former magazine editor-turned-barista and freelance designer, I suddenly wouldn't be doing anything creative. And I didn't want to lose that aspect of my identity.

So I decided to make an animated website about one of the subjects I am always be obsessed with: pourover coffee science.

## Research

Although I have experience working as a barista at three different restaurants (including a bizarre diner at a Whole Foods in Saint Paul), I've never worked for a coffee company with an in-depth education program. Almost all my knowledge comes from books and websites, and I'm definitely not an authority on how to teach other people about making coffee at home.

So I reached out to a few folks who focus on coffee education for advice:

- Meister, Managing Editor at Cafe Imports
- Chelsea Thoumsin, lead buyer at Counter Culture Coffee
- Ben Helfen, Education Support Specialist at Counter Culture Coffee

I knew that the target demographic for a website about coffee science probably wasn't someone brand-new to coffee. But I had no idea about what level of detail to go into — or an understanding of what concepts even experienced baristas commonly struggle with.

Some of the main insights I gained after reaching out:

- People often respond the best when you try to teach little, tangible goals
- Teaching too many skills at once can easily cause someone's interest and/or confidence in learning to plummet
- The specialty coffee industry can sometimes hyper-focus on techniques that aren't necessarily rigorously tested or relevant to a wider audience
- There are fundamental distinctions between concepts like strength and extraction that are difficult for anyone, regardless of time in the industry, to learn
- Troubleshooting guides are invaluable (if your coffee tastes sour and smoky, it might be ...)

Meister also helped me prioritize how important different pourover coffee concepts would be to teach to beginners:

### Most Important

1. Coffee-Water Ratio
2. Particle Size / Grind
3. Contact Time

### Less Basic

4. Temperature
5. Agitation / Turbulance
6. Water Quality

![Punk house text](/images/strength.png)

## Potential Ideas

The conversations I'd had with coffee professionals and friends helped me come up several different ideas — ranging from experimental and creative to more analytical.

### Creative

- A website about making pourover coffee outdoors (aka adventure coffee)
- A website that helps others choose their first pourover device
- An interactive troubleshooting guide to when coffee goes bad

### Analytical

- An interactive chart that plots pourover devices by brewing time
- An interactive tool demonstrating how dose (aka strength) affects extraction

I knew that there are plenty of websites out there (I had read as many as I could) about how to make better coffee. I didn't know of any interactive online tools that make it easier to understand concepts like strength vs extraction. And I knew from chatting with Counter Culture and Cafe Imports that there was a definite need for them.

But there was one thing that stopped me short of pursuing making them. This whole project had started because I wanted to do more creative things. And happily, a mentor from Sparkbox gave me some pretty wonderful advice — I didn't always have to do hyper-productive, serious things in my free time.

![Aeropress illustration](/images/aeropress-ultrabasic.png)

## Creative Approach

I decided to try to make the web just a little bit more weird with a scroll-animation-focused website about the fundamentals of coffee. And I'd still try to make it useful, but it would simultaneously be as personal and silly and weird as possible.

## Room for Improvement

The Ultra Basic Coffee website heavily relies on a native browser API called Intersection Observer. It can very performantly trigger animations using an asychronous callback, but I think the key word here is _can_.

After discovering that you can pass more than one `threshold` parameter to an Observer (and because of that, trigger more than one scroll-based update to the same inline svg or other html element) the chaos muppet inside of me decided that it might be fun to see _just how aggressively_ and ridiculously I could update a single animation without noticing visible performance thrashing—

Could I smoothly trigger updates in increments of 0.001 for the page?

In browsers that are _not_ Safari, the results are surprising great.

In the future, there is definitely a lot of room for improvement, and I'd love to figure out how to do scroll-based animation more performantly without relying on third-party libraries.

## Credits

_Fonts: Antique Olive Nord, Barbour, Carmin v0.1, Input Mono, Macabre v0.1, Knockout, Nostra v1.0_

My Role: Web Development, Illustration, Animation + Bad Jokes
