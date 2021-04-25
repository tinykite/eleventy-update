---
title: "Quick Tips: How To Make Looping Animations More Accessible"
date: "2021-04-21"
description: "A guide to inclusive design considerations for auto-playing or infinitely looping animations"
---

I've often felt that one of the biggest barriers to adopting accessibility best practices — especially for animation — is that it isn't always super clear where they can be easily referenced. Quick, actionable tips tend to be included in the context of longer reads: in resources like _Animation at Work_ by Rachel Nabors, or wedged into the seemingly often confusing legalese of WCAG guidelines.

For me personally, I've also realized that even if I make it through a hyper-confusing and terse aspect of the WCAG specification, I don't always feel like I understand how to apply what I've read to a more broadly inclusive context that benefits multiple groups of individuals.

It's helpful, of course to understand how to incorporate flashing into a website in a way that might not affect someone with photosensitive epilepsy. But one of the biggest storytelling opportunities in conversations about inclusiveness for me is that flashing on a website might also impact a much wider group of individuals than one specific condition — and that a recommendation that's helpful in that single circumstance might still affect others.

That includes individuals with ADHD, those with undiagnosed vestibular disorders, and individuals who have recently experienced physical or emotional trauma (such as a concussion, head trauma, or complex PTSD). It also includes me, a human who loves animation but recently came to terms with what it's like to experience all three of those things simultaneously.

So I'm hoping to learn in public by documenting quick, actionable accessibility tips and why they are relevant, starting with how to improve a looping animation on a website with the addition of visible animation controls.

## Background

Using animation or background video on a website is a common technique for directing a user's attention to a particular portion of the page; establishing the "voice" or narrative tone of a particular brand or organization; or in the context of learning materials and data visualization, sometimes used to help individuals better understand a concept.

There are plenty of examples of why this is a useful technique that doesn't necessarily have to be avoided. But how do you make it accessible?

WCAG guidelines recommend including an easily visible play/pause button for manually stopping web animations or video if either would continuously play for longer than 5 seconds. Or in other words, if you design a 1-second animation, but it plays indefinitely, that's definitely a situation that's relevant in this instance!

## Why It Matters

Seeing sudden movement on a page, especially in the periphery, can cause a variety of uncomfortable symptoms that range from distraction to dizziness and nausea. For an individual with a TBI or for someone who frequently suffers from vertigo, that might make it difficult for them to focus or be able to work on other things for the rest of the day.

And from personal experience, it can absolutely make animation-intensive web development learning resources pretty painful and uncomfortable to understand. If you're planning to use `setInterval` to create a flashing animation, for example, because there's a code concept that might be easier to understand if you demonstrate it with different random data, please include a play/pause button so that individuals can focus on your content first and then — when they've adequately prepared themselves for it and are directly looking at the animation portion — proceed to checking out a working, animated example of what you are writing about.

## Further Reading

[WCAG: Understanding Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)

[Accessible Web Animation: The WCAG on Animation Explained](https://css-tricks.com/accessible-web-animation-the-wcag-on-animation-explained/)

[Your Interaction Makes Me Sick](https://source.opennews.org/articles/motion-sick/)
