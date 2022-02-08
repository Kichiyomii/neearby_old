<template>
  <div style="text-align: left">
    <b-card>
      <b-media v-if="post.attachments">
        <template #aside>
          <div class="mainaside">
            <div class="unlocked">
              <p class="all" v-if="post.type == 'All'">
                <b-icon icon="unlock"></b-icon> Доступен всем
              </p>
              <p class="pay" v-if="post.type == 'Pay'">
                <b-icon icon="lock"></b-icon> Только для разовой оплаты
              </p>
              <p class="subpay" v-if="post.type == 'SubPay'">
                <b-icon icon="lock"></b-icon> Только для подписчиков и оплаты
              </p>
              <p class="sub" v-if="post.type == 'Sub'">
                <b-icon icon="lock"></b-icon> Только для подписчиков
              </p>
            </div>
            <b-avatar
              style="width: 90px; height: 90px"
              :src="
                'https://api.steepmail.com/api/users/' + author.login + '/photo'
              "
            >
            </b-avatar>
            <div class="forav">
              <p class="name">{{ author.Name }}</p>
              <p class="tttime">
                {{ date }} {{ month }} в {{ timeH }}:{{ timeM }}
              </p>
            </div>
            <div class="leftpart"></div>
            <div class="rightpart">
              <div class="createdat">
                <b-icon
                  :id="'meowww' + post.tittle + post.type"
                  icon="three-dots-vertical"
                  style="fill: black"
                >
                </b-icon>
                <br />
                <b-popover
                  :target="'meowww' + post.tittle + post.type"
                  triggers="hover"
                  placement="top"
                  style="height: 100%"
                >
                  <template #title>Действие</template>
                  <b-button
                    v-if="status.login == user.login"
                    :href="
                      'https://' +
                      user.login +
                      '.neearby.com' +
                      '/changepost/' +
                      post.id
                    "
                    variant="outline"
                    ><b-icon icon="pencil" style="margin-right: 7px"> </b-icon
                    >Редактировать</b-button
                  >
                  <b-button
                    v-if="status.login == user.login"
                    style="margin-top: 10px"
                    @click="deletepost(post.id)"
                    variant="outline"
                    ><b-icon style="margin-right: 4px" icon="x-circle">
                    </b-icon>
                    Удалить</b-button
                  >
                  <b-button
                    v-if="status.login != user.login"
                    style="margin-top: 10px"
                    @click="complainauthor(post.id)"
                    variant="outline"
                  >
                    Пожаловаться</b-button
                  >
                </b-popover>
              </div>
            </div>
          </div>
        </template>
        <div class="forcontent">
          <div
            v-for="image in post.attachments.photo"
            :key="image.value"
            class="image"
            style="margin-top: 10px; margin-bottom: 10px"
          >
            <img
              style="width: 100%"
              :src="
                'https://api.steepmail.com/api/publication/storage/' +
                image.value
              "
              alt=""
            />
          </div>
          <div
            style="margin-top: 10px; margin-bottom: 10px"
            v-for="video in post.attachments.video"
            :key="video.value"
            class="vidosy"
          >
            <b-embed
              style="width: 100%; height: 450px"
              v-if="video.type == 'url'"
              type="iframe"
              :src="'https://www.youtube.com/embed/' + video.value"
              allowfullscreen
            ></b-embed>
            <video
              controls="true"
              style="
                width: 100%;
                height: 100%;
                margin-top: 10px;
                margin-bottom: 10px;
              "
              v-else
              :src="
                'https://api.steepmail.com/api/publication/storage/' +
                video.value
              "
            ></video>
          </div>
          <div
            style="margin-top: 10px; margin-bottom: 10px"
            v-for="file in post.attachments.file"
            :key="file.type"
          >
            <a
              v-if="file.type == 'file'"
              :href="
                'https://api.steepmail.com/api/publication/storage/' +
                file.value
              "
              alt=""
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >Скачать Файл
            </a>
          </div>
          <div
            style="margin-top: 10px; margin-bottom: 10px"
            v-for="audio in post.attachments.audio"
            :key="audio.type"
            class="audiokek"
          >
            <audio controls>
              <source
                :src="
                  'https://api.steepmail.com/api/publication/storage/' +
                  audio.value
                "
                type="audio/mpeg"
              />
            </audio>
          </div>
          <div
            style="margin-top: 10px; margin-bottom: 10px"
            v-for="file in post.attachments.url"
            :key="file.type"
          >
            <a
              v-if="file.type == 'file'"
              :href="file.value"
              target="_blank"
              alt=""
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >{{ file.name }}
            </a>
          </div>
        </div>
        <div class="fottitle">
          <h4>{{ post.tittle }}</h4>
        </div>
        <div class="fordescription">
          <b-form-textarea
            rows="1"
            max-rows="2000"
            no-resize
            class="textread"
            plaintext
            style="overflow-y: hidden !important"
            :value="post.description"
          ></b-form-textarea>
        </div>
        <div class="botaside">
          <div class="like"><like :post="post" :id="post.id" /></div>
          <div style="position: relative; left: -14px; margin-right: 10px">
            {{ post.like.all }}
          </div>
          <div class="chatt">
            <b-icon icon="chat" style="fill: rgb(170, 184, 194)"> </b-icon>
          </div>
          <div style="margin-left: 12px">{{ post.comments.length }}</div>
        </div>
        <div class="comments" style="padding: 2%">
          <div
            class="curcom"
            v-for="comment in post.comments"
            :key="comment.id"
          >
            <b-avatar
              :src="
                'https://api.steepmail.com/api/users/' +
                comment.userData.login +
                '/photo'
              "
            >
            </b-avatar>
            <div class="conter">
              <p style="font-weight: 700; margin-left: 10px; font-size: 18px">
                {{ comment.userData.name }}
              </p>
              <b-form-textarea
                rows="1"
                max-rows="200"
                :value="comment.description"
                no-resize
                readonly
                style="overflow-y: hidden !important"
                class="meowwww"
              ></b-form-textarea>
              <div class="refactor">
                <b-link class="qwerty" @click="comcom(comment.userData.name)"
                  >Ответить</b-link
                >
                <b-link
                  class="qwerty"
                  @click="refac(comment.id, comment.description)"
                  v-if="comment.id_user == user.id"
                  >Редактировать</b-link
                >
                <b-link
                  class="qwerty"
                  @click="delcom(comment.id)"
                  v-if="comment.id_user == user.id || user.id == status.login"
                  >Удалить</b-link
                >
              </div>
              <b-modal :id="comment.id + comment.description">
                <template #modal-header="">
                  <!-- Emulate built in modal header close button action -->
                  <h5>Редактирование</h5>
                </template>

                <template #default="">
                  <label for="inline-form-inputt">Редактировать пост</label>
                  <b-form-input
                    v-model="commd"
                    id="inline-form-inputt"
                  ></b-form-input>
                </template>

                <template #modal-footer="{ cancel }">
                  <!-- Emulate built in modal footer ok and cancel button actions -->
                  <b-button variant="primary" @click="changecomment(comment.id)"
                    >Изменить</b-button
                  >
                  <b-button variant="secondary" @click="cancel()">
                    Закрыть
                  </b-button>
                  <!-- Button with custom close trigger value -->
                </template>
              </b-modal>
            </div>
          </div>
        </div>

        <div class="forinput" v-if="post.canComment">
          <b-avatar
            style="margin-right: 10px; width: 60px; height: 60px"
            :src="
              'https://api.steepmail.com/api/users/' + user.login + '/photo'
            "
          >
          </b-avatar>
          <b-form-textarea
            v-model="sosi"
            no-resize
            placeholder="Введите комментарий"
            style="meow"
          ></b-form-textarea>
          <b-icon
            class="murmur"
            @click="rightcomment(post.id)"
            style=""
            icon="reply"
          ></b-icon>
        </div>
        <div v-else>
          <h5>Комментарии заблокированы</h5>
        </div>
      </b-media>
      <b-media style="height: 450px;" class="idkwhattoright" v-else>
        <div class="createdat">
          <b-icon
            :id="'meowww' + post.tittle + post.type"
            icon="three-dots-vertical"
            style="fill: black; position: absolute; right: 5px;"
          >
          </b-icon>
          <br />
          <b-popover
            :target="'meowww' + post.tittle + post.type"
            triggers="hover"
            placement="top"
            style="height: 100%"
          >
            <template #title>Действие</template>
            <b-button
              v-if="status.login != user.login"
              style="margin-top: 10px"
              @click="complainauthor(post.id)"
              variant="outline"
            >
              Пожаловаться</b-button
            >
          </b-popover>
        </div>
        <div class="unlocked">
          <p class="all" v-if="post.type == 'All'">
            <b-icon icon="unlock"></b-icon> Доступен всем
          </p>
          <p class="pay" v-if="post.type == 'Pay'">
            <b-icon icon="lock"></b-icon> Только для разовой оплаты
          </p>
          <p class="subpay" v-if="post.type == 'SubPay'">
            <b-icon icon="lock"></b-icon> Только для подписчиков и оплаты
          </p>
          <p class="sub" v-if="post.type == 'Sub'">
            <b-icon icon="lock"></b-icon> Только для подписчиков
          </p>
        </div>
        <b-avatar
          style="width: 90px; height: 90px"
          :src="
            'https://api.steepmail.com/api/users/' + author.login + '/photo'
          "
        >
        </b-avatar>
        <div class="forav">
          <p class="name">{{ author.Name }}</p>
          <p class="tttime">{{ date }} {{ month }} в {{ timeH }}:{{ timeM }}</p>
        </div>

        <h4 style="margin-top: 15px">{{ post.tittle }}</h4>
        <div class="zeon">
          <div
            class="ppay"
            v-if="post.type == 'Pay' || post.type == 'SubPay'"
            style="margin-bottom: 20px"
          >
            <p class="warnnning">Данный пост доступен только после оплаты</p>
            <b-button
              variant="primary"
              @click="buycurpost(post.tittle, post.id)"
              style="margin-top: 5px; margin-bottom: 5px"
            >
              Купить отдельный пост за {{ post.cost }} ₽
            </b-button>
          </div>
          <div
            class="subb"
            v-if="arpost.type == 'Sub' || post.type == 'SubPay'"
          >
            <p class="warnnning" v-if="arpost.subname">
              Данный пост доступен после покупки подписки не ниже уровня:
              {{ arpost.subname }}
            </p>
            <b-button
              style="margin-top: 5px; margin-bottom: 5px"
              variant="primary"
              @click="buysubss(arpost.subs, arpost.subname)"
              v-if="arpost.costp"
              >Купить подписку за {{ arpost.costp }} ₽</b-button
            >
          </div>
        </div>
      </b-media>
    </b-card>
    <b-modal size="lg" ref="modalpost" :id="post.id + post.type + post.tittle">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Купить Пост</h5>
      </template>

      <template #default="">
        <label for="name">
          <h5>Вы уверены что хотите купить Пост?</h5>
        </label>
      </template>

      <template #modal-footer="{ cancel }">
        <p style="color: red">{{ erorrss }}</p>
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" size="lg" @click="buypost(post.id)"
          >Купить пост</b-button
        >
        <b-button variant="secondary" size="lg" @click="cancel()">
          Выйти
        </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>
<script>
import like from "./like.vue";
import Api from "../api";
export default {
  name: "postuser",
  components: {
    like,
  },
  data() {
    return {
      commd: "",
      comments:
        "saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      sosi: "",
      errorss: "",
      erorrs: "",
      tittlepos: "",
      arpost: [],
      photo: [],
      video: [],
      file: [],
      audio: [],
      month: "",
      date: "",
      timeH: "",
      timeM: "",
    };
  },
  props: {
    user: Object,
    status: Object,
    name: String,
    post: Object,
    subs: Array,
    author: Object,
  },
  methods: {
    complainauthor(id) {
      this.$bvModal.show("modal-complain");
      let str = JSON.stringify({
        id: id,
        type: "post",
      });
      localStorage.setItem("complain", str);
    },
    async refac(id, desc) {
      console.log("1");
      this.commd = desc;
      this.$bvModal.show(id + desc);
    },
    async changecomment(id) {
      const data = {
        description: this.commd,
      };
      let result = await Api.users.changecom(
        localStorage.getItem("token"),
        id,
        data
      );
      if (result == true) {
        window.location.reload();
      }
      console.log(result);
    },
    comcom(name) {
      this.sosi = name + ",";
    },
    async delcom(id) {
      let result = await Api.users.deletecomm(
        id,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result == true) {
        for (let i = 0; i < this.post.comments.length; i++) {
          const comment = this.post.comments[i];
          console.log();
          if (comment.id == id) {
            console.log("1");
            this.post.comments.splice(i, 1);
          }
        }
      } else {
        console.log(result);
      }
    },
    async rightcomment(id) {
      const json = {
        comment: this.sosi,
      };
      let result = await Api.users.rightcomment(
        id,
        localStorage.getItem("token"),
        json
      );
      if (!result.message) {
        const json = {
          description: this.sosi,
          id: result.id,
          id_pub: this.post.id,
          id_user: this.user.id,
          userData: {
            login: this.user.login,
            name: this.user.name,
            id: this.user.id,
          },
        };
        this.post.comments.push(json);
        this.sosi = "";
      }
    },
    async buysubss(id, tittle) {
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
    async buysubcc(id) {
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
    async buycurpost(tittle, id) {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped");
        let str = JSON.stringify({
          id: id,
          type: "post",
        });
        localStorage.setItem("buy", str);
      } else {
        this.tittlepost = tittle;
        this.$bvModal.show(this.post.id + this.post.type + this.post.tittle);
      }
    },
    async buypost(id) {
      let result = await Api.users.buypost(id, localStorage.getItem("token"));
      if (!result.message) {
        window.location.href = result;
      } else {
        this.erno = result.message;
      }
      console.log(result);
    },
    async deletepost(id) {
      const result = await Api.users.deletepost(
        id,
        localStorage.getItem("token")
      );
      if (result) {
        window.location.reload();
      }
      console.log(result);
      console.log(id);
    },
  },
  mounted() {
    var months = [
      "123",
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    var smth = this.post.createdAt;
    var smthh = smth.split("-");
    this.month = months[smthh[1]];
    var smthhh = smthh[2].split("T");
    this.date = smthhh[0];
    var smthhhh = smthhh[1].split(":");
    this.timeH = Number(smthhhh[0]) + Number(3);
    this.timeM = smthhhh[1];
    setTimeout(() => {
      this.subs.forEach((sub) => {
        if (this.post.subs == sub.id) {
          this.post.subname = sub.tittle;
          this.post.costp = sub.cost;
        }
      });
      this.arpost = this.post;
    }, 1000);
  },
};
</script>
<style scoped lang="scss">
.idkwhattoright{
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(143, 143, 143, 0.2) 100%);
border-radius: 10px;

}
.rightpart {
  right: 10px;
  top: 18px;
  position: absolute;
}
.unlocked {
  right: 30px;
  position: absolute;
}
.forav {
  position: relative;
  top: 13px;
  display: inline-block;
  margin-left: 20px;
  padding-top: 15px;
}
.name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
}
.tttime {
  font-size: 14px;
}
.fottitle {
  text-align: center;
}
.zeon {
  text-align: center;
}
.mainaside {
  width: 100%;
}
.warnnning {
  font-size: 16px;
  color: rgb(179, 60, 60);
}
.rightpart {
  text-align: right;
}
.leftpart {
  text-align: left;
}
.forinput {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr 0.1fr;
  margin-top: 10px;
}
.botaside {
  margin-top: 10px;
  display: flex;
  text-align: left;
  font-size: 30px;
  border: 1px rgb(170, 184, 194);
}
.like {
  position: relative;
  top: -17px;
}
.meow {
  display: inline-block;
}
.meoww {
  display: inline-block;
}
.qwerty {
  text-decoration: none;
  color: darkgrey;
}
.commentbutton {
  font-size: 40px;
}
.textread {
  border: none;
  height: 100%;
}
.textread:focus {
  outline: none;
  border: none;
}
.murmur {
  position: relative;
  top: 22px;
  left: -40px;
  border: 1px solid rgb(103, 103, 255);
  border-radius: 100rem;
  font-size: 30px;
}
.curcom {
  display: grid;
  grid-template-columns: 1fr 20fr;
  width: 100%;
  max-width: 100%;
}
.murmur:hover {
  cursor: pointer;
  fill: rgb(103, 103, 255);
}
.meowwww {
  background-color: white;
  border: 0.25px solid #e9e9e9;
  margin-bottom: 10px;
  margin-right: 10px;
  outline: none;
  max-height: 130px;
}
.comments {
  max-height: 300px;
}
.refactor {
  text-align: right;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-button {
  background-color: #666;
}
::-webkit-scrollbar-track {
  background-color: #999;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #666;
  border-radius: 3px;
}
::-webkit-scrollbar-corner {
  background-color: #999;
}
::-webkit-resizer {
  background-color: #666;
}
</style>
