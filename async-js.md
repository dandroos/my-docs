# Asynchronous Javascript (Callbacks, Promises and Generators)

## What is Async Javascript
Asynchronous Javascript are functions that can run without blocking the flow of code.

## Callback functions
### How do they work?
These are functions that are called when a different function has finished performing its task *(hence 'callback')*.  Here is an example of fetching API JSON data via callback functions....

```javascript
function getData(){
    var http = new XMLHttpRequest();
    http.open('GET','json/animals.json');
    http.onreadystatechange = ()=>{
    if(http.readyState == 4 && http.status == 200){
        console.log(JSON.parse(http.response));
        (function(){
            var http = new XMLHttpRequest();
            http.open('GET','json/colours.json');
            http.onreadystatechange = ()=>{
            if(http.readyState == 4 && http.status == 200){
                console.log(JSON.parse(http.response));
                (function(){
                    var http = new XMLHttpRequest();
                    http.open('GET','json/people.json');
                    http.onreadystatechange = ()=>{
                    if(http.readyState == 4 && http.status == 200){
                        console.log(JSON.parse(http.response));
                    }}
                    http.send();
                })();
            }}
            http.send();
        })();
    }}
    http.send();
}
getData();
console.log('This will print before the json data!')
```

While the above code does work, what we can see is known as a quickly-growing 'triangle of death' and it's also known as 'callback hell'.  Callbacks are ok when one additional task needs to be performed, but another method of retrieving data by asynchronous data is more preferable here.  Enter **promises!**

## Promises

### What is a promise?
It returns an object containing data (or an error if something went wrong) supplied within the function passed into it.  The data comes from a function passed into it.  We use the `resolve` and `reject` parameters passed into this function as to whether we successfully returned data (`resolve`) or if we need to throw an error. 

```javascript
function get(url){
    return new Promise((resolve, reject)=>{

    const http = new XMLHttpRequest();
    http.open('GET', url);
    http.onreadystatechange = ()=>{
        if(http.readyState == 4 && http.status == 200){
            resolve(JSON.parse(http.response));
        }else if(http.readyState == 4 && http.status != 200){
            reject(http.statusText);
        }
    }
    http.send();
    });
}

get('json/animals.json').then((animals)=>{
    console.log(animals);
    return get("json/colours.json")
})
.then((colours)=>{
    console.log(colours);
    return get("json/people.json")})
.then((people)=>{
    console.log(people);
}).catch((err)=>{
    console.log(err);
});
```

When we call a function returning a promise, we can tag on  `.then`  which allows us to pass in the return of the resolve from the last step as a parameter.  We can then do something with this data, such as log it to the console...and/or call the promise function again with different parameters *(as above)*.

This looks a lot cleaner and easier to manage than just using **callbacks**.