<template>
  <header id="fiscal-notes-header-container">
    <div>
      <img v-if="title.includes('fiscais')" src="https://imgur.com/hRTHpO8.png" alt="hands" />
      <h3>{{ title }}</h3>
    </div>
    <p>{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['title', 'subtitle'],
};
</script>

<style>
#fiscal-notes-header-container {
  padding: 30px;
}

header {
  display: flex;
  flex-direction: column;
}

header div {
  display: flex;
  align-items: center;
  font-size: 30px;
}

header img {
  width: 35px;
  margin-right: 8.5px;
}

header p {
  color: rgb(114, 125, 148);
  font-size: 20px;
  margin-top: 2.5px;
}
</style>