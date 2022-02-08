<template>
  <div style="width: 100%; overflow: hidden">
    <b-card class="avat">
      <div class="pencil" v-if="status.login == user.login">
        <pencil />
      </div>
      <b-avatar
        id="avatarochka"
        class="av"
        rounded
        style="width: 100%; height: 450px"
        :src="'https://api.steepmail.com/api/users/' + author.login + '/photo'"
      >
      </b-avatar>

      <!-- <div
        class="oblojechka"
        id="avatarochka"
        :style="
          'background-image: url(http://89.223.65.75:3000/api/users/' +
          this.$router.currentRoute.params['id'] +
          '/photo)'
        "
      ></div> -->
      <div style="cursor: pointer" @click="showmodal(author.id)">
        <p
          v-if="author.id == '3' || author.id == '91'"
          style="
            color: teal;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            padding: 0;
            font-family: Inter, Arial, sans-serif;
          "
        >
          ∞
        </p>
        <p
          v-else
          style="
            color: black;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            padding: 0;
            position: relative;
            top: 7px;
            font-family: Inter, Arial, sans-serif;
          "
        >
          {{ subc }}
        </p>

        <p style="margin: 0; padding: 0; color: grey">Отслеживающих</p>
      </div>

      <!-- <img :src="'http://89.223.65.75:3000/api/users/' + this.$router.currentRoute.params['id'] + '/photo'" alt="Error 404" class="avatar"> -->
    </b-card>
        <b-button
     v-if="(user.id == '3' || user.id == '91'|| user.id == '1' || user.id == '2') && author.login == user.login"
     
      :href="'/admin'"
      variant="info"
      style="
        margin-top: 20px;
        width: 280px;
        height: 50px;
        font-size: 18 px;
        font-family: Inter, Arial, sans-serif;
      "
    >
      <img v-if="user.id=='1' || user.id == '2'" src="../assets/crown.png" style="width: 45px; height: 45px" alt="">
       Админочка
    </b-button>
            <b-button
             v-if="user.id=='1' || user.id == '2' || user.id == '3' || user.id == '91'"
      variant="info"
      href='/email/groupsubs'
      style="
        margin-top: 20px;
        width: 280px;
        height: 50px;
        font-size: 18 px;
        background-color: white;
        color: #fe6637;
        font-family: Inter, Arial, sans-serif;
      "
      >Email</b-button
    >
    <b-button
      v-if="status.login == user.login"
      :href="'/chats'"
      variant="info"
      style="
        margin-top: 20px;
        width: 280px;
        height: 50px;
        font-size: 18 px;
        padding-top: 12px;
        font-family: Inter, Arial, sans-serif;
      "
    >
      <b-icon icon="chat-dots-fill" class> </b-icon> Мои сообщения
    </b-button>

    <b-button
       v-if="status.login == user.login"
      :href="'/newpost'"
      variant="info"
      style="
        margin-top: 20px;
        width: 280px;
        height: 50px;
        font-size: 18 px;
        padding-top: 12px;
        font-family: Inter, Arial, sans-serif;
      "
    >
      <b-icon icon="pencil" class> </b-icon> Написать пост
    </b-button>
    <b-button
      v-else-if="!result"
      variant="info"
      @click="like()"
      style=" font-family: Inter, Arial, sans-serif;margin-top: 20px; width: 280px; height: 50px; font-size: 18 px"
      >Отслеживать</b-button
    >
    <b-button
      v-if="result"
      variant="info"
      v-on:click="unlikee()"
      style="
        margin-top: 20px;
        width: 280px;
        height: 50px;
        font-size: 18 px;
        background-color: white;
        color: #fe6637;
        font-family: Inter, Arial, sans-serif;
      "
      >Перестать отслеживать</b-button
    >

    <b-button
      v-if="user.login != author.login"
      variant="info"
      v-on:click="message()"
      style="margin-top: 20px; width: 280px; height: 50px; font-size: 18 px;font-family: Inter, Arial, sans-serif;"
    >
      <b-icon icon="chat"> </b-icon> Написать сообщение</b-button
    >
    <b-modal size="lg" id="modal-tall" title="Ваши Нэрбийцы">
      <div class="contforcards">
        <b-card v-for="sub in nerb" :key="sub.id" class="kekmeow">
          <b-avatar
            style="width: 60px; height: 60px"
            :src="'https://api.steepmail.com/api/users/' + sub.login + '/photo'"
          >
          </b-avatar>
          <p>
            {{ sub.Name }}
          </p>
          <b-button variant='info' v-if="sub.login" :href="'https://' + sub.login + '.neearby.com/page'">Перейти на страницу автора</b-button>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>
<script>
import Api from "../api";
import pencil from "./pencil.vue";
export default {
  components: {
    pencil,
  },
  data() {
    return {
      result: false,
      nerb: {},
    };
  },
  name: "avatarlinks",
  props: {
    user: Object,
    status: Object,
    subc: Number,
    login: Number,
    author: Object,
  },
  methods: {
    async showmodal(id) {
      const ress = await Api.users.getFree(id);
      console.log(ress);
      this.nerb = ress;
      this.$bvModal.show("modal-tall");
      console.log(this.nerb);
    },
    async message() {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped2");
      } else {
        let result = await Api.users.postmessage(
          this.author.id,
          localStorage.getItem("token")
        );
        console.log(result);
        if (result == true || result.message == "Чат уже создан") {
          window.location.href = "/chats";
        }
      }
    },
    async like() {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped2");
      } else {
        const result = await Api.users.addlike(
          this.login,
          localStorage.getItem("token")
        );
        window.location.reload();
        console.log(result);
        if (result) {
          this.result = true;
        }
        return 0;
      }
    },
    async unlikee() {
      const result = await Api.users.unlike(
        this.login,
        localStorage.getItem("token")
      );
      window.location.reload();
      console.log(result);
      if (result) {
        this.result = true;
      }
      return 0;
    },
  },

  async mounted() {
    setTimeout(async () => {
      const result = await Api.users.ascsub(this.login, this.user.id);
      console.log(result);
      this.result = result;
    }, 1000);
  },
};
</script>
<style lang="scss">
.contforcards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.kekmeow {
  display: grid;
  color: black;
}
.close {
  outline: none;
  border: none;
  background: none;
}
.pencil {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
}
.avatar {
  overflow: hidden;
}
.avat {
  height: 540px;
  width: 100%;
  overflow: hidden;
}
.oblojechka {
  background-size: cover;
  width: 100%;
  height: 87%;
}
.subc {
  color: red;
}
.subsss {
  color: rgb(141, 38, 38);
  font-size: 17px;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .av {
    width: 100%;
    height: 87%;
  }
}
</style>
