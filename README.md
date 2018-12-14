# any-vue

UI component library for Vue 2. Designed to be as universal as possible. Inspired by Semantic UI, VKUI, BEM, UIkit and other beautiful libraries.

The idea is to provide as many useful components as possible without forcing a single predefined appearance. Each component (and its parts) is given semantically correct CSS classes which can be used to configure how it looks.

Styling/theming is done on three levels:
1. System level (aka lower level). This level is intended for copying OS look and feel. Main examples are iOS and Android, but stylesheets can be made for desktop apps (macOS/Windows).
2. Brand/service level (aka base level). This level is for giving your service an individual appearance. If you are building your service for external brand (like VK), you can choose to use its own style.
3. Theme/user level (aka upper level). This level is for tweaking styles in accordance with user's preferences. For example, you can provide different color schemes or create a dark theme.

## Class naming conventions

All components automatically receive appropriate CSS classes so they can be styled from outside. Using scoped styles is discouraged. Actually, any styling within components themselves is not recommended because it prevents easy usage of system/service/theme stylesheets.

Class naming convention is based on BEM and more specifically on ABEM (Atomic BEM) as specified here: https://css-tricks.com/abem-useful-adaptation-bem/.

Each component has a class exactly same as its name (like "a-button" or "a-switch"). Its equivalent to block in BEM.

Any part of the component (an element) which needs to be styled has class name like "a-switch__caption".

Any component (or — in rare occasions — its part) can have a modifier. Usually it corresponds to its state and looks like this: "is-active", "is-disabled", "is-primary", "is-small". It does not contain block or element name, you should specify it only in stylesheet:

.a-button.is-primary {
  ...
}

Stylesheets are usually loaded selectively (no need to load a CSS file for Android look-and-feel if your user is running iOS), but to avoid accidential mixing, body tag receives classes corressponding to the current style:

.os-android/.os-ios/.os-mac/.os-win for system level
.base-vk for base level
.theme-dark/.theme-red/.theme-flat for theme level

There's also a "util-" prefix for some utility classes. Those usually are not very semantically correct, and should be avoided.

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
