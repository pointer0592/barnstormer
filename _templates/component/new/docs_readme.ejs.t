---
to: apps/docs/components/components/<%= name.replace('Bs', '').toLowerCase() %>.md
force: false
---
<%- '---' %>
layout: AtomLayout
hideBreadcrumbs: true
<%- '---' %>

<% DocsName = name.replace('Bs', '') %># <%= DocsName %> component

<Generate />

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|                       |                            |               |                                        |
B

## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
|           |                                   |

## Events

| Event name |            Trigger             |
| ---------- | ---------------------------- |
|            |                                |

## Accessibility notes


## Source code

::vue-only
<<<../../../packages/barnstormerui/frameworks/vue/components/<%= name %>/<%= name %>.vue
::
::react-only
<<<../../../packages/barnstormerui/frameworks/react/components/<%= name %>/<%= name %>.tsx
::
