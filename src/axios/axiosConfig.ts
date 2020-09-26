// npm i axios
import Axios from "axios";

const baseURL = "http://localhost:5001/clone-cb9d2/us-central1/api";

const axiosConfig = Axios.create({ baseURL: baseURL });

export default axiosConfig;
