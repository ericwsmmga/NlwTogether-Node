import express, { response } from "express";

const app = express();

app.get("/test", (Request, response) => {
    return response.send("Olá")
})

app.post("/test-post", (Request, response) => {
    return response.send("Olá Post")
})





app.listen(3000, () => console.log("Server is running"));