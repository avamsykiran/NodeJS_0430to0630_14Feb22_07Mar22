import http from 'http';
import url from 'url';
import contactsController from './controller/contactsController.js';

const reqHandler = (req,resp) => {

    const baseURL = 'http://' + req.headers.host + '/';
    const reqUrl = new url.URL(req.url,baseURL);
    const query = new url.URLSearchParams(reqUrl.search);

    if(reqUrl.pathname==='/' || reqUrl.pathname==='/index.htm') {
        contactsController.generateContactsPage(req,resp);
    }else{
        resp.write("<h3>Sorry! Requested resource can not be located on the server");
        resp.end();
    }
};

const server = http.createServer(reqHandler);

server.listen(9999,() => {
    console.log("Server got started...@ http://localhost:9999! ")
});