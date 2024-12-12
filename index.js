const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const cors = require("cors")

server.use(cors())
server.use(router)
server.use(middleware)

const port = 3000

server.listen(port,()=>{
    console.log(`https://localhost:${port}`);
})
