<template>
  <div class="maincont">
    <h2><p class="set">Настройки аккаунта</p></h2>
    <h4><p class="sett">{{user.login}}#{{user.id}}</p></h4>
    <div class="fffforgrid">
      <div class="leftgrid">
        <div class="leftconone">
          <div>
            <label for="text-email">Имя</label>
            <b-form-input
              v-model="name"
              id="text-email"
              placeholder="Введите вашe Имя Пользователя"
            ></b-form-input>
          </div>
        </div> 
        <div class="leftcontwo">
          <div>
            <label for="text-emaill">Email</label>
            <b-form-input
              v-model="email"
              id="text-emaill"
              placeholder="Введите ваш Email"
            ></b-form-input>
          </div>
        </div>
      </div>
      <div class="rightcontone" v-if="user.login">
        <h6>Фотография пользователя</h6>
        <b-card class="avattt">
          <b-avatar
            id="avatarochka"
            rounded
            style="width: 100%; height: 90%"
            :src="
              'https://api.steepmail.com/api/users/' +
              user.login +
              '/photo'
            "
          >
          </b-avatar>
        </b-card>
        <div class="upload" style="margin-top: 10px; padding-left: 25px">
          <b-button variant="info" style="margin-top: 20px;"> 
            <input
              type="file"
              @change="uploadProf($event)"
              accept="image/*"
              id="upload"
              hidden
            />
            <label for="upload">
              <b-icon icon="image" style="margin-right: 5px; "> </b-icon>Обновить
              фотографию</label
            >
          </b-button>
        </div>
      </div>
    </div>
    <div class="butttton" style="text-align: center;">
          <p class="error">{{errors}}</p>
          <b-button variant="primary"  @click="profileupdate()"> Сохранить </b-button>
    </div>

  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "settingsheader",
  props: {
    user: Object
  },
  mounted() {
    setTimeout(async () => {
          this.email = this.user.email
    this.name = this.user.Name
    }, 1000)

  },
  data() {
    return {
      name: "",
      email: "",
      errors: "",
    };
  },
  methods: {
        async uploadProf(event) {
      const data = new FormData();
      data.append("photo", event.target.files[0]);
      console.log(data);
      const result = await Api.users.updateProfile(
        data,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result == true) {
        console.log("2");
        window.location.reload();
        document.getElementById("avatarochka").src =
          "https://api.steepmail.com/api/users/" +
          user.login +
          "/photo?a=" +
          Math.floor(Math.random() * 345678);
        // this.$forceUpdate();
      }
      
    },
    async profileupdate(){
      const user = {
        Name: this.name,
        email: this.email,
      }
      let result = await Api.users.updateproff(user, localStorage.getItem("token"))
      if(result.message){
        this.errors = result.message 
      }
      window.location.reload()
      
    }
  }
};
</script>
<style lang="scss" scoped>
.maincont {
  text-align: center;
  min-height: 100vh;
  width: 100%;
  background-color: #e9e9e9;
}
.leftgrid {
  width: 90%;
  height: 400px;
  padding-right: 20px;
}
.rightcontone {
  height: 400px;
}
.leftconone {
  margin-top: 40px;
}
.leftcontwo {
  margin-top: 50px;
}
.fffforgrid {
  margin-top: 50px;
  display: flex;
  grid-template-columns: 1fr 1fr;
}
.avattt {
  width: 100%;
}
.set {
  text-align: center;
  font-weight: 700;
  padding-top: 30px;
}
.sett {
  text-align: center;
  font-weight: 700;
}
.butttton{
margin-top: 20%;
}
</style>