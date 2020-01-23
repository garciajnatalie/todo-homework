document.addEventListener('DOMContentLoaded', function() {

//create Form
//insert text into form
//find submit Button
//when submitted, create task when submitted
//add text to innerHTML
// Create an array of pre-existing todos that will be added to the page on page load  by looping through them one at a time (see my application has “Do laundry” and  “Cook Dinner” 
//Bonus - Try to add a remove button that destroys the list item 
//Bonus 2 - Begin styling your todo list 

  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submitted');

  var todoInput = document.querySelector('.todo');
  console.log(todoInput);
  var todoValue = todoInput.value;
    console.log(todoValue);

  var ul = document.createElement('li');
  ul.innerHTML = todoValue;
  console.log(ul);



  //connect to ul
  //add li with string
  //set innerHTML to string --- THIS IS STILL WRONG
  var todoContainer = document.querySelector('.todo-bullet');
    var ul = document.querySelector('.todo-bullet');
    var li = document.createElement('li');
    li.innerHTML = todoValue;
    todoContainer.appendChild(li);

    var ulBtn = document.querySelector('li');
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Remove";
    document.body.appendChild(btn);
    console.log(btn);

    var removeBtn = function(){
      var removeBtn1 = document.getElementByClassName(".button").addEventListener('click');
      removeBtn.remove();
      console.log('button removed');
}
/*
    //attempting array insert 1.22
    var todoList = ['Grocery shopping', 'Pick up dry cleaning', 'Clean bathroom'];
    console.log(todoList);

    var todo1 = todoList[0];
    var todo2 = todoList[1];
    var todo3 = todoList[2];
    console.log(todo1);
    console.log(todo2);
    console.log(todo3);

  var writeTextTodo1 = function() {
    var todoContainer = document.querySelector('.todo-bullet');
    var textTodo1 = document.createTextNode('Grocery Shopping');
    li.innerHTML = textTodo1;
    writeTextTodo1.appendChild(li);
  }



/*
  var writeTodo = function() {
    var ul = document.querySelector('.todo-bullet');
    var li = document.createElement('li');
    var text = 'Grocery shopping';
    li.innerHTML = text;
    ul.appendChild(li);
  }


  //writeToDo('Grocery shopping');
  //writeToDo('Pick up dry cleaning');
  //writeToDo('Clean bathroom');


/*
  //adding in class work - NEED TO UPDATE TO KEEP ON PAGE AND ROTATE
  document.addEventListener('DOMContentLoaded', function() {
  var putElementOnPage = function(text) {
    var p = document.createElement(p);
    p.innerHTML = text;
    var container = document.querySelector('.todo-container')
    container.apppendChild(p);
    }

  var todoItems = ['Grocery shopping' + 'Pick up dry cleaning' + 'Clean bathroom'];
  console.log(todoItems);

  document.getElementbyId('.todo-bullet').innerHTML = todoItems;
  document.getElementById('.todo-bullet').appendChild(ul);

 adds shores to list when add a task doesn't keep them there
  var todoItemsDisplay = function(todoItems) {
    var ul = document.getElementbyId('li');
    ul.innerHTML = todoItems;
    console.log(todoItems);

    var todoContainer = document.querySelector('.todo-bullet');
    todoContainer.appendChild(ul);
  */



  //end of class work add in

    //});






  });









});
