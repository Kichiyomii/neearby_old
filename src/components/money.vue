<template>
  <div class="mmmaincont">
    <h2>Вывод Средств</h2>
    <p style="color: red">Внимание! Выплаты только от 5000р</p>
    <p style="text-align: left">
      <b-icon icon="plus-circle-fill" class="info" @click="show()" v-if="space"
        >Добавить способо оплаты</b-icon
      >
    </p>

    <b-modal size="lg" id="modal-money">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Добавление способа оплаты</h5>
      </template>

      <template #default="">
        <label for="text-fio">ФИО</label>
        <b-form-input
        class="lol"
          v-model="fio"
          id="text-fio"
          placeholder="Введите ваше Имя, Фамилию и Отчество"
        ></b-form-input>
        <label for="text-email">БИК (Смотрите на сайте вашего банка)</label>
        <b-form-input
        class="lol"
          v-model="bik"
          id="text-email"
          placeholder="Введите БИК вашего банка"
        ></b-form-input>
        <label for="text-email"
          >Название Банка (Смотрите на сайте вашего банка)</label
        >
        <b-form-input
        class="lol"
          v-model="bankName"
          id="text-email"
          placeholder="Введите название вашего Банка"
        ></b-form-input>
        <label for="text-email"
          >Корреспондентский счёт банка получателя. (Смотрите на сайте вашего
          банка)</label
        >
        <b-form-input
        class="lol"
          v-model="corrAccountNumber"
          id="text-email"
          placeholder="Введите номер рассчётного счёта"
        ></b-form-input>
        <label for="text-email"
          >Номер расчетного счета. (Необходимо узнать Реквизиты вашего счёта у
          банка)</label
        >
        <b-form-input
        class="lol"
          v-model="corrAccountNumber"
          id="text-email"
          placeholder="Введите БИК вашего банка"
        ></b-form-input>
        <p class="wwarning" v-if="errors">
          {{ errors }}
        </p>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" v-on:click="addopl()">Добавить</b-button>
        <b-button variant="secondary" @click="cancel()"> Закрыть </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "subscription",
  data() {
    return {
      space: true,
    };
  },
  methods: {
    show() {
      this.$bvModal.show("modal-money");
    },
  },
};
</script>
<style lang="scss">
.mmmaincont {
  min-height: 100vh;
  padding: 2%;
  background-color: #e9e9e9;
}

.info {
  color: #fe6637;
  font-size: 40px;
  text-align: left;
  cursor: pointer;
  transition: all 0.6s;
}
.info:hover {
  color: #da3300;
  font-size: 42px;
}
.info:active{
    transform: translateY(-10px);
    transform: translateY(10px)
}
.lol{
    margin-bottom: 15px;
}
</style>
