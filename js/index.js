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

  var p = document.createElement('p');
  p.innerHTML = todoValue;
  console.log(p);

  var todoContainer = document.querySelector('.todo-container');
  todoContainer.appendChild(p);



  });










});
