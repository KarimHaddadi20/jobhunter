import instance from "./api.js";

class Coverletter {
  async getAll() {
    const response = await instance.get(`/cover/`);
    return response.data;
  }

  async create(cover) {
    try {
      console.log(cover); // Ajoutez cette ligne

      const response = await instance.post("/coverletter/", {
        cover: cover,
      });

      return response.data;
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de l'ajout du job à la base de données"
      );
    }
  }
}

const coverletterInstance = new Coverletter();

export default coverletterInstance;
