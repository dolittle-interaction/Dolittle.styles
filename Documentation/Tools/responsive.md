---
title: Responsive
description: These are the mixins for media queries
author: Vidar A. Westrum
keywords: styles, design, css
weight: 22
---

# Responsive <small>(responsive.scss)</small>

**These are the mixins for media queries**

## Usage

```css
@include media-bp-min(tablet) {
    ...
}
```

## Mixins

```css
@mixin media-bp-min($bp-key, $or_this...) {
    $break-point: map-get(
            $map: $grid-breakpoints,
            $key: $bp-key
        ) + 0.0625rem;
    $media_query: '(min-width: #{$break-point})';
    @if (length($or_this) >0) {
        @for $i from 1 through length($or_this) {
            $extra: nth($or_this, $i);
            $media_query: '#{$media_query}, (#{$extra})';
        }
    }
    @media #{$media_query} {
        @content;
    }
}

@mixin media-bp-max($bp_key, $or_this...) {
    $max-break: breakpoint-next($bp_key);
    $break_point: map-get(
        $map: $grid_breakpoints,
        $key: $max-break
    );
    $media_query: '(max-width: #{$break-point})';
    @if (length($or_this) >0) {
        @for $i from 1 through length($or_this) {
            $extra: nth($or_this, $i);
            $media_query: '#{$media_query}, (#{$extra})';
        }
    }
    @media #{$media_query} {
        @content;
    }
}

@mixin media-bp-only($bp-key) {
    $break-point-min: map-get(
            $map: $grid-breakpoints,
            $key: $bp-key
        ) + 0.0625rem;
    $break-point-max: map-get(
        $map: $grid-breakpoints,
        $key: breakpoint-next($bp-key)
    );
    @media (min-width: $break-point-min) and (max-width: $break-point-max) {
        @content;
    }
}

@mixin media-breakpoint-between($lower, $upper) {
    $break-point-min: map-get(
        $map: $grid-breakpoints,
        $key: $lower
    );
    $break-point-max: map-get(
            $map: $grid-breakpoints,
            $key: breakpoint-next($upper)
        ) - 0.0625rem;
    @if $break-point-max {
        @media (min-width: $break-point-min) and (max-width: $break-point-max) {
            @content;
        }
    } @else {
        @media (min-width: $break-point-min) {
            @content;
        }
    }
}

@function breakpoint-next($bp-key) {
    $breakpoint-names: map-keys($grid-breakpoints);
    $n: index($breakpoint-names, $bp-key);
    @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);
}
```
