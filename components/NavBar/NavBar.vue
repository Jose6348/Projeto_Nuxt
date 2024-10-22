<template>
  <v-row class="nav-bar" height="auto">
    <v-col cols="12" md="12">
      <div class="nav-bar-center">
        <v-btn text class="nav-link">Casacos</v-btn>
        <v-btn text class="nav-link">Camisetas</v-btn>
        <v-btn text class="nav-link">Calças</v-btn>
        <v-btn text class="nav-link">Acessórios</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; 
  color: black; 
  padding: 10px 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8); 
  height: 60px; 
  margin-top: auto;
}

.nav-bar-center {
  display: flex;
  justify-content: center;
  gap: 40px; 
}

.nav-link {
  font-size: 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  transition: color 0.3s ease;
  padding: 0 15px;
  border-radius: 50%;
  background-color: peru;
}

.nav-link:hover {
  color: #f39c12; 
}
</style>
