<template>
  <div>
    <!-- <HelloWorld :user="user" /> -->
    <div class="maincont">
      <b-card class="gri">
        <div class="forgriid">
          <div class="left">
            <div style="height: auto">
              <b-avatar
                rounded
                style="margin-right: 10px; width: auto; height: auto"
                :src="'https://api.steepmail.com/api/subscriptions/photo/' + data.id"
              >
              </b-avatar>
            </div>
            <br />
            <p style="font-size: 28px; font-weight: bold">{{ data.tittle }}</p>
            <p style="font-size: 22px">Стоимость: {{ data.cost }} ₽</p>
          </div>
          <div class="right">
            <p style="font-size: 28px; font-weight: 600">
              Заполните ниже ваши данные
            </p>
            <label for="12" style="margin-top: 20px">Ваше Имя и Фамилию <p style="color:red; display: inline-block">*</p> </label>
            <b-form-input
              id="12"
              class="meoww"
              label="Переадресация при подписке"
              required
              v-model="readressun"
            ></b-form-input>
            <br />
            <label for="122" style="margin-top: 20px"
              >Ваш адрес электронной почты <p style="color:red; display: inline-block">*</p></label
            >
            <b-form-input
              id="122"
              class="meoww"
              label="Переадресация при подписке"
              required
              v-model="readressunn"
            ></b-form-input>
            <br />
            <label for="1234" style="margin-top: 20px"
              >Ваш номер телефона <p style="color:red; display: inline-block">*</p></label
            >
            <b-form-input
              id="1234"
              class="meoww"
              label="Переадресация при отписке"
              required
              v-model="readressunsu"
            ></b-form-input>
            <br />
            <div class="iw" style="background-color:#e9e9e9; margin-top: 10px; padding: 3%; border-radius: 5px; font-size: 16px;">
              <b-form-group
              label="Выберите способ оплаты"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                class="kekwww"
                >Полная оплата через ЮKassa (банковские карты, электронные деньги)</b-form-radio
              >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >Предоплата через ЮKassa</b-form-radio
                > 
            </b-form-group>
            </div>
            <b-button
              style="
                height: 80px;
                width: 80%;
                margin-left: 50%;
                margin-top: 40px;
                margin-bottom: 10px;
                transform: translate(-50%, 0);
                font-size: 28px;
              "
              >Подтвердить заказ</b-button
            >
            <p style="font-size: 16px; text-align: center;">
              Нажимая на кнопку, вы подтверждаете
              <a href="/info" style="text-decoration: none; color: teal;"
                >Политику конфиденциальности</a
              >
            </p>
          </div>
        </div>
      </b-card>
      <!-- <b-card class="maintov">
        <h3>Товар: """</h3>

        <p>
          {{ data.description }}
        </p>
        <b-link
          style="margin-right: 50px"
          :href="data.description_url"
          variant="primary"
        >
          <b-icon icon="chevron-double-left"> </b-icon>Сайт-описание
        </b-link>
        <b-link
          style="margin-left: 20px"
          :href="'/' + data.author + '/tovars'"
          variant="primary"
          >Другие товары автора <b-icon icon="chevron-double-right"> </b-icon>
        </b-link>
        <p style="color: red">{{errno}}</p>
        <p style="color: green">{{success}}</p>
        <div style="margin-top: 20px">
          <b-button @click="buy()"> Купить за {{ data.cost }} P!</b-button>
        </div>
      </b-card> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

// import catalogfromauthor from "@/components/catalogfromauthor.vue";
import { Auth } from "../auth";
import Api from "../api";
export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    // catalogfromauthor,
  },
  methods: {
    async buy() {
      if (!this.debounce) {
        this.debounce = true;
        const ztx = this;
        setTimeout(() => {
          ztx.debounce = false;
        }, 1500);
        if (!this.user.id || !localStorage.getItem("token")) {
          this.$bvModal.show("modal-scoped");
        } else {
          const json = {
            id: this.$route.params.id,
            idtovar: this.$route.params.idtovar,
          };
          const result = await Api.users.buybuy(
            json,
            localStorage.getItem("token")
          );
          if (result == true) {
            this.success =
              "Покупка совершена. Проверьте почту или личные сообщения аккаунта";
          } else {
            this.errno = result.message;
          }
          console.log(result);
        }
      }
    },
  },
  data() {
    return {
      errno: "",
      success: "",
      data: {
        fordel: 0,
      },
      user: {},
      debounce: false,
      selected: 'A',
    };
  },
  async mounted() {
    this.user = await Auth();
    if (!this.user.id || !localStorage.getItem("token")) {
      this.$bvModal.show("modal-scoped");
      console.log("Poshel naxyi");
    }
    let ter = this.$route.params.idtovar;
    console.log(ter);
    const result = await Api.users.getsubbyid(ter);
    this.data = result;
    this.data.fordel = this.data.cost / 12
    console.log(result);
  },
};
</script>
<style lang="scss">
.maincont {
  background-color: #e9e9e9e9;
  min-height: 100vh;
  padding: 5% 20%;
}
.maintov {
  padding: 0;
}
.gri {
  width: 84%;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.forgriid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.right {
  text-align: left;
  font-size: 18px;
  margin-top: 20px;
}
@media only screen and (max-width: 1479px) {
  .gri {
    width: 95%;
  }
  .kekwww{
    font-size: 14px;
  }
}
</style>
