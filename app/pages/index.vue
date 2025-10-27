<script setup>

const { data } = await useFetch('https://api.coinlore.net/api/tickers/?limit=10')

console.log('INDEX.VUE')

</script>

<template>
  <main>
    <h1>Курс криптовалют</h1>
    <a href="https://www.coinlore.com/" target="_blank">coinlore.com</a>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="currency in data.data" :key="data.data.id">
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ currency.price_usd }}</td>
        <td>
          <NuxtLink :to="'/ticker/' + currency.id">{{ currency.id }}</NuxtLink>
        </td>
      </tr>
      </tbody>
    </table>

  </main>
</template>
