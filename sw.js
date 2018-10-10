var staticCacheName = 'restaurant-reviews-stage1-v1';

self.addEventListener('install', (e) => {

	var urlsToCache = [
			'/',
			'img/1.jpg',
	  	'img/2.jpg',
	  	'img/3.jpg',
	  	'img/4.jpg',
	  	'img/5.jpg',
	  	'img/6.jpg',
	  	'img/7.jpg',
	  	'img/8.jpg',
	  	'img/9.jpg',
	  	'img/10.jpg',
	    'js/dbhelper.js',
	    'js/main.js',
	    'js/restaurant_info.js',
	    'js/service_worker.js',
	    'css/styles.css',
	    'css/responsive.css',
	    'data/restaurants.json',
	    'index.html',
	    'restaurant.html'
	];

	 e.waitUntil(
	    // Open a cache named 'restaurant-reviews-stage1-v1'
	    // Add cache the urls from urlsToCache.
	    caches.open(staticCacheName).then((cache) => {
	    	self.currCache = cache;
	    	return cache.addAll(urlsToCache);	
	    })
	    
  	);
});


self.addEventListener('activate', (e) => {
	//Delete previous cache.
	e.waitUntil(
		caches.keys().then((cacheNames) => {
			//To wait on completion of all those promises. 
			return Promise.all(
				cacheNames.filter((cacheName) => {
					//Find the cache with name that starts with 'restaurant-reviews-stage1-'
					return cacheName.startsWith('restaurant-reviews-stage1-') && cacheName != staticCacheName;
				}).map((cacheName) => {
					//Delete the old cache if found.
					return caches.delete(cacheName);
				})
			)
		})
	)
});

self.addEventListener('fetch', function(e) {
 	var requestUrl = new URL(e.request.url);

 	//Returns the content from cache if found.
	if (requestUrl.origin === location.origin) {
		if (requestUrl.pathname === '/') {
			e.respondWith(caches.match('/'));
			return;
		}
	}

  caches.match(e.request).then((response) => {
    if (!response) {
      //if the response is not found in cache, get it from network
      fetch(e.request).then((response) => {
      	//Add the response to current cache
        self.currCache.put(e.request, response);
      }).catch(e => {
      	//do nothing. This prevents stack trace in the log.
      });
    }
	});
});
