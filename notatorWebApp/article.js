const {spawn} = require('child_process');
let childPython = "";
let newNotes;
let form = document.getElementById("formArticle");
let noteArticle = document.getElementById("notesArticle");


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

    let keywords = document.getElementById("keywords").value;

    childPython = spawn('python', ['prepPythonForArticle.py', atype, get_url, wtype, article, keywords]);


    childPython.stdout.on('data', (data) => {
        // console.log(`${data}`);
        newNotes = new notes(data);
        document.getElementById("notesArticle").innerHTML = decodeURI(`${newNotes.note}`);
        newNotes.logNotes();


        //let test = "";
        // try{
        // // If the string is UTF-8, this will work and not throw an error.
        //     test=decodeURIComponent(escape(`${newNotes.note}`));
        // }catch(e){
        // // If it isn't, an error will be thrown, and we can assume that we have an ISO string.
        //     console.log("not normal")
        // }
    });


    form.style.display = "none";
    noteArticle.style.display = "block";

});


document.getElementById("return").addEventListener("click", function () {
    form.style.display = "block";
    noteArticle.style.display = "none";
})
