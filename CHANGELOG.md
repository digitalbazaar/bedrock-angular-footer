# bedrock-angular-footer ChangeLog

### Changed
- **BREAKING**: Switch to material design.

## 4.0.1 - 2017-06-07

### Fixed
- Remove unused legacy hr hack.

## 4.0.0 - 2017-05-30

### Changed
- **BREAKING**: Switch package manager from bower to npm.
- **BREAKING**: Replace requirejs/amd with ES6 import.
- Angular 1.6.x is required.

## 3.1.1 - 2017-05-17

### Fixed
- Add missing `ngRoute` dependency.

## 3.1.0 - 2017-03-02

### Changed
- Add support for bedrock-angular to work with footer v2 and v3.

## 3.0.0 - 2017-03-01

### Added
- Support disabling footer with route vars.

### Changed
- Update to component style.
- **BREAKING**: Added `<hr>` inside component to avoid duplication of display
  logic outside component.
- **BREAKING**: `footer.html` renamed to `footer-component.html`. Overrides
  will need to change this path.

## 2.0.0 - 2016-04-19

- See git history for changes.
