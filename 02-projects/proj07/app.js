import http from 'http';
import url from 'url';

const reqHandler = (req,resp) => {

    const URL = url.parse(req.url);

    resp.write("<html><body>");

    resp.write(`<h3>${URL.url}</h3>`)
    resp.write(`<h3>${URL.URL}</h3>`)
    resp.write(`<h3>${URL.protocol}</h3>`)
    resp.write(`<h3>${URL.hostname}</h3>`)
    resp.write(`<h3>${URL.host}</h3>`)
    resp.write(`<h3>${URL.port}</h3>`)
    resp.write(`<h3>${URL.path}</h3>`)
    resp.write(`<h3>${URL.query}</h3>`)

    resp.write("</body></html>");
    resp.end();
};

const server = http.createServer(reqHandler);

server.listen(9999,() => {
    console.log("Server got started...@9999! ")
});