<template>
  <div id="fiscal-notes-container">
    <header>
      <div>
        <img src="https://imgur.com/hRTHpO8.png" alt="hands">
        <h3>Notas fiscais</h3>
      </div>
      <p>Visualize as notas fiscais que você tem.</p>
      </header>
  </div>
</template>

<script>
export default {
  name: 'FiscalNotes'
}
</script>

<style>
#fiscal-notes-container {
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
  opacity: 60%;
  font-size: 20px;
  margin-top: 2.5px;
}
</style>