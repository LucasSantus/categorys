import "reflect-metadata";
import express from "express";

// create app express
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));