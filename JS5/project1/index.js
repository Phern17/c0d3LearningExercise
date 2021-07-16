const express = require('express') 
const { v4: uuid } = require('uuid')
const fs = require('fs')
const app = express() // Use the express library to create an app

let countVisit = 0
// whenever a request comes in at the path '/hello
// you send back some HTML!
app.get('/hello', (req, res)=> {
    res.send("<h1>Hello Dog</h1>")
})

app.delete('/hello', (req, res)=> {
    res.send("ok")
})

app.get('/count', async (req, res)=> {
    console.log(countVisit)
    countVisit += 1
    return res.send(`<h1>${countVisit}</h1>`)
})

app.get('/delay', async (req, res)=> {
    setTimeout(()=> {
        return res.send('<h1>After 5 sec, nothing happened.</h1>')
    }, 5000)
})

app.get('/getfile', async (req, res)=> {
    fs.readFile('./hello.txt', (err, data)=> {
        if (err) return res.status(500).send('Error: Error reading file')
        res.send(`<h1>${data}</h1>`)
    })   
})

let visitTimes = 0
const greet = "Hello World!"

app.get('/abtest', async(req, res)=> {
    visitTimes = (visitTimes + 1) % 5 
    if (visitTimes === 0) {
        res.send(`<h1 style="color: green">${greet}</h1>`)
    }else {
        res.send(`<h1>${greet}</h1>`)
    }
})

// return a string for response to send back to user.
// it should take in a browser name, and allocate the colors 
// diferently for each of the browser 
const changeColor = (browserName) => {
    color_code = 'black'
    switch (browserName.toLowerCase()) {
        case 'opera':
            color_code = 'red'
            break;
    
        case 'chrome':
            color_code = 'blue'
            break;

        default:
            color_code = 'yellow'
    }

    return `<h1 style='color:${color_code}'>Hello, ${browserName} user</h1>`
}

// show different color for users of different browser 
app.get('/browser', async(req, res)=> {
    const ua = req.get('sec-ch-ua').toLowerCase()
    let browserName = 'IE/Edge/Safari/Mozilla FireFox'

    if(ua.includes('opera')){
        browserName = 'Opera'    
    } 
    else if (ua.includes('google chrome')) {
        browserName = 'Chrome'
    }

    res.send(changeColor(browserName))
})

// allow browser from other domain name to send a request to your server
// for all /api/* paths 
app.options('/api/*', async(req, res)=> {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Credentials'
    )

    res.send('ok')
})

app.get('/api/*', async(req, res)=> {
    res.send('<h1>Ok la, abang</h1>')
})

// show how many distinct users have visited a site - the industry standard is to use
// cookies to track users.
let uniqueVisitors = 0

// assuming we have the cooking string which is like: hmmm=1626162578975; guid=373d8a84-8105-45e9-a126-a4f10d5e7b82
app.get('/distinct', (req, res)=> {
    const cookie = req.get('cookie') || '' // get cookie from user's browser, else set to empty string
    // cookie from the req headers will be split into an array, then find within the array if it
    // includes 'guid=', if it does then assign it to the string that containt guid=
    //, else assign it to an empty string
    const cookieStr = cookie.split(';').find((str)=> {
        return str.includes('guid=')
    }) || ''

    let guid = cookieStr.split('=')[1]
    if (cookieStr) {
        return res.send(`
            <h1>You have been indentified with guid ${guid}</h1>
            <h3>Distinct Number of Visitor Count: ${uniqueVisitors}.</h3>
        `)
    }

    uniqueVisitors += 1
    guid = uuid()
    res.set('set-cookie', `guid=${guid}`)
    res.send(`
    <h1>You have been ASSIGNED a guid ${guid}</h1>
    <h3>Distinct Number of Visitor Count: ${uniqueVisitors}.</h3>
    `)
})

let userIndex = 0
app.get('/ab', async(req, res)=> {
    let colorCode = 'black'

    // check if there's a cookie set on the request
    const cookie = req.get('cookie') || ''

    const cookieStr = cookie.split(';').find(str=> {return str.includes('value=')}) || ''
    
    let visitorKey = cookieStr.split('=')[1]
    if (!visitorKey){
        visitorKey = userIndex
        userIndex += 1
    }

    if (!(visitorKey % 3)) {
        colorCode = 'red'
    }

    res.set('set-cookie', `value=${visitorKey}`)
    return res.send(`
        <h1 style='color: ${colorCode}'>Hello World</h1>
    `)
})

app.listen(3000) // Your app needs to listen to a port number.