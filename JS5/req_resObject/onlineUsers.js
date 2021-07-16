const express = require('express')
const app = express()

const lastSeen = {}

app.get('/online', async (req, res)=> {
    const userName = req.query.name
    
    if (!userName){
        return res.status(401).send('Please set a query params with name as the key and your name as the value')
    }

    lastSeen[userName] = Date.now() 
    return res.send(`
        <h1>Welcome ${userName}</h1>
        <p>Open this tab in another tab, use a different name.</p>
        <div class="namesContainer"></div>
        <script>
            const namesContainer = document.querySelector('.namesContainer')

            const render = (data) => {
                const outputRes = data.reduce((acc, e)=> {
                    return acc + '<h3>' + e +'</h3>'
                }, '')

                if (outputRes){
                    namesContainer.innerHTML = '<h2>Other Users</h2>' + outputRes
                }
            }

            const getData = () => {
                fetch('/users?name=${userName}').then((res)=> {
                    return res.json()
                }).then((body)=> {
                    console.log(body)
                    render(body)
                })

                setTimeout(()=> {
                    getData()
                }, 1000)
            }
            getData()
        </script>
    `)
})

// take care of users that closed the tab for more than a period of time
app.get('/users', (req, res)=> {
    const authorName = req.query.name
    const now = Date.now()
    lastSeen[authorName] = now // upate the user that sent the request
    Object.keys(lastSeen).forEach((name)=> {
        if (lastSeen[name] < now - 1000 * 10)
        // if last seen is > 10 seconds, remove
        delete lastSeen[name]
    }) 

    const online = Object.keys(lastSeen).filter(name => {
        return name !== authorName
    })
    res.json(online) // this is equivalent to res.send(JSON.stringify(online))
})


app.listen(3000)