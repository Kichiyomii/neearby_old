<template>
  <div>
    <p class="h3 mb-2 right">
      <b-icon
        icon="gear-fill"
        @click="$bvModal.show('modal-multi-1')"
        style="color: #4e4e4e; margin-right: 7px"
      ></b-icon>
    </p>
    <b-modal id="modal-multi-1" size="lg" scrollable title="Scrollable Content">
      <template #modal-header="">
        <h5>О Авторе</h5>
      </template>

      <template #default="">
        <div class="kads">
          <b-button variant="info">
            <input
              type="file"
              @change="forphoto()"
              accept="image/*"
              id="upload8"
              hidden
            />
            <label for="upload8">
              <b-icon icon="image" style="margin-right: 5px"></b-icon>
              Фото</label
            >
          </b-button>

          <b-button id="popover-target-1" size="lg" variant="info">
            <b-icon icon="camera-video" style="margin-right: 5px"></b-icon>
            Видео
          </b-button>
          <b-button variant="info">
            <input
              type="file"
              @change="foraudio()"
              accept="audio/*"
              hidden
              id="upload4"
            />
            <label for="upload4">
              <b-icon icon="file-earmark-music" style="margin-right: 5px">
              </b-icon>
              Аудио</label
            ></b-button
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
                  <label for="inline-form-input-username">Ссылка</label>
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
                    >Принять
                  </b-button>
                  <b-button variant="info" @click="cancel()">
                    Закрыть
                  </b-button>
                  <!-- Button with custom close trigger value -->
                </template>
              </b-modal>

              <b-icon icon="link45deg" style="margin-right: 2px"></b-icon>
              URL видео
            </b-button>
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
              <b-icon icon="file-earmark-font" style="margin-right: 5px">
              </b-icon>
              Файл</label
            ></b-button
          >
          <b-button
            @click="$bvModal.show('modall')"
            style="width: 100px"
            variant="info"
            id="kedsajkasd"
          >
            <label for="kedsajkasd">
          <b-icon style="position: absolute; top: 11px; left: 2px;" icon="link45deg"></b-icon> &nbsp;&nbsp; Ссылка
            </label>
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
                >Принять
              </b-button>
              <b-button variant="secondary" @click="cancel()">
                Закрыть
              </b-button>
              <!-- Button with custom close trigger value -->
            </template>
          </b-modal>
        </div>

        <br />
        <b-form-textarea
          style="height: 100px; margin-top: 10px"
          id="desc"
          v-model="deskpost"
          placeholder="Напишите о себе"
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
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
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
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >Файл
              <b-icon icon="file"></b-icon>
            </a>
            <b-icon
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
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >Файл
              <b-icon icon="file"></b-icon>
            </a>
            <b-icon
              icon="x-circle"
              v-if="audio.type == 'file'"
              @click="deleteaudio(file.value)"
            >
            </b-icon>
          </div>
          <div v-for="video in attachment.url" :key="video.type">
            <a
              v-if="video.type == 'file'"
              :href="video.value"
              alt=""
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >Ссылка
              <b-icon icon="file"></b-icon>
            </a>
            <b-icon
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
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >Видео
              <b-icon icon="file"></b-icon>
            </a>
            <b-icon
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
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >Ссылка
              <b-icon icon="file"></b-icon>
            </a>
            <b-icon
              icon="x-circle"
              v-if="video.type == 'url'"
              @click="deletevideo(video.value)"
            >
            </b-icon>
          </div>
        </b-card>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" @click="addabout()"> Сохранить</b-button>
        <b-button variant="danger" @click="cancel()"> Закрыть</b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>
<script>
import Api from "../api";

export default {
  name: "gearset",
  props: {
    user: Object,
    author: Object,
  },

  data() {
    return {
      nameurl: "",
      getuurll: "",
      errors: "",
      subprice: 0,
      someinfo: "",
      deskpost: "",
      geturll: "",
      attachment: {
        photo: [],
        video: [],
        audio: [],
        file: [],
        url: [],
      },
    };
  },
  mounted() {
    setTimeout(async () => {
      let desc = JSON.parse(this.author.description);
      this.deskpost = desc.description;
      this.attachment = desc.attachments;
    }, 1200);
  },
  methods: {
    async forphoto() {
      const data = new FormData();
      data.append("file", document.getElementById("upload8").files[0]);
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
    deletelink(value) {
      for (let i = 0; i < this.attachment.url.length; i++) {
        if (this.attachment.url[i].value == value) {
          this.attachment.url.splice(i, 1);
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
    getuurl() {
      console.log(this.attachment);
      this.attachment.url.push({
        type: "file",
        name: this.nameurl,
        value: this.getuurll,
      });
    },
    async addabout() {
      const json = {
        description: this.deskpost,
        attachments: this.attachment,
      };
      const result = await Api.users.aboutauthorget(
        json,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result != true) {
        this.errors = result.message || result;
        return 0;
      } else {
        window.location.reload();
      }
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  height: 300px;
}
.kads {
  display: flex;
  justify-content: space-evenly;
}
.input {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
