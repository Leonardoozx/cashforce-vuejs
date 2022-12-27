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
    <tr
      v-for="(fiscalNote, index) in fiscalNotes"
      v-bind:key="index"
      id="table-body"
    >
      <td id="first">{{ fiscalNote.nNf }}</td>
      <td>{{ fiscalNote.buyer.name }}</td>
      <td>{{ fiscalNote.provider.name }}</td>
      <td>{{ fiscalNote.emissionDate }}</td>
      <td id="table-body-value">{{ fiscalNote.value }}</td>
      <td id="table-body-status">
        {{ allBuyersStatus[fiscalNote.orderStatusBuyer] }}
      </td>
      <p id="buyer-data">Dados do cedente</p>
    </tr>
  </table>
</template>

<script>
export default {
  name: "FiscalNotesCard",
  data() {
    return {
      fiscalNotes: [],
      allBuyersStatus: [
        "Pendente de confirmação",
        "Pedido confirmado",
        "Não reconhece o pedido",
        "Mercadoria não recebida",
        "Recebida com avaria",
        "Devolvida",
        "Recebida com devolução parcial",
        "Recebida e confirmada",
        "Pagamento Autorizado",
      ],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const URL = "http://localhost:3001";
      const fiscalNotes = await fetch(`${URL}/orders`).then((res) =>
        res.json()
      );

      // format the values from the keys 'emissionDate' and 'value'
      const formatedFiscalNotes = fiscalNotes.map((fiscalNote) => ({
        ...fiscalNote,

        // formats dates like: 2020-10-30T11:00:00-03:00 into
        emissionDate: fiscalNote.emissionDate.includes("T")
          ? fiscalNote.emissionDate.split("T")[0].split("-").reverse().join("/")
          : fiscalNote.emissionDate.split("-").reverse().join("/"),

        // formats integer numbers like 123456 into R$ 123.456,00
        value: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(+fiscalNote.value),
      }));

      this.fiscalNotes = formatedFiscalNotes;
    },
  },
};
</script>
<style>
table {
  margin-left: 30px;
  flex-direction: column;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 18px;
}

th,
td {
  padding: 0px 40px 10px 10px;
  padding-left: 30px;
}

#table-body {
  border-collapse: collapse;
  box-shadow: 0 0 0 1px rgb(223, 226, 235);
  border-radius: 10px;
  height: 65px;
}

#table-body-value,
#table-body-status {
  color: rgb(0, 173, 140);
}

#buyer-data {
  border: 2px solid rgb(202, 211, 255);
  border-radius: 40px;
  text-align: center;
  padding: 10px 60px;
  margin-top: 10px;
  margin-right: 30px;
}
</style>