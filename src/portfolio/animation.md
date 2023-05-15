---
title: "Web Animation"
summary: "Miscellaneous experiments from past projects"
displayOrder: 3
featured: false
collection: true
image: "images/toast-recolored.png"
---

## 1. Scroll-Driven Coffee Animations

A side project I created, [Ultra Basic Coffee](https://www.ultrabasiccoffee.com/), includes several different scroll-driven animations that were built with [Framer Motion](https://www.framer.com/motion/), the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), and a whole bunch of whimsical coffee illustrations.

You can check out some selected animations from the website below, or read the [case study](/portfolio/ultra-basic-coffee/).

<div class="fluid-video-loom"><iframe src="https://www.loom.com/embed/cd8aa69f163f4c2f943880d3a954269d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

I thought it might be a bit silly and fun to have the plunger of this Aeropress move up and down based off of scroll direction.

<div class="fluid-video-loom"><iframe src="https://www.loom.com/embed/87b4900678f84a54878c756ae7319cf2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

For the Kalita Wave section, I applied a skew transform to the header (which remains selectable / screen-reader accessible text).

<div class="fluid-video-loom"><iframe src="https://www.loom.com/embed/6e2b8c266ef54283a97ba3da3d4d5e1c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

The French Press features a scroll-driven animation that affects both the French Press plunger and the text itself.

## 2. Randomized Air Bubbles

For a marketing website for [A Modern Eden](https://amoderneden.netlify.app/), I created a CSS-only animation using a [SCSS @for loop](http://thesassway.com/intermediate/if-for-each-while#for) and the [SCSS Random() function](https://blog.codepen.io/2013/08/26/random-function-in-sass/).

<div class="fluid-video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5JPAlq2jhpw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

You can read the full [case study](/portfolio/a-modern-eden/) for more information or experiment with this animation on [Codepen](https://codepen.io/tinykite/pen/VRgqLz)

## 3. Skyline Animation with Cellular Automata

For a personal website for a Chicago-based software engineer (my brother), I created a [Greensock](https://greensock.com/) animation that uses a pre-seeded series of rules from Conway's Game of Life to light up a Chicago skyscraper.

I am somewhat embarassed by this illustration by now, but I'll always be fascinated by how cellular automata such as Game of Life and similar mathematical concepts can be incorporated into art and design.

<p class="codepen" data-height="559" data-theme-id="dark" data-default-tab="result" data-user="tinykite" data-slug-hash="bBwVLx" data-preview="true" style="height: 559px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 2em 0; padding: 2em;" data-pen-title="Chicago/Game of Life Experiment 1c">
  <span>See the Pen <a href="https://codepen.io/tinykite/pen/bBwVLx">
  Chicago/Game of Life Experiment 1c</a> by Dakota Sexton (<a href="https://codepen.io/tinykite">@tinykite</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
