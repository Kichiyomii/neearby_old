<template>
  <div class="maincont">
    <div class="adv">
      <br />
      <h1>Станьте VIP участником!</h1>
      <br />
      <h3>
        Благодаря VIP программе вы как автор сможете создавать Акции на свои
        товары
      </h3>
      <div v-if="user.status == 'author' && !user.vip">
        <b-button variant="primary" class="btnn" @click="buyviip(1)" >Купить на 1 год за 500Р</b-button>
        <b-button variant="primary" class="btnn" @click="buyviip(3)">Купить на 3 года за 1300</b-button>
        <b-button variant="primary" class="btnn" @click="buyviip(5)">Купить на 5 лет за 2000</b-button>
        <p style="color: red; ">
            {{error}}
        </p>
      </div>
      <div v-if="user.status == 'user' || !user.Name" style="margin-top: 20px"> 
          <h3>Для покупки VIP вы должны создать страницу автора</h3>
          <b-button style="height: 50px;" variant="info" @click="funct()">Создать страницу автора!</b-button>
      </div>
      <b-card v-if="user.vip" class="vipped">
        <h2>VIP купон</h2> <br>

        <h5> Данный купон действителен еще {{user.vip.last}} дней</h5>
      </b-card>
    </div>
  </div>
</template>
<script>
import Api from "../api"
export default {
  name: "vip",
  props: {
    user: Object,
  },
  data() {
      return {
          error: ''
      }
  },
  methods: {
    funct(){
        this.$bvModal.show("modal-scoped-3")
    },
      async buyviip(col) {
        
          const json = {
              col: col
          }
          let result = await Api.users.buyvip(json, localStorage.getItem("token"))
          window.location.href= result
          console.log(result)
      }
  },
  mounted() {
      setTimeout(async () => {
        console.log(this.user);
      }, 1000)
    
  },
};
</script>
<style lang="scss">
.maincont {
  min-height: 100vh;
  background-color: #e9e9e9;
}
.btnn{
    height: 50px;
    font-size: 20px;
    margin-left: 15px;
    margin-right: 15px;
margin-top: 20px;
margin-bottom: 10px;
}
.vipped{
  min-height: 150px;
  width: 80%;
  margin-left: 50%;
  margin-top: 30px;
  transform: translate(-50%, 0)
}
</style>