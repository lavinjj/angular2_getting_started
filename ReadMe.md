#Getting Started with AngularJS 2 Examples

These are the example projects that appear in the Monthly DFW Area AngularJS Meetup Videos on getting started with AngularJS 2.

You will need to install the following Node.js modules using npm:

TSD – Typescript Definition Package Manager

    npm install –g tsd

Typescript Compiler

    npm install –g typescript@^1.5.0-beta
    
Http Server

    npm install -g http-server
    
To download the typescript definitions for each project you will need to execute the following command:

    tsd reinstall --overwrite

To compile the files in each project you can use an IDE that provides a watch function that kicks off the Typescript 
compiler or you can recompile a file using the following command:

    tsc
    
This will execute the Typescript compiler and use the default compile settings in the tsconfig.json file to watch the 
files and recompile them as they change.

To test teh app you can run the http-server in teh example directory using the following command:

    http-server
   
This will launch a web server on port 8080 that can be used to browse the example file using http://localhost:8080/index.html

#Definition of Examples

    example1 -- Simple Hello World App
    example2 -- Simple ToDo App
