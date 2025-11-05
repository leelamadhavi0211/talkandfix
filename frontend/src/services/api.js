/*import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api", // update when backend is deployed
});
*/
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // 👈 Your backend base URL
});

export default api;
