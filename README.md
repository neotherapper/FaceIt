#AngularJS Modular Demo
Demonstrates Angular modularity, testing, Gulp task automation, and more.

## Structure
	/bower_components
	/build 	(created on the fly)
	/e2e
	/gulp
	/node_modules
	/src
		/app
			/components
				/data
				/product
				/product_photo
			/product
			index.scss
			index.config.js
			index.constants.js
			index.module.ks
			index.run.js
		/assets
			/images
		index.html

## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) and type `choco install nodejs`
- On OSX you can alleviate the need to run as sudo by [following these instructions](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md). I highly recommend this step on OSX
- Open terminal
- Type `npm install -g bower gulp`

## Installing Node.js and Bower Packages
- Open terminal
- Type `npm install`

## Installing Bower Packages
`npm install` will install these too, but you can do it manually.
- Open terminal
- Type `bower install`

## Running
Runs locally, no database required.

## Gulp Tasks
- gulp to build an optimized version of your application in folder dist
- gulp serve to start BrowserSync server on your source files with live reload
- gulp serve:dist to start BrowserSync server on your optimized application without live reload
- gulp test` to run your unit tests with Karma
- gulp test:auto` to run your unit tests with Karma in watch mode
- gulp protractor` to launch your e2e tests with Protractor
- gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

## Included
- Page objects

**Why?**
  * They encapsulate information about the elements on the page under test
  * Can be reused across multiple tests
  * Decouple the test logic from implementation details

- Unit Tests with Jasmine
 *handling promises

- 2 directives
 * Product --> handles a single product view and logic
 * product photo --> handles photo (case photo is missing)

- App structure based on component
 * Every component has it's own js html scss and tests under same folder.

- Not persisting data
 * App takes dummy data from data service and just stores edits deletes product data on a different service.
 * Above means that on page refresh the app resets to Initial State.
 * Normally we either use locageStorage or REST for CRUD operations.

- Use of Toastr
 * just for user feedback.
 * Normally we handle user feedback with nice message (similar to toastr approach)
 * Normally using toastr only on dev enviroment so we can have visual feedback for testing purposes.

- Use of typings
 * isn't always nice to have intelisense with your code?

- JSHint

- e2e testing happens on both chrome and firefox

## Todo

- Use of Bard at testing environment
 * creates cleaner code

- Add gulp serve:test to serve a test page that shows all tests.

- Switch Mocha, chai, chai as promised, sinon
 * not having experience with jasmine
 * creates cleaner code (especially chai as promised)

- Adding universal helpers
 * error handlers
 * route handlers
 * logger handler

- Adding a core folder that will have:
 * 404.html
 * config file
 * constants

- Revisit gulp to use webpack and add own style instead of angular-gulp generator's
