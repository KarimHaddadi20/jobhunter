import instance from "./api.js";

class User {
  //
  async exists(email) {
    const response = await instance.get(`/user/`, {
      params: {
        where: `(email,eq,${email})`,
      },
    });

    return response.data;
  }

  async login(email, password) {
    const response = await instance.get(`/user/`, {
      params: {
        where: `(email,eq,${email})~and(password,eq,${password})`,
      },
    });

    return response.data;
  }

  async create(email, password, name) {
    const response = await instance.post("/user/", {
      email: email,
      password: password,
      name: name,
    });

    return response.data;
  }
}

const userInstance = new User();

export default userInstance;
