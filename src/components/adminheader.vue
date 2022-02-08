<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-navbar variant="faded" type="light">
          <b-button style="margin-left: 40px" v-b-toggle.sidebar-no-header
            >Меню</b-button
          >
          <b-sidebar
            id="sidebar-no-header"
            aria-labelledby="sidebar-no-header-title"
            no-header
            shadow
          >
            <template #default="{ hide }">
              <div class="forhead">
                <h4>Neearby</h4>
                <br />
                <h6>Администратор</h6>
              </div>
              <nav class="mb-3">
                <b-nav vertical>
                  <router-link class="links" to="/admin"> <b-icon icon="person-fill"> </b-icon> Пользователи</router-link>
                  <router-link class="links" to="/admin/insults"> Жалобы</router-link>
                  <router-link class="links" to="/admin/bans"> Баны</router-link>
                  <router-link class="links" to="/admin/email"> Email Рассылка</router-link>
                  <b-button v-b-toggle.collapse-1 variant="primary"
                    ><b-icon
                    
                      icon="chat-dots"
                      style="margin-right: 10px"
                    ></b-icon
                    >Чат-рассылка</b-button
                  >
                  <b-collapse id="collapse-1" class="mt-2">
                    
                      <p class="card-text">Рассылка</p>
                      <b-form-textarea v-model="messsage" style="width: 90%; margin-left: 50%; transform: translate(-50%, 0)" no-resize placeholder="Введите сообщение-рассылку">

                     </b-form-textarea>
                     <b-button @click="sendmesssage()" style="margin-top: 15px;">Отправить</b-button>
                    
                  </b-collapse>
                  <b-nav-item href="#link-2" @click="hide"></b-nav-item>
                </b-nav>
              </nav>
              <b-button variant="primary" block @click="hide"
                >Закрыть боковую панель</b-button
              >
            </template>
          </b-sidebar>
        </b-navbar>
        <b-link style="position: absolute; right: 20px; top: 20px" href="/"
          >Вернуться обратно</b-link
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import Api from "../api"
import auth from "./auth.vue";
import registrated from "@/components/registrated.vue";
import becomeauthor from "@/components/becomeauthor.vue";
export default {
  name: "HelloWorld",
  components: { auth, registrated, becomeauthor },
  props: {
    user: Object,
  },
  methods: {
    async sendmesssage() {
        const data= {
            mes: this.messsage
        }
        let result = await Api.users.sendmesssage(data, localStorage.getItem("token"))
        if(result == true) {
            window.location.reload();
        }
        console.log(result)
    },
  },
  data(){
      return {
          messsage: "",
      }
  },
  // mounted() {
  //   console.log(user)
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.intro {
  font-family: Arial, sans-serif;
  font-weight: 500;
  margin-top: 4px;
  font-size: 20px;
}
.links{
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
  transition: all 0.8s;
}
.links:hover {
  color: rgb(219, 69, 0);
}
.logo {
  margin-left: 30px;
}
.firs {
  margin-left: 40%;
}
.author {
  position: absolute;
  top: 8px;
  right: 30px;
}
.foradmin {
  padding-top: 12px;
}
.forhead {
  padding: 5%;
  background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3);
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-button {
  background-color: #666;
}
::-webkit-scrollbar-track {
  background-color: #999;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #666;
  border-radius: 3px;
}
::-webkit-scrollbar-corner {
  background-color: #999;
}
::-webkit-resizer {
  background-color: #666;
}
.curmessage {
  display: grid;
  grid-template-columns: 1fr 10fr;
}
</style>
