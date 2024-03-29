
const fetch = require('node-fetch');
const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
  }
  
  const json = response => response.json()
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
      console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
      console.log('Request failed', error)
    })