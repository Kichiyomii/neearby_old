<template>
  <div class="maincoont">
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
    <div class="forgridd">
      <b-card v-for="tovar in weak" :key="tovar.id" v-if="selected == 'weak'">
                                    <b-icon
                        :id="'compl' + tovar.id + tovar.tittle"
                        icon="three-dots-vertical"
                        style="
                          fill: black;
                          float: right;
                          position: absolute;
                          top: 15px;
                          right: 4px;
                        "
                      >
                      </b-icon>
                      <b-popover
                        :target="'compl' + tovar.id + tovar.tittle"
                        triggers="hover"
                        placement="bottom"
                        style="height: 100%"
                      >
                        <template #title>Действие</template>
                        <b-button
                          variant="outline"
                          @click="complaintovar(tovar.id)"
                          >Пожаловаться</b-button
                        >
                      </b-popover>
        <div class="kek">
          <p style="text-align: left; font-weight: 700">
            Автор: {{ tovar.author.Name }}
          </p>
          <p style="text-align: left; font-weight: 700">
            Количество покупок: {{ tovar.amount }}
          </p>
          <!-- <p>
            <b-icon
              class="getlink"
              style=""
              icon="link45deg"
              @click="getlink(user.id, tovar.id)"
            >
            </b-icon>
          </p> -->
          <div  @click="reload(tovar.id)" style="cursor: pointer;">
            <b-avatar
            rounded
            class="meowwwww"
            style="margin-right: 10px; width: 100%; height: 100%"
            :src="
              'https://api.steepmail.com/api/publication/storage/' + tovar.img
            "
          >
          </b-avatar>
          </div>
          <h3>{{ tovar.tittle }}</h3>
          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(tovar.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="tovar.tittle">
            <div class="description">
              {{ tovar.description }}
            </div>
          </b-collapse>
          <!-- <div class="obych" v-if="tovar.partner">
            <h6>10 уровней партнёрской программы (Начиная с 1 ур.):</h6>
            <div class="forvfor">
              {{ tovar.partner[0] }}% - {{ tovar.partner[1] }}%, -
              {{ tovar.partner[2] }}%, - {{ tovar.partner[3] }}%, -
              {{ tovar.partner[4] }}%, - {{ tovar.partner[5] }}%, -
              {{ tovar.partner[6] }}%, - {{ tovar.partner[7] }}%, -
              {{ tovar.partner[8] }}%, - {{ tovar.partner[9] }}%
            </div>
          </div> -->
          <!-- <div class="ob" v-else>
            <h5>Партнерская программа отсутствует</h5>
          </div> -->
          <b-link
            style="margin-right: 20px"
            :href="tovar.description_url"
            variant="primary"
          >
            <b-icon icon="chevron-double-left"> </b-icon>Сайт-описание
          </b-link>
          <b-link
            style="margin-left: 20px"
            :href="'/' + tovar.author + '/tovars'"
            variant="primary"
            >Другие товары автора <b-icon icon="chevron-double-right"> </b-icon>
          </b-link>
          <br />
          <b-button @click="buytov(tovar.id, tovar.tittle)" class="subbutton"
            >Купить за {{ tovar.cost }} Р
          </b-button>
        </div>
        <b-modal ref="modalkek" :id="tovar.id + tovar.tittle">
          <template #modal-header="">
            <!-- Emulate built in modal header close button action -->
            <h5>Купить товар "{{ tovar.tittle }}"</h5>
          </template>

          <template #default="">
            <label for="name">
              <h5>
                Вы уверены, что хотите купить товар за {{ tovar.cost }} Р?
              </h5>
              <p>
                Товар придёт вам в личные сообщения через некоторое время после
                успешной покупки
              </p>
            </label>
          </template>

          <template #modal-footer="{ cancel }">
            <p style="color: red">{{ erno }}</p>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button variant="primary" size="lg" v-on:click="buytovv(tovar.id)"
              >Купить</b-button
            >
            <b-button variant="secondary" size="lg" @click="cancel()">
              Выйти
            </b-button>
            <!-- Button with custom close trigger value -->
          </template>
        </b-modal>
      </b-card>
    </div>

    <div class="fofrgridd">
      <b-card v-for="tovar in day" :key="tovar.id" v-if="selected == 'day'">
                                    <b-icon
                        :id="'compl' + tovar.id + tovar.tittle"
                        icon="three-dots-vertical"
                        style="
                          fill: black;
                          float: right;
                          position: absolute;
                          top: 15px;
                          right: 4px;
                        "
                      >
                      </b-icon>
                      <b-popover
                        :target="'compl' + tovar.id + tovar.tittle"
                        triggers="hover"
                        placement="bottom"
                        style="height: 100%"
                      >
                        <template #title>Действие</template>
                        <b-button
                          variant="outline"
                          @click="complaintovar(tovar.id)"
                          >Пожаловаться</b-button
                        >
                      </b-popover>
        <div class="kek">
          <p style="text-align: left; font-weight: 700">
            Автор: {{ tovar.author.Name }}
          </p>
          <p style="text-align: left; font-weight: 700">
            Количество покупок: {{ tovar.amount }}
          </p>
          <!-- <b-icon
            class="getlink"
            style=""
            icon="link45deg"
            @click="getlink(user.id, tovar.id)"
          >
          </b-icon> -->
          <div  @click="reload(tovar.id)" style="cursor: pointer;">
            <b-avatar
            rounded
            class="meowwwww"
            style="margin-right: 10px; width: 100%; height: 100%"
            :src="
              'https://api.steepmail.com/api/publication/storage/' + tovar.img
            "
          >
          </b-avatar>
          </div>
          <h3>{{ tovar.tittle }}</h3>

          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(tovar.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="tovar.tittle">
            <div class="description">
              {{ tovar.description }}
            </div>
          </b-collapse>
          <!-- <div class="obych" v-if="tovar.partner">
            <h5>10 уровней партнёрской программы (Начиная с 1 ур.):</h5>
            <div class="forvfor">
              {{ tovar.partner[0] }}% - {{ tovar.partner[1] }}%, -
              {{ tovar.partner[2] }}%, - {{ tovar.partner[3] }}%, -
              {{ tovar.partner[4] }}%, - {{ tovar.partner[5] }}%, -
              {{ tovar.partner[6] }}%, - {{ tovar.partner[7] }}%, -
              {{ tovar.partner[8] }}%, - {{ tovar.partner[9] }}%
            </div>
          </div> -->
          <!-- <div class="ob" v-else>
            <h5>Партнерская программа отсутствует</h5>
          </div> -->
          <b-link
            style="margin-right: 20px"
            :href="tovar.description_url"
            variant="primary"
          >
            <b-icon icon="chevron-double-left"> </b-icon>Сайт-описание
          </b-link>
          <b-link
            style="margin-left: 20px"
            :href="'/' + tovar.author + '/tovars'"
            variant="primary"
            >Другие товары автора <b-icon icon="chevron-double-right"> </b-icon>
          </b-link>
          <br />
          <b-button @click="buytov(tovar.id, tovar.tittle)" class="subbutton"
            >Купить за {{ tovar.cost }} Р
          </b-button>
        </div>
        <b-modal ref="modalkek" :id="tovar.id + tovar.tittle">
          <template #modal-header="">
            <!-- Emulate built in modal header close button action -->
            <h5>Купить товар "{{ tovar.tittle }}"</h5>
          </template>

          <template #default="">
            <label for="name">
              <h5>
                Вы уверены, что хотите купить товар за {{ tovar.cost }} Р?
              </h5>
              <p>
                Товар придёт вам в личные сообщения через некоторое время после
                успешной покупки
              </p>
            </label>
          </template>

          <template #modal-footer="{ cancel }">
            <p style="color: red">{{ erno }}</p>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button variant="primary" size="lg" v-on:click="buytovv(tovar.id)"
              >Купить</b-button
            >
            <b-button variant="secondary" size="lg" @click="cancel()">
              Выйти
            </b-button>
            <!-- Button with custom close trigger value -->
          </template>
        </b-modal>
      </b-card>
    </div>
    <div class="forgridd">
      <b-card v-for="tovar in year" :key="tovar.id" v-if="selected == 'year'">
                                    <b-icon
                        :id="'compl' + tovar.id + tovar.tittle"
                        icon="three-dots-vertical"
                        style="
                          fill: black;
                          float: right;
                          position: absolute;
                          top: 15px;
                          right: 4px;
                        "
                      >
                      </b-icon>
                      <b-popover
                        :target="'compl' + tovar.id + tovar.tittle"
                        triggers="hover"
                        placement="bottom"
                        style="height: 100%"
                      >
                        <template #title>Действие</template>
                        <b-button
                          variant="outline"
                          @click="complaintovar(tovar.id)"
                          >Пожаловаться</b-button
                        >
                      </b-popover>
        <div class="kek">
          <p style="text-align: left; font-weight: 700">
            Автор: {{ tovar.author.Name }}
          </p>
          <p style="text-align: left; font-weight: 700">
            Количество покупок: {{ tovar.amount }}
          </p>
          <!-- <b-icon
            class="getlink"
            style=""
            icon="link45deg"
            @click="getlink(user.id, tovar.id)"
          >
          </b-icon> -->
          <div  @click="reload(tovar.id)" style="cursor: pointer;">
            <b-avatar
            rounded
            class="meowwwww"
            style="margin-right: 10px; width: 100%; height: 100%"
            :src="
              'https://api.steepmail.com/api/publication/storage/' + tovar.img
            "
          >
          </b-avatar>
          </div>
          <h3>{{ tovar.tittle }}</h3>

          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(tovar.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="tovar.tittle">
            <div class="description">
              {{ tovar.description }}
            </div>
          </b-collapse>
          <!-- <div class="obych" v-if="tovar.partner">
            <h5>10 уровней партнёрской программы (Начиная с 1 ур.):</h5>
            <div class="forvfor">
              {{ tovar.partner[0] }}% - {{ tovar.partner[1] }}%, -
              {{ tovar.partner[2] }}%, - {{ tovar.partner[3] }}%, -
              {{ tovar.partner[4] }}%, - {{ tovar.partner[5] }}%, -
              {{ tovar.partner[6] }}%, - {{ tovar.partner[7] }}%, -
              {{ tovar.partner[8] }}%, - {{ tovar.partner[9] }}%
            </div>
          </div> -->
          <!-- <div class="ob" v-else>
            <h5>Партнерская программа отсутствует</h5>
          </div> -->
          <b-link
            style="margin-right: 20px"
            :href="tovar.description_url"
            variant="primary"
          >
            <b-icon icon="chevron-double-left"> </b-icon>Сайт-описание
          </b-link>
          <b-link
            style="margin-left: 20px"
            :href="'/' + tovar.author + '/tovars'"
            variant="primary"
            >Другие товары автора <b-icon icon="chevron-double-right"> </b-icon>
          </b-link>
          <br />
          <b-button @click="buytov(tovar.id, tovar.tittle)" class="subbutton"
            >Купить за {{ tovar.cost }} Р
          </b-button>
        </div>
        <b-modal ref="modalkek" :id="tovar.id + tovar.tittle">
          <template #modal-header="">
            <!-- Emulate built in modal header close button action -->
            <h5>Купить товар "{{ tovar.tittle }}"</h5>
          </template>

          <template #default="">
            <label for="name">
              <h5>
                Вы уверены, что хотите купить товар за {{ tovar.cost }} Р?
              </h5>
              <p>
                Товар придёт вам в личные сообщения через некоторое время после
                успешной покупки
              </p>
            </label>
          </template>

          <template #modal-footer="{ cancel }">
            <p style="color: red">{{ erno }}</p>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button variant="primary" size="lg" v-on:click="buytovv(tovar.id)"
              >Купить</b-button
            >
            <b-button variant="secondary" size="lg" @click="cancel()">
              Выйти
            </b-button>
            <!-- Button with custom close trigger value -->
          </template>
        </b-modal>
      </b-card>
    </div>
    <div class="forgridd">
      <b-card v-for="tovar in month" :key="tovar.id" v-if="selected == 'month'">
                                    <b-icon
                        :id="'compl' + tovar.id + tovar.tittle"
                        icon="three-dots-vertical"
                        style="
                          fill: black;
                          float: right;
                          position: absolute;
                          top: 15px;
                          right: 4px;
                        "
                      >
                      </b-icon>
                      <b-popover
                        :target="'compl' + tovar.id + tovar.tittle"
                        triggers="hover"
                        placement="bottom"
                        style="height: 100%"
                      >
                        <template #title>Действие</template>
                        <b-button
                          variant="outline"
                          @click="complaintovar(tovar.id)"
                          >Пожаловаться</b-button
                        >
                      </b-popover>
        <div class="kek">
          <p style="text-align: left; font-weight: 700">
            Автор: {{ tovar.author.Name }}
          </p>
          <!-- <b-icon
            class="getlink"
            style=""
            icon="link45deg"
            @click="getlink(user.id, tovar.id)"
          >
          </b-icon> -->
          <p style="text-align: left; font-weight: 700">
            Количество покупок: {{ tovar.amount }}
          </p>
          <div  @click="reload(tovar.id)" style="cursor: pointer;">
            <b-avatar
            rounded
            class="meowwwww"
            style="margin-right: 10px; width: 100%; height: 100%"
            :src="
              'https://api.steepmail.com/api/publication/storage/' + tovar.img
            "
          >
          </b-avatar>
          </div>
          <h3>{{ tovar.tittle }}</h3>
          <a
            style="text-decoration: none; color: #fe6637; cursor: pointer"
            @click="showtoggle(tovar.tittle)"
            >Показать описание</a
          >
          <br />
          <b-collapse :id="tovar.tittle">
            <div class="description">
              {{ tovar.description }}
            </div>
          </b-collapse>
          <!-- <div class="obych" v-if="tovar.partner">
            <h5>10 уровней партнёрской программы (Начиная с 1 ур.):</h5>
            <div class="forvfor">
              {{ tovar.partner[0] }}% - {{ tovar.partner[1] }}%, -
              {{ tovar.partner[2] }}%, - {{ tovar.partner[3] }}%, -
              {{ tovar.partner[4] }}%, - {{ tovar.partner[5] }}%, -
              {{ tovar.partner[6] }}%, - {{ tovar.partner[7] }}%, -
              {{ tovar.partner[8] }}%, - {{ tovar.partner[9] }}%
            </div>
          </div>
          <div class="ob" v-else>
            <h5>Партнерская программа отсутствует</h5>
          </div> -->
          <b-link
            style="margin-right: 20px"
            :href="tovar.description_url"
            variant="primary"
          >
            <b-icon icon="chevron-double-left"> </b-icon>Сайт-описание
          </b-link>
          <b-link
            style="margin-left: 20px"
            :href="'/' + tovar.author + '/tovars'"
            variant="primary"
            >Другие товары автора <b-icon icon="chevron-double-right"> </b-icon>
          </b-link>
          <br />
          <b-button @click="buytov(tovar.id, tovar.tittle)" class="subbutton"
            >Купить за {{ tovar.cost }} Р
          </b-button>
        </div>
        <b-modal ref="modalkek" :id="tovar.id + tovar.tittle">
          <template #modal-header="">
            <!-- Emulate built in modal header close button action -->
            <h5>Купить товар "{{ tovar.tittle }}"</h5>
          </template>

          <template #default="">
            <label for="name">
              <h5>
                Вы уверены, что хотите купить товар за {{ tovar.cost }} Р?
              </h5>
              <p>
                Товар придёт вам в личные сообщения через некоторое время после
                успешной покупки
              </p>
            </label>
          </template>

          <template #modal-footer="{ cancel }">
            <p style="color: red">{{ erno }}</p>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button variant="primary" size="lg" v-on:click="buytovv(tovar.id)"
              >Купить</b-button
            >
            <b-button variant="secondary" size="lg" @click="cancel()">
              Выйти
            </b-button>
            <!-- Button with custom close trigger value -->
          </template>
        </b-modal>
      </b-card>
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
export default {
  name: "catalogfromtovar",
  props: {
    user: Object,
  },
  methods: {
        complaintovar(id) {
      this.$bvModal.show("modal-complain");
      let str = JSON.stringify({
        id: id,
        type: "tovar",
      });
      localStorage.setItem("complain", str);
    },
        reload(id){
      window.location.href = '/forproduct/' + id 
    },
            showtoggle(tit) {
      this.$root.$emit("bv::toggle::collapse", tit);
    },
    copyStringToClipboard(str) {
      var el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    getlink(iduser, idtovar) {
      this.copyStringToClipboard(
        "https://neearby.com/refs/" + iduser + "/" + idtovar
      );
      alert(
        "Вы скопировали: " +
          "https://https://neearby.com/refs/" +
          iduser +
          "/" +
          idtovar
      );
    },
    async buytov(id, tittle) {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped");
        let str = JSON.stringify({
          id: id,
          type: "tovar",
        });
        localStorage.setItem("buy", str);
      } else {
        this.$bvModal.show(id + tittle);
      }
    },
    async buytov(id, tittle) {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped");
        let str = JSON.stringify({
          id: id,
          type: "tovar",
        });
        localStorage.setItem("buy", str);
      } else {
        this.$bvModal.show(id + tittle);
      }
    },
    async buytovv(id) {
      let result = await Api.users.buycurtovar(
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
      tovars: {},
      day: {},
      weak: {},
      month: {},
      year: {},
      someinfo: "standart",
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
  //     const dayresult = await Api.users.gettoptovar(day);
  //     this.day = dayresult;
  //     const weakresult = await Api.users.gettoptovar(weak);
  //     this.weak = weakresult;
  //     console.log(weakresult);
  //     const monthresult = await Api.users.gettoptovar(month);
  //     this.month = monthresult;
  //     const yearresult = await Api.users.gettoptovar(year);
  //     this.year = yearresult;
  //   }, 1000);
  // },
};
</script>
<style lang="scss">
.maincoont {
  padding: 3%;
  background-color: #e9e9e9;
  min-height: 100vh;
}
.fofrgridd {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}
@media only screen and (max-width: 600px) {
.forgridd {
  display: flex;
  flex-direction: column;
}
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
.subbutton {
  position: absolute;
  width: 60%;
  height: 40px;
  bottom: 10px;
  margin-right: 50%;
  transform: translate(-50%, 0);
}
.kek {
  margin-bottom: 40px;
}
.subs {
  margin-top: 10px;
}
.getlink {
  text-align: right;
  float: right;
  position: relative;
  top: -40px;
  font-size: 25px;
}
.getlink:hover {
  fill: blue;
  cursor: pointer;
}
</style>
