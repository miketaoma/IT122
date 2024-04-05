import http from 'http';

http.createServer((req,res) => {
    let path = req.url.toLowerCase();    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('This is Mike\'s about page');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404: Page not found');
            break;
    }    
}).listen(process.env.PORT || 3000);