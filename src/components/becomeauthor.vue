<template>
  <div class="modawwl">
    <b-button
      variant="info"
      style="width: 170px; height: 45px; margin-top: 7px"
      @click="$bvModal.show('modal-scoped-3')"
      >Стать автором</b-button
    >

    <b-modal id="modal-scoped-3" size="lg">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Стань автором!</h5>
      </template>

      <template #default="">
        <div class="maincontt">
          <div class="leftcontt">
            <p class="">
              Создай свою страницу и распространяй свои продукты и подписки!
            </p>
            <label for="text-email">Email</label>
            <b-form-input
              v-model="email"
              id="text-email"
              class="email"
              placeholder="Введите ваш Email"
            ></b-form-input>
            <b-input-group prepend=".neearby.com" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="Введите ваш поддомен"
                v-model="login"
              ></b-form-input>
              <p class="wwwarning" v-if="errors">
                {{ errors }}
              </p>
              <div style="margin-left: 30px; margin-top: 5px">
                <b-spinner
                  v-if="spin"
                  variant="primary"
                  type="grow"
                ></b-spinner>
              </div>
            </b-input-group>
          </div>
          <div class="rightcontt">
            <img src="../assets/Meow.png" alt="" class="img" />
          </div>
        </div>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" size="lg" @click="createauthor()"
          >Создать</b-button
        >
        <b-button variant="secondary" size="lg" @click="cancel()">
          Закрыть
        </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>
<script>
import Api from "../api";

export default {
  name: "becomeauthor",
  data() {
    return {
      email: "",
      login: "",
      errors: "",
      spin: false,
    };
  },
  methods: {
    async createauthor() {
      const user = {
        login: this.login,
      };
      const login = this.login;
      const result = await Api.users.becomeauthored(
        user,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result == true) {
        console.log(login);
        this.errors =
          "Подождите около минуты, ваш поддомен создаётся, вы будете автоматически переведены на него";
        this.spin = true;
        setTimeout(() => {
          window.location.href = "https://" + login + ".neearby.com/page";
        }, 40000);
      } else {
        this.errors = result.message;
      }
    },
  },
};
</script>
<style lang="scss">
.maincontt {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.rightcontt {
  padding: 5% 10%;
}
.email {
  margin-top: 20px;
  margin-bottom: 40px;
}
.img {
  width: 220px;
}
.wwwarning {
  color: red;
}
</style>
