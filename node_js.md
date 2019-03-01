# Node.js <!-- omit in toc -->
## Contents <!-- omit in toc -->

- [Introduction](#introduction)
  - [What is it?](#what-is-it)
  - [What does it do?](#what-does-it-do)
  - [How does it work?](#how-does-it-work)
- [The Basics](#the-basics)
  - [The Global Object](#the-global-object)
  - [Function expressions](#function-expressions)
  - [Modules and require()](#modules-and-require)
    - [How do these work?](#how-do-these-work)
    - [What if we need to export multiple functions/variables?](#what-if-we-need-to-export-multiple-functionsvariables)
  - [The Node Event Emitter](#the-node-event-emitter)
    - [What is it?](#what-is-it-1)
    - [How do I set up a custom event?](#how-do-i-set-up-a-custom-event)
    - [How do I trigger that event?](#how-do-i-trigger-that-event)
    - [Do I have to create a separate event emitter for every instance of an object?](#do-i-have-to-create-a-separate-event-emitter-for-every-instance-of-an-object)
- [File System (fs)](#file-system-fs)
  - [What is it?](#what-is-it-2)
  - [How do I import this module?](#how-do-i-import-this-module)
  - [Reading, writing and deleting files](#reading-writing-and-deleting-files)
    - [How do I read files?](#how-do-i-read-files)
      - [Synchronously (wait until read)](#synchronously-wait-until-read)
      - [Asynchronously (don't wait until read)](#asynchronously-dont-wait-until-read)
    - [How do I write files?](#how-do-i-write-files)
      - [Synchronously (wait until written)](#synchronously-wait-until-written)
      - [Asynchronously (don't wait until written)](#asynchronously-dont-wait-until-written)
    - [How do I delete files?](#how-do-i-delete-files)
      - [Synchronously (wait until deleted)](#synchronously-wait-until-deleted)
      - [Asynchronously (don't wait until deleted)](#asynchronously-dont-wait-until-deleted)
  - [Directories](#directories)
    - [How do I create a directory?](#how-do-i-create-a-directory)
      - [Synchronously (wait until created)](#synchronously-wait-until-created)
      - [Asynchronously (don't wait until created)](#asynchronously-dont-wait-until-created)
    - [How do I delete a directory?](#how-do-i-delete-a-directory)
      - [Synchronously (wait until deleted)](#synchronously-wait-until-deleted-1)
      - [Asynchronously (don't wait until deleted)](#asynchronously-dont-wait-until-deleted-1)
    - [What if the directory contains a file?](#what-if-the-directory-contains-a-file)
- [Clients and Servers](#clients-and-servers)
  - [How do clients and servers work?](#how-do-clients-and-servers-work)
    - [What are protocols?](#what-are-protocols)
    - [What is a socket?](#what-is-a-socket)
    - [How is data on a server delivered to a client browser?](#how-is-data-on-a-server-delivered-to-a-client-browser)
    - [What is a port?](#what-is-a-port)
  - [How do I create a server?](#how-do-i-create-a-server)
  - [How do I set it up?](#how-do-i-set-it-up)
  - [Streams and Buffers](#streams-and-buffers)
    - [What are the different types of stream we can use in Node?](#what-are-the-different-types-of-stream-we-can-use-in-node)
    - [How do I create a readstream?](#how-do-i-create-a-readstream)
    - [How do I create a writestream?](#how-do-i-create-a-writestream)
    - [Is there a more efficient way of making a readstream and writestream work together?](#is-there-a-more-efficient-way-of-making-a-readstream-and-writestream-work-together)
    - [How can I use this with my server response?](#how-can-i-use-this-with-my-server-response)
  - [Serving HTML and JSON](#serving-html-and-json)
    - [How do I return an HTML file in my server response?](#how-do-i-return-an-html-file-in-my-server-response)
    - [How do I return JSON data in my server response?](#how-do-i-return-json-data-in-my-server-response)
  - [Basic routing (without Express)](#basic-routing-without-express)
- [Express](#express)
  - [What is it?](#what-is-it-3)
  - [How do I install it?](#how-do-i-install-it)
  - [How do I use it?](#how-do-i-use-it)
  - [What are the basic routing functions in Express?](#what-are-the-basic-routing-functions-in-express)
    - [GET](#get)
      - [What if I want to set up and access a URL parameter?](#what-if-i-want-to-set-up-and-access-a-url-parameter)
  - [Template (View) engine](#template-view-engine)
    - [What is it?](#what-is-it-4)
    - [How do I install and configure EJS?](#how-do-i-install-and-configure-ejs)
    - [How do I use EJS?](#how-do-i-use-ejs)
    - [Can I use javascript in my EJS files?](#can-i-use-javascript-in-my-ejs-files)
    - [How do I set up and use elements that I want on all/multiple pages?](#how-do-i-set-up-and-use-elements-that-i-want-on-allmultiple-pages)
  - [Static files and Middleware](#static-files-and-middleware)
    - [What are static files?](#what-are-static-files)
    - [What is middleware?](#what-is-middleware)
    - [How do I tell Node/Express where to find my static files?](#how-do-i-tell-nodeexpress-where-to-find-my-static-files)
  - [Query strings](#query-strings)
    - [How can I access query string parameters in Express?](#how-can-i-access-query-string-parameters-in-express)
  - [Handling POST requests](#handling-post-requests)
    - [What do I need to handle a POST request in Express?](#what-do-i-need-to-handle-a-post-request-in-express)
    - [How do I install body-parser?](#how-do-i-install-body-parser)
    - [How do I use body-parser?](#how-do-i-use-body-parser)
    - [What about mailing that form?](#what-about-mailing-that-form)
  - [Using Mongo/Mongoose](#using-mongomongoose)
    - [How do I get started?](#how-do-i-get-started)
    - [What is Mongoose?](#what-is-mongoose)
    - [How do I connect Mongoose to a Mongo database?](#how-do-i-connect-mongoose-to-a-mongo-database)
    - [How do I create a model to use with my Mongo database?](#how-do-i-create-a-model-to-use-with-my-mongo-database)
    - [How do I use Mongoose to retrieve data from the database to the front end via a GET request?](#how-do-i-use-mongoose-to-retrieve-data-from-the-database-to-the-front-end-via-a-get-request)
    - [How do I use Mongoose to send data to the database from a form on the front end via a POST request?](#how-do-i-use-mongoose-to-send-data-to-the-database-from-a-form-on-the-front-end-via-a-post-request)
    - [How do I use Mongoose to delete data from the database via a DELETE request?](#how-do-i-use-mongoose-to-delete-data-from-the-database-via-a-delete-request)

## Introduction
### What is it?
Node.js is a platform that allows us to communicate with a computer/server via JavaScript.

### What does it do?
Put simply, it can **read**, **delete** and **update** files.  It can also easily communicate with databases.

### How does it work?
Rather confusingly, Node.js isn't written in JavaScript but in C++.  It uses Google's **V8** engine (also written in C++) to basically translate JavaScript to machine code that a computer/server can understand.

[Top](#)

## The Basics
### The Global Object
As a comparison, when we write JavaScript in a browser, the global object is the **window** object.

```javascript
// We wouldn't need to type this...
window.alert("Hello!");

// We could just type...
alert("Hello!");
```

Like `alert` and `console` in the `window` object, there are commands that are available 'out of the box' in Node within the **Global** object.

For example we can use....

```javascript
console.log("Hello!"); // This will show in the terminal
```

and...

```javascript
setTimeout(()=>{
    console.log("2 seconds have passed!")
}, 2000);
```

A full list of ***Globals*** is available [here](https://nodejs.org/api/globals.html)

[Top](#)

### Function expressions
In regular JavaScript, a function looks like this...

```javascript
function sayHi(){
    console.log("Hi!");
}
```

However, in Node.js functions are often written as **expresssions**...

```javascript
var sayBye = function(){
    console.log("Bye!");
}

sayBye();
```

There may even be functions that carry out other functions!...

```javascript
function callFun(fun){
    fun();
}

var sayBye = function(){
    console.log("Bye!");
}

callFun(sayBye);
```

[Top](#)

### Modules and require()
#### How do these work?
A typical Node.js app would have functionality split across various **modules** (multiple .js files).  For example, we may have a `count.js` that looks something like this...

```javascript
// count.js
counter((arr)=>{
    return console.log(`This array contains ${arr.length} elements.`)
})

module.exports = counter;
```

To access this function in our `app.js` file, we would need to use the `require` function and store the return in a variable.  The return will be whatever we put in our `module.exports` in the file we are 'requiring'.

```javascript
// app.js
var counter = require('count')
```

> **NOTE**: We don't need to append '.js' onto the end of the path, as Node knows we are looking for a JavaScript file.

We can now call the `counter` method from the `count.js` file in the `app.js` file.

```javascript
// app.js
var counter = require('count')

console.log(counter(['Red', 'Orange', 'Yellow']));
```

[Top](#)

#### What if we need to export multiple functions/variables?
we can use various **module patterns** to export multiple functions and/or variables.

**Method 1** *- Export them separately at the end*
```javascript
// maths.js
var adder = (a, b)=>{
    return console.log(`${a} + ${b} = ${a+b}.`);
}

var subtracter = (a, b)=>{
    return console.log(`${a} - ${b} = ${a-b}.`);
}

var century = 100;

module.exports.adder = adder;
module.exports.subtracter = subtracter;
module.exports.century = century;
```

**Method 2** *- Export them at the same time as declaring them*

```javascript
// maths.js
module.exports.adder = (a, b)=>{
    return console.log(`${a} + ${b} = ${a+b}.`);
}

module.exports.subtracter = (a, b)=>{
    return console.log(`${a} - ${b} = ${a-b}.`);
}

module.exports.century = 100;
```

**Method 3** *- Export them at the end in an object*

```javascript
// maths.js
var adder = (a, b)=>{
    return console.log(`${a} + ${b} = ${a+b}.`);
}

var subtracter = (a, b)=>{
    return console.log(`${a} - ${b} = ${a-b}.`);
}

var century = 100;

module.exports = {
    adder: adder,
    subtracter: subtracter,
    century: century
}
```

All of these *module patterns* will work the same in the following `app.js` file...

```javascript
// app.js
var maths = require('maths');

console.log(maths.adder(2,3));
console.log(maths.subtracter(5,3));
console.log(maths.adder(maths.century,3));
```

[Top](#)

### The Node Event Emitter
#### What is it?
It is functionality that allows us to configure custom events to our objects and then fire (AKA **emit**) them.

#### How do I set up a custom event?
First of all, we need to **require** the built-in **events** module.

```javascript
var events = require('events');
```

Now, we can use that to set up the event.

```javascript
var myEvent = new events.EventEmitter();

myEvent.on('pullTrigger', (noise)=>{
    console.log(noise);
})
```

#### How do I trigger that event?
Once the event is set up, we can fire it off using the `emit` function.

```javascript
myEvent.emit('pullTrigger', 'BANG!!!');
```

[Top](#)

#### Do I have to create a separate event emitter for every instance of an object?
Nope.  we can use the **inherits** functionality in the built-in **util** module so that every time an instance of that object is created, it will inherit the EventEmitter.

```javascript
var events = require('events');
var util = require('util');

function Person(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var john = new Person('John');
var mary = new Person('Mary');
var people = [john, mary];

people.forEach((person)=>{
    person.on('getPunched', (noise)=>{ 
        console.log(`${person.name} got punched.  He said "${noise}"`)
        });
})

john.emit('getPunched', 'OWWWW!');
```

[Top](#)

## File System (fs)
### What is it?
The file system is a module built-in to Node that allows us to interact with files, like reading, saving, deleting etc.

### How do I import this module?
```javascript
var fs = require('fs');
```

### Reading, writing and deleting files
#### How do I read files?
##### Synchronously (wait until read)
This can be achieved with the `readFileSync` function.  It takes two parameters.  The first is the file path and the second is the encoding (for a simple text file this would be `utf8`).

```javascript
// app.js
var fs = require('fs');

// NOTE: This assumes the text file is stored in the same location as app.js
var myText = fs.readFileSync('my-text.txt', 'utf8');
console.log(myText);
```

The above method will wait until the text file has been read before continuing with any further code (AKA synchronous method).

##### Asynchronously (don't wait until read)
This method will allow Node to read the file in the background while it cracks on with the rest of the program (AKA asynchronous method)!  It requires use of the `readFile` function.  The setup is slightly different, in that it requires a 3rd parameter passed into it which will be a callback function when the file is read.  This function needs error and data parameters passed into it.

```javascript
// app.js
var fs = require('fs');

// NOTE: This assumes the text file is stored in the same location as app.js
fs.readFile('my-text.txt', 'utf8', (err, data)=>{
    err ? console.log(err) : console.log(data);
});
```

[Top](#)

#### How do I write files?
Much like reading files, we can write files synchronously and asynchronously.

##### Synchronously (wait until written)
This uses the `writeFileSync` function. The first parameter for this method is the file path we want to write to and the second parameter is the content we want to write inside that file.

```javascript
//app.js
var fs = require('fs');

var myText = 'This is some text';

//NOTE: This will write the file inside the same dir as app.js
fs.writeFileSync('test-write.txt', myText);
```

The above method will wait until the text file has been written before continuing with any further code (AKA synchronous method).

##### Asynchronously (don't wait until written)
This uses the `writeFile` function.  Like the `readFile` function, it doesn't stop the code from progressing until it's done and instead fires off a callback function (passed in as the 3rd parameter), which only takes an error parameter, when the writing is complete.

```javascript
//app.js
var fs = require('fs');

var myText = 'This is some text.';

fs.writeFile('test-write.txt', myText, (err) =>{ 
    err ? console.log(err) : console.log('File saved!');
});
```

[Top](#)

#### How do I delete files?
Again, this can be performed synchronously and asynchronously.

##### Synchronously (wait until deleted)
This uses the `unlinkSync` function. The first (and only) parameter for this method is the file path we want to delete.

```javascript
//app.js
var fs = require('fs');

//NOTE: This assumes the text file exists and it's in the same dir
fs.unlinkSync('my-text.txt');
```

The above method will wait until the text file has been deleted before continuing with any further code (AKA synchronous method).

##### Asynchronously (don't wait until deleted)
This uses the `unlink` function.  Like the `readFile` and `writeFile` functions, it doesn't stop the code from progressing until it's done and instead fires off a callback function (passed in as the 2nd parameter), which only takes an error parameter, when the delete is complete.

```javascript
//app.js
var fs = require('fs');

//NOTE: This assumes the text file exists and it's in the same dir
fs.unlink('my-text.txt', (err)=>{
    err ? console.log(err) : console.log('File deleted!');
});
```

[Top](#)

### Directories
#### How do I create a directory?
##### Synchronously (wait until created)
This uses the `mkdirSync` function.  It only needs the path where we want to create a directory passed into it as a parameter.

```javascript
//app.js
var fs = require('fs');

//NOTE: This will create the directory in the same dir as app.js
fs.mkdirSync('test directory');
```

[Top](#)

##### Asynchronously (don't wait until created)
This uses the `mkdir` function.  It needs the path where we want to create a directory passed into it as the first parameter.  It also needs a callback function passed in as the second parameter (this only needs an error handler passed in).

```javascript
//app.js
var fs = require('fs');

//NOTE: This will create the directory in the same dir as app.js
fs.mkdir('test directory', (err)=>{
    err ? console.log(err) : console.log('Directory created!')
});
```

[Top](#)

#### How do I delete a directory?
##### Synchronously (wait until deleted)
This uses the `rmdirSync` function.  It only needs the path of the directory we want to delete passed into it as a parameter.

```javascript
//app.js
var fs = require('fs');

//NOTE: This assumes the directory is in the same dir as app.js
fs.rmdirSync('test directory');
```

[Top](#)

##### Asynchronously (don't wait until deleted)
This uses the `rmdir` function.  It needs the path of the directory we want to delete passed into it as the first parameter.  It also needs a callback function passed in as the second parameter (this only needs an error handler passed in).

```javascript
//app.js
var fs = require('fs');

//NOTE: This assumes the directory is in the same dir as app.js
fs.rmdir('test directory', (err)=>{
    err ? console.log(err) : console.log('Directory deleted!')
});
```

[Top](#)

#### What if the directory contains a file?
We first need to delete the file before deleting a directory.  We can pass the `rmdir` into the callback function of the `unlink` function.

```javascript
//app.js
const fs = require('fs');

//NOTE: This assumes only 'my-file.txt' exists in the dir
fs.unlink('./test directory/my-file.txt', (err)=>{
    if(err){console.log(err)} else{
        fs.rmdir('test directory', (err)=>{
            err ? console.log(err) : console.log('Directory deleted!');
        })
    }
})
```

[Top](#)

## Clients and Servers
### How do clients and servers work?
A client will **request** data from the server and the server will **respond** to that request and serve the data to the client via protocols.

#### What are protocols?
Protocols are a set of communication rules that both the **client** and **server** agree upon.  Common examples are Hypertext Transfer Protocol (http) and File Transfer Protocol (ftp).

#### What is a socket?
A socket is the connection between a client and a server.

#### How is data on a server delivered to a client browser?
This is done via the TCP (transmission control protocol), which essentially splits data into small chunks (called **packets**) for the quickest delivery.

#### What is a port?
A port can be thought of as a communication channel on a server that listens for requests.

### How do I create a server?
To create a server, we need to use the `http` module built into Node and then, for convenience, store a server in a `const`.

```javascript
const http = require('http');

const server = http.createServer();
```

[Top](#)

### How do I set it up?
Easy!  Just know that when we use the `createServer` function, we pass in a function that takes in **request** and **response** parameters.  

```javascript
const http = require('http');

const server = http.createServer((req, res){

});
```

So that the server knows how to serve the response, we also need to pass in **response headers** using the `writeHead` function.  The first parameter of this function is the **status** (e.g. 200 = everything OK! or 404 = can't be found).  The second parameter is an object containing details of the headers.

```javascript
const http = require('http');

const server = http.createServer((req, res){
    //NOTE: In this example, we are telling the server to serve up the response as plain text.
    res.writeHead(200, {'Content-Type': 'text/plain'});
});
```

Then, we need to use the `end` function on the response.  We pass into this what we want to return to the browser.

```javascript
const http = require('http');

const server = http.createServer((req, res){
    //NOTE: In this example, we are telling the server to serve up the response as plain text.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I am the text content')
});
```

The above code still won't work because we have not set up a port for the server to listen on.  We use the `listen` function for this, passing in the port number as the first parameter and the server IP address as the second parameter (*IMPORTANT: This must be a string*).  Also, common practice is to log a message to say we are listening.

```javascript
const http = require('http');

const server = http.createServer((req, res)=>{
    //NOTE: In this example, we are telling the server to serve up the response as plain text.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I am the text response');
});

const port = 3000;

server.listen(port, '127.0.0.1');
console.log(`Listening on port ${port}`);
```

[Top](#)

### Streams and Buffers
#### What are the different types of stream we can use in Node?
We can make use of **readstreams**, **writestreams** and **duplexes** (read and write combined).

#### How do I create a readstream?
We need to use the `createReadStream` function from the File System (`fs`) module.  The first parameter is the path to the file we want to read.  The second (optional) parameter is the encoding. A readstream has a built in event called `'data'` which is triggered when the buffer is full. 

```javascript
const fs = require('fs');

var myReadStream = fs.createReadStream('dummy.txt', 'utf8');

myReadStream.on('data', (chunk)=>{
    console.log('NEW CHUNK');
    console.log(chunk)
});
```

[Top](#)

#### How do I create a writestream?
We need to use the `createWriteStream` function from the File System (`fs`) module.  The only parameter is the path we want to write to.

```javascript
const fs = require('fs');

var myReadStream = fs.createReadStream(`${__dirname}/dummy.txt`, 'utf8');
var myWriteStream = fs.createWriteStream(`${__dirname}/new-dummy.txt`);

myReadStream.on('data', (chunk)=>{
    myWriteStream.write('NEW CHUNK');
    myWriteStream.write(chunk)
});
```

#### Is there a more efficient way of making a readstream and writestream work together?
Yes!!! We can use the `pipe` function for this!

```javascript
const fs = require('fs');

var myReadStream = fs.createReadStream(`${__dirname}/dummy.txt`, 'utf8');
var myWriteStream = fs.createWriteStream(`${__dirname}/new-dummy.txt`);

myReadStream.pipe(myWriteStream);
```

[Top](#)

#### How can I use this with my server response?
Well....a server response is a writestream!  So we can *pipe* data directly to the response!

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    
    var myReadStream = fs.createReadStream(`${__dirname}/dummy.txt`, 'utf8');
    myReadStream.pipe(res);
})

const port = 3000;

server.listen(port, '127.0.0.1');
console.log(`Listening on port ${port}`);
```

>   NOTE: We no longer need to use the 'end' function as the pipe will automatically 'end' the response.

[Top](#)

### Serving HTML and JSON
#### How do I return an HTML file in my server response?
Simple!  Just set the response header `'Content-Type'` to `'text/html'` and set the path to our HTML file in the readstream.

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    var myReadStream = fs.createReadStream(`${__dirname}/index.html`, 'utf8');
    myReadStream.pipe(res);
})

const port = 3000;

server.listen(port, '127.0.0.1');
console.log(`Listening on port ${port}`);
```

[Top](#)

#### How do I return JSON data in my server response?
For this, we need to set the response header `'Content-Type'` to `'application/json'` and use the `JSON.stringify` function to turn our JSON data object into a string so that we can pass it into the `end` method.

```javascript
const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var myData = {
        name: 'Ballbag',
        job: 'Being a ballbag in general',
        age: 23
    }
    res.end(JSON.stringify(myData));
})

const port = 3000;

server.listen(port, '127.0.0.1');
console.log(`Listening on port ${port}`);
```

[Top](#)

### Basic routing (without Express)
For basic routing we can use the `url` property of the `req` object.

```javascript
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
        // The majority of data returned will be HTML files, so let's set that up as a default.
        res.writeHead(200,{'Content-Type':'text/html'});
        switch(req.url){
            case '/':
                fs.createReadStream(`${__dirname}/index.html`, 'utf8').pipe(res);
                break;
            case '/contact':
                fs.createReadStream(`${__dirname}/contact.html`, 'utf8').pipe(res);
                break;
            case '/api':
                // As this is an API, we need to change the content to application.json.
                res.writeHead(200, {'Content-Type':'application.json'});
                var myData = {name: 'Bell', address: 'King Road', age: 50};
                res.end(JSON.stringify(myData));
                break;
            // We need to create a default to handle routes that can't be found.
            default:
                // We need to rewrite the head so the status is 404.
                res.writeHead(404,{'Content-Type':'text/html'});
                fs.createReadStream(`${__dirname}/404.html`, 'utf8').pipe(res);
        }
    });

const port = 3000;
server.listen(port, '127.0.0.1');
console.log(`Listening on port ${port}`);
```

[Top](#)

## Express
### What is it?
Express is a Node.js module that helps us to perform efficient routing and interact with various templating engines.

### How do I install it?
It is installed via the Node Dependency Manager(NPM).  In the terminal type...

    npm install express -save

> NOTE: The `-save` flag tells Node that we want to save Express as a dependency for the application.

### How do I use it?
Like all Node modules we first have to **require** it.  This returns a function which, in turn, allows us to access all of the functionality in Express.  Common practice is to call the initial function and store that in a `const` called `app`.

```javascript
const express = require('express');

const app = express();
```

[Top](#)

We also need to make sure that Express is listening!  We use the `listen` function still, but now we don't need to pass in the second url parameter in.

```javascript
const express = require('express');

const app = express();

app.listen(3000);
```

Now we have unleashed the power of Express!

[Top](#)

### What are the basic routing functions in Express?
#### GET
To set up a GET route we need to use the `get` function, which takes in two parameters.  The first is the route path and the second is the request/response function.  Express builds additional functions into the request and response objects, so we can just use the `send` function and Express automatically knows what the content type is.  This means we don't have to set the **response header** manually!

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("You've reached the homepage!");
})

app.get('/contact', (req, res)=>{
    res.send("You've reached the contact page!");
})

app.listen(3000);
```

[Top](#)

##### What if I want to set up and access a URL parameter?
Easy peasy! We can set up a route that has parameters.  We define a parameter in the route by inserting a `:` before it.  We can then access that in the request object via `params`.

```javascript
const express = require('express');
const app = express();

app.get('/profile/:id', (req, res)=>{
    res.send(`You requested a profile with an id of ${req.params.id}`);
})

app.listen(3000);
```

[Top](#)

### Template (View) engine
#### What is it?
Express contains functionality to interact with a view engine.  A view engine allows us to generate dynamic HTML content.  For this guide, we will use EJS.

#### How do I install and configure EJS?
We need to install it via the terminal.  Navigate to the project directory and type the following command:

    npm install ejs -save

> REMEMBER that `--save` saves the package as a dependency in the package.json file

We then need to tell Express that we want to use EJS as our view engine.  We do this by using the `set` function and passing in `view engine` as the first parameter and `ejs` as the second parameter.

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
```

[Top](#)

#### How do I use EJS?
We call the render function on the response object in the route.  By default, EJS looks for templates within a folder called **views**, so create that in the same directory as our main app file *(e.g. app.js)* and make that the place we save our .ejs templates in.  When we call an EJS template in the first parameter of the render function, we don't need to type the .ejs extension.  We can also pass in dynamic content via an object (i.e. with a key and value) as the second parameter. 

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', { name: 'Dave'});
})
```

We can now grab that content in the .ejs template by using EJS template tags.

```html
<h1>Hello <%= name %>!</h1>
```

Voila!!! We can now generate dynamic pages!

[Top](#)

#### Can I use javascript in my EJS files?
Oh yes!!  It's very straightforward.  We just use the same template tag for outputting data, but drop the `=`.  Let's say we have this in our **app.js**...

```javascript
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    var data = {name: 'Dave', age: 36, instruments: ['Piano', 'Drums', 'Guitar']};
    res.render('index', { person: data });
})

app.listen(3000);
```

We can use JavaScript in our EJS view file to cycle through and output each string in the `instruments` array...

```html
<h1>HELLOOOOO <%= person.name %>!</h1>
<p>Welcome to your amazing profile!</p>
<p>According to our records, you are <%= person.age %> and you can play:</p>
<ul>
    <% person.instruments.forEach((instrument)=>{ %>
        <li><%= instrument %></li>
    <% }); %> <!-- Don't forget to reopen the tag here to close the forEach function -->
</ul>
```

[Top](#)

#### How do I set up and use elements that I want on all/multiple pages?
It's very simple!  Use **partial templates**.  Create a sub-directory in our **views** folder called **partials**.  In this we can use save ejs files containing elements that we want to use on multiple pages (such as a header/navbar).

Let's imagine that we have created the below nav.ejs file in the **partials** folder.

```html
<h1>The best website in the world</h1>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/contact">Contact</a></li>
</ul>
```

We can insert this little snippet template in our main ejs files by using the `include` statement.

```html
<body>
    <% include partials/nav %>
    <h2>HELLOOOOO!</h2>
    <p>Welcome to this incredible website!</p>
</body>
```

> NOTE that, again, we don't need to include the .ejs file extension to the path

[Top](#)

### Static files and Middleware
#### What are static files?
Static files are essentially assets for our website (such as stylesheets, images, audio, etc).

#### What is middleware?
Middleware is functionality that handles data between the request and the response.

#### How do I tell Node/Express where to find my static files?
We can use the middleware built into Express. The function we need to call is `static`.  We need the `use` function in our main app.js file to declare this.  The first parameter for the `use` function is the url route to our static assets and the second parameter is the middleware (where we call the `static` function) we want to handle requests to this route.  In the `static` function, we need to pass in the file path to our static assets.

```javascript
const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));
```

> NOTE the above basically says 'if we set up a link on any of our pages that contain a route starting '/assets', then we need to look for anything after the trailing slash in the folder labelled 'assets''. 

[Top](#)

### Query strings
#### How can I access query string parameters in Express?
Dead simple!  There is a property attached to the request object called `query`.  This is an object that contains all the query string parameters, with useful key/value separation.

If we entered the following url in a browser:

    http://www.mysite.com/contact?name=David&age=36&job=Teacher

We can gain access to those in the `/contact` route and return it to the template *(for instance, to prepopulate a form)*.

```javascript
app.get('/contact', (req, res)=>{
    // assuming use of EJS
    res.render(contact, {person: req.query})
})
```

We can now access this object in the usual manner!

```html
<h2>Contact <%= person.name %></h2>
<p><%= person.name %> is a <%= person.age %> <%= person.job %></p>
<form action="">
    <input type="text" placeholder="Subject">
    <textarea name="" id="" cols="30" rows="10" placeholder="Contact <%= person.name %>"></textarea>
</form>
```

[Top](#)

### Handling POST requests
#### What do I need to handle a POST request in Express?
We need to install middleware that knows how to parse this data.  The most common of these (and what we will use in this guide) is **body-parser**.

#### How do I install body-parser?

    npm install body-parser -save

[Top](#)

#### How do I use body-parser?
We first need to require it in our main app.js and then to be able to parse data from an HTML form, we need to store the return of the `urlencoded` function (passing into it an object containing a boolean with a key of `extended` and a value of `false`) in a variable/constant.

> NOTE the `extended` property is about the data that can be parsed into the end data object.  If it's `false`, then it will only allow a string or an array.  If `true`, any type can be parsed.  Visit [here](https://www.npmjs.org/package/qs#readme) for more details.

```javascript
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })
```

We then have to set up the `post` route in our app.js file.  With Express' `post` method, we pass in the route path to our first parameter as usual.  Then the second parameter is the parsing middleware from **body-parser** that we stored in the `urlencodedParser` const.  Finally, we pass in the request and response inside the usual function as the third parameter.  Inside the render, we can now access and pass on the details sent in the POST request by using the `body` property of the request object.

```javascript
app.post('/contact', urlencodedParser, (req, res)=>{
    res.render('contact-success', { data: req.body });
})
```

We can now use the data object in our HTML template.  For example, after a user has submitted a form, we will probably want to redirect them to a 'thanks!' page.  We can do this by setting up that view - like contact-success.eps - and passing it into the render of the post route (as above).

```html
<!-- What your contact-success.eps could look like...-->
<% include partials/header %>
<h2>Success!!!</h2>
<p>Thanks <%= data.yourName %>!!</p>
<p>We will respond to you asap at <%= data.yourEmail %></p>
<% include partials/footer %>
```

[Top](#)

#### What about mailing that form?
This can be achieved with the [Nodemailer](https://nodemailer.com/about/) package.  Instructions to follow....

> Follow [this](https://www.youtube.com/watch?v=nF9g1825mwk) tutorial

[Top](#)

### Using Mongo/Mongoose

#### How do I get started?
Refer to my docs about Mongo to create a database and a user (so that we can read from and write to it via Express) for that database.  After we've created these, we then need to install and import `mongoose`.

    npm install mongoose -save

```javascript
const mongoose = require('mongoose');
```

[Top](#)

#### What is Mongoose?
It is a node module that contains functionality which enables us to easily communicate with a Mongo database.

#### How do I connect Mongoose to a Mongo database?
Using the `connect` function.  Simply pass in a mongo URI (including username and password parameters, so that we can access it).

```javascript
const mongoose = require('mongoose')

mongoose.connect('mongodb://testuser:testpassword@localhost:27017/todo')
```

> **THINGS TO NOTE**:
> 
> 1. 'mongodb://' is always the prefix for Mongoose to connect to a Mongo database
> 2. 'testuser' needs to be replaced with whatever username we set up after creating the database
> 3. 'testpassword' needs to be replaced with whatever password we set up after creating the database
> 4. The address that Mongoose will try to connect to needs to go after an '@' symbol.
> 5. In development, Mongo normally works on port 27017.
> 6. the final part (after the last forward slash) is the name of our Mongo database

[Top](#)

#### How do I create a model to use with my Mongo database?
We first need to create a schema (think of it like a blueprint for how we will set out our data).  To create a schema, we need to pass in the parameters via an object to a new a Mongoose `Schema` function and assign that to a constant.

```javascript
const exampleSchema = new mongoose.Schema({
    example_text_field : 'string'
})
```

Now we have the blueprint, we can create the model.  We do this by declaring another function expression, but this time with the Mongoose `model` function.  Inside the model function, we give a label to our model* and we can then pass in the schema we previously created as the second parameter.

```javascript
const exampleSchema = new mongoose.Schema({
    example_text_field : 'string'
})

const Example = mongoose.model('Example', exampleSchema);
```

> NOTE the naming convention of using capital letters for models

[Top](#)

#### How do I use Mongoose to retrieve data from the database to the front end via a GET request?
Use the `find()` function on our Mongoose model.  Pass into it an object containing the keys and values we want to return and a callback function as the second parameter. Into this callback function, pass an error and the data in. Throw the error if there is one and do something with the data if there isn't.

```javascript
const exampleSchema = new mongoose.Schema({
    example_text_field : 'string'
})

const Example = mongoose.model('Example', exampleSchema);

app.get('/example-route', (req, res)=>{
    Example.find({ exampleKey: 'example value 1'}, (err, data)={
        if(err) throw err;
        res.render('example-view', { examples: data })
    })
})
```

[Top](#)

#### How do I use Mongoose to send data to the database from a form on the front end via a POST request?
Very easily!  Use the `save` function on our Mongoose model.  Pass into the model the object of data stored in the `body` property of our request object.  The save function itself requires only one parameter, which is the callback function that we can use to refresh data on the page.

```javascript
const exampleSchema = new mongoose.Schema({
    example_text_field : 'string'
})

const Example = mongoose.model('Example', exampleSchema);

app.get('/example-route', (req, res)=>{
    Example.find({ exampleKey: 'example value 1'}, (err, data)={
        if(err) throw err;
        res.render('example-view', { examples: data })
    })
})

app.post('/example-route', urlencodedParser, (req, res)=>{
    Example(req.body).save((err, data) =>{

        if(err) throw err;
        res.json(data);
    })
})
```

[Top](#)

#### How do I use Mongoose to delete data from the database via a DELETE request?
We delete data by using the `remove` function on our Mongoose model.  First, use the `find` function to locate the record we want to delete and then append on the `remove` method.

```javascript
const exampleSchema = new mongoose.Schema({
    example_text_field : 'string'
})

const Example = mongoose.model('Example', exampleSchema);

app.get('/example-route', (req, res)=>{
    // NOTE: if we want to retrieve all results, we pass an empty object into it
    Example.find({ exampleKey: 'example value 1'}, (err, data)={
        if(err) throw err;
        res.render('example-view', { examples: data })
    })
})

app.post('/example-route', urlencodedParser, (req, res)=>{
    Example(req.body).save((err, data) =>{

        if(err) throw err;
        res.json(data);
    })
})

//NOTE: This assumes there are no whitespaces in our data. Use a regex replace if there are.
app.delete('/example-route/:example-param', (req, res)=>{
    Example.find({ exampleKey: req.params.example-param }).remove((err,data)=>{
        if(err) throw err;
        res.json(data);
    })
})
```

[Top](#)