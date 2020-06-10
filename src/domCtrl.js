const domCtrl = (() => {
	const init = () => {
		console.log('Hi from init in domCtrl.js')
	};
	return {
		init
	};
})();

export { domCtrl };