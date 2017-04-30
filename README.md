# React Redux Starter

This starter kit is a bare bones modification from [Create React App](https://github.com/facebookincubator/create-react-app). It is a simple Todo App, which is in a good model for me to branch off into other projects. While it is undeniably opinionated, I think it can serve as a good launching point for other devs as well.

## Key Packages (Mostly from Create React App)
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [reselect](https://github.com/reactjs/reselect)
* [Immutable](https://facebook.github.io/immutable-js/)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)

## Getting Started
```bash
$ git clone https://github.com/helw150/Seact-Redux-Starter.git <my-project-name>
$ cd <my-project-name>
$ npm i
$ npm start
```
## Tips
#### Developer Tools
The app is set up to use the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

#### Webpack Config
You will notice that despite this being created from Create React App, the script has been ejected. This is to enable modification right off the bat for each project, but also most importantly to allow my personal modification for absolute import paths. Absolute import paths allow future developers to restructure the code easily with Find and Replace, since files are always referred to in the same format.

#### File Structure
I have opted for a Fractal Pattern in this Todo App, as opposed to the standard flat pattern. Mentally, this allows me to think about new features within folders, as opposed to jumping between large global folders for Reducers, Actions, and Selectors. I believe this makes Redux make a little bit more sense for developers coming from React.

That being said, the [Webpack config](#webpack-config) make it easy to change that if you want.
