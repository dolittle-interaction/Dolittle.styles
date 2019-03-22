---
title: Input
description: Styling for input elements.
author: Vidar A. Westrum
keywords: styles, design, css, input
weight: 4001
---

# Inputs <small>(forms.input.scss)</small>

## Example markup

```html
<label>This is a label for the below text field
    <input type="text" placeholder="Type of text">
</label>
<input type="text" placeholder="Type of text" disabled="true">
<input type="button" placeholder="Type of button" value="Button">
<input type="reset" placeholder="Type of reset">
<input type="submit" placeholder="Type of submit">
<input type="checkbox" placeholder="Type of checkbox">
<input type="color" placeholder="Type of color">
<input type="date" placeholder="Type of date">
<input type="datetime" placeholder="Type of datetime">
<input type="datetime-local" placeholder="Type of datetime-local">
<input type="email" placeholder="Type of email">
<input type="file" placeholder="Type of file">
<input type="image" placeholder="Type of image">
<input type="month" placeholder="Type of month">
<input type="number" placeholder="Type of number">
<input type="password" placeholder="Type of password">
<label>
    <input type="radio" name="styles">Styles 1</label>
<label>
    <input type="radio" name="styles">Styles 2</label>
<label>
    <input type="radio" name="styles">Styles 3</label>

<input type="range" placeholder="Type of range">
<input type="search" placeholder="Type of search">
<input type="tel" placeholder="Type of tel">
<input type="time" placeholder="Type of time">
<input type="url" placeholder="Type of url">
<input type="week" placeholder="Type of week">
```

## Variables for SCSS

```scss
$input-default-border-width: 0.0625rem !default;
$input-default-border-style: solid !default;
$input-default-border-color: $color-gray-dark !default;
$input-default-border: $input-default-border-width $input-default-border-style $input-default-border-color;
$input-default-border-radius: 0 !default;
$input-default-display: block !default;
$input-default-font-size: 1rem !default;
$input-default-font-weight: 400 !default;
$input-default-margin: $grid-gutter/3 0 !default;
$input-default-width: 18.75rem !default;
$input-default-padding: 0.75rem 1rem !default;
$input-default-max-width: 100% !default;
$input-default-text-color: $color-white-60 !default;
$input-default-placeholder-color: $color-white-40 !default;
$input-default-bg-color: $color-black-40 !default;

$input-hover-bg-color: $color-black-60 !default;
$input-hover-border-color: $color-white-solid !default;
$input-hover-text-color: $color-white-80 !default;

$input-focus-bg-color: $color-white-solid !default;
$input-focus-text-color: $color-black-80 !default;

$input-active-bg-color: $color-white-20 !default;
$input-active-border-color: $color-white-40 !default;
$input-active-text-color: $color-white-80 !default;

$input-disabled-bg-color: $color-black-20 !default;
$input-disabled-text-color: $color-black-40 !default;
$input-disabled-border-color: $color-gray-dark !default;
$input-disabled-placeholder-text-color: $color-black-40 !default;
```
