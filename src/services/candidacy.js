import instance from "./api.js";

class Candidacy {
  async getAll() {
    const response = await instance.get(`/candidacy/`);
    return response.data;
  }

  async create(title, logo, society, demande, location, date, received, traitement, refused, hired) {
    const response = await instance.post("/candidacy/", {
      title: title,
      logo: logo,
      society: society,
      demande: demande,
      location: location,
      date: date,
      received: received,
      traitement: traitement,
      refused: refused,
      hired: hired
    });

    return response.data;
  }
}

const candidacyInstance = new Candidacy();

export default candidacyInstance;