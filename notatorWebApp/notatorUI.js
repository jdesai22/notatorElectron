//page 1
let url = document.getElementById("idUrl");
let article = document.getElementById("idArticle");

document.getElementById("url").addEventListener("click", function () {
    url.style.backgroundColor = "#40404e";
    article.style.backgroundColor = "#2e2e3a";
})

document.getElementById("article").addEventListener("click", function () {
    article.style.backgroundColor = "#40404e";
    url.style.backgroundColor = "#2e2e3a";
})

let page2u = document.getElementById("page2u");
let page2a = document.getElementById("page2a");
let atype;

document.getElementById("nextBtn").addEventListener("click", function () {
    let page1 = document.getElementById("page1");

    let url = document.getElementById("url");

    if (!url.checked) {
        let article = document.getElementById("article");

        if (!article.checked) {
            alert("Please Select a Value");
        }
    }

    let articleType = document.forms[0].elements["articleSource"];

    for(let  i = 0; i < articleType.length; i ++) {
        if (articleType[i].checked) {
            atype = articleType[i].value;
            break;
        }
    }

    if (atype == "u") {
        page1.style.display = "none";
        page2u.style.display = "block";
    } else if (atype == "c") {
        page1.style.display = "none";
        page2a.style.display = "block";
    }
})

//page2w
let npost = document.getElementById("idnpost");
let ntimes = document.getElementById("idntimes");
let wpost = document.getElementById("idwpost");
let wsource;

document.getElementById("npost").addEventListener("click", function () {
    npost.style.backgroundColor = "#40404e";
    ntimes.style.backgroundColor = "#2e2e3a";
    wpost.style.backgroundColor = "#2e2e3a";
    console.log("1")
})

document.getElementById("ntimes").addEventListener("click", function () {
    npost.style.backgroundColor = "#2e2e3a";
    ntimes.style.backgroundColor = "#40404e";
    wpost.style.backgroundColor = "#2e2e3a";
})

document.getElementById("wpost").addEventListener("click", function () {
    npost.style.backgroundColor = "#2e2e3a";
    ntimes.style.backgroundColor = "#2e2e3a";
    wpost.style.backgroundColor = "#40404e";
})
