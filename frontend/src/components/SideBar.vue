<template>
  <div id="sidebar">
    <img id="logo" src="https://i.imgur.com/nh5SZJo.png" alt="cashforce logo">
    <!-- <a href="#" class="sidebar-item" v-for="item in items" :key="item.id">{{ item.name }}</a> -->
    <article>
      <img id="notes" src="https://imgur.com/j5Y01PD.png" alt="hands">
      <p>Notas fiscais</p>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'SideBar'
  }
</script>

<style>
  #sidebar {
    width: 20%;
    background-color: rgb(251,253,254);
    height: 100vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    float: left;
    position: absolute;
  }

  #sidebar #logo {
    padding-left: 15px;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  #sidebar article {
    display: flex;
    border-left: 5px solid rgb(31,183,154);
    color: rgb(31,183,154);
    align-items: center;
    margin-top: 5px;
  }

  #sidebar article img {
    margin-right: 15px;
    margin-left: 5px;
    width: 45px;
  }

  #sidebar article p {
    font-weight: 800;
    font-size: 20px;
    margin-top: 2px;
  }
</style>
