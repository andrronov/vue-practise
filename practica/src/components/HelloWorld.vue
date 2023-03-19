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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    // aaa() {
    //   console.log(this.car);
    // },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/main-style.scss";
</style>
