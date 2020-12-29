import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-e-clone-492ab.cloudfunctions.net/api'
    //'http://localhost:5001/e-clone-492ab/us-central1/api' // api URL  (cloud function)
});

export default instance;