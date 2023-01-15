---
title: "Guidelines for Inclusive Web Animation"
date: "2022-09-08"
description: "A short primer on how to spark joy, responsibly."
---

When considering animating a portion of a website or web application, always try to consider user goals first. What does someone need to accomplish? How will animation help them accomplish that goal, or reassure them they are making progress?

And importantly, how might animation accidentally get in the way?

A website with animations that support, rather than distract, from high-level user goals will always have the potential to impact someone's experience much more profoundly than animations driven by more ambiguous goals.

The Nielsen/Norman group has written more in-depth about this, and the impact of good UX in animation, in their article [A Theory of User Delight: Why Usability Is the Foundation for Delightful Experiences](https://www.nngroup.com/articles/theory-user-delight/) .

Most importantly, try to center creative direction for motion design on the needs of folks with motion sensitivities, cognitive disabilities, and even just less-than-ideal, slower internet access. By doing so, you will naturally be thinking more critically about how well animation strategies might benefit the goals of anyone visiting a website.

## Web Performance Guidelines

### CSS Animation

For performance reasons, CSS animations should rely on updating `opacity` and `transform` properties exclusively.

If you're in a situation where you need to animate a permanent change to an element's position, height, or width (or another similar property), use the[ FLIP technique](https://aerotwist.com/blog/flip-your-animations/).

If you don't know how to improve upon an animation that already appears sluggish or with otherwise obvious "jank", you can force layer recreation for an element using the `will-change` property. [MDN provides additional documentation on this](https://web.dev/animations-guide/#triggers)

### Javascript Animation

There are two primary ways to create timed, two-dimensional Javascript animation without third-party dependencies.

**1. requestAnimationFrame API (Older)**
A common way to animate elements on a page with Javascript is with the [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame "requestAnimationFrame()") API.

Using rAF, developers can create a callback method that is called before the next repaint of a page. By calling the same function — that iteratively updates the same properties with progressively increasing parameters — an element can be effectively animated across the page.

According to MDN documentation, rAF is considered more efficient than similar methods such as [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) or [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) because it does not require a delay parameter.

_Note:_ It's a common misconception that rAF always runs at a consistent rate of 60fps. By default, the rate is non-deterministic and callbacks will run on every frame that the browser is ready to perform a paint operation, which may be much faster than expected. This can be improved with a timing function.

**2. Web Animations API (Newer)**
The Web Animations API promises to replace the need for rAF, and provide a much more streamlined way to orchestrate complex animations.

Support used to be mediocre, at best. But all that has recently changed —

The WAAPI is now broadly supported by modern browsers (Firefox 48+, Chrome 36+, and Safari 13.1+). There is also a [polyfill](https://github.com/web-animations/web-animations-js) that tests for feature support and loads when necessary.

Matt Perry (of Framer Motion and Pop Motion notoriety) is also currently developing a library called [Motion One](https://motion.dev/), which is written in Typescript and intended to improve upon the developer experience of the WAAPI without adding unnecessary bloat to the package size of a website. (The library is 14.7 kB, gzipped and minified. Perry also says the `animate` and `scroll` functions are less than 20% the size of comparable options in Greensock.)

I would personally recommend experimenting with Motion One before other, similar libraries.

### Choosing Between CSS and Javascript Animation

Use CSS animations + transitions unless more complex orchestration (or features such as velocity-based spring animation) are necessary.

## Accessibility

There isn't a lot of overlap in writing about creative technology and animation. Often accessibility is either the sole focus of animation writing, or it's mentioned as a concern that can be tackled after an animation is already finished.

Another problematic aspect of writing on web animation accessibility is that it's commonly believed that individuals with vestibular disorders, such as vertigo, are the primary individuals who have trouble with web animations. This is well intended.

But often, authors conflate the vestibular system with the vision system, and misrepresent all motion and spacial orientation-related issues as vestibular issues. This isn't factually accurate. And unfortunately it minimizes the disabilities of a much wider audience.

Animation can be very problematic for individuals who experience migraines, hypermobility, long haul covid, physical and emotional trauma — and particularly traumatic brain injury. Vision dysfunction that contributes to difficulty with ambient movement is also prevalent among autistic individuals and individuals with ADHD, who may not even realize that they are struggling with Vertical Heterophoria (a form of Binocular Vision Dysfunction) and/or a tendency towards tunnel vision.

Because of that, animation should be designed in the same way as design elements such as color & contrast: in a way that adapts to the needs of as many individuals as possible without their explicit acknowledgement or understanding of a disability.

It's also important to note that any animation can be distracting. It’s not just parallax animation, or animation in the peripheral portion of a screen. Animation is always going to direct a user’s attention: so be judicious in deciding if you are directing someone’s attention to right thing, or if it distracts from the task they are already active with.

### Inclusive Strategies

- Use animation to connect the dots. (Tip: if you remove animation entirely, does the website still make sense? Is it still usable and enjoyable?)
- Prioritize animations triggered by user action.
- Treat web performance as user experience.
- Always avoid animation longer than 5 seconds (including animations that indefinitely loop).
- Introduce animations in someone’s main line of sight, not their peripheral vision.
- Provide obvious ways to play and pause animations that are 5 seconds or longer. Don't autoplay long animations by default.

### But what about prefers-reduced-motion?

[Prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) is a CSS media query that detects whether or not an OS-level setting has been toggled. It's important to talk about, but if your approach begins with creating the most exciting animation for "ideal" users and then tacking on an additional bit of CSS at the end that disables it for a subset of individuals who know and use the "reduced motion" setting, what we are doing is not particularly inclusive.

### WCAG Compliance

- A method must be provided to pause, stop, or hide any media content that begins playing automatically and which lasts 5 seconds or more.
- All content and features within parallax scrolling content must be accessible by keyboard.
- The contrast of the text against all parts of a moving background must be a minimum of 4.5 to 1 for small text or 3 to 1 for large or bold text.
- A page must not contain content that flashes more than 3 times per second unless that flashing content is sufficiently small, the flashes are of low contrast, and do not violate general flash thresholds.

More information, and additional considerations, are documented on the [Animation, Motion, and Timed Content](https://dequeuniversity.com/checklists/web/animation-motion-timed) Deque University page.
