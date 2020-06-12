// Controller to control anything and everything DOM related except for eventlisteners
const domCtrl = (() => {
	// Call on this function to initialize all dom related elements
	const init = (toDoArray) => {
		console.log("Hi from init in domCtrl.js");
		// Delete old content
		resetContainer();
		// Setup the new todo form
		setupPage();
		// Now display all the todo elements
		displayToDoList(toDoArray);
	};

	const displayToDoList = (toDoArray) => {
		let root_element = document.getElementById("content");
		let todo_container = document.createElement("div");
		toDoArray.forEach((item) => {
			let toDo_element = document.createElement("p");
			toDo_element.innerText = `${item.body} (${item.category})`;
			todo_container.appendChild(toDo_element);
		});
		root_element.appendChild(todo_container);
	}

	// Delete all the content of the main div with the id 'content'
	const resetContainer = () => {
		let root_element = document.getElementById("content");
		root_element.innerHTML = "";
	}


	// Anything that we need to do to setup the basic 'frame' of our page.
	const setupPage = () => {
		createNewToDoForm();
	}

	// Create and attach input form fields and button related to adding a new todo
	const createNewToDoForm = () => {
		console.log("Hi from createNewToDoForm in domCtrl.js");
		let root_element = document.getElementById("content");
		let form_parent_div = document.createElement("div");
		let form_body = document.createElement("input");
		let form_category = document.createElement("input");
		let form_add_button = document.createElement("button");
		form_add_button.innerText = "Add ToDo";
		form_add_button.id = "new_todo_button";
		form_body.id = "new_todo_body";
		form_category.id = "new_todo_category";
		form_parent_div.appendChild(form_body);
		form_parent_div.appendChild(form_category);
		form_parent_div.appendChild(form_add_button);
		root_element.appendChild(form_parent_div);
	}
	// Return a reference to the add todo button
	const getNewToDoButton = () => {
		return document.getElementById('new_todo_button');
	}
	// Return the content of the body input element
	const getNewToDoBody = () => {
		let todo_body_element = document.getElementById('new_todo_body');
		let body = todo_body_element.value;
		return body;
	}
	// Return the content of the category input element
	const getNewToDoCategory = () => {
		let todo_category_element = document.getElementById('new_todo_category');
		let category = todo_category_element.value;
		return category;
	}

	const refreshToDoList = () => {
		resetContainer();
		createNewToDoForm();
		displayToDoList();
	}
	// Only expose the init function to the outside world
	return { init, getNewToDoBody, getNewToDoButton, getNewToDoCategory, refreshToDoList };
})();

// Don't forget to export, otherwise we won't be able to import. 
export { domCtrl };