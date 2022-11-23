import axios from "axios";

export default axios.create({
  baseURL: "https://www.moogleapi.com/api/v1/characters/search?name=cloud&gender=male",
  headers: {
    "Content-type": "application/json"
  }
});