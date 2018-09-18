---
title: Containers
description: When you need an element to be a flexbox element, vertical direction and aligned center
author: Vidar A. Westrum
keywords: styles, design, css
weight: 201
---

# Containers <small>(grid.containers.scss</small>

**When you need an element to be a flexbox element, vertical direction and aligned center**

## Placeholders

```css
%flex-container {
    display: flex;
    width: 100%;
    max-width: 100%;
}

%flex-container-horizontal {
    @extend %flex-container;
    flex-direction: row;
}

%flex-container-horizontal-center {
    @extend %flex-container-horizontal;
    justify-content: center;
}

%flex-container-vertical {
    @extend %flex-container;
    flex-direction: column;
}

%flex-container-vertical-center {
    @extend %flex-container-vertical;
    align-items: center;
}
```

## Usage

```css
main {
    @extend %flex-container-vertical-center;
}
```
