---
title: Fixed and Fluid widths
description: If you want a container to be 100% wide up to a certain point, you can extend one of the fixed width placeholders
author: Vidar A. Westrum
keywords: styles, design, css
weight: 203
aliases:
    - /interaction/styles/tools/grid/fixedwiths
---

# Fluid/Fixed <small>(grid.fixedwiths.scss)</small>

If you want a container to be 100% wide up to a certain point, you can extend one of the fixed width placeholders

## Placeholders

```css
%fixed-width-at-tablet {
    width: 100%;
    max-width: 100%;
    @include media-bp-min(tablet) {
        width: $tablet;
    }
}

%fixed-width-at-tablet-landscape {
    width: 100%;
    max-width: 100%;
    @include media-bp-min(tablet-landscape) {
        width: $tablet-landscape;
    }
}

%fixed-width-at-desktop {
    width: 100%;
    max-width: 100%;
    @include media-bp-min(desktop) {
        width: $desktop;
    }
}

%fixed-width-at-desktop-lg {
    width: 100%;
    max-width: 100%;
    @include media-bp-min(desktop-lg) {
        width: $desktop-lg;
    }
}

%fixed-width-at-desktop-xl {
    width: 100%;
    max-width: 100%;
    @include media-bp-min(desktop-xl) {
        width: $desktop-xl;
    }
}
```

## Usage

```css
.site-section {
    @extend     %fixed-width-at-desktop;
    padding:    $grid-gutter;
    margin:     $grid-gutter 0;
}
```
