<template>
  <main>
    <hr id="hr" />
    <Header v-bind:title="title" v-bind:subtitle="subtitle" />
    <FiscalNotesCard />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import FiscalNotesCard from "../components/FiscalNotesCard.vue";

export default {
  name: "FiscalNotes",
  data() {
    return {
      title: "Notas fiscais",
      subtitle: "Visualize as notas fiscais que você tem.",
    };
  },
  components: {
    Header,
    FiscalNotesCard,
  },
};
</script>

<style>
main {
  height: 100vh;
  background-color: #ffffff;
  width: 87.7%;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  float: right;
}

#hr {
  margin-top: 50px;
  padding: 0px;
  border: 1px solid rgb(239, 240, 245);
}
</style>