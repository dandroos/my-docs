# Asynchronous Javascript (Callbacks, Promises and Generators) <!-- omit in toc --> 

- [What is Async Javascript?](#what-is-async-javascript)
- [Callback functions](#callback-functions)
  - [What are callback functions?](#what-are-callback-functions)
  - [Examples](#examples)
- [Promises](#promises)
  - [What are promises?](#what-are-promises)
  - [Examples](#examples-1)
- [Generators](#generators)
  - [What are generators?](#what-are-generators)
  - [How do we set up a generator?](#how-do-we-set-up-a-generator)
  - [Example](#example)
  - [Walkthrough](#walkthrough)
## What is Async Javascript?
Asynchronous Javascript are JavaScript methods that run without blocking the flow of code.

## Callback functions
### What are callback functions?
These are functions that are called when a different function has finished performing its task *(hence 'callback')*.  Here is an example of fetching API JSON data via callback functions....

[Top](#)

### Examples
```javascript
// JQUERY METHOD
$.ajax({
    url: 'json/animals.json',
    type: 'GET',
    success: ((data)=>{ // < Callback function invoked
        console.log(data);
        $.ajax({
            url: 'json/colours.json',
            type: 'GET',
            success: ((data)=>{ // < Callback function invoked
                console.log(data);
                $.ajax({
                    url: 'json/people.json',
                    type: 'GET',
                    success: ((data)=>{ // < Callback function invoked
                        console.log(data);
                    }),
                    error: ((data)=>{
                        console.log(data.statusText); // statusText tells us what went wrong
                    })
                })
            }),
            error: ((data)=>{
                console.log(data.statusText);
            })
        })
    }),
    error: ((data)=>{
        console.log(data.statusText);
    })
})
```
```javascript
// VANILLA JS METHOD
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
                    }
                    else if(http.readyState == 4 && http.status != 200){
                        console.log('Something went wrong while fetching People')
                    }
                    }
                    http.send();
                })();
            }
            else if(http.readyState == 4 && http.status != 200){
                console.log('Something went wrong while fetching Colours')
            }
            }
            http.send();
        })();
    }else if(http.readyState == 4 && http.status != 200){
        console.log('Something went wrong while fetching Animals')
    }
    }
    http.send();
}
getData(); // < Call to the function!
console.log('This will print before the json data!')
```

While the above code does work, what we can see is known as a quickly-growing 'triangle of death' and it's also known as 'callback hell'.  Callbacks are ok when one additional task needs to be performed, but another method of retrieving data by asynchronous means is more preferable here.  Enter **promises!**

[Top](#)

## Promises

### What are promises?
It is a 'promise' to our app that JavaScript will return something (in the form of an object) containing data, so the main body of code can continue.  The eventual return of the `promise` will hopefully include the data we want or it'll return an error if something went wrong.  The data comes from a function passed into it as a parameter.  We use the `resolve` and `reject` parameters on this function to deal with the eventualities of whether everything went ok (`resolve`) or if we need to throw an error (`reject`). 

[Top](#)

### Examples
```javascript
//JQUERY METHOD
function get(url){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: url,
            type: 'GET',
            success: ((data)=>{ resolve(data) }),
            error: ((data)=>{ reject(data.statusText); })
        });
    }
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

```javascript
//VANILLA JS METHOD
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

[Top](#)

When we call a function returning a promise, we can tag on  `.then`  which allows us to pass in the return of the resolve from the last step as a parameter.  We can then do something with this data, such as log it to the console...and/or call the promise function again with different parameters *(as above)*.  We can also add a `.catch` on the end incase we get any errors.

This looks a lot cleaner and easier to manage than just using **callbacks**.

[Top](#)

## Generators

### What are generators?
A generator looks like a function, but behaves like an iterable object.  We can, in essence, pause to do something with the data at `yield` points before returning data (optional) and resuming the generator.  This can perform asynchronous tasks, as a generator inherits promise functionality.

[Top](#)

### How do we set up a generator?
To set up a generator we can call a function but pass in a generator which, on the surface, seems to be a function but it works like an iterable object (denoted by a `*` after the `function` keyword, so that JavaScript knows it is a generator).  Generators read yield lines from right to left.  Below is an example....

[Top](#)

### Example
```javascript
    genWrap(function*(){
        var animals = yield $.get('json/animals.json');
        console.log(animals);

        var colours = yield $.get('json/colours.json');
        console.log(colours);

        var people = yield $.get('json/people.json');
        console.log(people);
    })

    function genWrap(generator){
       var gen = generator();
        function handler(yielded){
            if(!yielded.done){
                yielded.value.then((data)=>{ return handler(gen.next(data))});
            }
        }
        return handler(gen.next());
    }

    console.log('This will print before the json data!')
```
It looks a lot cleaner and easier to manage than the above examples (helped by usage of JQuery).
> NOTE that we are using JQuery to handle the get requests.

[Top](#)

### Walkthrough
1. We call the `genwrap` function, passing in the generator (note the `function*`) as a parameter.
2. We store the generator (which is basically an interable object) in a variable (This doesn't start it yet).
3. We make a call to the handler function, passing in an argument of `gen.next()`.

> NOTE: `gen.next()` is essentially the **play** button for our generator.

4. We go back up to our generator to fulfil the `gen.next()` call, thus starting the flow of our generator.
5. We have now grabbed the animals.json data via a JQuery `get` function and reached our first `yield`, so it'll pass that data back to the handler in the form of an object.
6. We can now carry out the `handler` function, passing in the data object we have yielded into a parameter cunningly(!) called `yielded`.
7. We check the `done` property to see if we have reached the end of the generator.
8. We haven't, so we grab the `value` property from the `yielded` object which has promise functionality built into it.  Therefore, we can use `then` to do something with that data by passing it in as a parameter to another function.
9. We use the return statement to restart the generator from the last yield point, passing the data back in.
10. The data passed back in will now be stored in the `animals` variable.
11. We log that data to the console.
12. We repeat the process from step 4 through the rest of the generator until the `done` property reads `true` when it reaches the end.
    
```javascript
    //1
    genWrap(function*(){
        var animals = /* < 10 */ yield/* < 5 */ $.get('json/animals.json'); /* < 4 */
        /* 11 */ console.log(animals);

        var colours = yield $.get('json/colours.json'); /* < 12 */
        console.log(colours);

        var people = yield $.get('json/people.json');
        console.log(people);
    })

    function genWrap(generator){
        /* 2 */     var gen = generator();
        /* 6 */     function handler(yielded){
        /* 7 */     if(!yielded.done){
        /* 8 */         yielded.value.then((data)=>{ 
        /* 9 */             return handler(gen.next(data))
                        });
            }
        }
        /* 3 */ return handler(gen.next());
    }

    console.log('This will print before the json data!')
```
[Top](#)