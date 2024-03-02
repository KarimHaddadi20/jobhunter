<template>
  <div>
    <div>
      <h3>Bienvenue sur vos candidatures</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th>Entreprise</th>
          <th>Status</th>
          <th>Échéance</th>
          <th>Description du poste</th>
          <th>CV</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.society }}</td>
          <td>{{ job.status }}</td>
          <td>{{ job.deadline }}</td>
          <td>{{ job.description }}</td>
          <td>
            <a :href="job.cv" target="_blank">Voir CV</a>
          </td>
          <td><button @click="deleteJob(job.id)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>

    <div>
      <input v-model="newJob.society" placeholder="Entreprise" />
      <input v-model="newJob.status" placeholder="Status" />
      <input v-model="newJob.deadline" placeholder="AAAA-MM-JJ" />
      <input v-model="newJob.description" placeholder="Description du poste" />
      <div class="file-input">
        <input type="file" id="fileUpload" @change="onFileChange" />
        <span class="button">Insére ton CV</span>
      </div>
      <button @click="addJob">Ajouter</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import trackingappInstance from "@/services/trackingapp.js";

const jobs = ref([]);

const deleteJob = (id) => {
  const confirmed = window.confirm(
    "Êtes-vous sûr de vouloir supprimer ce poste ?"
  );
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
  cv: null,
});

const onFileChange = (e) => {
  newJob.cv = URL.createObjectURL(e.target.files[0]);
};

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
    if (key !== "cv") {
      newJob[key] = "";
    }
  }
  newJob.cv = null;
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
  font-family: "Roboto Slab", serif;
}

th,
td {
  border: 1px solid #ffffff;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #8ec8f6;
  color: white;
}

tr:nth-child(even) {
  background-color: #00000000;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  font-family: "Roboto Slab", serif;
  border-radius: 5px;
  border: 1px solid #ffffff;
}

button {
  background-color: #8ec8f6;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Roboto Slab", serif;
}

button:hover {
  background-color: #8ec8f6;
}

.file-input {
  position: relative;
  display: inline-block;
}

.file-input input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.file-input .button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #8ec8f6;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.file-input .button:hover {
  background-color: #8ec8f6;
}

.file-input,
.add-button {
  display: block;
  margin-bottom: 10px;
  font-family: "Roboto Slab", serif;
}

h3 {
  font-family: "Roboto Slab", serif;
  margin-bottom: 45px;
  font-size: 2.1em;
  color: #ffffff;
}
</style>
