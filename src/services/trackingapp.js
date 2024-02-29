import instance from "./api.js";

class Trackingapp {
    async getAll() {
        const response = await instance.get(`/trackingapp/`);
        return response.data;
    }

    async create(job) {
        const { society, status, deadline, description } = job;

        try {
            console.log({society, status, deadline, description}); // Ajoutez cette ligne
    
            const response = await instance.post("/trackingapp/", {
                society: society,
                deadline: deadline,
                description: description,
                status: status,
            });
    
            return response.data;
        } catch (error) {
            console.error(
                "Une erreur est survenue lors de l'ajout du job à la base de données",
            );
        }
    }
}

const trackingappInstance = new Trackingapp();

export default trackingappInstance;