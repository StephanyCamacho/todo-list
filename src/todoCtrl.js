import { domCtrl } from './domCtrl';

// Controller to manage all logical aspects of our todo app.
const todoCrtl = (() => {
	// This represents the todo list
	let toDoList;

	// Represents a single todo object
	class ToDo {
		constructor(body, category, completed = false) {
			this.body = body; // string
			this.category = category; // string
			this.completed = completed; // boolean
		}
	}

	// Hold all the todo objects
	class ToDoList {
		constructor(list) {
			this.toDoList = list; // array
		}

		// Adding a todo element to the this list
		addToDo(todo) {
			this.toDoList.push(todo);
		}

		// Save the toDoList array to local storage
		save() {
			localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
			// TODO Refresh the dom because we just did an update
			domCtrl.refreshToDoList(this.toDoList);
			// TODO Re-attach the event listeners to the dom
			attachEventListeners();
		}
	}

	// call this function when starting the web app
	const init = () => {
		console.log("Hi from init in todoCtrl.js");
		// Check if there is something in local storage
		if (localStorage.toDoList) {
			// Extract todo list array
			const storedToDoArr = JSON.parse(localStorage.getItem('toDoList'));
			// Create new ToDoList object using the array
			toDoList = new ToDoList(storedToDoArr);
		} else {
			// Create new ToDoList object with an empty array, so no todo's yet.
			toDoList = new ToDoList([]);
			// Save the toDoList object to local storage
			toDoList.save();
		}

		// Call on the dom controller to initialize the page
		// Make sure we have the right number of items in the todo list
		console.log(`Number of items in the todo list is ${toDoList.toDoList.length}`)
		domCtrl.init(toDoList.toDoList);
		attachEventListeners();
	};

	// Setup all the events for all the buttons on the page
	const attachEventListeners = () => {
		// TODO Finish this
		let newToDoButton = domCtrl.getNewToDoButton();
		newToDoButton.addEventListener("click", function () {
			let toDoBody = domCtrl.getNewToDoBody();
			let toDoCategory = domCtrl.getNewToDoCategory();
			let newTodo = new ToDo(toDoBody, toDoCategory);
			toDoList.addToDo(newTodo);
			toDoList.save();
		})
	}

	// Only expose the init function to the outside world
	return { init };
})();

// Don't forget to export, otherwise we won't be able to import. 
export { todoCrtl };