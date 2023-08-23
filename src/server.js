const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {   // "ROTA ESCOLHIDA", request, response. Definir a resposta com o send
    
    const { id, user } = request.params // Desestruturando o request params para receber o id e o user, evita repetir o codigo
    
    // response.send(`Mensagem de ID: ${request.params.id}. Para o usuário: ${request.params.user}`) Metodo antigo

    response.send(`Mensagem ID: ${id}. Para o usuário: ${user}`) // Novo método
})

app.get("/user", (request, response) => {
    const { page, limit } = request.query // Desestruturando as informações que eu quero do metodo query.

    response.send(`Página: ${page}. Limitado a ${limit}.`)
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));