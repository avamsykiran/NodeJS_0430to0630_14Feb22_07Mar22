import http from 'http';
import url from 'url';
import contactsController from './contactsController.js';

const reqHandler = (req,resp) => {

    let path = new url.URL(req.url,`http://${req.headers.host}`).pathname;
    let method = req.method;

    if(path.startsWith('/contacts')){

        switch(method){
            case 'GET': 
                contactsController.getAllAction(req,resp); 
                break;
            //case 'POST': break;
            //case 'PUT':break;
            //case 'DELETE': break;
            default: 
                resp.writeHead(400);
                resp.write(`METHOD '${method}' not supported!`);    
                resp.end();    
                break;
        }
    }else{
        resp.writeHead(400);
        resp.write("Only '/contacts' endPoint is supported as of now");
        resp.end();
    }

};

const server = http.createServer(reqHandler);

server.listen(9999,() => {
    console.log("Server got started...@ http://localhost:9999! ")
});