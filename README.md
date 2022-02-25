NodeJS
-----------------------------------------------------------------------------------------------

    is a javascript runtime environment.

    javascript executing on a broswer   - Client-Side Javascript
    javascript executing on NodeJS      - Server-Side Javascript

    Javascript (ES6)
        Standard JS objects like Strings,Math,Date ..etc
        OOPs like class,object,function,method,prototype,this,static..etc
        Arrays and Array prototype functions
        Functional Concpets like closures,iife,call backs,arrow functions .,..etc
        Asynchronous Programming concepts like asyn,await,promise
        Languaage Constructs like var,let,loops,if,switch,spread operator,template literals,Modules ..etc.,

        Client-Side JS
            DOM manipulation, window,location,document ...etc
            Event Handling ..etc

        Server-Side JS
            FileSystem and IO operations
            Http Server and Http request and generate http resposne ..etc
            
    Lab Setup
        NodeJS      https://nodejs.org/en/
        VSCode      https://code.visualstudio.com/download     
        MongoDB

    node --version
    node scriptFileName.js

    npm     -   node package manager
    ------------------------------------------------
        is a build tool on node environment

        can create a node project (Node Package)
        can manage dependencies
        can perform operations like execution,compilation,testing,packaging...etc

        npm init
        npm init -y
        npm install dependency-name --save
        npm install dependency-name --dev-save
        npm uninstall dependency-name --save
        npm uninstall dependency-name --dev-save
        npm start
        npm test
        npm run 

        npm uses package.json file to store the project meta-data and dependency list
        npm installs all the dependecies in node_modules folder under the project-root.
    
    Modules
    -------------------------------------------------------

        Each script file is senesed as a module.
        A module will contains javacript variables,constants and objects.

        RequireJS modules           only on nodejs projects.
        -------------------------------------------------------
            each script file is expected to have an implicit object called 'exports'

            any object that needs to be shared out side the curretn module must be attached
            as a proeprty to teh exports object.

                m1.js
                ------
                    const f1 = () => console.log("Hello"); //is a private member of the m1.js module

                    exports.f2 = () => console.log("Hai"); //is a public member of the m1.js module


            the function require("module name") is used to access the exports obejct of a module

                main.js
                ------------
                    const m1 = require("m1");

                    m1.f2(); //accessing the public funciton 'f2' from 'm1' module

        ECMSScript modules (esm)          work on any javascript runtime (browsers/nodejs..etc)
        -----------------------------------------------------------------------------------------

            export and import keywords

            export is used to export any object outside the current module

            import is used to access the objects exported from any module

            
            


