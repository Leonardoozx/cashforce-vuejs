<template>
  <div class="root-container">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Header from "./components/Header.vue";
import FiscalNotesCard from "./components/FiscalNotesCard.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Header,
    FiscalNotesCard,
  },
};
</script>

<style>
/* css reset */
* {
  box-sizing: border-box;
  margin: 0;
}

#root-container {
  background-color: grey;
}

a {
  text-decoration: none;
}
</style>
