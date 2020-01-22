import "@babel/polyfill"
import "core-js";
import dotenv from "dotenv";
import app from "./app";
import "./db"

dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ listening on: http://localhost:${PORT}`);

// localhost 실행하는 함수
app.listen(PORT, handleListening);