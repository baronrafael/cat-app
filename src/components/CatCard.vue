<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="cat.url" alt="Cat's picture" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h2>Cat Picture @{{ cat.id }}</h2>
        <h3 class="my-0">Breeds: {{ cat.breeds.length }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cat: Object,
  },
};
</script>

<style scoped>
.card {
  max-width: 500px;
  width: 100%;
}
</style>
