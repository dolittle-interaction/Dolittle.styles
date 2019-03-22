---
title: Button
description: Styling for button elements.
author: Vidar A. Westrum
keywords: styles, design, css, button
weight: 4003
---
# Button <small>(forms.button.scss)</small>

## Example markup
```html
<button disabled="true">Button</button>
<button disabled="true" class="call-to-action">Call to action</button>
<button disabled="true" class="alert">Alert</button>
```

## Variables for SCSS

```scss
$button-default-bg-color:           $color-white-20 !default;
$button-default-border:             none !default;
$button-default-outline-width:      0.0625rem;
$button-default-border-radius:      0 !default;
$button-default-font-size:          1rem !default;
$button-default-padding:            $grid-gutter/3 $grid-gutter !default;
$button-default-letter-spacing:     0.03125rem !default;
$button-default-text-color:         $color-gray-lightest !default;

$button-default-hover-outline:      $button-default-outline-width solid $color-white-40 !default;
$button-default-active-bg-color:    $color-white-40 !default;

$button-cta-bg-color:               rgba($color-brand-dark-blue, 0.5) !default;
$button-cta-hover-outline:          $button-default-outline-width solid $color-white-20 !default;

$button-alert-bg-color:             $color-brand-yellow !default;
$button-alert-color:                $color-gray-darkest !default;
$button-disabled-bg-color:          $button-default-bg-color !default;
$button-disabled-text-color:        $color-white-40 !default;
$button-active-outline:             none !default;
```