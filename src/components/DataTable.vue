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
        </tr>
      </tbody>
    </table>

    <div>
      <input v-model="newJob.society" placeholder="Entreprise">
      <input v-model="newJob.status" placeholder="Status">
      <input v-model="newJob.deadline" placeholder="Échéance">
      <input v-model="newJob.description" placeholder="Description du poste">
      <button @click="addJob">Ajouter</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import trackingappInstance from "@/services/trackingapp.js";

const jobs = ref([
  // ... existing jobs
]);

const newJob = reactive({
  society: '',
  status: '',
  deadline: '',
  description: '',
});

const addJob = async () => {
  jobs.value.push({ ...newJob, id: Date.now() });

  try {
    await trackingappInstance.create(newJob.society, newJob.status, newJob.deadline, newJob.description);
    console.log('Job ajouté avec succès à la base de données');
  } catch (error) {
    console.error('Une erreur est survenue lors de l\'ajout du job à la base de données', error);

    console.log(error.response.data);
  }

  for (let key in newJob) {
    newJob[key] = '';
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #4CAF50;
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
  background-color: #4CAF50;
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