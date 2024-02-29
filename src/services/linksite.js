//src/services/li.js

import instance from "./api.js";

class linksite {
    async getAll(title, url, logo) {
        const response = await instance.get(`/list/`,);
        return response.data;
    }


}

const linksiteInstance = new linksite();

export default  linksiteInstance;