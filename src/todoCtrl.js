import { domCtrl } from './domCtrl';

const todoCtrl = (() => {
	let toDoList;

	class ToDo {
		constructor(body, category, completed = false) {
			this.body = body;
			this.category = category;
			this.completed = completed;
		}

		getBody() {
			return this.body;
		}

		getCompleted() {
			return this.completed;
		}

		getCategory() {
			return this.category;
		}

		setBody(body) {
			this.body = body;
		}

		setCompleted(completed) {
			this.completed = completed;
		}

		setCategory(category) {
			this.category = category;
		}

	}

	class ToDoList {
		constructor(list) {
			this.toDoList = list;
		}

	}

	const init = () => {
		console.log('Hi from init in todoCtrl.js')
	};
	const attachEventListeners = () => {

	}

	return {
		init
	};
})();

export { todoCtrl };