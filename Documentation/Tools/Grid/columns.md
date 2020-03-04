---
title: Columns
description: Placeholders for column setup
author: Vidar A. Westrum
keywords: styles, design, css
weight: 202
aliases:
    - /interaction/styles/tools/grid/columns
---

# Columns <small>(grid.columns.scss)</small>
To set columns, you can set to the columns container how many columns you'd like:

## Placeholders

```css
%flex-two-columns {
    @extend %flex-container;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: nowrap;
    .column {
        flex: 1 1 auto;
        width: 50%;
    }
}

%flex-three-columns {
    @extend %flex-container;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: nowrap;
    .column {
        flex: 1 1 auto;
        width: 33.33%;
    }
}

%flex-four-columns {
    @extend %flex-container;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: nowrap;
    .column {
        flex: 1 1 auto;
        width: 25%;
    }
}
```

## Usage

```css
.code-example {
    @extend %flex-two-columns;
    border: .0625rem solid #ccc;
    margin-bottom: $grid-gutter;
    >div {
        padding: $grid-gutter/2;
    }
    .code {
        @extend %flex-container;
    }
}
```