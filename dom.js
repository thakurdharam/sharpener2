console.dir(document);
console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
var headtitle = document.getElementById("header-title");
headtitle.textContent = "changed";
var header = document.getElementById("main-header");

header.style.borderBottom = "5px solid black";


const innertitle = document.getElementsByClassName("title");
console.log(innertitle);

innertitle[0].style.color = "green";
innertitle[0].style.fontWeight = "bold";

var list = document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor = "green";
list[2].style.color = "white";
for(let le of list){

   le.style.fontWeight = "bold";
}
var list2 = document.getElementsByTagName("li");
console.log(list2[4]);   
list2[4].classList.add("list-group-item");
list2[4].style.fontWeight = "bold"; 
