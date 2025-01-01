import axios from "axios";

export default axios.create({
    baseURL: "https://api.verto.com/api",
    params: {
        key: "my-secret-key",
    },
});
