const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/users.routes");
const courseRoutes = require("./routes/courses.routes");
const categoryRoutes = require("./routes/categories.routes");
const videoRoutes = require("./routes/videos.routes");


const app = express();

const PORT = 8000;

initModels();

db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch((error) => console.log(error));

db.sync({force: false})
    .then(() => console.log("Base sincronizada"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al server" });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", courseRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", videoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});