---
title: Generic
description: The generic style layer is mostly just a file with styles from Normalize.css. Slightly modified. There are three variables that you can override.
author: Vidar A. Westrum
keywords: styles, design, css
weight: 30
---

# Generic

The generic style layer is mostly just a file with styles from Normalize.css. Slightly modified. There are three variables that you can override.

## Variables

```scss
$body-background-color:     $color-gray-lightest !default;
$body-background-image:     none !default;
$body-background-size:      unset !default;
$body-text-color:           $color-gray-lightest !default;
$background-body:           $body-background-color $body-background-image no-repeat !default;
```