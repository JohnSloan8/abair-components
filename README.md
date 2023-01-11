<p align="center">
<a href="https://abair.ie/" target="_blank" rel="noreferrer">
 <img width="100px" src="./public/assets/abair-logo-old.png" title="Abair Website">
</a>
</p>

<p align="center">A Component Library for the <a href="abair.ie">Abair</a> project</p>

# Description

This repository contains a [Storybook](https://storybook.js.org/) implementation of the component library for the [Abair](https://abair.ie) project. [TSDX](https://tsdx.io/) is used to streamline the creation of a Typescript library which can be used as an npm package.

# Getting Started

[This](https://medium.com/fedbites/getting-started-with-tsdx-and-storybook-8b2b27e8d549) guide was used to start this project, and is a useful reference if you are new to TSDX.

Clone project from Github:

```bash
git clone https://github.com/JohnSloan8/abair-components.git
```

Install dependencies:

```bash
npm install #yarn install
```

Run TSDX:

```bash
npm start #yarn start
```

Open another terminal and run storybook:

```bash
npm run storybook #yarn run storybook
```

# Updating the package

The npm package is named: _abair-components_

You will need to contact the administrator of the abair-components repository to get acccess to update the npm package.

Then, after making changes, update the version number in _package.ts_ and run:

```bash
npm publish #yarn publish
```
