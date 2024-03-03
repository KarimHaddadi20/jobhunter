import instance from "./api.js";

class Candidacy {
  async getAll() {
    const response = await instance.get(`/candidacy/`);
    return response.data;
  }

  async create(title, logo, society, demande, location, date) {
    const response = await instance.post("/candidacy/", {
      title: title,
      logo: logo,
      society: society,
      demande: demande,
      location: location,
      date: date,
    });

    return response.data;
  }
  
  async delete(id) {
    console.log(id); // Ajoutez cette ligne
    try {
        const response = await instance.delete(`/candidacy/${id}`);
        return response.data;
    } catch (error) {
        console.error(
            "Une erreur est survenue lors de la suppression du job de la base de données",
        );
    }
  }
}

const candidacyInstance = new Candidacy();

export default candidacyInstance;