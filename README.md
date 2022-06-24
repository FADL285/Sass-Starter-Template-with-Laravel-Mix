# Sass-Starter-Template-with-Laravel-Mix

A blazing fast frontend development starter template, bundled using [Laravel Mix](https://laravel-mix.com/).

This template is configured to HTML, [Sass](https://sass-lang.com/), and JavaScript. you can also install [Vue](https://vuejs.org/) and use [Vue SFC](https://vuejs.org/api/sfc-spec.html#sfc-syntax-specification) ([preconfigured](https://laravel-mix.com/docs/6.0/vue) for this.)

---

# Sass Architecture Structure

```
scss/
|– abstracts/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass _mixins
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _fonts.scss       # Custom Fonts Initialization
|   |– _typography.scss  # Typography rules
|   |– _utilities.scss   # Custom Utilities
|   |– _animations.scss  # Animations Initialization
|
|– themes/
|   |– _theme.scss       # App Default Theme
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   ...                  # Etc…
|
|– layout/
|   |– _header.scss      # Header
|   |– _navigation.scss  # Navigation
|   |– _sidebar.scss     # Sidebar
|   |– _footer.scss      # Footer
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _about.scss       # About specific styles
|   ...                  # Etc…
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   ...                  # Etc…
|
|
`– main.scss            # Primary Sass file
```

# Project setup
```
npm install
```

### Compiles for development
```
npm run dev
```

### Compiles and watch for development
```
npm run watch
```

### Compiles and minifies for production
```
npm run prod
```

### Lints and fixes files
```
npm run lint:fix
```