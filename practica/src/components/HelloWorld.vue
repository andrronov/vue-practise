<template>
  <div class="hello">
    <div class="table__container">
      <table class="table">
        <caption>
          Cars
        </caption>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Top Speed</th>
          <th>Horsepower</th>
          <th>Acceleration</th>
          <th>Price</th>
        </tr>
        <tr v-for="car in PRODUCTS" :key="car.id">
          <td>{{ car.Brand }}</td>
          <td>{{ car.Model }}</td>
          <td>{{ car.Top_Speed }}</td>
          <td>{{ car.Horsepower }}</td>
          <td>{{ car.Acceleration }}</td>
          <td>{{ car.Price }}</td>
        </tr>
      </table>
    </div>
    <div class="ddddd">
      <div class="calc">
        <div class="calcc">
          <p>Цена за единицу:</p>
          <input v-model="Firstprice" type="number" />
          <p>Кол-во:</p>
          <input v-model="FirstItems" type="number" />
        </div>
        <h3>Итого этот товар: {{ (allFirst = Firstprice * FirstItems) }}$</h3>
      </div>
      <div class="calcc_2">
        <div class="calcc">
          <p>Цена за единицу:</p>
          <input v-model="SecondPrice" type="number" />
          <p>Кол-во:</p>
          <input v-model="SecondItems" type="number" />
        </div>
        <h3>
          Итого за этот товар: {{ (allSecond = SecondPrice * SecondItems) }}$
        </h3>
      </div>
      <h1>Итоговая сумма покупки: {{ allFirst + allSecond }}$</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      Firstprice: 1000,
      FirstItems: 1,
      SecondPrice: 2000,
      SecondItems: 1,
    };
  },
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/main-style.scss";
</style>
