const http = require('http');
const fs = require ('fs');
const querystring = require('querystring');

const memo = require('./memo');

const server = http.createServer((req, res) => {
    if (req.url === '/write.html') {
        fs.readFile('web-server/public/write.html', function (err, html) {
            if (err) {
                send_error(red);
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(html);
        });
    } else if (req.url === '/data') {
        let postdata = '';
        req.on('data', function (data) {
            postdata = postdata + data;
        });
        req.on('end', function () {
            const parsedQuery = querystring.parse(postdata);
            memo.set(JSON.parse(JSON.stringify(parsedQuery)).memo, () => res.end());
        });
    } else if (req.url === '/board.html') {
        fs.readFile('web-server/public/board.html', 'utf-8', function (err, html) {
            if (err) {
                send_error(res);
            }
            memo.get((text) => {
                const content = JSON.parse(text).reduce((memoContent, txt) => memoContent += `<div class="content">${txt}</div>`, '');
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(html.replace('id="board-content">', `id="board-content">${content}`));
            })
        });
    } else {
        send_error(res);
    }
});

server.listen(3000, () => {
    memo.init();
});

function send_error(res, num = 404) {
    res.writeHead(num);
    res.end();
}