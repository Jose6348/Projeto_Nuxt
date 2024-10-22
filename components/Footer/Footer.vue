<template>
  <v-footer class="footer" height="auto">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="footer-logo">
          <img src="@/assets/images/Z.png" alt="Logo" class="logo-img" />
          <span class="footer-title">Zezinho's Store</span>
        </v-col>

        <v-col cols="12" md="4" class="footer-contact">
          <h3>Contato</h3>
          <p>Email: contato@zezinhostore.com</p>
          <p>Telefone: (11) 9999-9999</p>
        </v-col>

        <v-col cols="12" md="4" class="footer-social">
          <h3>Redes Sociais</h3>
          <v-row class="social-links">
            <v-col cols="auto">
              <a href="https://www.linkedin.com" target="_blank" class="social-link">
                <v-icon large color="blue darken-3">mdi-linkedin</v-icon>
              </a>
            </v-col>
            <v-col cols="auto">
              <a href="https://www.instagram.com" target="_blank" class="social-link">
                <v-icon large color="purple lighten-2">mdi-instagram</v-icon>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #747474;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-img {
  max-width: 100px; 
  height: auto;
}

.footer-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.footer-contact p {
  margin: 5px 0;
}

.footer-social {
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link {
  color: white;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #f39c12;
}
</style>
