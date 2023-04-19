---
title: The Happy Path Towards Responsive HTML Email
---

Responsive HTML email design is not my forte. Neither are the nuances of email deliverability. And they're probably not yours, either. In every past situation I've been in where I've needed to update an email, I've just tried to tread as lightly as possible on a table-laden mess of html — test it as best I can — and then hope everything works out fine.

But it turns out you don't have to do that anymore. Not because rendering emails without big goofs in certain email providers has improved all that much. (It hasn't. Sorry.) But because there are great tools out there that will handle the hard parts for you.

## Pain-free alternatives to legacy email templates

In late 2022, Chris Coyier decided to dust off some of the old Mailchimp [email templates](https://github.com/mailchimp/email-blueprints) and see if he could fine-tune them to work for the Codepen Spark newsletter. The result was... ultimately not what he wanted to hold onto. As he recounts, it was "finicky as hell" and,

"After poking around at it for weeks trying to get it into really solid shape, I ultimately decided all this was just way too much technical debt to take on. The complication was too high, I would be the only one who really understood what mattered in this massive awkward template, and maintaining it would be too much to ask."

_From [Putting a Point on Outlook Sucking (and MJML Ruling)](https://chriscoyier.net/2022/10/06/putting-a-point-on-outlook-sucking-and-mjml-ruling/)_

No-one wants to be responsible for maintaining hundreds of hard-to-parse lines of code with no real organization schema. And no-one wants to have to think about table semantics all day, either: which is a herculean feat that I learned from Coyier still exists because there's a flavor of Outlook out in the wild that renders html emails using Microsoft Word. Which sucks.

But there is hope for an alternative. And it begins with a markup language called MJML. Built to "reduce the pain of coding a responsive email," it allows you to make use of straightforward, declarative components like this:

```
<mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
```

Chris Coyier and Josh W Comeau have both voiced their support for this approach, and shared their own helpful tips and tricks. For example,

- There is more than one MJML plugin for VS code. In a [September 2022 tweet](https://twitter.com/chriscoyier/status/1572644485628305409?s=20), Coyier recommended folks use the [MJML (unofficial fork) VS Code plugin](https://marketplace.visualstudio.com/items?itemName=DanielKnights.vscode-mjml) — "not the official one which is pretty busted"
- For Comeau, MJML is just a piece (albeit an essential one) of a much more complex workflow. You can learn all about it in his deep dive ["My Wonderful HTML Email Workflow"](https://www.joshwcomeau.com/react/wonderful-emails-with-mjml-and-mdx/#composing-emails-with-mdx-6)

I was hesitant about taking the plunge into all this initially. Do we really need one more templating language? Is this potentially just hype that doesn't translate to large-scale projects? And how well will other large organizations support it in the future?

Let me break down each of these questions individually.

Yes, I think there's a lot of value in the developer experience MJML provides — and that it's worth considering for any project. Especially the ones that require a high degree of customization of email templates.

No, it's not just hype.

There are already large organizations that support it:

- When Netlify announced their release of [Netlify Email Integrations](https://docs.netlify.com/integrations/email-integration/#create-a-template-with-mjml), the feature already had MJML support built-in.
- Wix built a React implementation of MJML that now lives on with the support of online wholesale marketplace Faire. (Note: the updated npm package is called [@faire/mjml-react](https://www.npmjs.com/package/@faire/mjml-react) )
- Guillermo Rauch has voiced his support for my favorite way to work with MJML, a Next.js/Typescript library called [Mailing](https://www.mailing.run/) that's exciting enough for its own post altogether.

## Defensive email delivery

After successfully building out my first few email templates, I thought I was home free. I'd conquered the terrible mess that is html email. I made something beautiful. And everything was version controlled with git, in its own happy codebase.

But it turns out there is another weird, black-box-esque aspect of html email design. It's spam, and no matter how immune you feel your content is, it seems anti-spam algorithms are only too eager to jump out and ruin your afternoon. Or, at least that's what I thought. But it isn't inevitable.

After struggling through a period of cursed email delivery, I'm positive that it can be avoided — particularly if you treat email delivery as defensively as possible.

Before sending a single test email, make sure you complete the following steps:

- Add DKIM and a custom return path record to your domain. The exact details will depend on your specific ESP (email service provider).
- Set up DMARC monitoring, either through a [free](https://dmarc.postmarkapp.com/) or more full-featured, subscription-based service like [DMARC Digests](https://dmarcdigests.com/)
- Add a friendly from/reply adress that identifies the brand to readers. [Postmark recommends against a donotreply-style address](https://postmarkapp.com/blog/no-no-reply).
- Provide a plain-text alternative for all emails
- Run emails through SpamAssassin, either through a local installation or a third-party API that uses it like [SpamCheck](https://spamcheck.postmarkapp.com/)
- Add a physical address and an unsubsubscribe link to the footer of each email. Many email newsletters use this space to encourage subscribers to add a newsletter's send-from address to their address book, as well.

There are lots of other less-concrete considerations that can have a huge impact, too. So don't give up if you send an email with these things in place and it still gets flagged as spam.

Try removing one or more design elements from your html email — or sending a plain text-only email — and try again. And in general, it's important to:

- Be wary of including links to, or serving images from, third-party domains. That may cause your domain's reputation score to be aggregated with that of the third party domain's. And particularly if an image or link is served from a third-party url that contains a non-interrupted series of consonants (eg, aghjdlfyw.thirdpartycdn.com) the consequence of this might be that the email is marked as spam and even potentially malicious.
- Be mindful of the ratio of images to text in your email. An email doesn't have to have lots of images for it to negatively affect spam scores: it might be flagged simply because of a few social sharing icons.

Following this advice before sending out any test emails is important because the reputation of a domain is built up over time. So past missteps have the potential to flag all your future attempts. But if that happens, don't fret! You can definitely make ammends.

This may seem a bit silly, but in addition, if you're working on a project with other people, ask them to let you know if they spot any emails in their spam folder. If they do, it will also be important to mark those emails as safe (if they were marked as potentially malicious) and manually move them to the inbox.

By combining all of these aspects of email design and delivery together, you'll be well set up to work with html email in a much more enjoyable, maintainable way.

And one final note: don't be afraid to reach out to an ESP for help. They most likely have lots of unique email addresses you can use for testing, and helpful advice for aspects of emails that may seem innocuous but end up having a significant affect on the sending reputation of all your emails.

## Helpful Resources

- Postmark's web comic [Ruthy Redemption](https://postmarkapp.com/postmark-express/ruthy-redemption) outlines many common gotchas that doom emails to the spam folder
- Josh W Comeau's blog post [My Wonderful HTML Email Workflow](https://www.joshwcomeau.com/react/wonderful-emails-with-mjml-and-mdx/) provides a deep dive into how he writes newsletters using MDX and MJML
- Chris Coyier's blog post [Putting a Point on Outlook Sucking (and MJML Ruling)](https://chriscoyier.net/2022/10/06/putting-a-point-on-outlook-sucking-and-mjml-ruling/) is cathartic, to say the least, about the state of html email in 2022
- [Mailing](https://www.mailing.run/) is a Next.js/Typescript library that allows you to co-locate your email templates with your exisiting React application, deploy previews of each template, and even manage test sends — plus a variety of other tasks
