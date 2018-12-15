# any-vue

UI component library for Vue 2. Designed to be as universal as possible. Inspired by Semantic UI, VKUI, BEM, UIkit and other beautiful libraries.

The idea is to provide as many useful components as possible without forcing a single predefined appearance. Each component (and its parts) is given semantically correct CSS classes which can be used to configure how it looks.

Styling/theming is done on three levels:
1. **System level** (aka lower level). This level is intended for copying OS look and feel. Main examples are iOS and Android, but stylesheets can be made for desktop apps (macOS/Windows).
2. **Brand/service level** (aka base level). This level is for giving your service an individual appearance. If you are building your service for external brand (like VK), you can choose to use its own style.
3. **Theme/user level** (aka upper level). This level is for tweaking styles in accordance with user's preferences. For example, you can provide different color schemes or create a dark theme.

## Class naming conventions

All components automatically receive appropriate CSS classes so they can be styled from outside. Using scoped styles is discouraged. Actually, any styling within components themselves is not recommended because it prevents easy usage of system/service/theme stylesheets.

Class naming convention is based on BEM and more specifically on ABEM (Atomic BEM) as specified here: https://css-tricks.com/abem-useful-adaptation-bem/.

Each component has a class exactly same as its name (like "a-button" or "a-switch"). Its equivalent to block in BEM.

Any part of the component (an element) which needs to be styled has class name like "a-switch__caption".

Any component (or — in rare occasions — its part) can have a modifier. Usually it corresponds to its state and looks like this: "is-active", "is-disabled", "is-primary", "is-small". It does not contain block or element name, you should specify it only in stylesheet:

```css
.a-button.is-primary {
  ...
}
```

Stylesheets are usually loaded selectively (no need to load a CSS file for Android look-and-feel if your user is running iOS), but to avoid accidential mixing, body tag receives classes corressponding to the current style:

`.os-android`/`.os-ios`/`.os-mac`/`.os-win` for system level

`.base-vk` for base level

`.theme-dark`/`.theme-red`/`.theme-flat` for theme level

There's also a "util-" prefix for some utility classes. Those usually are not very semantically correct, and should be avoided.

## Components roadmap

<table>
  <tr>
    <th></th>
    <th>Description</th>
    <th width="100">iOS</th>
    <th width="100">Android</th>
  </tr>
  <tr>
    <th align="left" colspan="4">Basic</th>
  </tr>
  <tr>
    <td><nobr>any-vue</nobr></td>
    <td>App wrapper. Required for overlay elements (alerts, action sheets…)</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <th align="left" colspan="4">Form Controls</th>
  </tr>
  <tr>
    <td><nobr>a-form</nobr></td>
    <td>Form container (helps to organize controls within, but not required).</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-button</nobr></td>
    <td>Button.</td>
    <td align="center">✅</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-switch</nobr></td>
    <td>Two-positional switch (works like a checkbox).</td>
    <td align="center">✅</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-spinner</nobr></td>
    <td>Spinning circle to indicate some loading is in progress.</td>
    <td align="center">✅</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-dropdown</nobr></td>
    <td>A control to select values from the dropdown menu.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <th align="left" colspan="4">Inputs</th>
  </tr>
  <tr>
    <td><nobr>a-text-input</nobr></td>
    <td>Simple text input.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <th align="left" colspan="4">Bars</th>
  </tr>
  <tr>
    <td><nobr>a-progress-bar</nobr></td>
    <td>Linear progress indicator. Can be in the indeterminate state.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-slider-bar</nobr></td>
    <td>Horizontal slider to select a single numerical value.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-range-bar</nobr></td>
    <td>Horizontal slider to select a numerical range.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-nav-bar</nobr></td>
    <td>Navigation bar usually located at the top of the page.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <td><nobr>a-tab-bar</nobr></td>
    <td>A collection of tabs to switch between pages of content.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <th align="left" colspan="4">Pickers</th>
  </tr>
  <tr>
    <th align="left" colspan="4">Complex</th>
  </tr>
  <tr>
    <td><nobr>a-list</nobr></td>
    <td>List of selectable items.</td>
    <td align="center">▢</td>
    <td align="center">▢</td>
  </tr>
  <tr>
    <th align="left" colspan="4">View Controllers</th>
  </tr>
</table>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```
