//page 1
let url = document.getElementById("idUrl");
let article = document.getElementById("idArticle");
let page1 = document.getElementById("page1");

url.addEventListener("click", function () {
    url.style.backgroundColor = "#40404e";
    article.style.backgroundColor = "#2e2e3a";
})

article.addEventListener("click", function () {
    article.style.backgroundColor = "#40404e";
    url.style.backgroundColor = "#2e2e3a";
})

let page2u = document.getElementById("page2u");
let page2a = document.getElementById("page2a");
let page3 = document.getElementById("page3");
let atype;

document.getElementById("nextBtn").addEventListener("click", function () {

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

//page2u
let npost = document.getElementById("idnpost");
let ntimes = document.getElementById("idntimes");
let wpost = document.getElementById("idwpost");
let wsource;
let backbtn1u = document.getElementById("backbtn1u");
let nextbtn1u = document.getElementById("nextBtn1u");

npost.addEventListener("click", function () {
    npost.style.backgroundColor = "#40404e";
    ntimes.style.backgroundColor = "#2e2e3a";
    wpost.style.backgroundColor = "#2e2e3a";
})

ntimes.addEventListener("click", function () {
    npost.style.backgroundColor = "#2e2e3a";
    ntimes.style.backgroundColor = "#40404e";
    wpost.style.backgroundColor = "#2e2e3a";
})

wpost.addEventListener("click", function () {
    npost.style.backgroundColor = "#2e2e3a";
    ntimes.style.backgroundColor = "#2e2e3a";
    wpost.style.backgroundColor = "#40404e";
})

backbtn1u.addEventListener("click", function () {
    page1.style.display = "block";
    page2u.style.display = "none";
})

nextbtn1u.addEventListener("click", function () {
    // let testnpost = document.getElementById("idnpost");
    //
    //
    // if (!testnpost.checked) {
    //     let testntimes = document.getElementById("idntimes");
    //
    //     if (!testntimes.checked) {
    //         let testwpost = document.getElementById("idwpost");
    //
    //         if (!testwpost.checked) {
    //             alert("Please Select a Value");
    //         }
    //     }
    //
    // } else {
    //     console.log("1");
    //     page2u.style.display = "none";
    //     page3.style.display = "block";
    // }
    //
    // let webSource = document.forms[0].elements["articleSource"];
    //
    // for(let  i = 0; i < webSource.length; i ++) {
    //     if (webSource[i].checked) {
    //         wsource = webSource[i].value;
    //         break;
    //     }
    // }

    page2u.style.display = "none";
    page3.style.display = "block";
})

//page2a
let articleInput = document.getElementById("articleInput");
let backbtn1a = document.getElementById("backbtn1a");

articleInput.addEventListener("click", function () {
    articleInput.style.border = "#FAF9F9 solid";
})

backbtn1a.addEventListener("click", function () {
    page1.style.display = "block";
    page2a.style.display = "none";
})

//page3
let backbtn2 = document.getElementById("backbtn2");


backbtn2.addEventListener("click", function () {
    page3.style.display = "none";
    page2u.style.display = "block";
})