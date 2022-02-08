<template>
  <div class="authorr">
    <b-button variant="primary" @click="$bvModal.show('modal-scoped2')"
      >Авторизация</b-button
    >

    <b-modal id="modal-scoped">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Покупка</h5>
      </template>

      <template #default="">
        <label for="text-fio"
          >Имя и Фамилия
          <p class="star">*</p>
        </label>
        <b-form-input
          v-model="fio"
          id="text-fio"
          placeholder="Введите ваше Имя и Фамилию"
        ></b-form-input>
        <label for="text-email"
          >Email
          <p class="star">*</p></label
        >
        <b-form-input
          v-model="email"
          id="text-email"
          placeholder="Введите ваш Email"
        ></b-form-input>
        <label for="text-email"
          >Телефон
          <p class="star">*</p></label
        >
        <b-form-input
          v-model="phone"
          id="text-email"
          placeholder="Введите ваш телефон"
        ></b-form-input>
        <div style="display: grid; grid-template-columns: 1fr 8fr;">
            <input style="margin-top: 10px; width: 30px; height: 30px;" type="checkbox" id="checkbox" v-model="checked1" />
              <p>Согласен с <a href="/info">Правилами,</a>  <a href="/info/subs">Офертой платежей</a> и  <a href="/info/suvs">Правилами подписки</a>  </p>
              </div>
        <p>
          При оплате покупки вы автоматически соглашаетесь со всеми
          <b-link :href="'/info'" target="_blank">Правилами</b-link> хостинга по
          покупке, авторизации, cookie
        </p>
        <p class="wwarning" v-if="errors">
          {{ errors }}
        </p>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" disabled v-if="checked1 == false" v-on:click="oplata()">Оплатить</b-button>
        <b-button variant="primary" v-if="checked1" v-on:click="oplata()">Оплатить</b-button>
        <b-button variant="secondary" @click="cancel()"> Закрыть </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
    <b-modal id="modal-scoped2">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Авторизация</h5>
      </template>

      <template #default="">
        <label for="text-email">Email</label>
        <b-form-input
          v-model="text"
          id="text-email"
          placeholder="Введите ваш Email"
        ></b-form-input>
        <b-form @submit.stop.prevent>
          <label for="text-password">Password</label>
          <b-form-input
            v-model="password"
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры
            и не должен содержат пробелы, специальные символы.
          </b-form-text>
          <div class="forgpassword" @click="openmodal()">Забыли пароль?</div>
          <p class="wwarning" v-if="errors">
            {{ errors }}
          </p>
        </b-form>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" v-on:click="okkk()">Принять</b-button>
        <b-button variant="secondary" @click="cancel()"> Закрыть </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
    <b-modal id="modal-forg">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Восстановаление пароля</h5>
      </template>

      <template #default="">
        <label for="text-email">Введите ваш Email</label>
        <b-form-input
          v-model="text"
          id="text-email"
          placeholder="Введите ваш Email"
        ></b-form-input>
        <p class="succ" v-if="succ">
          {{ succ }}
        </p>
        <p class="wwarning" v-if="errors">
          {{ errors }}
        </p>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" v-on:click="forrg()">Принять</b-button>
        <b-button variant="secondary" @click="cancel()"> Закрыть </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
    <b-button variant="primary" @click="$bvModal.show('modal-scoped1')"
      >Регистрация</b-button
    >

    <b-modal id="modal-scoped1">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Моментальная регистрация</h5>
      </template>

      <template #default="">
        <label for="text-name"
          >Имя и Фамилия
          <p class="star">*</p></label
        >
        <b-form-input
          v-model="namee"
          id="text-name"
          placeholder="Введите ваше Имя"
        ></b-form-input>
        <label for="text-email"
          >Email
          <p class="star">*</p></label
        >
        <b-form-input
          v-model="text"
          id="text-email"
          placeholder="Введите ваш Email"
        ></b-form-input>
        <label for="text-email"
          >Номер телефона
          <p class="star">*</p></label
        >
        <b-form-input
          v-model="phone"
          id="text-email"
          placeholder="Введите ваш номер телефона"
        ></b-form-input>
        <b-form @submit.stop.prevent>
          <label for="text-password"
            >Пароль
            <p class="star">*</p></label
          >
          <b-form-input
            v-model="password"
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Ваш пароль должен состоять из 5-35 символов, содержать буквы и цифры
            и не должен содержат пробелы, специальные символы.
          </b-form-text>
          <p style="font-size: 15px">
            Нажимая кнопку "Создать" вы автоматически соглашаетесь с <br /><a
              :href="'/info'"
              target="_blank"
              >Политикой конфиденциальности</a
            >
            <br />
            <a :href="'/info'" target="_blank">Пользовательским соглашением</a>
          </p>
          <nocaptcha
            :appkey="'FFFF00000000016AB730'"
            :scene="'test'"
            @callback="getToken"
          ></nocaptcha>
          <p class="wwarning" v-if="errors">
            {{ errors }}
          </p>
        </b-form>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" v-on:click="okk()">Создать</b-button>
        <b-button variant="secondary" @click="cancel()"> Закрыть </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>
<script>
import Api from "../api";
import { getCookie, setCookie, deleteCookie } from "../utils.js";
import nocaptcha from "vue-nocaptcha/lib/nocaptcha.js";
export default {
  components: {
    nocaptcha,
  },
  data() {
    return {
      checked1: false,
      fio: "",
      email: "",
      phone: "",
      text: "",
      namee: "",
      password: "",
      errors: "",
      succ: "",
    };
  },
  name: "auth",
  methods: {
    openmodal() {
      this.$bvModal.hide("modal-scoped2");
      this.$bvModal.show("modal-forg");
    },
    async forrg() {
      const em = {
        email: this.text,
      };
      const rer = await Api.users.forg(em);
      console.log(rer);
      if (!rer.message) {
        this.succ = "Успешно! Проверьте ваш email";
      } else {
        this.errors = rer.message;
      }
    },
    async okk() {
      this.errors = "";
      const user = {
        Name: this.namee,
        email: this.text,
        password: this.password,
      };
      console.log(user);
      let result = await Api.users.registration(user);
      console.log(result);
      if (result.token) {
        let token = result.token;
        setCookie("token", token, { domain: "neearby.com" });
        console.log(document.cookie);
        localStorage.setItem("token", token);
        window.location.reload();
      } else {
        this.errors = result.message;
      }
      return {};
    },
    async okkk() {
      this.errors = "";
      const user = {
        email: this.text,
        password: this.password,
      };
      console.log(user);
      let result = await Api.users.authorization(user);
      console.log(result);
      if (result.token) {
        let token = result.token;
        setCookie("token", token, { domain: "neearby.com" });
        console.log(document.cookie);
        localStorage.setItem("token", token);
        window.location.reload();
      } else {
        this.errors = result.message;
      }
      return {};
    },
    async oplata() {
      let strr = JSON.parse(localStorage.getItem("buy"));
      const json = {
        email: this.email,
        Name: this.fio,
        type: strr.type,
        nomer: this.phone,
        id: strr.id,
      };
      const result = await Api.users.oplataunreg(json);
      if (result.token) {
        let token = result.token.token;
        console.log(token.token);
        setCookie("token", token, { domain: "neearby.com" });
        console.log(document.cookie);
        localStorage.setItem("token", token);
        console.log(localStorage.getItem("token"));
        window.open(result.link, "_blank");
      } else {
        this.errors = result.message;
      }
      console.log(result);
    },
  },
};
</script>
<style lang="scss">
.authorr {
  width: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin-top: 12px !important;
}
.star {
  color: red;
  font-size: 18px;
  display: inline-block;
  margin-bottom: 0;
  margin-top: 5px;
}
.wwarning {
  color: red;
}
.forgpassword {
  color: #fe6637;
  transition: all 0.5s;
  cursor: pointer;
}
.forgpassword:hover {
  font-size: 17px;
}
.succ {
  color: rgb(43, 104, 43);
}
@media only screen and (max-width: 600px) {
  .modal-content {
    width: 320px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    font-size: 16px;
  }
}
</style>
