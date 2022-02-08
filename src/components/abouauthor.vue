<template>
  <div style="text-align: left">
    <b-card>
      <b-media>
        <template #aside>
          <h2 class="mt-0">{{ author.Name }}</h2>
          <img
            v-if="author.id == 1 || author.id == 2"
            src="../assets/veri.jpg"
            style="
              width: 32px;
              height: 32px;
              margin-top: 4px;
              margin-left: 10px;
            "
            alt=""
          />
          <img
            v-if="author.id == 3 || author.id == 91"
            src="../assets/dev.jpg"
            style="width: 45px; margin-left: 10px"
            alt=""
          />
          <div class="right">
            <b-icon
              v-if="user.login != author.login"
              id="complainauthor"
              icon="three-dots-vertical"
              style="fill: black"
            >
            </b-icon>
            <b-popover
              target="complainauthor"
              triggers="hover"
              placement="bottom"
              style="height: 100%"
            >
              <template #title>Действие</template>
              <b-button variant="outline" @click="complainauthor(author.id)"
                >Пожаловаться</b-button
              >
            </b-popover>
            <gearset
              v-if="user.login == author.login"
              :author="author"
              :user="user"
            />
          </div>
        </template>

        <div class="fordescription">
          <b-form-textarea
            no-resize
            rows="1"
            max-rows="3"
            class="textread"
            plaintext
            :value="post.description"
            style="overflow-y: hidden !important"
            v-if="firstcancel == true"
          ></b-form-textarea>
          <b-form-textarea
            no-resize
            rows="1"  
            max-rows="100"
            class="textread"
            plaintext
            :value="post.description"
            style="overflow-y: hidden !important"
            v-if="secondcancel == true"
          ></b-form-textarea>
          <div v-if="firstcancel" @click="cor()">Читать полностью...</div>
        </div>
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
            v-for="file in post.attachments.url"
            :key="file.type"
          >
            <a
              v-if="file.type == 'file'"
              :href="file.value"
              alt=""
              style="max-width: 200px; min-width: 190px; margin-bottom: 9px"
              >{{ file.name }}
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
        </div>
      </b-media>
    </b-card>
  </div>
</template>
<script>
import gearset from "./gearset.vue";
export default {
  name: "abouauthor",
  components: {
    gearset,
  },
  props: {
    name: String,
    user: Object,
    author: Object,
  },
  data() {
    return {
      firstcancel: false,
      secondcancel: false,
      number: 4,
      cancel: 0,
      post: {},
      arpost: [],
      photo: [],
      video: [],
      file: [],
      audio: [],
    };
  },
  methods: {
    cor(){
      console.log('1')
      this.firstcancel = false;
      setTimeout(async () => { 
        this.secondcancel = true;
      }, 10)
      
      console.log(this.firstcancel)
      console.log(this.secondcancel)
    },
    complainauthor(id) {
      this.$bvModal.show("modal-complain");
      let str = JSON.stringify({
        id: id,
        type: "user",
      });
      localStorage.setItem("complain", str);
    },
  },
  mounted() {
    setTimeout(async () => {
      console.log(this.author);
      let desc = JSON.parse(this.author.description);
      this.post = desc;
      console.log(this.post);
      let smthh = this.post.description.length;
      if (
        this.post.description.length > 800 ||
        this.post.description.split(/\r|\r\n|\n/).length > 10
      ) {
        this.firstcancel = true;
      }
      else{
        this.secondcancel = true;
      }
      console.log(smthh);
    }, 1300);
  },
};
</script>
<style scoped lang="scss">
.textread {
  border: none;
  transition: all 0.5s;
}
.textread:focus {
  outline: none;
  border: none;
    transition: all 0.5s;
}
.right {
  position: absolute;
  right: 10px;
}
.right:hover {
  cursor: pointer;
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
