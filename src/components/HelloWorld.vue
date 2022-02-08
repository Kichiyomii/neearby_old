<template>
  <div>
    <div id="header">
      <transition name="slide-fade">
        <b-navbar type="light" variant="light" v-if="showw">
          <b-navbar-nav>
            <b-navbar variant="faded" type="light">
              <b-navbar-brand href="#" class="logo">
                <img
                  src="../assets/logotip.png"
                  style="width: 40px; display: inline-block"
                  alt=""
                />
                <h2 class="log">Neearby.com</h2>
              </b-navbar-brand>
            </b-navbar>

            <!-- <b-nav-item class="intro firs" href="https://neearby.com"
            >Главная</b-nav-item
          > -->
            <router-link class="head" to="/">Главная</router-link>

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown class="intro" text="Каталог" right>
              <router-link class="head" to="/authorcatalogue"
                >Каталог Авторов</router-link
              >
              <br />
              <router-link class="head" to="/productcatalogue"
                >Каталог Товаров</router-link
              >
            </b-nav-item-dropdown>
            <router-link class="head" to="/action">Акции</router-link>
            <router-link
              class="head"
              to="/topsubscriptions"
              style="padding-top: 10px"
              >Топ 10<br />подписок</router-link
            >
            <router-link
              class="head"
              to="/topproducts"
              style="padding-top: 10px"
              >Топ 10<br />товаров</router-link
            >
            <router-link class="head" to="/vip">VIP</router-link>
            <!-- <b-nav-item class="intro" href="https://neearby.com/action"
            >Акции</b-nav-item
          >
          <b-nav-item href="https://neearby.com/topsubscriptions"
            >Топ 10 подписок</b-nav-item
          >
          <b-nav-item href="https://neearby.com/topproducts"
            >Топ 10 подписок</b-nav-item
          >
          <b-nav-item class="intro" href="https://neearby.com/vip"
            >VIP</b-nav-item
          > -->
            <div class="registrated" v-if="user.id">
              <registrated :user="user" />
            </div>
            <div class="author" v-else>
              <auth />
            </div>
            <div class="becomeauthor" v-if="user.status == 'user'">
              <becomeauthor />
            </div>
            <b-nav-item> </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </transition>
      <b-modal id="modal-complain">
        <template #modal-header="">
          <!-- Emulate built in modal header close button action -->
          <h5>Жалоба</h5>
        </template>

        <template #default="">
          <h5>Введите причину жалобы</h5>
          <b-form-textarea
            placeholder="Введите вашу жалобу"
            style="overflow-y: hidden"
            no-resize
            rows="3"
            max-rows="8"
            v-model="compl"
          >
          </b-form-textarea>
          <p class="wwarning">
            {{ err }}
          </p>
        </template>

        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button
            style="margin-right: 10px"
            variant="primary"
            v-on:click="sendinsult()"
            >Отправить жалобу</b-button
          >
          <b-button variant="secondary" @click="cancel()"> Закрыть </b-button>
          <!-- Button with custom close trigger value -->
        </template>
      </b-modal>
    </div>
    <div id="headermobile">
      <div class="navcc"  >
              <b-icon  icon="segmented-nav" v-b-toggle.sidebar-variant
        ></b-icon
      >
      </div>

      <b-sidebar
        id="sidebar-variant"
        title="Neearby"
        bg-variant="dark"
        text-variant="light"
        shadow
      >
                  <div class="registrated" v-if="user.id">
              <registrated :user="user" />
            </div>
            <div class="author" v-else>
              <auth />
            </div>
            <div class="becomeauthor" v-if="user.status == 'user'">
              <becomeauthor />
            </div>
         <router-link class="head" to="/">Главная</router-link>

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown class="intro" text="Каталог" right>
              <router-link class="head" to="/authorcatalogue"
                >Каталог Авторов</router-link
              >
              <br />
              <router-link class="head" to="/productcatalogue"
                >Каталог Товаров</router-link
              >
            </b-nav-item-dropdown>
            <router-link class="head" to="/action">Акции</router-link>
            <router-link
              class="head"
              to="/topsubscriptions"
              style="padding-top: 10px"
              >Топ 10<br />подписок</router-link
            >
            <router-link
              class="head"
              to="/topproducts"
              style="padding-top: 10px"
              >Топ 10<br />товаров</router-link
            >
            <router-link class="head" to="/vip">VIP</router-link>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import Api from "../api";
import auth from "./auth.vue";
import registrated from "@/components/registrated.vue";
import becomeauthor from "@/components/becomeauthor.vue";
export default {
  name: "HelloWorld",
  components: { auth, registrated, becomeauthor },
  props: {
    user: Object,
    meow: String,
  },
  data() {
    return {
      showw: false,
      compl: "",
      err: "",
    };
  },

  methods: {
    async sendinsult() {
      let strr = JSON.parse(localStorage.getItem("complain"));
      const json = {
        description: this.compl,
        type: strr.type,
        id_obj: strr.id,
      };
      const result = await Api.users.sendinsult(
        json,
        localStorage.getItem("token")
      );
      if (result.message) {
        this.err = result.message;
      } else {
        this.$bvModal.hide("modal-complain");
      }
      console.log(result);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showw = true;
    }, 100);
    if (this.meow) {
      document.getElementById("header").classList.add("bar");
    }
  },
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
#headermobile {
  display: none;
}
.navcc{
position: absolute;
    left: 20px;
    top: 10px;
    z-index: 1000;
    text-align: left;
    width: 60px;
    font-size: 30px;
}
.intro {
  font-family: Arial, sans-serif;
  font-weight: 500;
  margin-top: 8px;
  font-size: 20px;
}
.head {
  display: inline-block;
  color: rgba(0, 0, 0, 0.55);
  font: 20px Arial, sans-serif;
  margin-right: 10px;
  text-decoration: none;
  vertical-align: middle;
  padding: 19px 25px;
}
.log {
  display: inline-block;
}
.head:focus {
  color: rgba(0, 0, 0, 0.7);
}
.logo {
  margin-left: 30px;
  margin-right: 3vw;
}
.firs {
  margin-left: 20%;
}

.nav {
  padding: 0;
}
.author {
  position: absolute;
  top: 8px;
  right: 20px;
}
.foradmin {
  padding-top: 12px;
}
.registrated {
  margin-left: 1rem;
}
.bar {
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 1.1s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(5px);
  opacity: 0;
}
@media only screen and (max-width: 600px) {
  #header {
    display: none;
  }
  #headermobile {
    display: block;
    color: #f2f3f4;
  }
  .b-sidebar-body{
    display: grid;
  }
}
</style>
