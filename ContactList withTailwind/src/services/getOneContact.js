import http from "./HttpServices";

export default function getOneContact(id){
    return http.get(`/contacts/${id}`)
}