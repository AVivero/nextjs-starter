
const express = require('express')
const bodyParser = require('body-parser');
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const defaultHandler = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json());


    server.get('/test', (req, res) => {
        // custom handler
        // return customHandler(req, res)
        return defaultHandler(req, res)
    })

    server.get('*', (req, res) => {
        return defaultHandler(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})