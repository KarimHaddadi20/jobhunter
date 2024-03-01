<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Entreprise</th>
          <th>Status</th>
          <th>Échéance</th>
          <th>Description du poste</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.society }}</td>
          <td>{{ job.status }}</td>
          <td>{{ job.deadline }}</td>
          <td>{{ job.description }}</td>
          <td><button @click="deleteJob(job.id)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>

    <div>
      <input v-model="newJob.society" placeholder="Entreprise" />
      <input v-model="newJob.status" placeholder="Status" />
      <input v-model="newJob.deadline" placeholder="AAAA-MM-J" />
      <input v-model="newJob.description" placeholder="Description du poste" />
      <button @click="addJob">Ajouter</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import trackingappInstance from "@/services/trackingapp.js";

const jobs = ref([]);

const deleteJob = (id) => {
  const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce poste ?");
  if (confirmed) {
    jobs.value = jobs.value.filter((job) => job.id !== id);
    localStorage.setItem("jobs", JSON.stringify(jobs.value));
  }
};
const newJob = reactive({
  society: "",
  status: "",
  deadline: "",
  description: "",
});

const addJob = async () => {
  jobs.value.push({ ...newJob, id: Date.now() });
  localStorage.setItem("jobs", JSON.stringify(jobs.value));

  try {
    await trackingappInstance.create({
      society: newJob.society,
      status: newJob.status,
      deadline: newJob.deadline,
      description: newJob.description,
    });
    console.log("Job ajouté avec succès à la base de données");
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'ajout du job à la base de données",
      error
    );
    console.log(error.response.data);
  }

  for (let key in newJob) {
    newJob[key] = "";
  }
};

onMounted(() => {
  jobs.value = JSON.parse(localStorage.getItem("jobs")) || [];
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
