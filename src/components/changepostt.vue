<template>
  <div class="postcont">
    <div class="contformain">
      <div class="posts">
        <div class="curpost">
          <div>
            <b-card>
              <b-media>
                <template #aside>
                  <h4 class="mt-0">Пост</h4>
                </template>

                <h3>Здесь писать пост</h3>

                <p>
                  <b-button-group>
                    <b-button variant="info">
                      <input
                        type="file"
                        @change="forphoto()"
                        accept="image/*"
                        id="upload"
                        hidden
                      />
                      <label for="upload">
                        <b-icon icon="image" style="margin-right: 5px"> </b-icon
                        >Изображение</label
                      >
                    </b-button>

                    <b-button
                      id="popover-target-1"
                      size="lg"
                      variant="info"
                      ><b-icon icon="camera-video" style="margin-right: 5px">
                      </b-icon
                      >Видео</b-button
                    >
                    <b-popover
                      target="popover-target-1"
                      triggers="click"
                      placement="bottom"
                    >
                      <template #title>Загрузить видео</template>
                      <b-button
                        @click="$bvModal.show('modal')"
                        style="margin-bottom: 10px; height: 40px; width: 180px"
                      >
                        <b-modal id="modal">
                          <template #modal-header="">
                            <!-- Emulate built in modal header close button action -->
                            <h5>
                              Ссылка на видео (Только YouTube)
                              <b-icon icon="youtube"></b-icon>
                            </h5>
                          </template>

                          <template #default="">
                            <label for="inline-form-input-username"
                              >Ссылка</label
                            >
                            <b-input-group
                              prepend="Youtube:"
                              class="mb-2 mr-sm-2 mb-sm-0"
                            >
                              <b-form-input
                                v-model="geturll"
                                id="inline-form-input-username"
                                placeholder="youtube.com/"
                              ></b-form-input>
                            </b-input-group>
                          </template>

                          <template #modal-footer="{ cancel }">
                            <!-- Emulate built in modal footer ok and cancel button actions -->
                            <b-button variant="primary" v-on:click="geturl()"
                              >Принять</b-button
                            >
                            <b-button variant="secondary" @click="cancel()">
                              Закрыть
                            </b-button>
                            <!-- Button with custom close trigger value -->
                          </template>
                        </b-modal>

                        <b-icon icon="link45deg" style="margin-right: 2px">
                        </b-icon>
                        URL видео</b-button
                      >
                      <b> </b>
                    </b-popover>
                    <b-button size="lg" variant="info">
                      <input
                        type="file"
                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        hidden
                        @change="forfile()"
                        id="upload3"
                      />
                      <label for="upload3">
                        <b-icon
                          icon="file-earmark-font"
                          style="margin-right: 5px"
                        >
                        </b-icon
                        >Файл</label
                      ></b-button
                    >
                    <b-button
                      @click="$bvModal.show('modall')"
                      style="width: 100px;"
                      variant="info"
                    >
                      Ссылка
                    </b-button>
                    <b-modal id="modall">
                      <template #modal-header="">
                        <!-- Emulate built in modal header close button action -->
                        <h5>Ссылка</h5>
                      </template>

                      <template #default="">
                        <label for="inline-form-input-username">Ссылка</label>
                        <b-form-input
                          v-model="nameurl"
                          id="inline-form-input-usernamуe"
                          placeholder="Введите название ссылки"
                        ></b-form-input>
                        <b-form-input
                          v-model="getuurll"
                          id="inline-form-input-username"
                          placeholder="https://"
                        ></b-form-input>
                      </template>

                      <template #modal-footer="{ cancel }">
                        <!-- Emulate built in modal footer ok and cancel button actions -->
                        <b-button variant="primary" v-on:click="getuurl()"
                          >Принять</b-button
                        >
                        <b-button variant="secondary" @click="cancel()">
                          Закрыть
                        </b-button>
                        <!-- Button with custom close trigger value -->
                      </template>
                    </b-modal>
                    <b-button variant="info">
                      <input
                        type="file"
                        @change="foraudio()"
                        accept="audio/*"
                        hidden
                        id="upload4"
                      />
                      <label for="upload4">
                        <b-icon
                          icon="file-earmark-music"
                          style="margin-right: 5px"
                        >
                        </b-icon
                        >Загрузить Аудио</label
                      ></b-button
                    >
                  </b-button-group>
                </p>

                <br />
                <b-form-input
                  style="height: 45px; font-size: 20px; font-weight: 500"
                  id="name"
                  v-model="zagolovokpost"
                  placeholder="Введите заголовок поста"
                >
                </b-form-input>
                <br />
                <b-form-textarea
                  style="height: 130px"
                  id="desc"
                  v-model="deskpost"
                  placeholder="Введите описание поста"
                ></b-form-textarea>
                <div class="error" style="margin-top: 10px; color: red">
                  {{ errors }}
                </div>
                <b-card style="margin-top: 20px">
                  <div v-for="image in attachment.photo" :key="image.type">
                    <img
                      v-if="image.type == 'file'"
                      :src="
                        'https://api.steepmail.com/api/publication/storage/' +
                        image.value
                      "
                      alt=""
                      style="
                        max-width: 200px;
                        min-width: 190px;
                        margin-bottom: 9px;
                      "
                    />
                    <b-icon
                      icon="x-circle"
                      v-if="image.type == 'file'"
                      @click="deletephoto(image.value)"
                    ></b-icon>
                  </div>
                  <div v-for="file in attachment.file" :key="file.type">
                    <a
                      v-if="file.type == 'file'"
                      :href="
                        'https://api.steepmail.com/api/publication/storage/' +
                        file.value
                      "
                      alt=""
                      style="
                        max-width: 200px;
                        min-width: 190px;
                        margin-bottom: 9px;
                      "
                      >Файл <b-icon icon="file"> </b-icon> </a
                    ><b-icon
                      icon="x-circle"
                      v-if="file.type == 'file'"
                      @click="deletefile(file.value)"
                    >
                    </b-icon>
                  </div>
                  <div v-for="audio in attachment.audio" :key="audio.type">
                    <a
                      v-if="audio.type == 'file'"
                      :href="
                        'https://api.steepmail.com/api/publication/storage/' +
                        audio.value
                      "
                      alt=""
                      style="
                        max-width: 200px;
                        min-width: 190px;
                        margin-bottom: 9px;
                      "
                      >Файл
                      <b-icon icon="file" style="cursor: pointer"> </b-icon> </a
                    ><b-icon
                      icon="x-circle"
                      v-if="audio.type == 'file'"
                      @click="deleteaudio(audio.value)"
                    >
                    </b-icon>
                  </div>
                  <div v-for="video in attachment.url" :key="video.type">
                    <a
                      v-if="video.type == 'file'"
                      :href="video.value"
                      alt=""
                      style="
                        max-width: 200px;
                        min-width: 190px;
                        margin-bottom: 9px;
                      "
                      >Ссылка <b-icon icon="file"> </b-icon> </a
                    ><b-icon
                      icon="x-circle"
                      v-if="video.type == 'file'"
                      @click="deletelink(video.value)"
                    >
                    </b-icon>
                  </div>
                  <div v-for="video in attachment.video" :key="video.type">
                    <a
                      v-if="video.type == 'file'"
                      :href="
                        'https://api.steepmail.com/api/publication/storage/' +
                        video.value
                      "
                      alt=""
                      style="
                        max-width: 200px;
                        min-width: 190px;
                        margin-bottom: 9px;
                      "
                      >Видео <b-icon icon="file"> </b-icon> </a
                    ><b-icon
                      icon="x-circle"
                      v-if="video.type == 'file'"
                      @click="deletevideo(video.value)"
                    >
                    </b-icon>
                  </div>
                  <div v-for="video in attachment.video" :key="video.type">
                    <a
                      v-if="video.type == 'url'"
                      :href="'https://www.youtube.com/embed' + video.value"
                      alt=""
                      style="
                        max-width: 200px;
                        min-width: 190px;
                        margin-bottom: 9px;
                      "
                      >Ссылка <b-icon icon="file"> </b-icon> </a
                    ><b-icon
                      icon="x-circle"
                      v-if="video.type == 'url'"
                      @click="deletevideo(video.value)"
                    >
                    </b-icon>
                  </div>
                </b-card>
              </b-media>
            </b-card>
          </div>
        </div>
        <!-- <div v-if="radio != 'All'" class="teaser">
          <div>
            <b-card>
              <b-media>
                <template #aside>
                  <h4 class="mt-0">Тизер поста</h4>
                </template>
                <p class="text">
                  Тизер показывается только для пользователей, не имеющих
                  доступа к вашему посту
                </p>
                <b-button
                  style="float: left; margin-left: 20px"
                  variant="outline-secondary"
                >
                  <input type="file" @change="uploadteaser()" accept="image/*" id="upload" hidden />
                  <label for="upload">
                    <b-icon icon="image" style="margin-right: 7px"> </b-icon
                    >Добавить обложку</label
                  >
                </b-button>

                <b-form-textarea
                  style="height: 80px; margin-top: 70px"
                  id="desc"
                  v-model="deskteaser"
                  placeholder="Введите описание поста"
                ></b-form-textarea>
              </b-media>
            </b-card>
          </div>
        </div> -->
      </div>

      <div class="whocanwatch">
        <div>
          <b-card>
            <b-media>
              <template #aside>
                <h4 class="mt-0">Кто может смотреть</h4>
              </template>

              <b-form-group
                style="text-align: left"
                label="Пожалуйста, выберите 1 из пунктов"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="radio"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  size="lg"
                  value="All"
                  >Открыт для всех</b-form-radio
                >
                <b-form-radio
                  v-model="radio"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  size="lg"
                  value="Sub"
                  >Только подписчики</b-form-radio
                >
                <b-form-radio
                  v-model="radio"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  size="lg"
                  value="SubPay"
                  >Подписчики или разовая оплата</b-form-radio
                >
                <b-form-radio
                  v-model="radio"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  size="lg"
                  value="Pay"
                  >Только разовая оплата</b-form-radio
                >
              </b-form-group>

              <div v-if="radio == 'SubPay' || radio == 'Sub'" class="wo">
                <h5>Уровень</h5>
                <select v-model="someinfo" class="selectsubs">
                  <option v-for="sub in result" :key="sub.id" :value="sub.id">
                    {{ sub.tittle }}: {{ sub.cost }}р. и выше
                  </option>
                </select>
              </div>
              <div v-if="radio == 'Pay' || radio == 'SubPay'" class="one">
                <h5>Стоимость поста в Руб.</h5>
                <b-form-input
                  class="contforprice"
                  v-model="subprice"
                  type="number"
                  placeholder="Введите цену"
                ></b-form-input>
              </div>
            </b-media>
                        <div class="forradio" style="margin-top: 20px;">
              <b-form-checkbox
              style="text-align: left;"
                size="lg"
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
              >
                Отключить комментарии под постом {{status}}
              </b-form-checkbox>
            </div>
          </b-card>
        </div>
      </div>
      <b-button size="lg" class="addpost" @click="changeposture()">
        <b-icon icon="patch-plus"> </b-icon> Изменить Пост</b-button
      >
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "changepostt",
  components: {},
  props: {
    result: Object,
    login: String,
  },
  data() {
    return {
      status: false,
      nameurl: "",
      getuurll: "",
      errors: "",
      subprice: 0,
      someinfo: "",
      deskpost: "",
      zagolovokpost: "",
      geturll: "",
      radio: "Sub",
      attachment: {
        photo: [],
        video: [],
        audio: [],
        file: [],
      },
    };
  },
  methods: {
    async forphoto() {
      const data = new FormData();
      data.append("file", document.getElementById("upload").files[0]);
      const result = await Api.users.publication(
        data,
        localStorage.getItem("token")
      );
      this.attachment.photo.push({
        type: "file",
        value: result.url,
      });
    },
    async forvideo() {
      const data = new FormData();
      data.append("file", document.getElementById("upload2").files[0]);
      const result = await Api.users.publication(
        data,
        localStorage.getItem("token")
      );
      this.attachment.video.push({
        type: "file",
        value: result.url,
      });
    },
    async foraudio() {
      const data = new FormData();
      data.append("file", document.getElementById("upload4").files[0]);
      const result = await Api.users.publication(
        data,
        localStorage.getItem("token")
      );
      this.attachment.audio.push({
        type: "file",
        value: result.url,
      });
    },
    async forfile() {
      const data = new FormData();
      data.append("file", document.getElementById("upload3").files[0]);
      const result = await Api.users.publication(
        data,
        localStorage.getItem("token")
      );
      this.attachment.file.push({
        type: "file",
        value: result.url,
      });
    },
    deletephoto(value) {
      for (let i = 0; i < this.attachment.photo.length; i++) {
        if (this.attachment.photo[i].value == value) {
          this.attachment.photo.splice(i, 1);
        }
      }
    },
    deletefile(value) {
      for (let i = 0; i < this.attachment.file.length; i++) {
        if (this.attachment.file[i].value == value) {
          this.attachment.file.splice(i, 1);
        }
      }
    },
    deletevideo(value) {
      for (let i = 0; i < this.attachment.video.length; i++) {
        if (this.attachment.video[i].value == value) {
          this.attachment.video.splice(i, 1);
        }
      }
    },
    deleteaudio(value) {
      for (let i = 0; i < this.attachment.audio.length; i++) {
        if (this.attachment.audio[i].value == value) {
          this.attachment.audio.splice(i, 1);
        }
      }
    },
    deletelink(value) {
      for (let i = 0; i < this.attachment.url.length; i++) {
        if (this.attachment.url[i].value == value) {
          this.attachment.url.splice(i, 1);
        }
      }
    },
    getuurl() {
      console.log(this.attachment);
      this.attachment.url.push({
        type: "file",
        name: this.nameurl,
        value: this.getuurll,
      });
    },
    geturl() {
      const urk = this.geturll.split(
        /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g
      );
      console.log(urk);
      this.attachment.video.push({
        type: "url",
        value: urk[1],
      });
    },
    async changeposture() {
      const json = {
        tittle: this.zagolovokpost,
        description: this.deskpost,
        attachments: this.attachment,
        canComment: true,
      };
      if (this.status == true) {
        json.canComment = false;
      }
      if (this.radio == "All") {
        json.type = "All";
      }
      if (this.radio == "Sub") {
        json.type = "Sub";
        json.subs = this.someinfo;
      }
      if (this.radio == "SubPay") {
        json.type = "SubPay";
        json.subs = this.someinfo;
        json.cost = this.subprice;
      }
      if (this.radio == "Pay") {
        json.type = "Pay";
        json.cost = this.subprice;
      }
      json.id = this.$route.params.postid;
      console.log(json)
      const result = await Api.users.updatepost(
        json,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result != true) {
        this.errors = result.message || result;
        return 0;
      } else {
        window.location.href = "/page";
      }
    },
  },
  async mounted() {
    let smth = this.$route.params.postid;
    console.log(smth)
    const result = await Api.users.getcurpost(
      this.$route.params.postid,
      localStorage.getItem("token")
    );
    if (!result.id) {
      window.location.href = "/";
    } else {
      this.radio = result.type;
      this.zagolovokpost = result.tittle;
      if (result.description != null) {
        this.deskpost = result.description;
      }
      if (result.cost != null) {
        this.subprice = result.cost;
      }
      if (result.subs != null) {
        this.someinfo = result.subs;
      }
      if (result.attachments != null) {
        this.attachment = JSON.parse(result.attachments);
      }
    }
  },
};
</script>
<style scoped lang="scss">
#app {
  overflow: scroll;
}
.postcont {
  background-color: #e9e9e9;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
.contformain {
  display: grid;
  grid-template-columns: 1.75fr 1fr;
}
.curpost {
  margin-top: 50px;
  width: 60%;
  float: right;
  margin-right: 20%;
}
.whocanwatch {
  margin-top: 50px;
  width: 500px;
}
.teaser {
  float: right;
  margin-top: 30px;
  width: 60%;
  margin-right: 20%;
}
.one {
  margin-top: 10px;
  padding-left: 1.875rem;
  text-align: left;
}
.wo {
  padding-left: 1.875rem;
  margin-top: 10px;
  width: 300px;
  text-align: left;
}
.contforprice {
  width: 200px;
}
.selectsubs {
  width: 300px;
  height: 55px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text {
  color: rgba(0, 0, 0, 0.5);
}
.addpost {
  margin-top: 60px;
  width: 250px;
  margin-left: 50%;
  transform: translate(-50% 0);
}
</style>    