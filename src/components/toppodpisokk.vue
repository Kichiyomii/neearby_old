<template>
  <div class="maincont">
    <div style="margin-bottom: 20px">
      <div class="forrelev">
        <div class="sort" style="text-align: left">
          <h4>Сортировать по:</h4>
        </div>

        <div class="secondselect">
          <h4>дате добавления</h4>
          <b-form-select
            placeholder="По классу"
            class="selection"
            v-model="selected"
            :options="options"
          ></b-form-select>
        </div>
      </div>
    </div>
    <div class="forgriddddd">
      <b-media v-for="sub in weak" :key="sub.cost" v-if="selected == 'weak'">
        <b-card style="margin-bottom: 15px; border: none">
          <b-icon
            :id="'meow' + sub.cost + sub.id"
            icon="three-dots-vertical"
            style="fill: black; position: absolute; right: 6px; top: 40px"
          >
          </b-icon>
          <b-popover
            :target="'meow' + sub.cost + sub.id"
            triggers="hover"
            placement="left"
            style="height: 100%"
          >
            <template #title>Действие</template>
            <b-button
              v-if="sub.author.login != user.login"
              variant="outline"
              @click="complainsub(sub.id)"
              >Пожаловаться</b-button
            >
          </b-popover>
          <div style="text-align: left; margin-top: 12px">
            <b-avatar
              style="
                width: 90px;
                height: 90px;
                display: inline-block;
                position: relative;
                top: -20px;
              "
              :src="
                'https://api.steepmail.com/api/users/' +
                sub.author.login +
                '/photo'
              "
            >
            </b-avatar>
            <div class="forav" style="display: inline-block">
              <p class="name" style="margin-bottom: 10px">
                {{ sub.author.Name }}
              </p>
              <p style="text-align: left; font-weight: 700">
                Подписчиков: {{ sub.amount }}
              </p>
            </div>
          </div>
          <div class="photo">
            <img
              :src="
                'https://api.steepmail.com/api/subscriptions/photo/' + sub.id
              "
              alt=""
              class="photage"
            />
          </div>
          <div class="title" style="margin-top: 18px">
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
          </div>

          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(sub.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="sub.tittle">
            <div class="description">
              {{ sub.description }}
            </div>
          </b-collapse>
          <div class="price">{{ sub.cost }} рублей в месяц</div>

          <div class="forforsubs">
            <b-button
              variant="info"
              @click="buysubs(sub.id, sub.tittle)"
              class="forsubs"
            >
              <b-icon icon="gem" style="margin-right: 7px"> </b-icon
              >Подписаться</b-button
            >
            <b-button
              variant="info"
              :href="'https://' + sub.author.login + '.neearby.com/page'"
              class="forsubs"
            >
              Перейти на страницу</b-button
            >
          </div>
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
                <h5>
                  Следующее списание {{ sub.cost }} будет произведено через 30
                  дней
                </h5>
                <p>
                  Если вы хотите, то всегда можно отменить подписку в настройках
                  аккаунта
                </p>
              </label>
            </template>

            <template #modal-footer="{ cancel }">
              <p style="color: red">{{ errors }}</p>
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="primary" size="lg" v-on:click="buysubc(sub.id)"
                >Купить</b-button
              >
              <b-button variant="secondary" size="lg" @click="cancel()">
                Выйти
              </b-button>
              <!-- Button with custom close trigger value -->
            </template>
          </b-modal>
        </b-card>
      </b-media>
    </div>
    <div class="forgriddddd">
      <b-media v-for="sub in day" :key="sub.cost" v-if="selected == 'day'">
        <b-card style="margin-bottom: 15px; border: none">
          <b-icon
            :id="'meow' + sub.cost + sub.id"
            icon="three-dots-vertical"
            style="fill: black; position: absolute; right: 6px; top: 40px"
          >
          </b-icon>
          <b-popover
            :target="'meow' + sub.cost + sub.id"
            triggers="hover"
            placement="left"
            style="height: 100%"
          >
            <template #title>Действие</template>
            <b-button
              v-if="sub.author.login != user.login"
              variant="outline"
              @click="complainsub(sub.id)"
              >Пожаловаться</b-button
            >
          </b-popover>
          <div style="text-align: left; margin-top: 12px">
            <b-avatar
              style="
                width: 90px;
                height: 90px;
                display: inline-block;
                position: relative;
                top: -20px;
              "
              :src="
                'https://api.steepmail.com/api/users/' +
                sub.author.login +
                '/photo'
              "
            >
            </b-avatar>
            <div class="forav" style="display: inline-block">
              <p class="name" style="margin-bottom: 10px">
                {{ sub.author.Name }}
              </p>
              <p style="text-align: left; font-weight: 700">
                Подписчиков: {{ sub.amount }}
              </p>
            </div>
          </div>
          <div class="photo">
            <img
              :src="
                'https://api.steepmail.com/api/subscriptions/photo/' + sub.id
              "
              alt=""
              class="photage"
            />
          </div>
          <div class="title" style="margin-top: 18px">
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
          </div>

          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(sub.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="sub.tittle">
            <div class="description">
              {{ sub.description }}
            </div>
          </b-collapse>
          <div class="price">{{ sub.cost }} рублей в месяц</div>

          <div class="forforsubs">
            <b-button
              variant="info"
              @click="buysubs(sub.id, sub.tittle)"
              class="forsubs"
            >
              <b-icon icon="gem" style="margin-right: 7px"> </b-icon
              >Подписаться</b-button
            >
            <b-button
              variant="info"
              :href="'https://' + sub.author.login + '.neearby.com/page'"
              class="forsubs"
            >
              Перейти на страницу</b-button
            >
          </div>
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
                <h5>
                  Следующее списание {{ sub.cost }} будет произведено через 30
                  дней
                </h5>
                <p>
                  Если вы хотите, то всегда можно отменить подписку в настройках
                  аккаунта
                </p>
              </label>
            </template>

            <template #modal-footer="{ cancel }">
              <p style="color: red">{{ errors }}</p>
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="primary" size="lg" v-on:click="buysubc(sub.id)"
                >Купить</b-button
              >
              <b-button variant="secondary" size="lg" @click="cancel()">
                Выйти
              </b-button>
              <!-- Button with custom close trigger value -->
            </template>
          </b-modal>
        </b-card>
      </b-media>
    </div>
    <div class="forgriddddd">
      <b-media v-for="sub in month" :key="sub.cost" v-if="selected == 'month'">
        <b-card style="margin-bottom: 15px; border: none">
          <b-icon
            :id="'meow' + sub.cost + sub.id"
            icon="three-dots-vertical"
            style="fill: black; position: absolute; right: 6px; top: 40px"
          >
          </b-icon>
          <b-popover
            :target="'meow' + sub.cost + sub.id"
            triggers="hover"
            placement="left"
            style="height: 100%"
          >
            <template #title>Действие</template>
            <b-button
              v-if="sub.author.login != user.login"
              variant="outline"
              @click="complainsub(sub.id)"
              >Пожаловаться</b-button
            >
          </b-popover>
          <div style="text-align: left; margin-top: 12px">
            <b-avatar
              style="
                width: 90px;
                height: 90px;
                display: inline-block;
                position: relative;
                top: -20px;
              "
              :src="
                'https://api.steepmail.com/api/users/' +
                sub.author.login +
                '/photo'
              "
            >
            </b-avatar>
            <div class="forav" style="display: inline-block">
              <p class="name" style="margin-bottom: 10px">
                {{ sub.author.Name }}
              </p>
              <p style="text-align: left; font-weight: 700">
                Подписчиков: {{ sub.amount }}
              </p>
            </div>
          </div>
          <div class="photo">
            <img
              :src="
                'https://api.steepmail.com/api/subscriptions/photo/' + sub.id
              "
              alt=""
              class="photage"
            />
          </div>
          <div class="title" style="margin-top: 18px">
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
          </div>

          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(sub.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="sub.tittle">
            <div class="description">
              {{ sub.description }}
            </div>
          </b-collapse>
          <div class="price">{{ sub.cost }} рублей в месяц</div>

          <div class="forforsubs">
            <b-button
              variant="info"
              @click="buysubs(sub.id, sub.tittle)"
              class="forsubs"
            >
              <b-icon icon="gem" style="margin-right: 7px"> </b-icon
              >Подписаться</b-button
            >
            <b-button
              variant="info"
              :href="'https://' + sub.author.login + '.neearby.com/page'"
              class="forsubs"
            >
              Перейти на страницу</b-button
            >
          </div>
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
                <h5>
                  Следующее списание {{ sub.cost }} будет произведено через 30
                  дней
                </h5>
                <p>
                  Если вы хотите, то всегда можно отменить подписку в настройках
                  аккаунта
                </p>
              </label>
            </template>

            <template #modal-footer="{ cancel }">
              <p style="color: red">{{ errors }}</p>
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="primary" size="lg" v-on:click="buysubc(sub.id)"
                >Купить</b-button
              >
              <b-button variant="secondary" size="lg" @click="cancel()">
                Выйти
              </b-button>
              <!-- Button with custom close trigger value -->
            </template>
          </b-modal>
        </b-card>
      </b-media>
    </div>
    <div class="forgriddddd ">
      <b-media v-for="sub in year" :key="sub.cost" v-if="selected == 'year'">
        <b-card style="margin-bottom: 15px; border: none">
          <b-icon
            :id="'meow' + sub.cost + sub.id"
            icon="three-dots-vertical"
            style="fill: black; position: absolute; right: 6px; top: 40px"
          >
          </b-icon>
          <b-popover
            :target="'meow' + sub.cost + sub.id"
            triggers="hover"
            placement="left"
            style="height: 100%"
          >
            <template #title>Действие</template>
            <b-button
              v-if="sub.author.login != user.login"
              variant="outline"
              @click="complainsub(sub.id)"
              >Пожаловаться</b-button
            >
          </b-popover>
          <div style="text-align: left; margin-top: 12px">
            <b-avatar
              style="
                width: 90px;
                height: 90px;
                display: inline-block;
                position: relative;
                top: -20px;
              "
              :src="
                'https://api.steepmail.com/api/users/' +
                sub.author.login +
                '/photo'
              "
            >
            </b-avatar>
            <div class="forav" style="display: inline-block">
              <p class="name" style="margin-bottom: 10px">
                {{ sub.author.Name }}
              </p>
              <p style="text-align: left; font-weight: 700">
                Подписчиков: {{ sub.amount }}
              </p>
            </div>
          </div>
          <div class="photo">
            <img
              :src="
                'https://api.steepmail.com/api/subscriptions/photo/' + sub.id
              "
              alt=""
              class="photage"
            />
          </div>
          <div class="title" style="margin-top: 18px">
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
          </div>

          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(sub.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="sub.tittle">
            <div class="description">
              {{ sub.description }}
            </div>
          </b-collapse>
          <div class="price">{{ sub.cost }} рублей в месяц</div>

          <div class="forforsubs">
            <b-button
              variant="info"
              @click="buysubs(sub.id, sub.tittle)"
              class="forsubs"
            >
              <b-icon icon="gem" style="margin-right: 7px"> </b-icon
              >Подписаться</b-button
            >
            <b-button
              variant="info"
              :href="'https://' + sub.author.login + '.neearby.com/page'"
              class="forsubs"
            >
              Перейти на страницу</b-button
            >
          </div>
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
                <h5>
                  Следующее списание {{ sub.cost }} будет произведено через 30
                  дней
                </h5>
                <p>
                  Если вы хотите, то всегда можно отменить подписку в настройках
                  аккаунта
                </p>
              </label>
            </template>

            <template #modal-footer="{ cancel }">
              <p style="color: red">{{ errors }}</p>
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="primary" size="lg" v-on:click="buysubc(sub.id)"
                >Купить</b-button
              >
              <b-button variant="secondary" size="lg" @click="cancel()">
                Выйти
              </b-button>
              <!-- Button with custom close trigger value -->
            </template>
          </b-modal>
        </b-card>
      </b-media>
    </div>
    <!-- <div class="forgridd" v-else>
          <b-card v-for="author in sorted" :key="author.id">
        <b-avatar style="margin-right: 10px; width: 120px; height: 120px;"  :src="'http://89.223.65.75:3000/api/users/' +author.login +'/photo'"> </b-avatar>
        <p class="name"> {{author.name}} </p>
        <p class="subs"> Фолловеры: {{author.subc}} </p>
        <b-button :href="'/'+author.login" variant="primary">Перейти на страницу автора</b-button>
  </b-card>
    </div> -->
  </div>
</template>
<script>
import Api from "../api";
import anonssub from "./anonssub.vue";
export default {
  name: "catalogfromtovar",
  props: {
    user: Object,
  },
  components: {
    anonssub,
  },
  methods: {
    complainsub(id) {
      this.$bvModal.show("modal-complain");
      let str = JSON.stringify({
        id: id,
        type: "sub",
      });
      localStorage.setItem("complain", str);
    },
    showtoggle(tit) {
      this.$root.$emit("bv::toggle::collapse", tit);
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
  },
  data() {
    return {
      selected: "weak",
      erno: "",
      day: {},
      weak: {},
      month: {},
      year: {},
      someinfo: "За неделю",
      sorted: {},
      options: [
        { value: "day", text: "За день" },
        { value: "weak", text: "За неделю" },
        { value: "month", text: "За месяц" },
        { value: "year", text: "За год" },
      ],
    };
  },
  // async mounted() {
  //   setTimeout(async () => {
  //     let day = "day";
  //     let weak = "weak";
  //     let month = "mounth";
  //     let year = "year";
  //     const dayresult = await Api.users.gettoppod(day);
  //     this.day = dayresult;
  //     const weakresult = await Api.users.gettoppod(weak);
  //     this.weak = weakresult;
  //     console.log(weakresult);
  //     const monthresult = await Api.users.gettoppod(month);
  //     this.month = monthresult;
  //     const yearresult = await Api.users.gettoppod(year);
  //     this.year = yearresult;
  //     console.log(result);
  //     this.tovars = result;
  //     const arr = [];
  //     this.tovars.forEach((tovars) => {
  //       arr.push(tovars);
  //     });
  //     this.sorted = arr;

  //     this.sorted.sort((a, b) => b.subc - a.subc);
  //   }, 1000);
  // },
};
</script>
<style lang="scss">
body {
  font-family: Inter, Arial, sans-serif !important;
}
.maincont {
  padding: 3% 15%;
  background-color: #e9e9e9;
  min-height: 100vh;
}
.forav {
  margin-left: 10px;
}
.forforsubs {
  display: flex;
  justify-content: space-evenly;
}
.forgriddddd {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
@media only screen and (max-width: 600px) {

  .forgriddddd {
    display: flex;
    flex-direction: column;
}
}

.foranons {
  position: absolute;
  right: 10px;
  width: 140px;
}
.name {
  color: black;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.selectsubs {
  display: inline-block;
  width: 70%;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.selection {
  display: inline-block;
  width: 70%;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.forrelev {
  width: 70%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  background-color: white;
  padding: 1% 1%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.forvfor {
  margin-bottom: 10px;
  margin-top: 10px;
}
.title {
  color: black;
}
.price {
  color: #7c7c7c;
}
.photage {
  max-width: 100%;
}
.linkg {
  margin-top: 10px;
}
.letbut {
  float: right;
}
.subbutton {
  width: 160px;
  margin-right: 50%;
  transform: translate(-50%, 0);
}
</style>
