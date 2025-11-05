import axios from "axios";

// 🌐 Change this to your deployed backend URL
const api = axios.create({
  baseURL: "https://talkandfix.onrender.com/api",
});

export default api;
