// EXAMINE THE DOCUMENT OBJECT //
//  console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textcontent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links); 
// console.log(document.images);

// GETELEMENTEDBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

//  GIVES ERROR  //
//  items[i].style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < items.length; i++){
//    items[i].style.backgroundColor = '#f4f4f4';
// }

//GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

//  GIVES ERROR  //
//  li[i].style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var header = document.querySelector('input');
// header.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

//  var lastItem = document.querySelector('.list-group-item:last-child');
//  lastItem.style.color = 'blue';

//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

//  for(var i = 0; i < odd.length; i++){
//    odd[i].style.backgroundColor = '#f4f4f4'
//    even[i].style.backgroundColor = '#ccc'
// }


//TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode);

// parent Element 
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);
 
// childNodes 
//  console.log(itemList.children)

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'; 

// FirstChild
// console.log(itemList.firstChild);
// fisrtElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
//console.log(itemList.lastChild);
// fisrtElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextsiblings
// console.log(itemList.lastchild)
//nextElementsiblings
// console.log(itemList.nextSibling)

//previousSiblings
//console.log(itemList.previousSibling);
//previousElementsibling
//console.log(itemList.previousElementSibling)
//itemList.previousElementSibling.style.color = 'green'

// createElement

// create a div
// var newDiv = document.createElement('div');

// add cladd
// newDiv.className= 'hello';

//add id
// newDiv.id = 'hello1';

//add attribute
// newDiv.setAttribute('title', 'Hello Div');

// Create text node
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
 
// console.log(newDiv);

// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv, h1);

// EVENTS //

//var button = document.getElementById('button').addEventListener('click', buttonclick);

//function buttonclick(e){
    //console.log('Button clicked');
    //document.getElementById('header-title').textContent = 'Changed';
   //document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';

// console.log(e.type);
//console.log(e.clientX);
//console.log(e.clientY);

//console.log(e.offsetX)
// console.log(e.offsetY)

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
//}

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
//  button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseout', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
}
   




















