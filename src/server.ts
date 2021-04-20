import express from "express"

const app = express()


app.get("/users", (req, res) =>res.send("Olá NLW 05"))

app.post("/", (req, res)=> {
    return res.json({ message: "Usuario salvo com sucesso"})
})


app.listen(3333, () => console.log('ta rodando'))