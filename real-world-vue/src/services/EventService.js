import Axios from 'axios';

const appClient = Axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    header:{

    }
})

export default{
    getEvents(perPage, pageNo){
        return appClient.get('/events?_limit='+perPage +'&_page='+pageNo);
    },

    getEvent(id){
        return appClient.get('/events/'+id)
    },

    postEvent(value){
        return appClient.post('/events',value)
    }
}