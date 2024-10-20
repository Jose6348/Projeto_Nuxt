<template>
  <nav class="top-bar">
    <!-- Logo e Título -->
    <div class="top-bar-left">
      <img
        src="static/TopBar.vue/95a2db9e-f031-479c-bca9-2e9740a3d0c9.jpg"
        alt="Imagem Mayday"
        class="logo-img"
      />
      <span class="top-bar-title">Zezinho's Site</span>
    </div>

    <!-- Barra de Pesquisa -->
    <div class="top-bar-center">
      <input type="text" class="search-bar" placeholder="Pesquisar..." />
    </div>

    <!-- Ícones de Ação -->
    <div class="top-bar-right">
      <i class="mdi mdi-bell"></i>
      <i class="mdi mdi-account ml-3"></i>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Estilos da TopBar */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141414; /* Cor de fundo */
  color: white; /* Cor do texto */
  padding: 10px 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
  height: 70px; /* Define uma altura fixa para a barra */
}

/* Seção da logo e título */
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

/* Barra de pesquisa */
.top-bar-center {
  flex: 1; /* Ocupa o espaço restante no centro */
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

/* Ícones à direita */
.top-bar-right {
  display: flex;
  gap: 20px;
}

.top-bar-right i {
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.top-bar-right i:hover {
  color: #f1c40f; /* Muda a cor ao passar o mouse */
}
</style>






