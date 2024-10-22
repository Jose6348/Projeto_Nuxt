<template>
  <v-container class="product-list" fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="product-list-title">Produtos Disponíveis</h2>
      </v-col>
    </v-row>

    <v-row class="product-grid no-gutters">
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="product-item"
      >
        <v-card class="product-card">
          <v-img :src="`https://picsum.photos/400/400?random=${index}`" height="auto" class="product-image"/>
          <v-card-title class="product-title">{{ product.name }}</v-card-title>
          <v-card-subtitle class="product-price">{{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn class="button" block large>Comprar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  {
    name: 'Casaco de Inverno',
    price: 'R$ 199,99',
  },
  {
    name: 'Camiseta Básica',
    price: 'R$ 49,99',
  },
  {
    name: 'Calça Jeans',
    price: 'R$ 129,99',
  },
  {
    name: 'Tênis Esportivo',
    price: 'R$ 299,99',
  },
  {
    name: 'Relógio Digital',
    price: 'R$ 99,99',
  },
  {
    name: 'Óculos de Sol',
    price: 'R$ 149,99',
  },
  {
    name: 'Jaqueta de Couro',
    price: 'R$ 249,99',
  },
  {
    name: 'Bermuda Masculina',
    price: 'R$ 69,99',
  },
]);
</script>

<style scoped>
.product-list {
  padding: 40px;
}

.button{
  background-color: #777;
  color: white;
  box-shadow: 0 0 10px (0,0,0 0.3);
  border-radius: 20%;
  align-content: center;
  display: flex;
}
.product-list-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  align-content: flex-end;
  display: flex;
  padding: auto;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

.product-item {
  padding: 0;
  margin: 0;
}

.product-card {
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  border-radius: 20px 20px 0 0;
}

.product-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.product-price {
  font-size: 24px;
  color: #000000;
  margin-bottom: 10px;
}

.v-btn {
  margin: 10px 0;
}
</style>
