---
title: Grid
description: The grid is a bit unlike the ones you are used to in other big frameworks. Since this is aiming for creating as less style as possible and only ouput the styles you actually uses.
author: Vidar A. Westrum
keywords: styles, design, css
weight: 200
aliases:
    - /interaction/styles/tools/grid
---

# Grid <small>(grid.scss)</small>

The grid is a bit unlike the ones you are used to in other big frameworks. Since this is aiming for creating as less style as possible and only ouput the styles you actually uses.

So instead of outputing 100ish lines of predefined column sets and different grid tools that you never use, this grid is a set of placeholders. What you'll do is that you write your styles and semantically give your elements class names, and in the scss, you extend placeholders that fits your needs. Examåles will follow. [You can read more about placeholders and extend here](http://thesassway.com/intermediate/understanding-placeholder-selectors).

```css
@import 'grid.containers';
@import 'grid.columns';
@import 'grid.fixedwidths';
```


{{% children  %}}
