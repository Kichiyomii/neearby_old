<template>
  <div class="mainconttt">
          <b-card style="margin-top: 20px; margin-bottom: 40px;">
        <h4 style="display: inline-block; float: left;">Авторассылки</h4>
        <router-link style="display: inline-block; float: right;text-align: right; text-decoration: none; color: teal;" to="/email/creatautoras"
          >Создать рассылку</router-link
        >
      </b-card>
    <b-card class="all" v-for="sub in array" :key="sub.id">  
     <h5>Авторассылка {{sub.name}}</h5>
    </b-card>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "adminemaill",
  methods: {
  },
  data() {
    return {
        array: {},
    };
  },
  computed: {},
  async mounted() {
      const result = await Api.users.getauto(localStorage.getItem("token"))
      console.log(result)
      this.array = result.slice().reverse()
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
.all{
  text-align: left;
    margin-bottom: 10px;
}
</style>
