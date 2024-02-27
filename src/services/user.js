import instance from "./api.js";

class User {
  //
  async exists(email) {}

  async login(email, password) {}

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
