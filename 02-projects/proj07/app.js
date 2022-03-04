import http from 'http';
import url from 'url';

const reqHandler = (req,resp) => {

    const baseURL = 'http://' + req.headers.host + '/';
    const reqUrl = new url.URL(req.url,baseURL);
    const query = new url.URLSearchParams(reqUrl.search);

    console.log(JSON.stringify(reqUrl));

    resp.write("<html><body>");
    resp.write(`<h3>${req.method}</h3>`)
    resp.write(`<h3>${reqUrl.href}</h3>`)
    resp.write(`<h3>${reqUrl.host}</h3>`)
    resp.write(`<h3>${reqUrl.hostname}</h3>`)
    resp.write(`<h3>${reqUrl.protocol}</h3>`)
    resp.write(`<h3>${reqUrl.port}</h3>`)
    resp.write(`<h3>${reqUrl.pathname}</h3>`)
    resp.write(`<h3>${reqUrl.search}</h3>`)
    resp.write(`<h3>${reqUrl.searchParams}</h3>`)
    query.forEach((val,name) => resp.write(`<h3>${name}=${val}</h3>`));
    resp.write("</body></html>");
    resp.end();
};

const server = http.createServer(reqHandler);

server.listen(9999,() => {
    console.log("Server got started...@9999! ")
});