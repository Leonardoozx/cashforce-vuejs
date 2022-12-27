<template>
  <div class="root-container">
    <SideBar />
    <main>
      <hr id="hr" />
      <Header />
      <FiscalNotesCard />
    </main>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';
import FiscalNotesCard from './components/FiscalNotesCard.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    Header,
    FiscalNotesCard
  }
}
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
