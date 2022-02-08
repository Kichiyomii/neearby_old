<template>
  <div>
    <b-card>
      <h5 class="mt-0">Уровни подписки</h5>
    </b-card>

    <p></p>

    <b-card
      v-for="sub in subs.slice().reverse()"
      :key="sub.cost"
      style="text-align: left; margin-bottom: 20px"
    >
      <b-popover
        :target="'meow' + sub.cost + sub.id"
        triggers="hover"
        placement="left"
        style="height: 100%"
      >
        <template #title>Действие</template>
        <b-button variant="outline" @click="complainsub(sub.id)"
          >Пожаловаться</b-button
        >
      </b-popover>
      <b-modal size="lg" :id="'sub' + sub.id + sub.cost">
        <template #modal-header="">
          <!-- Emulate built in modal header close button action -->
          <h5>Изменить уровень</h5>
        </template>

        <template #default="">
          <label for="name"> <h5>Название</h5> </label>
          <b-form-input
            style="height: 45px; font-size: 20px; font-weight: 500"
            v-model="title"
            id="name"
            placeholder="Введите заголовок"
          >
          </b-form-input>

          <div class="button" style="margin-top: 15px; margin-bottom: 15px">
            <label for="primar"> <h5>Загрузить обложку</h5> </label> <br />
            <b-button
              style="width: 180px; height: 45px; font-size: 18px"
              id="info"
              variant="info"
            >
              <input
                type="file"
                @change="smth()"
                accept="image/*"
                id="uploa"
                hidden
              />
              <label for="uploa">
                <b-icon icon="images"> </b-icon> Загрузить</label
              >
            </b-button>
          </div>

          <div v-if="sucess == true" class="imgcont">
            <b-spinner variant="primary"></b-spinner>
          </div>
          <div v-if="aftersuccess == true">
            <h5 style="color: green">Успешно!</h5>
          </div>

          <label for="desc"> <h5>Описание</h5></label>
          <b-form-textarea
            style="height: 80px"
            v-model="description"
            id="desc"
            placeholder="Введите описание"
          ></b-form-textarea>
          <label for="price" style="margin-top: 15px"> <h5>Цена</h5> </label>
          <b-form-input
            v-model="price"
            id="price"
            placeholder="300"
          ></b-form-input>

          <!-- <div class="refs">
          <h5>Реферальная система подписок</h5>
          <div class="flexingg">
          <b-input-group prepend="1 Ур  %">
            <b-form-input
              min="10"
              max="100"
              type="number"
              v-model = "lvl1"
              placeholder="5"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="2 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="5"
              max="100"
              type="number"
              v-model = "lvl2"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="3 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="3"
              max="100"
              type="number"
              v-model = "lvl3"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="4 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="2"
              max="100"
              type="number"
              v-model = "lvl4"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="5 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl5"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="6 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl6"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="7 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl7"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="8 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl8"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="9 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl9"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="10 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl10"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
        </div> -->
          <!-- </div> -->
          <p style="color: red; font-size: 18px"></p>
          <p class="wwarning" v-if="errors">
            {{ errors }}
          </p>
        </template>

        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button variant="primary" size="lg" v-on:click="redsub(sub.id)"
            >Изменить</b-button
          >
          <b-button variant="info" size="lg" @click="cancel()">
            Закрыть
          </b-button>
          <!-- Button with custom close trigger value -->
        </template>
      </b-modal>
      <div style="border: none">
                    <b-icon
              :id="'meow' + sub.cost + sub.id"
              v-if="user.login != author.login"
              icon="three-dots-vertical"
              style="fill: black; position: absolute; right: -2px;top: 2px;"
            >
            </b-icon>
        <div class="photoo">
          <img
            :src="'https://api.steepmail.com/api/subscriptions/photo/' + sub.id"
            alt=""
            class="photage"
          />
        </div>
        <div class="title">
          <h5>
            <p
              style="
                font-weight: 700;
                color: #242b2c;
                font-family: Inter, Arial, sans-serif;
                font-size: 18px;
              "
            >
              {{ sub.tittle }}
            </p>

            <b-popover
              style=""
              :target="'sub' + sub.id"
              triggers="click"
              placement="left"
            >
              <template #title>Приобрести подписку</template>
              <p></p>
              <b-input
                style="cursor: pointer;"
                :id="sub.tittle + sub.cost"
                @click="copy(sub.tittle, sub.cost)"
                readonly
                :value="'neearby.com/forsub/' + sub.id"
              >
              </b-input>
            </b-popover>
          </h5>
        </div>
        <a
          style="text-decoration: none; color: #a1a1a1; cursor: pointer"
          @click="showtoggle(sub.tittle)"
          >Показать описание</a
        >
        <br />
        <b-collapse :id="sub.tittle">
          <div class="description">
            {{ sub.description }}
          </div>
        </b-collapse>

        <div class="linkg">
          <!-- <b-button  variant="outline-primary" class="letbut"> -->

          <!-- </b-button> -->
        </div>
        <p
          v-if="user.login == author.login"
          style="color: grey; margin-top: 10px; margin-bottom: 0"
        >
          {{ sub.cost }} ₽ в месяц
        </p>
        <b-icon
          style="font-size: 25px; color: #fe6637"
          class="letbut"
          :id="'sub' + sub.id"
          icon="link45deg"
          title="Title"
          variant="primary"
        ></b-icon>
        <b-button
          style="width: 100%; padding: 10px; margin-top: 10px"
          v-if="status.login != user.login"
          variant="info"
          @click="buysubs(sub.id, sub.tittle)"
          class="subbuttonn"
        >
          Подписаться за {{ sub.cost }} ₽ в месяц</b-button
        >

        <b-button
          v-if="author.login == user.login"
          style="margin-top: 10px; text-align: center; background-color: gray"
          @click="changesub(sub.id, sub.cost)"
          variant="info"
          >Редактировать</b-button
        >


        <b-modal ref="modalkek" :id="sub.id + sub.tittle">
          <template #modal-header="">
            <!-- Emulate built in modal header close button action -->
            <h5>Купить подписку "{{ sub.tittle }}"</h5>
          </template>

          <template #default="">
            <label for="name">
              <h5>
                Вы уверены, что хотите купить подписку за {{ sub.cost }} Р?
              </h5>
            </label>
            <div style="display: grid; grid-template-columns: 1fr 8fr">
              <input type="checkbox" id="checkbox" v-model="checked1" />
              <p>
                Соглашаюсь с
                <a href="/info">офертой сайта, рекуррентными платежами</a>
              </p>
              <input type="checkbox" id="checkbox" v-model="checked2" />
              <p>
                Соглашаюсь с
                <a href="/info/subs">
                  правилами подписки, регулярными платежами</a
                >
              </p>
            </div>
            <p style="font-size: 14px">
              Подписываясь вы принимаете
              <b-link :href="'/info'" target="_blank"
                >Правила сервиса и рекурентные платежи</b-link
              >,
              <b-link :href="'/info/subs'" target="_blank"
                >Соглашение с подпиской</b-link
              >, а так же согласие на обработку персональных данных
            </p>
            <p style="font-size: 14px">
              При желании можно отменить подписку в разделе "Мои подписки".
            </p>
          </template>

          <template #modal-footer="{ cancel }">
            <p style="color: red">{{ erno }}</p>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button
              variant="primary"
              class="sb"
              size="lg"
              v-on:click="buysubc(sub.id)"
              v-if="checked2 == true"
              >Купить</b-button
            >
            <b-button
              variant="primary"
              class="sb"
              disabled
              size="lg"
              v-on:click="buysubc(sub.id)"
              v-if="!checked2"
              >Купить</b-button
            >
            <b-button variant="secondary" size="lg" @click="cancel()">
              Выйти
            </b-button>
            <!-- Button with custom close trigger value -->
          </template>
        </b-modal>
      </div>
    </b-card>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "subscription",
  props: {
    subs: Array,
    user: Object,
    status: Object,
    author: Object,
  },
  data() {
    return {
      erno: "",
      forlink: "",
      checked1: false,
      checked2: false,
      title: "",
      description: "",
      price: "",
      errors: "",
      lvl1: 10,
      lvl2: 5,
      lvl3: 3,
      lvl4: 2,
      lvl5: 1,
      lvl6: 1,
      lvl7: 1,
      lvl8: 1,
      lvl9: 1,
      lvl10: 1,
    };
  },
  components: {},
  mounted() {
    console.log(this.statusss);
    setTimeout(() => {
      this.forlink = "https://" + this.author.login + ".neearby.com/page";
    }, 1000);
  },
  methods: {
                showtoggle(tit) {
      this.$root.$emit("bv::toggle::collapse", tit);
    },
    async changesub(id, cost) {
      const ressssult = await Api.users.chtoto();
      this.$bvModal.show("sub" + id + cost);
    },
    complainsub(id) {
      this.$bvModal.show("modal-complain");
      let str = JSON.stringify({
        id: id,
        type: "sub",
      });
      localStorage.setItem("complain", str);
    },
    copy(id, cost) {
      let smth = document.getElementById(id + cost);
      /* Select the text field */
      smth.select();
      /* Copy the text inside the text field */
      document.execCommand("copy");
      /* Alert the copied text */
      alert("Текст скопирован: " + smth.value);
      console.log(smth);
    },
    async buysubs(id, tittle) {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped");
        let str = JSON.stringify({
          id: id,
          type: "sub",
        });
        localStorage.setItem("buy", str);
      } else {
        this.$bvModal.show(id + tittle);
      }
    },
    async buysubc(id) {
      const result = await Api.users.buysubcur(
        id,
        localStorage.getItem("token")
      );
      if (!result.message) {
        window.location.href = result;
      } else {
        this.erno = result.message;
      }
      console.log(result);
    },
    async deletesub(id) {
      const result = await Api.users.deletesubsc(
        id,
        localStorage.getItem("token")
      );
      if (result) {
        window.location.reload();
      }
    },
  },
};
</script>
<style scoped lang="scss">
#checkbox {
  width: 26px;
  height: 26px;
  border: 0.75px solid black;
  outline: none;
  margin-top: 10px;
  margin-left: 2px;
}
.photoo{
  margin-top: 10px;
}
.title {
  color: black;
}
.sb {
  transition: all 1s;
}
.price {
  color: rgb(100, 0, 0);
}
.photage {
  max-width: 100%;
  margin-bottom: 10px;
}
.linkg {
  position: absolute;
  right: 10px;
  bottom: 80px;
  margin-top: 10px;
}
.letbut {
  font-size:24px;
  float: right;
  color: #fe6637 !important;
}

.descriptioon {
  max-width: 50ch;
}
@media (max-width: 1440px) {
  .descriptioon {
    max-width: 50ch;
  }
}
@media (min-width: 2500px) {
  .descriptioon {
    max-width: 60ch;
  }
}
</style>
