//src/services/list.js

import instance from "./api.js";

class list {
    async getAll() {
        const response = await instance.get(`/list/`);
        return response.data;
    }

    async get(title, url, logo) {
        const response = await instance.post("/list/",{
            title: title,
            url: url,
            logo: logo,
        });
        return response.data;
    }
}

const listInstance = new list();

export default  listInstance;