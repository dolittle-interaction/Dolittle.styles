---
title: Forms
description: Styling for form elements.
author: Vidar A. Westrum
keywords: styles, design, css
weight: 402
aliases:
    - /interaction/styles/elements/forms
---

# Forms <small>(forms.scss)</small>

Form styles are added directly on the different elements without any classes or modifications.
```scss
@import "forms.input";
@import "forms.buttons";
@import "forms.select";

$label-default-display: block !default;
$label-disabled-text-color: $color-white-40 !default;

label {
    display: $label-default-display;
    &.disabled{
        color: $label-disabled-text-color;
    }
}
```

{{% children %}}
