import axios from "axios";

const API = axios.create({
  baseURL: "https://2400030515-ecommerce-backend-main-production.up.railway.app/api"
});

export default API;
