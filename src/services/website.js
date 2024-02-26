// src/services/website.js


import instance from "./api.js";



export async function WebsiteGetAll() {
//@todo : gestion fine des erreurs 

const response = await instance.get("/websites");
return response.data;


}