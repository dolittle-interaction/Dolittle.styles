---
title: Select
description: Styling for select elements.
author: Vidar A. Westrum
keywords: styles, design, css, select
weight: 4002
aliases:
    - /interaction/styles/elements/forms/select
---
# Select <small>(forms.select.scss)</small>

## Example markup
```html
<label for="pet-select">Choose a pet:</label>
<select id="pet-select">
    <option value="">Please choose an option</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
<label for="meal-select" class="disabled">Choose a meal</label>
<select id="meal-select" disabled="disabled">
    <option value="">Breakfast</option>
</select>

<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
    <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>
```

## Variables for SCSS

```scss
$select-default-border-width:   0.0625rem !default;
$select-default-border-style:   solid !default;
$select-default-border-color:   $color-white-40 !default;
$select-default-border:         $select-default-border-width $select-default-border-style $select-default-border-color !default;
$select-default-bg-color:       $color-black-40 !default;
$select-default-bg-image:       url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgNi4wOTc2NkwxMS4zNjEzIDAuNzM2MzI4TDExLjg4ODcgMS4yNjM2N0w2IDcuMTUyMzRMMC4xMTEzMjggMS4yNjM2N0wwLjYzODY3MiAwLjczNjMyOEw2IDYuMDk3NjZaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjgiLz48L3N2Zz4=) !default;
$select-default-border-radius:  0 !default;
$select-default-display:        block !default;
$select-default-font-size:      1rem !default;
$select-default-font-weight:    400 !default;
$select-default-margin:         $grid-gutter/3 0 !default;
$select-default-width:          18.75rem !default;
$select-default-padding:        0.5rem 1rem !default;
$select-default-max-width:      100% !default;
$select-default-text-color:     $color-white-60 !default;

$select-hover-bg-color:         $color-black-60 !default;
$select-hover-bg-image:         url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDUuMzYxMzNMMTEuMzYxMyAwTDExLjg4ODcgMC41MjczNDRMNiA2LjQxNjAyTDAuMTExMzI4IDAuNTI3MzQ0TDAuNjM4NjcyIDBMNiA1LjM2MTMzWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=) !default;
$select-hover-border-color:     $color-white-60 !default;
$select-hover-text-color:       $color-white-solid !default;

$select-focus-bg-color:         $color-white-20 !default;
$select-focus-border-color:     $color-white-40 !default;
$select-focus-text-color:       $color-white-80 !default;

$select-active-bg-color:        $color-white-20 !default;
$select-active-border-color:    $color-white-40 !default;
$select-active-text-color:      $color-white-80 !default;

$select-disabled-bg-color:      $color-white-20 !default;
$select-disabled-bg-image:      url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDYuMDk3NjZMMTEuMzYxMyAwLjczNjMyOEwxMS44ODg3IDEuMjYzNjdMNiA3LjE1MjM0TDAuMTExMzI4IDEuMjYzNjdMMC42Mzg2NzIgMC43MzYzMjhMNiA2LjA5NzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+) !default;
$select-disabled-text-color:    $color-white-40 !default;
$select-disabled-border-color:  $color-white-20 !default;

$optgroup-bg-color:             $color-gray-darkest !default;
$optgroup-text-color:           $select-default-text-color !default;

$option-bg-color:               $color-gray-darkest !default;
$option-text-color:             $select-default-text-color !default;
```