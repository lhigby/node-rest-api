const express = require('express');

const app = express ();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const uri = "mongodb-server://<username>:<password>@myServer.com/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

app.listen(PORT, () => {
    console.log("Server listening on PORT: ", PORT);
});

app.get('/users/:id', (_request, response) => {
    const userId = request.parms.id;

    if (!isNumber(id))
    {
        response.status(400).send("Not a valid userid");
    }

    userList =  client.db("users");

    query = { _id: userId };

    const user = userList.find(query).toArray();

    if (!user) {
        response.status(404).send("Not a valid userid");
    }
    else if (user.age <= 21) {
        response.send("");
    }

    const jsonResponse = JSON.stringify(user[0], null);

    response.send(jsonResponse);
});
