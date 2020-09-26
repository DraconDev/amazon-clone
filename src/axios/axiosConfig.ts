// npm i axios
import Axios from "axios";

////* Local
// const baseURL = "http://localhost:5001/clone-cb9d2/us-central1/api";

////* Firebase
const baseURL = "https://us-central1-clone-cb9d2.cloudfunctions.net/api";

const axiosConfig = Axios.create({ baseURL: baseURL });

export default axiosConfig;
