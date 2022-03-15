import "reflect-metadata";
import express from "express";
import './database'

// create app express
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));