const fs = require ('fs');

let memo = [];

module.exports = {
    init: function() {
        fs.readFile('web-server/memo.txt', function(err, text) {
            if(err) {
                console.log(err);
            }
            memo = JSON.parse(text);
        });
    },
    set: function(text, callback) {
        memo.push(text);
        fs.writeFileSync('web-server/memo.txt', JSON.stringify(memo), function(err) {
            console.log('err', err);
        }); 
        callback();  
    },
    get: function(callback) {
        fs.readFile('web-server/memo.txt', function(err, text) {
            if(err) {
                console.log(err);
            }
            callback(text);
        });
    }
};
