//src/services/li.js

import instance from "./api.js";

class linksite {
  async getAll() {
    const response = await instance.get(`/list/`);
    return response.data;
  }
}

const linksiteInstance = new linksite();

export default linksiteInstance;
