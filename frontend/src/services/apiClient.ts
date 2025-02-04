import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    timeout: 10000,
});

// apiClient.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             try {
//                 [];
//                 await axios.post(
//                     "http://localhost:3000/auth/refresh",
//                     {},
//                     { withCredentials: true }
//                 );
//             } catch (refreshError) {
//                 window.location.href = "/";
//                 return Promise.reject(refreshError);
//             }
//         }
//         return Promise.reject(error);
//     }
// );

export default apiClient;
