import { todoCrtl } from './todoCtrl';

// Entry point to our app.
const main = ((todo) => {
    const init = () => {
        console.log("Hi from from init in index.js");
        // Call on our todoCtrtl to initialize itself
        todo.init();
    }
    // We only have one function to expose to the outside world
    return { init };
})(todoCrtl);

// First line that get's 'executed'.
main.init();