<template>
  <div id="sidebar">
    <router-link to="/">
      <img
        id="logo"
        src="https://i.imgur.com/nh5SZJo.png"
        alt="cashforce logo"
      />
    </router-link>
    <router-link to="/fiscal-notes">
      <article>
        <img id="notes" src="https://imgur.com/j5Y01PD.png" alt="hands" />
        <p>Notas fiscais</p>
      </article>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
#sidebar {
  width: 12%;
  background-color: rgb(251, 253, 254);
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
  width: 170px;
}

#sidebar article {
  display: flex;
  border-left: 5px solid rgb(31, 183, 154);
  color: rgb(31, 183, 154);
  align-items: center;
  margin-top: 5px;
}

#sidebar article img {
  margin: 0 5px;
  width: 45px;
}

#sidebar article p {
  font-weight: 800;
  font-size: 20px;
  margin-top: 2px;
}
</style>
