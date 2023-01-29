---
title: "Web Accessibility Fundamentals"
date: "2022-07-26"
description: "A short primer on how to incorporate inclusive thinking into your web development practice."
---

_Note: this was originally written for the [Postlight](https://postlight.com/) engineering knowledge base._

Learning about accessibility (often abbreviated to just a11y) is an incremental process. It takes time and intentional practice to cultivate an inclusive mindset towards web development — and more effort to understand how to incorporate that mindset into the development of common UI design patterns.

A very common pain point for anyone who wants to learn more about web accessibility is that the most well-known, authoritative source on accessibility compliance — [WCAG](https://www.w3.org/WAI/WCAG21/quickref/) — is not easily readable. Each of its individual requirements read like boilerplate legal jargon.

The guidelines are (of course) meaningful. And for the purpose of establishing a shared accessibility standard, a good goal for projects is to meet (or exceed) [WCAG 2.1 AA success criteria](https://www.w3.org/TR/WCAG21/).

But please don't feel you need to read every single page of WCAG in one go. The following guidelines are intended to feel like a more readable, more supportive starting point.

_Human-readable information on WCAG and what AA success criteria entails can also be found in the [Web Content Accessibility Guidelines provided by WebAIM](https://webaim.org/standards/wcag/)._

## How to Get Started

### Use HTML Elements Whenever Possible

The easiest way to establish a baseline of accessibility for a website or web application is to familiarize yourself with semantic html elements, which will always provide the best experience to disabled and even non-disabled users.

Some specific best practices include using `tables` for organizing tabular data instead of `divs`; using list elements (`ul` and `li`) for navigation; and using a native `select` element — which can be heavily customized — instead of a `listbox` or a third-party dropdown like `React-select`.

The MDN Web Docs provide [a reference page for all HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) as well as in-depth guides on each individual element.

If you aren't entirely sure what markup might be appropriate for a particular design situation, websites such as [CSS Tricks](https://css-tricks.com/), [Smashing Magazine](https://www.smashingmagazine.com/), and the personal blogs of accessibility advocates — especially [Adrian Roselli](https://adrianroselli.com/)— can be particularly helpful resources.

### Use ARIA Attributes Only When Necessary

ARIA (or Accessible Rich Internet Applications) is a collection of attributes that allow developers to convey additional information to individuals using assistive technology.

This is particularly useful in situations where the semantic value of an html element might not be enough to enable someone to make an informed decision. For example, when a `button` that says "Menu" doesn't allow someone to understand if the menu is already opened or closed.

Other situations where ARIA attributes can be profoundly helpful include: modals, complex tabbed interfaces, and error messaging.

When considering whether or not to use ARIA, please keep in mind that:

- ARIA doesn't replace or add any new functionality to existing html elements. Its main role is to provide additional descriptive information. (Note: it can also be used to hide decorative elements!)
- There are situations where lots and lots of additional, descriptive information may hinder, rather than help someone.
- The phenomenon of ARIA decreasing, rather than improving, usability is especially true in situations where a non-semantic element (such as a div) is being used in place of a more menaingful element, such as a `button`.
- Support for various aspects of ARIA can vary between browsers, and there can be bugs in certain implementations of it.

No ARIA is better than bad ARIA: so it's always a wise decision to err on using it sparingly, in situations where you feel confident you understand why adding ARIA attributes is necessary.
Deque provides additional considerations on ARIA in their guide, [ARIA Spec for the Uninitiated](https://www.deque.com/blog/aria-spec-for-the-uninitiated-part-1/).

Not all ARIA attributes are equally supported by browsers or recommended by accessibility experts. You can learn more about how well-supported different ARIA attributes are in different forms of accessibility technology on the [Acessibility Support website](https://a11ysupport.io/).

### Learn to Use A Screenreader

Apple's screenreader software, Voiceover, is pre-installed on all Mac OS and on iOS devices and can be used to manually test how a website will be interpreted by blind and low-vision users.

If you are using a Mac keyboard with a Touch Bar, you can toggle Voiceover by pressing Touch ID three times while holding the `Command` key. If you are using a more conventional keyboard, you can also toggle it by pressing `Command + F5`.

While using Voiceover, keep in mind that rather than navigating pages one html element at a time, many screenreader users navigate websites by quickly scanning multiple navigational elements (including headings, links, and other interactive elements). This is part of why it's so important for html elements to provide useful, comprehensive information.

You can jump between navigational elements with Voiceover's rotor, which groups together similar navigational elements together into lists and can be activated by hitting `Control + Option + U`.

The a11y project provides additional information and resources for how to navigate websites in their guide, "[Getting Started with Voiceover](https://www.a11yproject.com/posts/getting-started-with-voiceover/)."

### Add Automated A11y Tests To Your Project

There are many ways in which you can integrate automated accessibility testing into Postlight projects.

**Jest-axe**
If you are already using Jest (a testing framework that is frequently used with React) you are already well-positioned to take advantage of an open-source library called Jest-axe.

[Jest-axe](https://github.com/nickcolley/jest-axe) is an open-source library that extends Jest with custom matchers provided by Deque's `axe-core` automated accessibility engine. Or put more simply, it makes it easier for Jest to catch accessibility issues. It also seamlessly integrates with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [Enzyme](https://enzymejs.github.io/enzyme/), and provides its own types, for Typescript integration.

Since release, the library has been featured in the [Kent C. Dobbs "Testing Javascript" course](https://testingjavascript.com/) as well as a [short talk at Australia's accessibility conference, A11y Camp](https://www.youtube.com/watch?v=GpNAfvhadIo), which includes many helpful tips for getting the most out of the library.

If you are not using Jest, the [axe-core](https://github.com/dequelabs/axe-core) accessibility suite that Jest-axe is built on top of can be used on its own (although you will have to develop your own way to assert errors that come up as a result of a failed accessibility test).

Please note: Adding automated accessibility testing is estimated to catch only roughly [30% of a11y issues](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage). Why 30 percent? The a11y collective has more answers, in ["How reliable is automated accessibility testing"?](https://www.a11y-collective.com/automated-accessibility-testing-a-few-scenarios/)

**The axe Accessibility Linter extension for Vscode**
The [axe accessibility linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) is a free browser extension which checks code as you write it.

**Storybook's a11y Addon**
The Storybook team maintains a first-party addon, [storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y) that will display a11y warnings for individual states of each variant of a story.

**Browser Tools**
[The Accessibility Engine](https://www.deque.com/products/axe/) or aXe, is an accessibility browser extension built on top of the same axe-core library that powers Jest-axe.

[Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en), built by Google, includes accessibility warnings among other issues in its automated page audits. More information on the subset of accessibility issues that it tests for are detailed in the [documentation](https://web.dev/lighthouse-accessibility/).

[The WAVE Browser Extension](https://wave.webaim.org/extension/) is an additional option maintained by Utah State University.

## Follow Accessibility Advocates

This is a very small list of people, that will (and should) grow over time!

- [Marcy Sutton](https://marcysutton.com/), who leads the [Testing Accessibility course](https://testingaccessibility.com/)
- [Sara Soueidan](https://www.sarasoueidan.com/), who leads the [Practical Accessibility course](https://practical-accessibility.today/)
- [Scott O'Hara](https://www.scottohara.me/)
- [Adrian Roselli](https://adrianroselli.com/)
- [Derek Featherstone](http://simplyaccessible.com/article/author/feather/)
- [Liz Jackson](https://linktr.ee/eejackson)
- [Eric Bailey](https://ericwbailey.design/)

## Read online accessibility resources

- [The A11Y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Intopia's Accessibility Not Checklist](https://www.w3.org/WAI/ARIA/apg/)
- [Deque University's](https://dequeuniversity.com/rules/axe/html/4.6) detailed explanations of specific WCAG accessibility rules + additional industry accepted practices that improve the user experience.

## Explore Accessibility-Oriented UI Libraries

- Adobe's [React-Aria](https://react-spectrum.adobe.com/react-aria/) library focuses on providing React Hooks as UI primitives for developing accessible design systems
- The [Reach UI library](https://reach.tech/), maintained by the React Training team focuses on providing reusable React components
