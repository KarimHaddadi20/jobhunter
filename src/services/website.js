// src/services/website.js
import instance from "./api.js";

export async function WebsiteGetAll() {
  //@todo : gestion fine des erreurs

  const response = await instance.get("/website/", {
    params: {
      offset: "0", // offset permet de commencer de la ligne 0
      limit: "150",
      where: "",
    },
  });
  console.log(response.data);
  console.log(response);
  console.log(response.data.list);

  return response.data;
}
