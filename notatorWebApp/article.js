const {spawn} = require('child_process');
let childPython = "";

document.getElementById("submit").addEventListener("click", function() {

    let articleType = document.forms[0].elements["articleType"]; //can be u or c
    let atype;

    for(let  i = 0; i < articleType.length; i ++) {
        if (articleType[i].checked) {
            atype = articleType[i].value;
            break;
        }
    }

    let get_url = document.getElementById("get_url").value; //link to article

    let webType = document.forms[0].elements["webType"]; //type of article: npost, ntimes, or wpost  IN FUTURE ADD FUNC TO ANALYZE THE LINK TO FIND WEBSITE TYPE
    let wtype;

    for(let  i = 0; i < webType.length; i ++) {
        if (webType[i].checked) {
            wtype = webType[i].value;
            break;
        }
    }

    let article = document.getElementById("articleInput").value;


    childPython = spawn('python', ['prepPythonForArticle.py', atype, get_url, wtype, article]);

    childPython.stdout.on('data', (data) => {
        console.log(`${data}`);
    });


    // console.log(`${atype}`);
    // console.log(`${get_url}`);
    // console.log(`${wtype}`);
    // console.log(`${article}`);
});

