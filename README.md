# Vue-Library-Template
## _Configured for all kinds of environments [prod, dev and local]_
## Features

- Built with typescript support
- Built with [vite.dev] (Next Generation Frontend Tooling)
- Exports types automatically as .d.ts files using [vite-plugin-dts]
- Configured with [vitest] for unit testing
- Test components by importing them into index.ts file and running the command  ```yarn run dev```
- No need to create seperate project to test the library

## Tech

Vue-Library-Template uses a number of open source packages to create a production ready vue library:

- [Typescript] - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Vue.js] - An approachable, performant and versatile framework for building web user interfaces.
- [vite.dev] - Next Generation Frontend Tooling
- [Eslint] - ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.    
- [Prettier] - An opinionated code formatter
- [Husky] - Husky improves your commits and more 🐶 woof!
- And many other plugins

And of course Vue-Library-Template itself is open source with a [public repository][VLT] on GitHub.

## Installation
Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.
HTTPS:
```sh
git clone https://github.com/ssrbloginsoft/vue-library-template.git 
```
SSH:
```sh
git clone git@github.com:ssrbloginsoft/vue-library-template.git
```
#### _Install_
```sh 
npm i
or
yarn install
```
#### _Build_
```sh
yarn run build
```
#### _Test_
```sh
yarn run test:unit
```
#### _Development_
Run development server to test the component changes by importing it in ```App.vue```. No need to create another project to test the changes.
```sh
yarn run dev
```
For running linter:
```sh
yarn run lint
```
#### _Creating a component_
Create a new component in components folder with ```.vue``` extention and export the component in ```main.ts```:
```ts 
export { default as Image } from "@components/Image.vue";
```
By running the build command a dist folder will be generated

_Exporting types:_
```ts
export type { User } from "./types";
```




## License

MIT

**Free Software, Hell Yeah!**

   [VLT]: <https://github.com/ssrbloginsoft/vue-library-template>
   [vite.dev]: <https://github.com/joemccann/dillinger>
   [vite-plugin-dts]: <https://github.com/qmhc/vite-plugin-dts>
   [vitest]: <https://vitest.dev/>
   [Vue.js]: <https://vuejs.org/>
   [Eslint]: <https://eslint.org/>
   [Prettier]: <https://prettier.io/>
   [Typescript]: <https://www.typescriptlang.org/>
   [Husky]: <https://www.npmjs.com/package/husky>
   
