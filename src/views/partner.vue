<template>
  <div>
    <HelloWorld :user="user" />
    <!-- <catalogfromauthor :user="user"/> -->
    <div class="maincont">
      <b-card class="maintov">
        <h3>Товар: "{{ data.tittle }}""</h3>
        <b-avatar
          rounded
          style="margin-right: 10px; width: 240px; height: 180px"
          :src="'https://api.steepmail.com/api/publication/storage/'  + data.img"
        >
        </b-avatar>
        <p>
          {{ data.description }}
        </p>
        <b-link
          style="margin-right: 50px"
          :href="data.description_url"
          variant="primary"
        >
          <b-icon icon="chevron-double-left"> </b-icon>Сайт-описание
        </b-link>
        <b-link
          style="margin-left: 20px"
          :href="'/' + data.author + '/tovars'"
          variant="primary"
          >Другие товары автора <b-icon icon="chevron-double-right"> </b-icon>
        </b-link>
        <p style="color: red">{{errno}}</p>
        <p style="color: green">{{success}}</p>
        <div style="margin-top: 20px">
          <b-button @click="buy()"> Купить за {{ data.cost }} P!</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

// import catalogfromauthor from "@/components/catalogfromauthor.vue";
import { Auth } from "../auth";
import Api from "../api";
export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    // catalogfromauthor,
  },
  methods: {
    async buy() {
      if (!this.debounce) {
        this.debounce = true;
        const ztx = this;
        setTimeout(() => {
          ztx.debounce = false;
        }, 1500);
        if (!this.user.id || !localStorage.getItem("token")) {
          this.$bvModal.show("modal-scoped");
        } else {
          const json = {
            id: this.$route.params.id,
            idtovar: this.$route.params.idtovar,
          };
          const result = await Api.users.buybuy(
            json,
            localStorage.getItem("token")
          );
          if(result==true){
              this.success = 'Покупка совершена. Проверьте почту или личные сообщения аккаунта'
          }
          else{ 
              this.errno = result.message
          }
          console.log(result);
        }
      }
    },
  },
  data() {
    return {
        errno: '',
        success: '',
      data: {},
      user: {},
      debounce: false,
    };
  },
  async mounted() {
    
    this.user = await Auth();
    if (!this.user.id || !localStorage.getItem("token")) {
      this.$bvModal.show("modal-scoped");
      console.log("Poshel naxyi");
    }
    let ter = this.$route.params.idtovar;
    console.log(ter);
    const result = await Api.users.getcurtov(ter);
    this.data = result;
    console.log(result);
  },
};
</script>
<style lang="scss">
.maincont {
  background-color: #e9e9e9e9;
  min-height: 100vh;
  padding: 5% 20%;
}
.maintov {
  padding: 0;
}
</style>