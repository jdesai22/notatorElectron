const {spawn} = require('child_process');
let childPython = "";

document.getElementById("submit").addEventListener("click", function() {
    let article = document.getElementById("articleInput").value;
    childPython = spawn('python', ['article.py', article]);

    childPython.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

});

