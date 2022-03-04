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
    
    NodeJS Core Modules
    ----------------------------------------------------------------------------------------------
        
        fs
            readFile(fileName,(err,data)=> {})
            writeFile(fileName,data,(err)=> {})
            appendFile(fileName,data,(err)=> {})
            unlink(fileName,(err)=> {})
            rename(fileName,newFielName,(err)=> {})
            
        http
            createServer((req,resp) => {}) : server

            server.listen(port);

            resp.writeHead(status,{'header':'value',...})
            resp.write(contnet);
            resp.end();

            req.url

        url
            parse('any url') //deprecated

            URL
            URLSearchParams

    NodeJS REST api
    ----------------------------------------------------------------------------------------------
    
        What is REST API?

            REpresentational State Transfer
            are web services designed to be called and consumed on HTTP protocol.

            + http protocol already supports a variaty of media liek json,xml,text,bianry ..etc
            + http protocol has a definitly defined status-code setup to ease the communication,
             of success or request progress or failure.

        Common Standards to follow for a REST api?

            1. HTTP Methods to CRUD operation m mapping

                GET         retrival
                POST        creating a record
                PUT         updating
                PATCH       selective update
                DELETE      deleting a record
                
                .....etc

            2. HTTP Status Codes

                1xx - indicate successful reception of a req,
                3xx - indicates the redirection of a response

                2xx     Signaling that the requested job is done
                        200     OK          successful execution of a GET req
                        201     CREATED     successful execution of a POST req
                        202     ACCEPTED    successful execution of a PUT/PATCH req
                        204     NO CONTENT  successful execution of a DELETE req
                
                4xx     Signaling that the reqeust can not be honoured due to a client side error
                        400     BAD REQUEST when the incoming data is not valid or req url is not valid...
                        404     NTO FOUND   when a req resource is not available.

                5xx     Signaling that the reqeust can not be honoured due to a server side error
                        500     INTERNAL SERVER ERROR

        expressjs - a framework on nodejs to generate rest api.

        


            
            


