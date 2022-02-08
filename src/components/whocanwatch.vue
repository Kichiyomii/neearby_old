<template>
  <div>
    <b-card>
      <b-media>
        <template #aside>
          <h4 class="mt-0">Кто может смотреть</h4>
        </template>

        <b-form-group
          style="text-align: left"
          label="Пожалуйста, выберите 1 из пунктов"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio
            v-model="radio"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="lg"
            value="All"
            >Открыт для всех</b-form-radio
          >
          <b-form-radio
            v-model="radio"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="lg"
            value="Sub"
            >Только подписчики</b-form-radio
          >
          <b-form-radio
            v-model="radio"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="lg"
            value="SubPay"
            >Подписчики или разовая оплата</b-form-radio
          >
          <b-form-radio
            v-model="radio"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="lg"
            value="Pay"
            >Только разовая оплата</b-form-radio
          >
        </b-form-group>

        <div v-if="radio == 'SubPay' || radio == 'Sub'" class="wo">
          <h5>Уровень</h5>
          <select class="selectsubs">
            <option>Пункт 1</option>
            <option>Пункт 2</option>
          </select>
        </div>
        <div v-if="radio == 'Pay' || radio == 'SubPay'" class="one">
          <h5>Стоимость поста в Руб.</h5>
          <b-form-input
            class="contforprice"
            v-model="prices"
            type="number"
            placeholder="Введите цену"
          ></b-form-input>
        </div>
      </b-media>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "whocanwatch",
  data() {
    return {
      radio: "Pay",
    };
  },
  // async mounted() {

  //   },
};
</script>
<style scoped lang="scss">
.one {
  margin-top: 10px;
  padding-left: 1.875rem;
  text-align: left;
}
.wo {
  padding-left: 1.875rem;
  margin-top: 10px;
  width: 300px;
  text-align: left;
}
.contforprice {
  width: 200px;
}
.selectsubs{
  width: 300px;
  height: 55px;
  border: 1px solid #ced4da;
      border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>    