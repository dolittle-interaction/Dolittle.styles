---
title: Tables
description: This is the section to present the generic styles and how to use them.
author: Vidar A. Westrum
keywords: styles, design, css
weight: 401
---

# Tables <small>(tables.scss)</small>

## Variables for SCSS

```scss
$table-default-width:               100% !default;
$table-default-max-width:           100% !default;
$table-default-margin-top:          $grid-gutter !default;
$table-default-border-collapse:     collapse !default;
$table-head-row-border-bottom:      0.0625rem solid $color-gray-medium !default;
$table-head-cell-font-size:         1rem !default;
$table-head-cell-font-weight:       normal !default;
$table-head-cell-padding-bottom:    $grid-gutter/3 !default;
$table-head-cell-text-transform:    uppercase !default;
$table-bode-row-alternate-bg-color: darken($color-gray-lightest, 1%) !default;
$table-default-cell-padding:        $grid-gutter/8 $grid-gutter/2 !default;
$table-default-cell-text-align:     left !default;
$table-default-cell-border:         none !default;
```

## Example markup

```html
<table>
    <thead>
        <tr>
            <th>Table</th>
            <th>head</th>
            <th>cell</th>
            <th>style</th>
            <th>FTW</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
        </tr>
        <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
        </tr>
        <tr>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>34</td>
            <td>35</td>
        </tr>
    </tbody>
</table>
```