navigator.serviceWorker.register('./sw.js')
.then(() => {
	console.log("ServiceWorker successfully registered.");
}).catch(() => {
	console.log("There was an error registering ServiceWorker.");
});