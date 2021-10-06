import http from "./HttpServices";

export default function addOneContact(data){
    return http.post('/contacts',data)
}