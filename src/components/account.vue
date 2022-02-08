<template>
  <transition name="slide-fade">
    <div class="forban">
      <div class="unbanned" v-if="author.status != 'banned'">
        <div class="maaincont" v-if="show">
          <div class="oblojkaa">
            <b-button
              variant="info"
              v-if="status.login == user.login"
              class="updateoblojka"
            >
              <input
                type="file"
                @change="uploadoblojka($event)"
                accept="image/*"
                id="upload"
                hidden
              />
              <label for="upload"> Изменить обложку</label>
            </b-button>
            <b-avatar
              :key="keyofelement"
              rounded
              id="oblojkacom"
              :src="
                'https://api.steepmail.com/api/users/' +
                author.login +
                '/oblojka'
              "
              alt="Error 404"
              class="oblojka"
            ></b-avatar>
          </div>

          <!--    Основная сетка-->
          <div class="forcontt">
            <div class="leftColumn">
              <avatarlinks
                :user="user"
                :login="author.id"
                :author="author"
                :subc="author.subc"
                :status="status"
              />
              <anonssub v-if="author.id != 3" :user="user" />
            </div>

            <div class="centerColumn">
              <abouauthor :author="author" :user="user" :name="author.login" />

              <b-card style="margin-top: 20px" v-if="author.id != 3">
                <div class="carousel">
                  <carousel :nav="false" v-if="author.tovar" class="carousel">
                    <div
                      class="item"
                      v-for="tovar in author.tovar"
                      :key="tovar.id"
                    >
                      <p style="font-weight: 700; font-size: 14px">
                        {{ tovar.tittle }}
                      </p>
                      <b-icon
                        v-if="user.login != author.login"
                        :id="'compl' + tovar.id + tovar.tittle"
                        icon="three-dots-vertical"
                        style="
                          fill: black;
                          float: right;
                          position: absolute;
                          top: 45px;
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
                      <div @click="reload(tovar.id)" style="cursor: pointer">
                        <b-avatar
                          square
                          class="obks"
                          :src="
                            'https://api.steepmail.com/api/publication/storage/' +
                            tovar.img
                          "
                          alt=""
                        >
                        </b-avatar>
                      </div>
                      {{ tovar.desription }} <br />
                      <div class="butto" style="float: bottom">
                        <b-link
                          style="font-size: 12px"
                          :href="
                            'https://' + author.login + '.neearby.com/tovars'
                          "
                          variant="info"
                          class="qwerty"
                          >Другие товары автора
                        </b-link>
                        <br />
                        <b-button-group>
                          <b-button
                            variant="info"
                            style="margin-top: 5px; font-size: 13px"
                            @click="deletet(tovar.id)"
                            v-if="status.login == user.login"
                            >Удалить
                          </b-button>
                          <b-button
                            variant="info"
                            style="margin-top: 5px; font-size: 13px"
                            :href="
                              'https://' +
                              author.login +
                              '.neearby.com/changetovar/' +
                              tovar.id
                            "
                            v-if="status.login == user.login"
                            >Изменить
                          </b-button>
                        </b-button-group>
                        <b-button
                          variant="info"
                          style="height: 40px"
                          @click="buytov(tovar.id, tovar.tittle)"
                          v-if="status.login != user.login"
                          >Купить за {{ tovar.cost }} ₽
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
                              Вы уверены, что хотите купить товар за
                              {{ tovar.cost }} Р?
                            </h5>
                            <p>
                              Товар придёт вам в личные сообщения через
                              некоторое время после успешной покупки
                            </p>
                          </label>
                        </template>

                        <template #modal-footer="{ cancel }">
                          <p style="color: red">{{ erno }}</p>
                          <!-- Emulate built in modal footer ok and cancel button actions -->
                          <b-button
                            variant="info"
                            size="lg"
                            v-on:click="buytovv(tovar.id)"
                            >Купить
                          </b-button>
                          <b-button variant="info" size="lg" @click="cancel()">
                            Выйти
                          </b-button>
                          <!-- Button with custom close trigger value -->
                        </template>
                      </b-modal>
                    </div>
                  </carousel>
                  <b-button
                    variant="info"
                    style="
                      margin-top: 15px;
                      font-size: 18 px;
                      width: 300px;
                      height: 50px;
                      font-family: Inter, Arial, sans-serif;
                    "
                    @click="locat()"
                    v-if="status.login == user.login"
                  >
                    <b-icon icon="upload"> </b-icon>
                    Добавить товар
                  </b-button>
                  <br />
                </div>
              </b-card>
              <br />
              <div class="aboutpost" v-if="author.id != 3">
                <b-card>
                  <h4>Посты</h4>
                  <b-form-select
                    placeholder="По классу"
                    class="selectionn"
                    v-model="selectedd"
                    :options="options"
                  ></b-form-select>
                  <b-form-select
                    placeholder="По классу"
                    class="selectionn"
                    v-model="selectedt"
                    :options="optionst"
                  ></b-form-select>
                </b-card>
              </div>

              <div
                class="postuser"
                v-for="post in posts.slice().reverse()"
                :key="post.id"
                v-if="selectedd == 'Все посты' && selectedt == 'Сначала новые'"
              >
                <postuser
                  :user="user"
                  :status="status"
                  :subs="author.subs"
                  :post="post"
                  :author="author"
                />
              </div>
              <div
                class="postuser"
                v-for="post in posts"
                :key="post.id"
                v-if="selectedd == 'Все посты' && selectedt == 'Сначала старые'"
              >
                <postuser
                  :user="user"
                  :status="status"
                  :subs="author.subs"
                  :post="post"
                  :author="author"
                />
              </div>
              <div
                class="postuser"
                v-for="post in sorted.slice().reverse()"
                :key="post.id"
                v-if="
                  selectedd == 'Доступные мне' && selectedt == 'Сначала новые'
                "
              >
                <postuser
                  :user="user"
                  :status="status"
                  :subs="author.subs"
                  :post="post"
                  :author="author"
                />
              </div>
              <div
                class="postuser"
                v-for="post in sorted"
                :key="post.id"
                v-if="
                  selectedd == 'Доступные мне' && selectedt == 'Сначала старые'
                "
              >
                <postuser
                  :user="user"
                  :status="status"
                  :subs="author.subs"
                  :post="post"
                  :author="author"
                />
              </div>

              <!-- <div
          class="postuser"
          v-for="post in posts.slice().reverse()"
          :key="post.id"
          v-if="selected='Все посты' && selectedt == 'Сначала новые'"
        >
          <postuser
            :user="user"
            :status="status"
            :subs="author.subs"
            :post="post"
          />
        </div>
                <div
          class="postuser"
          v-for="post in posts.slice().reverse()"
          :key="post.id"
          v-if="selected='Все посты' && selectedt == 'Сначала новые'"
        >
          <postuser
            :user="user"
            :status="status"
            :subs="author.subs"
            :post="post"
          />
        </div> -->
            </div>

            <div class="rigthColumn" v-if="author.id != 3">
              <subscription
                :user="user"
                :author="author"
                :subs="author.subs"
                :status="status"
                :subc="author.subc"
              />
              <addbutton v-if="status.login == user.login" />
            </div>
          </div>
        </div>
      </div>
      <div class="banned" v-else>
        <h1>АККАУНТ БЫЛ ЗАБЛОКИРОВАН</h1>
        <h5>Причина: {{ author.Name }}</h5>
        <h5>Свяжитесь, пожалуйста с почтой support@neearby.com</h5>
      </div>
    </div>
  </transition>
</template>
<script>
// import carousel from "./carousel.vue";
import subscription from "./subscription.vue";
import abouauthor from "./abouauthor.vue";
import avatarlinks from "./avatarlinks.vue";
import buybutton from "./buybutton.vue";
import addbutton from "./addbutton.vue";
import postuser from "./postuser.vue";
import anonssub from "./anonssub.vue";
import carousel from "vue-owl-carousel";
import Api from "../api";
import { getCookie, setCookie, deleteCookie } from "../utils.js";

export default {
  name: "account",
  data() {
    return {
      show: false,
      keyofelement: 0,
      sorted: [],
      posts: [],
      erno: "",
      selectedd: "Все посты",
      selectedt: "Сначала новые",
      options: [
        { value: "Все посты", text: "Все посты" },
        { value: "Доступные мне", text: "Доступные мне" },
      ],
      optionst: [
        { value: "Сначала новые", text: "Сначала новые" },
        { value: "Сначала старые", text: "Сначала старые" },
      ],
    };
  },
  components: {
    anonssub,
    carousel,
    subscription,
    abouauthor,
    avatarlinks,
    addbutton,
    buybutton,
    postuser,
  },
  props: {
    status: Object,
    user: Object,
    author: Object,
  },
  methods: {
        reload(id){
      window.location.href = '/forproduct/' + id 
    },
    complaintovar(id) {
      this.$bvModal.show("modal-complain");
      let str = JSON.stringify({
        id: id,
        type: "tovar",
      });
      localStorage.setItem("complain", str);
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
    async deletet(tovar) {
      let result = await Api.users.deletetovar(
        tovar,
        localStorage.getItem("token")
      );
      if (result == true) {
        window.location.reload();
      } else {
        console.log(result.message);
      }
    },
    locat() {
      window.location.href = "/newproduct";
    },
    async uploadoblojka(event) {
      const data = new FormData();
      data.append("photo", event.target.files[0]);
      console.log(data);
      const result = await Api.users.updateoblojka(
        data,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result === true) {
        document.getElementById("oblojkacom").src =
          "https://api.steepmail.com/api/users/" +
          this.author.login +
          "/oblojka?a=" +
          Math.floor(Math.random() * 10123);
        window.location.reload();
      }
    },
  },
  async mounted() {
    console.log(this.author);
    setTimeout(() => {
      this.show = true;
    }, 100);
    setTimeout(async () => {
      const json = {};
      let cht = getCookie("token");
      if (cht == undefined || cht == "undefined" || !cht || cht === undefined) {
        cht = "user";
      }
      console.log(cht);
      if (cht || cht !== undefined || cht !== "undefined") {
        json.token = cht;
      } else {
        json.token = "user";
      }
      const result = await Api.users.vrotebal(this.status.login, json);
      console.log(result);
      this.posts = result;

      const arr = [];
      this.posts.forEach((post) => {
        if (post.attachments) {
          arr.push(post);
        }
      });
      this.sorted = arr;
      console.log(this.sorted);
    }, 2000);

    console.log(this.author);
  },
};
</script>
<style lang="scss">
.banned {
  display: none;
  padding: 3%;
  display: grid;
}
.leftColumn {
  position: relative;
  top: -220px;
  z-index: 10;
}
.qwerty {
  margin-bottom: 15px;
  text-decoration: none;
  color: darkgrey;
}
.item {
  text-align: center;
}

.forcontt {
  text-align: center;
  display: grid;
  grid-template-columns: 0.8fr 3.6fr 1.4fr;
  padding: 50px 4%;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
@media only screen and (max-width: 600px) {
  .forcontt {
    display: flex;
    flex-direction: column;
  }
  .carousel {
    width: 90vw;
  }
  .leftColumn {
    position: relative;
    top: -20px;
    z-index: 10;
  }
}
.oblojkaa {
  width: 100%;
  height: 270px;
  background-color: #bebebe;
  overflow: hidden;
}

.subbuttonnn {
  width: 200px;
  height: 40px;
  margin-top: 30px;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .oblojka {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
}

.updateoblojka {
  position: absolute;
  right: 80px;
  top: 290px;
  z-index: 3;
}

.postuser {
  margin-top: 20px;
}

.aboutpost {
  text-align: left;
  margin-top: 10px;
}

.centerColumn {
  width: 100%;
}

.maaincont {
  background-color: #e9e9e9;
}

.selectionn {
  display: inline-block;
  width: 50%;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

//
//.forcont {
//  display: grid;
//  grid-template-columns: 300px 720px 300px;
//}
//
//.subscription {
//  width: 270px;
//  right: 90px;
//}
//
.carousel {
  width: 49vw;
}

.tittle {
  text-align: center;
  max-width: 20ch;
}
.obks {
  width: 100%;
  height: 100%;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.owl-carousel .owl-item img {
  width: 100%;
  height: 100%;
}
//
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
//.subbutton {
//  margin-top: 10px;
//  width: 270px;
//}
//
//.leftcont {
//  position: relative;
//  width: 270px;
//  top: -150px;
//}
//
//.rightcont {
//  margin-left: 100px;
//}
</style>
