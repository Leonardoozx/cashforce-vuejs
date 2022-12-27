<template>
  <table>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
      </tr>
      <tr id="table-body">
        <td id="first">nota fiscal</td>
        <td>sacado</td>
        <td>cedente</td>
        <td>emissão</td>
        <td>valor</td>
        <td>status</td>
        <p id="buyer-data">Dados do cedente</p>
      </tr>
  </table>
</template>

<script>
export default {
  name: 'FiscalNotesCard'
}
</script>

<style>
table {
  margin-left: 30px;
  flex-direction: column;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 18px;
}

th, td {
  padding: 0px 80px 10px 10px;
  padding-left: 30px;
}

#table-body {
  border-collapse: collapse;
  box-shadow: 0 0 0 1px rgb(223,226,235);
  border-radius: 10px;
  height: 65px;
}

#buyer-data {
  border: 2px solid rgb(202,211,255);
  border-radius: 20px;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;  
}
</style>