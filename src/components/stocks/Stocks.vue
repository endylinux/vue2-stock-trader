<template>
  <div>
    <app-stock v-for="(stock, id) in stocks" :key="id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "@/components/stocks/Stock";
export default {
  name: "Stocks",
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
}
</script>

<style scoped>

</style>
