<template>
  <div>
    <app-stock v-for="(stock, id) in stocks" :key="id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "@/components/stocks/Stock";
export default {
  name: "Stocks",
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 250 },
        { id: 4, name: 'Twitter', price: 180 },
      ]
    }
  },
  components: {
    appStock: Stock,
  }
}
</script>

<style scoped>

</style>
