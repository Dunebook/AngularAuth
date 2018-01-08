#Angular Application

Welcome to your Angular starter application. This brief introduction will 
help you make the best use of this product for Angular development.

To learn more about the project created, move to the 
*Getting to know your Project* section, else read on to get started with
development immediately.


##Developing Angular applications

###Deploying your Application
Your application is ready to be deployed, out of the box! Right click your 
project, and choose *Run As > Angular Web Application* - the `ng serve` 
CLI command is used to server your application. Alternatively, you can use the
actions available in the *Servers* view, under the *Angular CLI* node.

###Using the Terminal+ View
The *Terminal+* view, is a project context aware view, when opened it will set 
up the environment to use the Node and NPM versions selected during project
creation, even though you may have other versions on your machine. These 
versions can easily be changed in your project's *CLI Tool Management* property
page - the view will download these versions if you don't have them installed.

###Creating new Angular Elements
Use the Angular Elements wizard to create new Services, Pipes and Components. 
These elements are generated using the Angular CLI.

###Coding
We offer a *best in class* Angular and TypeScript coding experience. 
Our features include:

    - Content Assist in both TS modules and Angular templates
    - Intelligent import automatically imports modules
    - Templates for faster coding
    - Validation in TS modules and Angular templates
        - Linting with TSLint
        - Quick fixes supported for easy corrections
    - Hyper-link navigation, even in Angular Templates 
    
###Debugging your application
Bring up the context menu on your application and choose 
*Debug As > Angular Web Application* - this will deploy the application and
open Chrome with a debug connection. We set up source maps correctly, so you 
can step through your original TypeScript source. Alternatively, for a running
application, choose the *Debug application in Chrome* action in the *Servers* 
view.  


##Getting to know your project 

Angular projects are generated using the [Angular CLI](https://cli.angular.io/) 
which ensures generated projects are standards compliant. 

The Node and NPM versions that are selected in the creation wizard will be used
to execute the CLI commands.

###Key Project Elements

**src/app folder**
This folder contains several Angular modules, the "meat" of your application.

**app.module.ts**
This is the root module (AppModule) - your application is launched by 
bootstrapping this module.
 
**.angular-cli.json**
This file contains settings and instructions on how your Angular application is
to be built, tested  and deployed.

**main.ts**
Code in this TypeScript file initializes the platform that your application runs 
in, then uses the platform to bootstrap your AppModule.

**tsconfig.json**
This file contains your project's TypeScript settings, controlling source 
locations, JavaScript targets (like ES5 or ES6), compilation, how types are 
resolved and several other settings.

**package.json**
This is another TypeScript specific file, which primarily contains your 
projectís dependencies, listed as Node.js modules and their corresponding 
versions. 

**node_modules folder**
This folder contains all the Node packages your project is dependent on, these 
are defined in package.json and downloaded by the Node Package Manager (NPM).

**protractor.conf.js and e2e folder**
Protractor and Jasmine, are both end-to-end testing frameworks - the test 
framework is configured in protractor.conf.js while the actual tests are in the
e2e folder.