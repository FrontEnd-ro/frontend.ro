# Contributing

First of all, **thanks for wanting to lend a helping hand** to this open-source initiative. The more we are the faster we'll lunch so any help counts ^^^

Secondly, for now you can contribute in 3 ways:

1. Coding for the platform
2. Writing HTML lessons
3. Writing HTML exercises together with their solutions

Regarding the first point have a look over the [issues tab](https://github.com/iampava/frontend.ro/issues) and see if you can find anything there you might one to implement. 

For points 2 & 3 get in touch with us via **social media** or **email** at [hello@frontend.ro](hello@frontend.ro).

<hr />

## Commit Messages

Every commit should be "tagged" in such a way that it's easy to scan through them:

1. `[FeatureName] Description` -> general commit when adding new features

2. `[BUGFIX][FeatureName] Description` -> fixing bugs

3. `[FIXUP][FeatureName] Description` -> when immediately after a merge we discovered some bugs related to that feature.

4. `[DOCS] Description` -> modifying README.md, CONTRIBUTORS.md or anything related to documentation

5. `[COSMETIC] Description` -> when commiting cosmetic fixes like indentation, eslint fixes, so on...

## FrontEnd Style Guide

As most guides, this one is opinionated. The goal is not to find the best patterns, we'll grow old and never agree on the answers. 

Instead we want to compromise on some good enough patterns so we increase productivity and keep everyone sane. 

<hr />

### [Redux] Action names

**Name actions using present tense***


```
users/ADD
users/UPDATE
users/REMOVE
```

*However , in case we have situations where multiple parts of the app are interested in the fetch start/end/error events of some resource, let's move this into the store and use past tense for the actions:

```
users/FETCH_STARTED
users/FETCH_SUCCEEDED
users/FETCH_FAILURE
```

<hr/>

### [Redux] Keep UI State as low as possible

Loading states for example. Let's not move them into the store unless multiple components need them.

Otherwise let's keep them in the local state of our components.

<hr/>

### Overall styling

We use a combination of CSS Modules and utility classes in the [TailwindCSS](https://tailwindcss.com/) naming format.

A combination of both allows us to declare complex styles for certain componenta, but also apply small, specialized modifications via utility classes.

The **TailwindCSS** naming format is important for keeping a community-level standard. This way, when new people join the project they can easily understand the class names and add new ones.

<hr />

Made with ❤ by the open source community!

[Email](hello@frontend.ro) |
[Twitter](https://twitter.com/FrontEndRo) | [Facebook](https://facebook.com/FrontEndRo)




