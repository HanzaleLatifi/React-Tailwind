import http from "./HttpServices";

export default function putOneContact(id,data){
    return http.put(`/contacts/${id}`,data)
}