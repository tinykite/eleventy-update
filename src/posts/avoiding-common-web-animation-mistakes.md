---
title: Avoiding Common Web Animation Mistakes
description: A few things I wish I knew when I first started creative coding with css animation and svg elements.
tags: [css, svg, animation, design]
date: "2020-02-01"
---

I love experimenting with web animation. It doesn’t take much, or even any, boilerplate to get started (especially with tools like [Codepen](https://codepen.io/) and [CodeSandbox](https://codesandbox.io/)). And whenever I’m frustrated or overwhelmed by the looming complexity of web development, spending an afternoon drawing and animating abstract boxy things often reminds me of the childish excitement I had when I first began experimenting with code.

But there are other times — much more awkward times — when I throw around lots of big numbers I don’t understand, or just don’t feel very confident about what I’m doing. And then it feels like studying up for the once-a-year opportunity in which it’s possible to try to impress an accountant with my _fundamentally incorrect_ understanding of how capital gains tax works.

In hopes of making web animation a little less like that, I’ve decided to catalogue a few common mistakes.

## Accidentally merging paths

This typically happens when I create illustrations in Sketch or Illustrator and then accidentally go too far with svg optimization.

To optimize my files, I often use Jake Archibald’s open-source [SVGOMG](https://jakearchibald.github.io/svgomg/) (which serves as a visual interface for [svgo](https://github.com/svg/svgo)) — and generally love it. It provides a really convenient way to understand how individual optimization settings might affect the visual output of your illustration.

But one thing that I wish I knew sooner was that some optimization tools (including SVGOMG and [SVG2JX](https://svg2jsx.com/)) merge shapes into as a few nodes as possible by default — and that’s the last thing you want if your goals for an animation include some form of staggered or overlapping orchestration of multiple elements.

Thankfully, the fix for SVGOMG is uncomplicated. Make sure “merge paths” is not toggled in the right-hand sidebar of the UI. Then double-check the output of your code to verify that any optimized elements are still output in the quantity you expected.

## Not removing transforms

Some pretty flicker-inducing or otherwise funky things can happen if you try to animate an illustration with transforms embedded somewhere within its inline svg syntax.

If you’re familiar with CSS transforms, the syntax might look vaguely familiar:

    <polygon transform="translate(65.074074, 14.500000) rotate(-180.000000) translate(-65.074074, -14.500000)" points="65.0740741 0 91.1481481 29 39 29"></polygon>

Sketch and Illustrator commonly export shapes like this if they aren’t flattened. Which isn’t necessarily bad for static icons. But if unchanged, the above polygon will animate from its initial origin point, not the position it appears at.

You can avoid the funky mess in two ways, of varying simplicity:

- Duplicate an artboard containing the final illustration and flatten each of its shapes before export.
- Use Figma for image optimization. Its svg export option was built with human readability in mind, and will output as few bits of crufty code as possible. That includes removing transforms, and outputting simple shapes (such as rect and circle elements) whenever possible — instead of more cryptic paths. You can read more about it [on the Figma blog](https://www.figma.com/blog/with-figmas-new-svg-exports-less-more/).

## Adding unintentional horizontal scrolling

Superfluous horizontal scrollbars and the awkward additional space that accompanies them can pop up on otherwise-responsive websites for plenty of reasons. In the context of illustration and animation work, I’ve repeatedly caused accidental overflow in two ways:

Sometimes, just by adding an explicitly large inline svg (with a width of 1440px) to a webpage and forgetting to define CSS for how the image should scale at smaller sizes.

For less complex situations, this can usually be fixed by defining a global rule for all images that prevents them from busting out of the bounds defined by a parent container:

    img, svg {max-width: 100% }

_Note: this is a pretty nuanced topic. A more in-depth take on the issue is [the CSS Tricks guide to scaling svg](https://css-tricks.com/scale-svg/)._

Other times, the size of an svg is not the problem. Content overflow can also be caused by animating individual shapes to — or from — an off-canvas portion of the webpage. To make sure shapes stay hidden (and don’t unintentionally increase the width of your website), make sure to define the overflow property of the svg or a parent container.

    .generic-element { overflow: hidden }

## Adding unintentional layout thrashing

This isn’t much of a bug. It’s really a performance concern, and one that you’ll want to keep in mind when strategizing the overall vibe or narrative direction of a specific project.

Layout thrashing is a common side effect of introducing too many drastic changes to a website at once, or attempting to change the explicit computed size or position of an element.

If you’ve ever scrolled a website that suddenly became unresponsive at a certain point — or continued to scroll, but only with an uncomfortable level of jank — you’ve experienced layout thrashing. To avoid making it happening because of web animation, you’ll want to focus on animating the `opacity` and the `transform` properties of an svg or other html element exclusively.

There are caveats to this rule — most notably, the [`will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) property, which is intended to help browsers mitigate future performance costs. But keep in mind that `will change` is recommended by the MDN web docs only as a last resort, not necessarily a point of entry for creative coding.

To improve the performance impact further, you might also want to consider how many animations need to be introduced to a webpage at once. Does an animation need to loop indefinitely? Or should it only trigger once, when visible within the viewport?

That might be an ideal use case for introducing [Intersection Observer](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/).
