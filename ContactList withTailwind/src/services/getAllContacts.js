import http from "./HttpServices";

export default function getAllContacts(){
    return http.get("/contacts")
}