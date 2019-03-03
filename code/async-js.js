window.onload = ()=>{

    // CALLBACK FUNCTIONS

    // JQUERY METHOD
    $.ajax({
        url: 'json/animals.json',
        type: 'GET',
        success: ((data)=>{
            console.log(data);
            $.ajax({
                url: 'json/colours.json',
                type: 'GET',
                success: ((data)=>{
                    console.log(data);
                    $.ajax({
                        url: 'json/people.json',
                        type: 'GET',
                        success: ((data)=>{
                            console.log(data);
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
        }),
        error: ((data)=>{
            console.log(data.statusText);
        })
    })


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


    // PROMISES

    function get(url){
        return new Promise((resolve, reject)=>{
            
            //JQUERY METHOD
            $.ajax({
                url: url,
                type: 'GET',
                success: ((data)=>{ resolve(data) }),
                error: ((data)=>{ reject(data.statusText); })
            });

            //VANILLA JAVASCRIPT METHOD
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

    // GENERATORS (With JQuery)

    genwrap(function*(){
        var animals = yield $.get('json/animals.json');
        console.log(animals);

        var colours = yield $.get('json/colours.json');
        console.log(colours);

        var people = yield $.get('json/people.json');
        console.log(people);
    })

    function genwrap(generator){
        gen = generator();
        function handler(yielded){
            if(!yielded.done){
                yielded.value.then((data)=>{ return handler(gen.next(data))});
            }
        }
        return handler(gen.next());
    }
    

    // BONUS: FETCH API
    fetch('json/animals.json')
    .then((response)=>{ 
        if(response.ok){
            response.json().then((myJSON)=>{console.log(myJSON)})
        }else{
        throw new Error('Animals failed')
        }
    })
    .then(fetch('json/colours.json')
    .then((response)=>{ 
        if(response.ok){
            response.json().then((myJSON)=>{console.log(myJSON)})
        }else{
        throw new Error('Colours failed')
        }
    })
    .then(fetch('json/people.json')
    .then((response)=>{ 
        if(response.ok){
            response.json().then((myJSON)=>{console.log(myJSON)})
        }else{
        throw new Error('People failed')
        }
    })))

    
    console.log('This will print before the json data!')
}