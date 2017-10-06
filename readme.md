# Template
This is a simple little project to demonstrate how to use Nunjucks and Nodejs to have a local build process so you don't need to modify the same HTML over and over. And all without any server side scripting.

## Dependencies
### Required
* [NodeJS](https://nodejs.org/en/) - Make sure you get the LTS version
### Recommended
* [VS Code](https://code.visualstudio.com/) - Amazing text editor suite

## Setup
There are 2 setup files included. It needs to be broken out because for some reason NPM doesn't like doing two things at once.

Make sure you run `setup.bat`, then `setup2.bat`.

## Usage
Building is as simple as running `build.bat`. If you take a look at this file, you'll notice it simply calls `gulp`. Gulp is the build runner that this tool uses.

Making templates is a little harder, but you can see a simple layout already included. Any `.html` files placed in the `src/html` folder will be built and placed in the `dist` folder ready for uploading to your server.

I would recommend reading up on [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for details on how to construct effective templates.