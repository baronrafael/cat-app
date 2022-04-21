<template>
  <div class="home">
    <NavBar />
    <section class="hero is-fullheight-with-navbar is-align-items-center">
      <div class="hero-body">
        <CatCard v-for="cat in cats" :key="cat.id" :cat="cat" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CatCard from "@/components/CatCard.vue";
import CatService from "@/services/CatService";

export default {
  name: "HomeView",
  components: {
    NavBar,
    CatCard,
  },
  data() {
    return {
      cats: [],
    };
  },
  created() {
    CatService.getRandomCat()
      .then((response) => {
        console.log(response.data);
        this.cats = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
