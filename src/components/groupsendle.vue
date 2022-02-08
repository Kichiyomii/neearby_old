<template>
  <div class="mainconttt">
    <b-card v-if="array.length == 0">
      <h3>Похоже, у вас ещё нет группы</h3>
      <router-link class="button" to="/email/creategroup"
        >Создайте свою первую группу!</router-link
      >
    </b-card>
    <div v-else>
      <b-card style="margin-top: 20px; margin-bottom: 40px;">
        <h4 style="display: inline-block; float: left;">Email Рассылки</h4>
        <router-link style="display: inline-block; float: right;text-align: right; text-decoration: none; color: teal;" to="/email/creategroup"
          >Создайте свою первую группу!</router-link
        >
      </b-card>
      <b-card class="all" v-for="sub in array" :key="sub.id">
        <p style="font-size: 22px; color: teal; font-weight: 900;">{{sub.name_group}}</p>
        <p style="display: inline-block; float:left">Количество подписавшихся : {{ sub.subscribe }}</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <p style="display: inline-block; float:center"> Обратный Email: {{sub.back_mail}} </p> <br>
        <p style="display: inline-block; float:left">Количество ожидающих подписку : {{ sub.await_subscribe }}</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <p style="display: inline-block; float:center"> Переход по: {{sub.link_sub}} </p>
        <div class="icons">
          <b-button style="margin-right: 5px;" varian="info;"> <b-icon icon="basket"> </b-icon></b-button>
          <b-button style="margin-right: 5px;" @click="copy()" varian="info;"> <b-icon icon="link45deg"> </b-icon></b-button>
          <b-button style="margin-right: 5px;" :href="'/about/' + sub.id" varian="info;"> <b-icon icon="eye"> </b-icon></b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "adminemaill",
  methods: {},
  data() {
    return {
      array: {},
    };
  },
  computed: {},
  async mounted() {
    const result = await Api.users.getgroup(localStorage.getItem("token"));
    console.log(result);
    this.array = result.slice().reverse();
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
}
.icons{
  position: absolute;
  right: 10px;
  top: 20px;
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
.all {
  text-align: left;
  margin-bottom: 10px;
}
</style>
