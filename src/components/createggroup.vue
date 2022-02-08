<template>
  <div class="mainconttt">
    <b-card style="margin-bottom: 20px;">
      <div class="top"><h3>Создать группу подписчиков</h3></div>
      <div class="formain">
        <div class="leftside">
          <label for="1">Название группы</label>
          <b-form-input id="1" required v-model="namegroup"></b-form-input>
          <br />
          <label for="2">Название подписки</label>
          <b-form-input id="2" required v-model="namesub"></b-form-input>
        </div>
        <div class="rightside">
          <label for="3-1">От кого</label>
          <b-form-input id="3-1" required v-model="fromwho"></b-form-input>
          <br />
          <label for="4">Обратный email</label>
          <b-form-input placeholder="qwerty@mail.ru" id="4" required v-model="email"></b-form-input>
        </div>
      </div>
      <div class="line"></div>
      <br />
    </b-card>
    <b-card>
      <div class="pereadres">
        <h3 style="text-align: center">Переадресация</h3>
        <br />
        <label for="12">Переадресация при подписке</label>
        <b-form-input
          id="12"
          placeholder="https://site.com/"
          label="Переадресация при подписке"
          required
          v-model="readressun"
        ></b-form-input>
                <br />
        <label for="122">Переадресация при подтверждении подписки</label>
        <b-form-input
          id="122"
          placeholder="https://site.com/"
          label="Переадресация при подписке"
          required
          v-model="readressunn"
        ></b-form-input>
        <br />
        <label for="1234">Переадресация при отписке</label>
        <b-form-input
          id="1234"
          placeholder="https://site.com/"
          label="Переадресация при отписке"
          required
          v-model="readressunsu"
        ></b-form-input>
      </div>
      <div style="text-align: center;" class="forerrors">
                  <div v-if="errors.length != 0" style="color: red">
                      <p v-if="errors" class="ch"></p>
                      <p class="ch"></p>
                      <p class="ch"></p>
                      <p class="ch"></p>
                      <p class="ch"></p>
                      <p class="ch"></p>
                  </div>
      </div>
      <div class="last">
        <br />
        <b-button @click="create()" style="width: 200px; height: 45px; font-size: 22px;" variant="info"> Создать группу </b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "adminemaill",
  methods: {
    async create() {
      const json = {
        name_group: this.namegroup,
        name_sub: this.namesub,
        back_mail: this.email,
        from: this.fromwho,
        link_sub: this.readressun,
        link_unsub: this.readressunsu,
      };
      const result = await Api.users.creategroup(localStorage.getItem("token"), json);
      if(result.error == 400){
        this.errors = result.message
      }
      if(!result.error){
        window.location.reload();
      }
      console.log(result);
    },
  },
  data() {
    return {
      errors: [],
      namegroup: "",
      namesub: "",
      fromwho: "",
      readressunn: "",
      email: "",
      readressun: "",
      readressunsu: "",
    };
  },
  computed: {},
  async mounted() {
    var root = document.getElementById("headerfortoggle");
    root.style.display = "flex;";
    this.$root.$emit("bv::toggle::collapse", "headerfortoggle");
    this.$root.$emit("bv::toggle::collapse", "headerfortoggle");
  },
};
</script>
<style scoped lang="scss">
.mainconttt {
  padding: 3%;
  padding-left: 340px;
  background-color: #e9e9e9;
}
.formain {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
}
.line {
  margin-top: 10px;
  height: 1px;
  width: 100%;
  background-color: rgba(114, 114, 114, 0.411);
}
.pereadres {
  text-align: left;
}
</style>
