const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is Home Page\n');
    } else if (req.url === '/about') {
        res.end('This is About Page\n');
    } else if (req.url === '/contact') {
        res.end('This is Contact Page\n');
    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error writing to file\n');
            } else {
                res.end('File created and text written\n');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
