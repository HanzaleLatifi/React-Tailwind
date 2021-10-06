import http from "./HttpServices";

export default function deleteOneContact(id){
    return http.delete(`/contacts/${id}`)
}