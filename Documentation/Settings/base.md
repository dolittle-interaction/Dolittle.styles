---
title: Base
description: Base level variables
author: Vidar A. Westrum
keywords: styles, design, css
weight: 11
---

# Base variables <small>(base.scss)</small>
```scss
@import "breakpoints";
@import "colors";
```

## Breakpoints <small>(breakpoints.scss)</small>

```scss
$phone: 0 !default;
$tablet: 37.5rem !default;
$tablet-landscape: 56.25rem !default;
$desktop: 64rem !default;
$desktop-lg: 85.375rem !default;
$desktop-xl: 120rem !default;
$grid_breakpoints: (
    phone: $phone,
    tablet: $tablet,
    tablet-landscape: $tablet-landscape,
    desktop: $desktop,
    desktop-lg: $desktop-lg,
    desktop-xl: $desktop-xl
) !default;
```

## Colors <small>(colors.scss)</small>

```scss
$color-gray-darkest: #222222 !default;
$color-gray-dark: #828282 !default;
$color-gray-medium: #bdbdbd !default;
$color-gray-light: #e0e0e0 !default;
$color-gray-lightest: #f2f2f2 !default;
$color-brand-orange: #ff4b00 !default;
$color-brand-dark-blue: #004366 !default;
$color-brand-light-blue: #33b9e6 !default;
$color-brand-yellow: #ffcf00 !default;
$color-brand-gray: #525a63 !default;
$color-secondary-dark-green: #219653 !default;
$color-secondary-light-greeen: #6fcf97 !default;
$color-secondary-blue: #2d9cdb !default;
$color-secondary-purple: #bb6bd9 !default;
$color-secondary-dark-red: #a81414 !default;
$color-secondary-light-red: #ec4c4c !default;
```
