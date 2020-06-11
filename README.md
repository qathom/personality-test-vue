# personality-test-vue

> T-SoftwEng - Hartman Personality Profile test with 4 colors in Vue

![Run tests and deploy to github pages](https://github.com/qathom/personality-test-vue/workflows/Run%20tests%20and%20deploy%20to%20github%20pages/badge.svg)

## Summary

What color are you? This [project](https://qathom.github.io/personality-test-vue/) helps people to discover their dominant personality color by taking a test.

* `vuex` is mainly managing the test progress and the user answers so that the app keeps some tracking if the user comes back to the "Test page".
* 2 pages have been created. The home page and the test page. `vue-router` has been used.
* For the visualisation part, the component based bootstrap library called `bootstrap-vue` and the `chart.js` library have been used.
* CI - A [Github action - testing workflow](https://github.com/qathom/personality-test-vue/blob/master/.github/workflows/dev-testing.yml) is running tests when new changes have been pushed on the branch: `dev`.
* CD - A [Github action - deploy workflow](https://github.com/qathom/personality-test-vue/blob/master/.github/workflows/gh-pages-deploy.yml) has been created to deploy the app on Github Pages (branch: `master`)
* Using stubs for `router-link` and `router-view` and expect statements for testing Vue components and profile test uniqueness (such as ID).
* Using `eslint` to make sure to keep code consistency.
* Using strong typing with TypeScript.
* The app can be dockerized by following the instructions in this README.

## Installation

```bash
# Vue CLI
npm install -g @vue/cli

# App dependencies
npm install
```

## Usage

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Release a version

From the dev branch, you can run `npm run release` to increment the package version, push the git tag and merge dev into master.
This will trigger the Github Action workflow that is managing the deployment of the app on Github Pages.

```
npm run release
```

### Build and run with Docker

```bash
# Build the app
docker build --tag personality-test-vue:latest .

# List images
docker images

# Run (note: docker container port is 8080)
docker run -d -p 8080:8080 IMAGE_TAG
```

## Notes

## Personality profile data

The description of each personality color and the questions are coming from the document [The Colours personality test written by Skills for Care](https://www.skillsforcare.org.uk/Documents/Leadership-and-management/well-led/Day-1-17/1.4.1-Colour-Personality-Test-FULL.pdf).