<template>
  <div class="landing">
    <transition name="slide-fade">
      <div class="topl">
        <div class="word" v-if="show">
          <div class="wrd">
            <p class="intro">
              Первая в мире социальная сеть с<br />
              искусственным интеллектом по <br />
              заработку в интернете запущена.
            </p>

            <p class="smaller_intro">
              Моментально зарегистрируйтесь прямо сейчас!
            </p>
            <b-button
              class="button_intro"
              variant="primary"
              size="lg"
              :href="'https://' + user.login + '.neearby.com/page'"
              v-if="user.status == 'author'"
              >Моя страница
            </b-button>
            <b-button
              @click="$bvModal.show('modal-scoped-3')"
              class="button_intro"
              variant="primary"
              size="lg"
              v-else-if="user.status == 'user'"
              >Создать страницу автора</b-button
            >
            <b-button
              @click="$bvModal.show('modal-scoped1')"
              class="button_intro"
              variant="primary"
              size="lg"
              v-else-if="user.error"
              >Регистрируйся прямо сейчас</b-button
            >
          </div>
          <div class="forimg">
            <img src="../assets/ph.png" class="mobile" alt="" />
          </div>
        </div>
      </div>
    </transition>
    <div class="dropdowncont">
      <b-button class="tog" v-b-toggle.my-collapse>Что такое Neearby?</b-button>
      <b-collapse id="my-collapse">
        <b-card
          class="desssc"
          title="Neearby - это заработок в интернете без всяких вложений"
        >
          Присоединись к первой социальной сети для заработка в интернете и
          начни зарабатывать каждый день. Поделись ссылкой на наш проект со
          своими друзьями и получай часть дохода от их заработка
        </b-card>
      </b-collapse>
      <b-button class="tog" v-b-toggle.my-collapse1
        >Как я могу зарабатывать на проекте Neearby?</b-button
      >
      <b-collapse id="my-collapse1">
        <b-card class="desssc" title="Все очень просто! 3 шага!">
          <p class="cet">1.Зарегистрируй свою страницу и заполни её!</p>

          <p class="cet">
            2.Продавай свои инфокурсы, подписки, и зарабатывай на них!
          </p>

          <!-- <p class="cet">
            3.Пригласи людей по
            <b-icon
              style="color: black; font-size: 35px"
              icon="link45deg"
            ></b-icon>
            этому значку и получай проценты!
          </p> -->
        </b-card>
      </b-collapse>
    </div>
    <div style="padding: 5%">
      <b-card
        class="smaller_intro"
        style="text-align: center;color: #2c3e50"
      >
        В нашей социальной сети регистрируются авторы (регистрация бесплатная
        без абонентской платы) разного контента (не физический товар). Например,
        фитнес тренер выкладывает свои уроки, в том числе в видео формате по
        тренировкам. Эти уроки не доступны, пока любой желающий не оплатит
        подписку на уроки данного автора. После оформления подписки все уроки
        становятся доступны, в том числе те, которые автор будет выкладывать
        позже. В разделе «Мои подписки» у каждого пользователя будут
        отображаться все его подписки и одним кликом он может отписаться от
        любой подписки. Кроме фитнес тренеров (указал в качестве простого
        примера), могут быть авторами такие творческие люди, как художники,
        музыканты, блогеры и так далее.
      </b-card>
    </div>

    <!-- <div class="chtoto">
      <div class="calc">
        <p class="quest">
          Сколько я могу заработать на этом проекте? <br />
          Вычисли сам!
        </p>
        <div class="calccont">
          <div class="firstcalc">
            <p class="label">
              Введите предполагаемое количество нербийцев, которые подпишутся на
              вас
            </p>
            <b-form-input
              type="number"
              v-model="subsers"
              placeholder="100"
              @change="multiplie()"
            ></b-form-input>
            <p class="label">Введите стоимость подписки</p>
            <b-form-input
              type="number"
              v-model="subcost"
              placeholder="100"
              @change="multiplie()"
            ></b-form-input>
            <b-button
              @click="multiplie()"
              class="button_introo"
              variant="primary"
              style="margin-top: 20px"
              >Сколько денег я получу?</b-button
            >
          </div>
        </div>

        <div class="overall">
          Вы сможете получить {{ total }} рублей в месяц!
        </div>
      </div>
    </div> -->
    <h4>Они уже зарабатывают вместе с нами</h4>
    <div class="forpeople">
      <div class="person">
        <b-avatar
          class="im"
          src="https://api.steepmail.com/api/users/alexhotpro/photo"
        ></b-avatar>
        <p class="name">Алекс Жаркий</p>
        <p class="followers">Отслеживающих: 120</p>
        <b-button
          class="bbb"
          href="https://alexhotpro.neearby.com/page"
          variant="info"
          >Перейти на страницу автора</b-button
        >
      </div>
      <div class="person">
        <b-avatar
          class="im"
          src="	https://api.steepmail.com/api/users/top100/photo"
        ></b-avatar>
        <p class="name">Михаил Яковлев</p>
        <p class="followers">Отслеживающих: 200</p>
        <b-button
          class="bbb"
          href="https://top100.neearby.com/page"
          variant="info"
          >Перейти на страницу автора</b-button
        >
      </div>
      <div class="person">
        <b-avatar class="im"></b-avatar>
        <p class="name">Здесь можете быть вы</p>
        <p class="followers">
          Зарегестрируйтесь на нашем сервисе и зарабатывайте вместе с нами!
        </p>
        <b-link></b-link>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "landing",
  props: {
    user: Object,
  },
  data() {
    return {
      show: false,
      subsers: 0,
      subcost: 0,
      tovusers: 0,
      tovcost: 0,
      subtotal: 0,
      tovtotal: 0,
      total: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 200);
  },

  methods: {
    multiplie() {
      let x = this.subsers * this.subcost;
      let i = this.subsers * this.subcost - x * 0.1;
      console.log(this.subsers * this.subcost);
      console.log(this.subcost);
      console.log(i);
      this.total = Math.round(i);
      console.log(this.total);
    },
    author() {},
    async okk() {
      this.errors = "";
      const user = {
        email: this.text,
        password: this.password,
      };
      console.log(user);
      let result = await Api.users.registration(user);
      console.log(result);
      if (result.token) {
        let token = result.token;
        localStorage.setItem("token", token);
        window.location.href = "/" + token;
        console.loc(localStorage.getItem("token"));
      } else {
        this.errors = result.message;
      }
      return {};
    },
  },
};
</script>
<style lang="scss">
#my-collapse {
  margin-bottom: 10px;
}
.form-control {
  font-size: 1.1rem !important;
}
.bbb {
  margin-bottom: 15px;
}
.im {
  width: 200px;
  height: 200px;
}
.name {
  font-size: 20px;
  font-weight: 700;
}
.followers {
  font-size: 16px;
  font-size: 600;
}
.forpeople {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
}
.person {
  text-align: center;
  width: 30%;
  border-radius: 5px;
}
.overall {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
.firstcalc {
  width: 400px;
  font-size: 18px;
}
.wrd {
  padding: 5%;
}
.mobile {
  width: 55vh;
}
.label {
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 18px;
}
.calccont {
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 50%;
  transform: translate(-50%, 0%);
}
.cet {
  text-align: center;
}
.quest {
  font-size: 26px;
  font-weight: 700;
  margin-top: 9%;
  text-align: center;
}
.answ {
  font-size: 24px;
  font-weight: 600;
}
.foransw {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  color: black;
  padding: 2% 10%;
  text-align: center;
}
.answw {
  color: white;
  text-align: left;
  border: rgba(0, 0, 0, 0.125) solid 1px;
  border-radius: 0.25rem;
  font-weight: 600;
  padding: 1% 5%;
  transition: all 1s;
  background: linear-gradient(
    -17deg,
    rgb(18, 14, 33) 0%,
    rgb(86, 39, 61) 66%,
    rgb(90, 40, 62) 100%
  );
}

.tog {
  width: 70%;
  height: 70px;
  font-size: 36px;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  margin-bottom: 20px;
  background-color: white;
  color: #fe6637;
}
.topl {
  display: grid;
  background-image: url(../assets/phont.png);
  background-size: cover;
  height: 100vh;
}
.card-title {
  font-size: 38px;
  font-family: Open-sans;
  font-weight: 600;
}
.desssc {
  width: 70%;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  margin-top: 20px;
  font-size: 30px;
  font-family: Open-sans;
  font-weight: 500;
}
.chtoto {
  background-image: url(../assets/phont2.png);
  background-size: cover;
  height: 100vh;
  text-align: left;
  padding: 3%;
  color: white;
}
.landing {
  overflow-y: scroll;
  overflow-x: hidden;
}
.intro {
  text-align: left;
  font-size: 44px;
  font-family: "Helvetica";
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
}
.button_intro {
  height: 50px;
  min-width: 200px;
  font-size: 20px;
}
.button_introo {
  height: 50px;
  min-width: 200px;
  font-size: 20px;
}
.smaller_intro {
  text-align: left;
  font-size: 25px;
  font-family: "Helvetica";
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
.word {
  font-family: Open Sans, sans-serif;
  padding: 1%;
  text-align: left;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 9fr 1fr;
}

.slide-fade-enter-active {
  transition: all 0.9s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
@media only screen and (max-width: 600px) {
  .forpeople {
    flex-direction: column;
    padding: 2%;
  }
  .person {
    margin-bottom: 10px;
    width: 80%;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }
  .intro {
    font-size: 22px;
    font-family: "Helvetica";
    font-weight: 700;
  }
  .mobile {
    width: 20vh;
  }
  .smaller_intro {
    font-size: 16px;
    text-align: center;
    position: relative;
    left: 40%;
    width: 80%;
  }
  .button_intro {
    font-size: 16px;
    width: 70%;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    position: relative;
    left: 25%;
  }
  .button_introo {
    font-size: 16px;
    width: 70%;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    position: relative;
  }
  .tog {
    font-size: 18px;
    width: 90%;
  }
  .card-title {
    font-size: 20px;
  }
  .cet {
    font-size: 18px;
  }
  .quest {
    margin-top: 22%;
  }
  .firstcalc {
    width: 90%;
  }
  .topl {
    height: 75vh;
  }
  .wrd {
    height: 60vh;
  }
  .forimg {
    height: 60vh;
  }
  .desssc {
    font-size: 18px;
  }
}
</style>
