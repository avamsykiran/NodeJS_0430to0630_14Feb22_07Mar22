import http from 'http';

const reqHandler = (req,resp) => {
    resp.write("<html><body>");
    resp.write(`<h3>${new Date()}</h3>`);
    resp.write(`<h2>${req.url}</h2>`);
    resp.write("<h1>Hello World! This is my first NodeJS WebServer!</h1>");
    resp.write("</body></html>");
    resp.end();
};

const server = http.createServer(reqHandler);

server.listen(9999,() => {
    console.log("Server got started...@9999! ")
});