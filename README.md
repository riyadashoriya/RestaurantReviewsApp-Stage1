# Restaurant Reviews App - State 1

This is a restaurant reviews app designed for Udacity's Front End Nanodegree course, uses Google Map to search for restaurants. This app is accessible for screen readers to read, and is responsive for different sized displays. This app is also build to provide a seamless offline experience for users (using Service Worker). 

![alt text](https://github.com/riyadashoriya/RestaurantReviewsApp-Stage1/blob/master/desktopView.png "Restaurant Reviews App - Stage 1 Desktop View")



![alt text](https://github.com/riyadashoriya/RestaurantReviewsApp-Stage1/blob/master/mobileView.png "Restaurant Reviews App - Stage 1 Mobile View")



## Working

To use the app right away: In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
With your server running, visit the site: `http://localhost:8000`



## Content

```bash
├── CODEOWNERS
├── README.md - This file.
├── index.html # main file. This is displayed when app starts. Contains HTML code for maps, & all the restaurants.
├── restaurant.html # restaurant view file. This is used to show the details of each restaurant when user clicks 'view details' on main page.
├── sw.html # A ServiceWorker script that cache requests to all of the site’s assets.
├── css
│   ├── responsive.css # Contains media queries css.
│   └── styles.css # Global styles. 
├── data/restaurants.json # Restaurant data for the app. Contains list of restaurants, reviews, hours of operation, etc.
├── img/* # Helpful images for app.
└── js
    ├── dbhelper.js # Common database helper functions, has queries for Google Maps
    ├── main.js # This is used by main page, to display all the data and show in maps.
    ├── restaurant_info.js # This is used by restaurant.html to display data for each restaurant.
    ├── service_worker.js # This file has ServiceWorker functions.
```

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## License

The content is provided by Udacity.
