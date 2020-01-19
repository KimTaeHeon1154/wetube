import app from "./app";
import "./db"
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ listening on: http://localhost:${PORT}`);

// localhost 실행하는 함수
app.listen(PORT, handleListening);