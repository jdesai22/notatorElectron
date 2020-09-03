const {spawn} = require('child_process');
let post = document.getElementById("nextBtn3");

post.addEventListener("click", function() {
    console.log("1");
    let uSource = "";
    let url = "";

    let fullArticle = "";

    let keywords = 3;

    if(atype == "u") {
        let urlSource = document.forms[1].elements["webSource"];
        for (let i = 0; i < urlSource.length; i++ ) {
            if (urlSource[i].checked) {
                uSource = urlSource[i].value;
                break;
            }
        }

        url = document.getElementById("linkInput").value;
    } else if (atype == "c") {
        fullArticle = document.getElementById("articleInput").value;
    }

    keywords = document.getElementById("keyInput").value;

    console.log("2");

    let childPython = spawn('python', ['prepPythonForArticle.py', atype, url, uSource, fullArticle, keywords]);

    console.log("3");

    childPython.stdout.on('data', (data) => {
        // console.log(`${data}`);
        // let newNotes = new notes(data);
        console.log("4");
        // document.getElementById("notes").innerHTML = decodeURI(`${newNotes.note}`);
        // document.getElementById("notes").innerHTML = newNotes.note.toString('utf8');
        // newNotes.logNotes();
        // console.log(newNotes.note.toString('utf8'));
        console.log("5");
        //let test = "";
        // try{
        // // If the string is UTF-8, this will work and not throw an error.
        //     test=decodeURIComponent(escape(`${newNotes.note}`));
        // }catch(e){
        // // If it isn't, an error will be thrown, and we can assume that we have an ISO string.
        //     console.log("not normal")
        // }
    });

    childPython.stderr.on('data', data => {
        console.error(`child stderr:\n${data}`);
    });

    console.log("6");
});
