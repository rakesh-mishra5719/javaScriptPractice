
let todolist = JSON.parse(localStorage.getItem('todo')) || [];

// { name: 'make dinner', dueDate: '2022-12-22' }, { name: 'wash dishes', dueDate: '2022-11-29' }
renderTodoList();

function renderTodoList() {
   todolist = JSON.parse(localStorage.getItem('todo')) || []
   let todolistHTML =  '';

   todolist.forEach(function(todoObject, index) {
      const { name, dueDate } = todoObject; // destructuring
      const html = `
      <div>${name} </div>
      <div>${dueDate}</div>
          
         <button onclick = "
         
         let dellist = JSON.parse(localStorage.getItem('todo'))
         dellist.splice(${index},1);
         localStorage.removeItem('todo');
         localStorage.setItem('todo',JSON.stringify(dellist));
          renderTodoList();
         " class ="delete-todo-btn" >Delete</button>
      
      `;// generating html
      todolistHTML += html;
   });

   // console.log(todolistHTML);
   document.querySelector('.js-todo-list')
      .innerHTML = todolistHTML;
}

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');

   const dueDate = dateInputElement.value;

   todolist.push({
      // name: name,
      // dueDate: dueDate
      name,
      dueDate

   });

   const str = JSON.stringify(todolist);
   

   localStorage.setItem('todo',str);
   

   // console.log(todolist);

   inputElement.value = '';

   renderTodoList();
}
