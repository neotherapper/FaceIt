#AngularJS Modular Demo
Demonstrates Angular modularity, testing, Gulp task automation, and more.

## Structure
	/build 	(created on the fly)
	/gulp
	/src
		/client
			/app
			/content
			/test
		/server
			/data
			/routes

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
