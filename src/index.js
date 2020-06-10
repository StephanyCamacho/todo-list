import { todoCtrl } from './todoCtrl';

const main = ((todo) => {
    const init = () => {
        console.log('Hi from from init in index.js');
        todo.init();
    }
    return { init };
})(todoCtrl);

main.init();