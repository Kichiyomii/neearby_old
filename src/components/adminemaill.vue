<template>
     <b-sidebar style="display: block !important;" class="side" id="headerfortoggle" show="true" no-close-on-backdrop no-header title="Sidebar">
       
       <div class="inside">
         <div class="headerr">
           <h3 style="text-align:center; padding-top: 15px;">Email-Рассылки</h3>
         </div>
                 
                 <div class="forspace"></div>
        <router-link class="button" to="/email/creategroup">Создать группу</router-link>
         <router-link class="button" to="/email/creatautoras">Создать авторассылку</router-link>
        <br><!--  </br>
        <router-link class="button" to="/email">Главная</router-link> -->
        <router-link class="button" to="/email/groupsubs">Группы подписчиков</router-link>
        <router-link class="button" to="/email/myras">Мои рассылки</router-link>
        <router-link class="button" to="/email/autoras">Авторассылки</router-link>
       </div>
    </b-sidebar>
</template>
<script>
import Api from "../api";

export default {
  name: "adminemaill",
  methods: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  async mounted() {
    this.$root.$emit('bv::toggle::collapse', 'headerfortoggle')
  },
};
</script>
<style scoped lang="scss">
#headerfortoggle{
  display: block !important;
}
.maincont {
  padding: 3%;
}
.card__content {
  margin-top: 40px;
}
.button{
  color: rgba(53, 53, 53, 0.712);
  vertical-align: middle;
  text-decoration: none;
  font-size: 26px;
  padding-left: 10px;
  transition: all 0.5s;
  margin-top: 10px;
}
.button:focus{
  color: rgba(121, 121, 121, 0.712);
}
.side{
  width: 100%;
  text-align: left;
}
.inside{
  display: flex;
  flex-direction: column;
}
.forspace{
  height: 140px;
}
.headerr{
  height: 90.9px;
}
</style>
