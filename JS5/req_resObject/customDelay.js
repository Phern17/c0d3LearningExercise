const express = require('express')

const app = express()

app.get('/delayed?:milisecond', async(req, res)=> {
    const delayTime = req.query.time
    
    console.log(delayTime)
    setTimeout(()=> {
        return res.send(`
            <h1>Here's your response after ${delayTime} milliseconds.</h1>
        `)
    }, parseInt(delayTime))
})

app.listen(3000)