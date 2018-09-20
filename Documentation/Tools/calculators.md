---
title: Calculators
description: In the dev environments, you sometimes need some support for calculations.
author: Vidar A. Westrum
keywords: styles, design, css
weight: 21
---

# Calculators <small>(calculators.scss)</small>

```css
@function calculateRem($size, $base-size:16px) {
  $remSize: $size / $base-size;
  @return #{$remSize}rem;
}
```
