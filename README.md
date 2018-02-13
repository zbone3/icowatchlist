# icowatchlist
A simple Node.js API wrapper for icowatchlist.com 

## Installation
`npm install icowatchlist`


## Usage
### Initializing
 ```js 
 
const ICOWatchlist = require('icowatchlist');

```

### API Examples
The wrapper returns a promise for all request types, so you can use `Promise.then()` or `async/await` to get the results
```js
// Get all ICOs
ICOWatchlist.getAll();

// Get Live ICOs only
ICOWatchlist.getLive();

// Get Upcoming ICOs only
ICOWatchlist.getUpcoming();

// Get Finished ICOs only
ICOWatchlist.getFinished();


// Use with Promise.then()

ICOWatchlist.getLive().then(function(response) {
  // print name of first Live ICO
  console.log(response[0].name);
});


// Use with async function 

(async function() {
  let allICOs =  await ICOWatchlist.getAll();
  // Print array of the upcoming ICOs 
  console.log(allICOs.upcoming);
})();


```

### API Reference
This table maps the original API to the wrapper functions and their results.  


| Original API        | Wrapper                      | Result                 |
|---------------------|------------------------------|------------------------|
| /public/v1/         | ICOWatchlist.getAll          | Object: {"live": [...], "upcoming": [...], "finished": [...]}               |
| /public/v1/live     | ICOWatchlist.getLive         | Array                  |
| /public/v1/upcoming     | ICOWatchlist.getUpcoming | Array                  |    
| /public/v1/finished      | ICOWatchlist.getFinished| Array|				  |

