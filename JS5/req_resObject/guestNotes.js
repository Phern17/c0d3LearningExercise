const express = require('express')
const fs = require('fs')
const app = express()

const filePath = './messagesFile.txt'
let messages = []


// let txt file be our database, once the server is started, 
// it will automatically go to the database to grab the file
// and push whatver inside the file to an array
fs.readFile(filePath, (err, data)=> {
    if (err) {
        return console.log(`unable to open the text file`)
    }

    messages = [...data.toString().split(',')]
})

app.get('/messages', async(req, res)=> {
    const displayNotes = messages.reduce((acc, e)=> {
        return `${acc}<h3>${e}</h3>`
    }, '')   
    
    return res.send(`
        <div class="container">
            ${displayNotes}
        </div>
        <hr>
        <textarea name="" id="newMsg" cols="30" rows="10"></textarea>
        <button class="submitBtn">Submit</button>
        <script>
            const newMsg = document.querySelector('#newMsg')
            const submitBtn = document.querySelector('.submitBtn')

            submitBtn.addEventListener('click', ()=> {
                fetch('./messages/add?content=' + newMsg.value)
                newMsg.value = ''
                alert('submitted. Refreshing the page to see your message')
                window.location.reload()
            })
        </script>
    `)
    
})

app.get('/messages/add', (req, res)=> {
    const latestMsg = req.query.content
    console.log(latestMsg)
    messages.unshift(latestMsg)
    const outputMsg = messages.reduce((acc, e, i)=> {
        if (i === messages.length - 1)
            return `${acc}${e}`
        return `${acc}${e},`
    }, '')

    fs.writeFile(filePath, outputMsg, ()=> {
        console.log("File written successfully\n");
    })

})

app.listen(3000)