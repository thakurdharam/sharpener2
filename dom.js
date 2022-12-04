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

var list3 = document.querySelectorAll('li');
list3[1].style.color = "green";
list3[2].style.visibility = "hidden";

for(var i = 0;i<list3.length;i=i+2){
   list3[i].style.backgroundColor = "green";
}







var itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);


console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);


console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';


console.log(itemList.lastChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';


console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);



console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newDiv =  document.createElement('div');

newDiv.className= 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);