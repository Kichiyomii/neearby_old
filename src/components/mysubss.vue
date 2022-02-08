<template>
  <div class="maincont">
    <h2><p class="set">Мои подписки</p></h2>
    <div class="musybs">
      <b-card v-for="sub in subs" :key="sub.type" v-if="subs.length != 0">
        <div class="redirect" @click="redir(sub.author.login)">
          <b-icon
            icon="arrow-right-circle"
            :href="'https://' + sub.author.login + '.neearby.com/page'"
          ></b-icon>
        </div>

        <div class="photo">
          <b-avatar
            id="avatarochka"
            style="
              width: 12rem;
              height: 12rem;
              max-width: 200px;
              max-height: 200px;
            "
            :src="
              'https://api.steepmail.com/api/users/' +
              sub.author.login +
              '/photo'
            "
          >
          </b-avatar>
        </div>
        <div class="name">{{ sub.author.name }}</div>
        <div class="subsc">Вы подписаны</div>
        <b-button variant="info" class="redd" :href="'https://'+ sub.author.login + '.neearby.com/page'" >Перейти на страницу автора</b-button>
        <div class="buttons">
          <b-button-group v-if="sub.type == 'free'">
            <b-button variant="info" disabled size="lg">0 ₽ в месяц</b-button>
            <b-button class="wejewa" variant="primary"  @click="unlikee(sub.author.id)" size="lg">Отписаться</b-button>
          </b-button-group>
          <b-button-group v-if="sub.type == 'noActive'">
            <p>Подписка не активна!</p> <br>
            <b-button variant="info" disabled size="lg"
              >{{ sub.sub.cost }} ₽ в месяц</b-button
            >
            <b-button class="wejewa" variant="primary" @click="unnsub(sub.sub.id)" size="lg">Отписаться</b-button>
          </b-button-group>
          <b-button-group v-if="sub.type == 'pay'">
            <b-button variant="primary" disabled size="lg"
              >{{ sub.sub.cost }} ₽ в месяц</b-button
            >
            <b-button class="wejewa" variant="primary" @click="unnsub(sub.sub.id)" size="lg">Отписаться</b-button>
          </b-button-group>
          <p v-if="sub.type == 'nopay'">Годен до {{sub.goden.split('T')[0]}}</p>
        </div>
      </b-card>
      <b-card v-else> <h3>У вас ещё нет подписок. Подпишитесь</h3> </b-card>
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "catalogfromauthor",
  data() {
    return {
      authors: {},
      subs: {},
    };
  },
  async mounted() {
    let result = await Api.users.getallmysubs(localStorage.getItem("token"));
    console.log(result);
    if (result.resoult.length == 0) {
      console.log("1");
    } else {
      this.subs = result.resoult;
    }
  },
  methods: {
    async unnsub(id){
      const result = await Api.users.unsub(
        localStorage.getItem("token"),
        id
      )
      if (result == true){
        window.location.reload();
      }
      else{
        console.log(result)
      }
    },
        async unlikee(login) {
      const result = await Api.users.unlike(
        login,
        localStorage.getItem("token")
      );
      window.location.reload();
      console.log(result);
      if (result) {
        this.result = true;
      }
      return 0;
    },
    redir(login) {
      window.location.href = "https://" + login + ".neearby.com/page";
    },
  },
};
</script>
<style lang="scss">
.maincont {
  padding: 3%;
  background-color: #e9e9e9;
  min-height: 100vh;
}
.redd{
  font-size: 17px;
  margin-bottom: 10px;
}
.set {
  text-align: left;
  margin-left: 50px;
}
.musybs {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 40px;
}
@media only screen and (max-width: 600px) {
  .musybs {
    display: flex;
    flex-direction: column;
  }
}
.name {
  font-size: 18px;
  font-weight: 700;
}
.redirect {
  position: absolute;
  top: 5px;
  right: 5px;
  transition: all 0.5s;
  cursor: pointer;
}
.redirect:hover {
  color: #fe6637;
  font-size: 18px;
}
</style>
