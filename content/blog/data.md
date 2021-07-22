---
title:Installation
---
# Prerequisites:

* [Node](https://nodejs.org/en/) - We recommend you have the latest LTS version installed.
* A text editor, we recommend [VS Code](https://code.visualstudio.com/) with the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 
extension or [WebStorm](https://www.jetbrains.com/webstorm/)
* A terminal, we recommend using VS Code's [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) or [WebStorm terminal](https://www.jetbrains.com/help/webstorm/terminal-emulator.html).

## Using create-nuxt-app
### To get started quickly you can use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).
### Make sure you have npx installed (npx is shipped by default since npm 5.2.0) or npm v6.1 or yarn.
```
# Using Yarn
yarn create nuxt-app <project-name>
# Using  npx 
npx create-nuxt-app <project-name>
# Using  npm 
npm init nuxt-app <project-name>
```
###  It will ask you some questions (name, Nuxt options, UI framework, TypeScript, linter, testing framework, etc). To find out more about all the options see the
 [Create Nuxt app](https://github.com/nuxt/create-nuxt-app/blob/master/README.md).

### Once all questions are answered, it will install all the dependencies. The next step is to navigate to the project folder and launch it:

```
# Using Yarn
cd <project-name>
yarn dev
# Using npm
cd <project-name>
npm run dev
```
### The application is now running on http://localhost:3000. Well done!
