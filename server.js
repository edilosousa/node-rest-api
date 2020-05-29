
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

var corsoptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsoptions));

//requisições json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.json({
        message: "Bem vindo"
    })
})

require("./app/routes/users.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});