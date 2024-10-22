<template>
  <v-row class="top-bar">
    <v-col cols="4">
      <!-- Logo e Título -->
      <div class="top-bar-left">
        <img
          src="~/assets/images/95a2db9e-f031-479c-bca9-2e9740a3d0c9.jpg"
          alt="Imagem Mayday"
          class="logo-img"
        />
        <span class="top-bar-title">Zezinho's Site</span>
      </div>
    </v-col>

    <!-- Barra de Pesquisa -->
    <v-col cols="4">
      <div class="top-bar-center">
        <input type="text" class="search-bar" placeholder="Pesquisar..." />
      </div>
    </v-col>

    <!-- Ícones de Ação -->
    <v-col cols="4">
      <div class="top-bar-right">
        <i class="mdi mdi-bell"></i>
        <i class="mdi mdi-account ml-3"></i>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141414; 
  color: white; 
  padding: 10px 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); 
  height: auto; 
}

.top-bar-left {
  display: flex;
  align-items: center;
}

.logo-img {
  border-radius: 50%;
  height: 50px;
  margin-right: 15px;
}

.top-bar-title {
  font-size: 20px;
  font-weight: bold;
}

.top-bar-center {
  flex: 1; 
  display: flex;
  justify-content: center;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  padding: 8px 15px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  background-color: white;
  color: black;
}

.top-bar-right {
  display: flex;
  gap: 20px;
  align-content: right;
}

.top-bar-right i {
  font-size: 24px;
  cursor: pointer;
  color: white;
  align-content: flex-end;
}

.top-bar-right i:hover {
  color: #f1c40f; 
}
</style>






