---
title: Base
description: Base level variables
author: Vidar A. Westrum
keywords: styles, design, css
weight: 11
---

# Base variables <small>(base.scss)</small>
```scss
@import "base.colors";
@import "base.layout";
```

## Layout <small>(breakpoints.scss)</small>

```scss
$phone:             0 !default;
$tablet:            37.5rem !default;   // 600px
$tablet-landscape:  56.25rem !default;  // 900px
$desktop:           64rem !default;     // 1024px
$desktop-lg:        85.375rem !default; // 1366px
$desktop-xl:        120rem !default;    // 1920px
$grid_breakpoints: (
                    phone: $phone,
                    tablet: $tablet,
                    tablet-landscape: $tablet-landscape,
                    desktop: $desktop,
                    desktop-lg: $desktop-lg,
                    desktop-xl: $desktop-xl
                   ) !default;

$grid-gutter:       1.5rem !default;


// The pixel values are calculated based on browser default size 16px
```

## Colors <small>(colors.scss)</small>

```scss
$color-gray-darkest:            #222222 !default;
$color-gray-dark:               #828282 !default;
$color-gray-medium:             #bdbdbd !default;
$color-gray-light:              #e0e0e0 !default;
$color-gray-lightest:           #f2f2f2 !default;

$color-black-20:                rgba(0, 0, 0, 0.4);
$color-black-40:                rgba(0, 0, 0, 0.4);
$color-black-60:                rgba(0, 0, 0, 0.6);
$color-black-80:                rgba(0, 0, 0, 0.8);
$color-white-20:                rgba(255, 255, 255, 0.2);
$color-white-40:                rgba(255, 255, 255, 0.4);
$color-white-60:                rgba(255, 255, 255, 0.6);
$color-white-80:                rgba(255, 255, 255, 0.8);
$color-white-solid:             rgba(255, 255, 255, 1);

$color-brand-orange:            #ff4b00 !default;
$color-brand-dark-blue:         #004366 !default;
$color-brand-light-blue:        #33b9e6 !default;
$color-brand-yellow:            #ffcf00 !default;
$color-brand-gray:              #525a63 !default;

$color-secondary-dark-green:    #219653 !default;
$color-secondary-light-greeen:  #6fcf97 !default;
$color-secondary-blue:          #0078D7 !default;
$color-secondary-purple:        #bb6bd9 !default;
$color-secondary-dark-red:      #a81414 !default;
$color-secondary-light-red:     #ec4c4c !default;
```
