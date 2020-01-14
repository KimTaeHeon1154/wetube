import express from "express";
const app = express();

const handleListening = () => console.log("Listening on: http://localhost:4000 ");

const handleHome = (req, res) => res.send('Hello from Homie');


const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);