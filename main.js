var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

// Add Item
function addItem(e){
  e.preventDefault();

//Get input value
var newItem = document.getElementById('item').value; 
console.log(newItem);
//Create new Li value
var li = document.createElement('li');
//add class 
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));

//create delete button element
var deleteBtn = document.createElement('button');

//add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));

//append li to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
// console.log()
if(confirm('Are you sure ?')){
  var li = e.target.parentElement;
  itemList.removeChild(li);
}
  }
}
 
// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
