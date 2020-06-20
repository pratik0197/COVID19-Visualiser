import axios from 'axios'
const AxiosComponent = axios.create({
    baseURL : 'https://api.covid19api.com/'
})

export default AxiosComponent