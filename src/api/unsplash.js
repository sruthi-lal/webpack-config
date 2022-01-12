import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ZTPbtc1qmJZNaa4PNzdtk6ifGj8tOfQGIZmJfAK4Lhk'
       }
})