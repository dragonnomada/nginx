const http = require("http")

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("SERVER 2")
    response.end()
})

server.listen(8902, () => {
    console.log("Server started at http://localhost:8902")
})