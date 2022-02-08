<template>
  <div class="maincont">
    <div>
      <div class="forrelev">
        <div class="sort" style="text-align: left">
          <h4>Сортировать по:</h4>
        </div>
        <div class="firstselect">
          <h4>классу товара</h4>
          <b-form-select
            placeholder="По классу"
            class="selection"
            v-model="selected"
            :options="options"
          ></b-form-select>
        </div>
        <div class="secondselect">
          <h4>дате добавления</h4>
          <select @select="sort()" v-model="someinfo" class="selectsubs">
            <option value="standart">По стандарту</option>
          </select>
        </div>
        <div class="thirdselect">
          <h4>продажам</h4>
          <select @select="sort()" v-model="someinfo" class="selectsubs">
            <option value="standart">По стандарту</option>
          </select>
        </div>
      </div>
    </div>
    <div class="forgriddd">
      <b-card
        v-for="tovar in tovars.slice().reverse()"
        v-if="selected == 'Все категории' || tovar.classGoods == selected"
        :key="tovar.id"
        class="dsmkadm"
      >
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
          <div  @click="reload(tovar.id)" style="cursor: pointer;">
            <b-avatar
            rounded
            class="meowwwww"
            style="margin-right: 10px; width: 100%; height: auto"
            :src="
              'https://api.steepmail.com/api/publication/storage/' + tovar.img
            "
          >
          </b-avatar>
          </div>
          <h5>{{ tovar.tittle }}</h5>
           <!-- <b-icon
          class="getlink"
            style=""
            icon="link45deg"
            @click="getlink(user.id, tovar.id)"
          >
          </b-icon> -->
          <br>
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
          <div class="obych" v-if="tovar.partner">
            <!-- <h6>10 уровней партнёрской программы (Начиная с 1 ур.):</h6>
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
            :href="tovar.description_url"
            variant="primary"
          >
            Сайт-описание <b-icon icon="chevron-double-right"> </b-icon>
          </b-link>
          <br />
          <b-button @click="buytov(tovar.id, tovar.tittle)" style="margin-top: 10px"
            >Купить за {{ tovar.cost }} Р
          </b-button> <br>
          <b-button @click="addacc(tovar.tittle, tovar.id)" v-if="user.vip && user.id == tovar.id_user">
            Добавить Акцию
          </b-button>
        </div>
                  <b-modal ref="modalkek" :id="tovar.tittle + tovar.id">
              <template #modal-header="">
                <!-- Emulate built in modal header close button action -->
                <h5>Cоздать акцию на "{{tovar.tittle}}"</h5>
              </template>

              <template #default="">
                <label for="name">
                  <b-form-input 
                  v-model="skidonn"
                  type="number"
                  placeholder="Введите новую цену"
                  ></b-form-input>
                </label>
              </template>

              <template #modal-footer="{ cancel }">
                <p style="color: red">{{ernoo}}</p>
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button variant="primary" v-on:click="getacc(tovar.id, tovar.cost)"
                  >Добавить</b-button
                >
                <b-button variant="secondary"  @click="cancel()">
                  Выйти
                </b-button>
                <!-- Button with custom close trigger value -->
              </template>
            </b-modal>
          <b-modal ref="modalkek" :id="tovar.id + tovar.tittle">
              <template #modal-header="">
                <!-- Emulate built in modal header close button action -->
                <h5>Купить товар "{{tovar.tittle}}"</h5>
              </template>

              <template #default="">
                <label for="name">
                 <h5>Вы уверены, что хотите купить товар за {{tovar.cost}} Р?  </h5>
                   <p>Товар придёт вам в личные сообщения через некоторое время после успешной покупки
                     </p> 
                </label>
              </template>

              <template #modal-footer="{ cancel }">
                <p style="color: red">{{erno}}</p>
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
    async getacc(id, cost) {
      const data = {
        skidon: this.skidonn
      }
      let result = await Api.users.getacci(data, id,
        localStorage.getItem("token")
      );
      if (result == true) {
        window.location.reload();
      } else {
        this.ernoo = result.message;
      }

      console.log(result);
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
      this.copyStringToClipboard('http://neearby.ru/refs/'+iduser+'/'+idtovar,);
    },
    async buytov(id, tittle) {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped");
          let str = JSON.stringify({
          id: id,
          type: "tovar"
        })
        localStorage.setItem("buy", str)
      } else {
        this.$bvModal.show(id + tittle);
      }
    },
    async buytov(id, tittle) {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped");
        let str = JSON.stringify({
          id: id,
          type: "tovar"
        })
        localStorage.setItem("buy", str)
      } 
      else {
        this.$bvModal.show(id + tittle);
      }
    },
    async addacc(tit, id) {
      this.$bvModal.show(tit + id);
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
      lol: "",
      skidonn: "",
      erno: "",
      ernoo: "",
      selected: "Все категории",
      tovars: {},
      someinfo: "standart",
      sorted: {},
      options: [
        { value: "Все категории", text: "Все категории" },
        { value: "Компьютер и Интернет", text: "Компьютер и Интернет" },
        { value: "Образование", text: "Образование" },
        { value: "Курсы", text: "Курсы" },
        { value: "Маркетинг и реклама", text: "Маркетинг и реклама" },
        { value: "Заработок", text: " Заработок" },
        { value: "Сетевой маркетинг", text: "Сетевой маркетинг" },
        { value: "Софт", text: "Софт" },
        { value: "Бизнес", text: "Бизнес" },
        { value: "Развлечения", text: "Развлечения" },
        { value: "Отдых", text: "Отдых" },
        { value: "Путешествие", text: "Путешествие" },
        { value: "Красота", text: "Красота" },
        { value: "Здоровье", text: "Здоровье" },
        { value: "Психология", text: "Психология" },
        { value: "Домашний очаг", text: "Домашний очаг" },
        { value: "Спорт", text: "Спорт" },
        { value: "Торговля", text: "Торговля" },
        { value: "Другое", text: "Другое" },
      ],
    };
  },
  async mounted() {
    setTimeout(async () => {
          const hosts = window.location.host.split(".");
    if (hosts.length == 3) {
      this.lol = hosts[0];
            const result = await Api.users.getauthortovar(hosts[0]);
      console.log(result);
      this.tovars = result;
      const arr = [];
      this.tovars.forEach((tovars) => {
        arr.push(tovars);
      });
      this.sorted = arr;
      this.sorted.sort((a, b) => b.subc - a.subc);
    }
    else{
      this.lol = ''
    }
    }, 1000);
  },
};
</script>
<style lang="scss">
.maincont {
  padding: 3%;
  background-color: #e9e9e9;
  min-height: 100vh;
}
.forgriddd {
  text-align: center;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
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
.dsmkadm{
  width: 300px;
}
</style>