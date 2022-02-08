<template>
  <div class="mainco">
    <b-card class="chat" v-if="messages.length != 0">
      <div class="forgrid">
        <b-card class="users">
          <b-card
            class="oneuser"
            v-for="msg in messages.slice().reverse()"
            :key="msg.id"
            v-if="messages"
          >
            <div v-if="msg.adreessat" @click="getadminmessage(msg.mesaages)">
              <img src="../assets/logotip.png" style="width: 45px" alt="" />
              <p
                style="
                  display: inline-block;
                  margin-left: 10px;
                  font-weight: 600;
                "
              >
                Neearby.com
              </p>
            </div>
            <div
              @click="getmessage(msg.id)"
              v-else
              class="vorpers"
              style="display: inline-block"
            >
              <b-avatar
                :src="
                  'https://api.steepmail.com/api/users/' +
                  msg.comp_Ank.login +
                  '/photo'
                "
              >
              </b-avatar>
              <p
                style="display:inline-block; margin-left: 10px; font-weight: 600;ч "
              >
                {{ msg.comp_Ank.name }}
              </p>
            </div>
          </b-card>
        </b-card>
        <b-card>
          <div v-if="!opened" class="first">
            <h2>Откройте сообщение</h2>
          </div>
          <div v-else class="formessage">
            <div class="forcont" id="ueu">
              <div
                class="curmessage"
                v-if="sosisas.length != 0"
                v-for="sosisa in sosisas"
                :key="sosisa.id"
              >
                <b-avatar
                  v-if="sosisa.send == 'you'"
                  :src="
                    'https://api.steepmail.com/api/users/' +
                    user.login +
                    '/photo'
                  "
                >
                </b-avatar>
                <img
                  v-else-if="sosisa.id_chats == 'admin'"
                  src="../assets/logotip.png"
                  style="width: 50px"
                  alt=""
                />
                <b-avatar
                  v-else
                  :src="
                    'https://api.steepmail.com/api/users/' +
                    sosisa.sendlogin +
                    '/photo'
                  "
                >
                </b-avatar>
                <div class="es">
                  <p
                    v-if="sosisa.send == 'you' && !sosisa.sendnogin"
                    style="font-weight: 700; font-size: 20px"
                  >
                    {{ user.Name }}
                  </p>
                  <p v-else style="font-weight: 700; font-size: 20px">
                    {{ sosisa.sendnogin }}
                  </p>
                  <p :id="'li' + sosisa.id"></p>
                </div>
              </div>
              <div v-else><h2>У вас пока нет сообщений</h2></div>
            </div>

            <div class="forinput" v-if="!isdamin">
              <b-form-textarea
                v-model="sosi"
                no-resize
                placeholder="Введите сообщений"
                style="meow"
              ></b-form-textarea>
              <b-icon
                class="murmur"
                @click="sendMessage()"
                style=""
                icon="reply"
              ></b-icon>
            </div>
          </div>
        </b-card>
      </div>
    </b-card>
    <b-card v-else class="chat"> <h3>У вас нет активных чатов</h3></b-card>
  </div>
</template>
<script>
export default {
  name: "chats",
  data() {
    return {
      isadmin: false,
      idchatstoSend: 0,
      sosi: "",
      opened: false,
      messages: [],
      sosisas: [],
      socket: {},
    };
  },
  props: {
    user: Object,
  },
  methods: {
    randomInteger(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    getadminmessage(dataa) {
      this.isdamin = true;
      this.opened = false;
      this.sosisas = dataa;
      console.log(dataa);
      this.opened = true;
      console.log(this.sosisas);
      setTimeout(() => {
        const tmp = dataa;
        tmp.forEach((str) => {
          const ms = str.message;
          const arrayms = ms.split("\n");
          let sta = "";
          arrayms.forEach((strrr) => {
            const re = /(http|https)\:\/\/[\w\-\.\/]+/g;
            const ma = strrr.match(re);
            console.log(strrr);
            let stt = strrr;
            if (ma) {
              stt = strrr.replace(
                re,
                '<a href ="' + ma[0] + '"> "' + ma[0] + '"</a>'
              );
            }
            sta += stt + "<br>";
          });
          document.getElementById("li" + str.id).innerHTML = sta;
        });
      }, 100);
      setTimeout(() => {
        document.getElementById("ueu").scrollTop =
          document.getElementById("ueu").scrollHeight;
      }, 50);
    },
    getmessage(id) {
      this.isdamin = false;
      this.idchatstoSend = id;
      console.log(id);
      const json = {
        event: "getMessage",
        data: id,
      };
      this.socket.send(JSON.stringify(json));
    },
    sendMessage() {
      const json = {
        event: "sendMessage",
        data: {
          message: this.sosi,
          id: this.idchatstoSend,
        },
      };
      this.socket.send(JSON.stringify(json));
      const uk = this.sosisas;
      let selfmess = {};
      if (uk.length == 0) {
        let selfmes = {
          send: "you",
          message: this.sosi,
          id: 0 + this.randomInteger(10, 1000),
        };
        selfmess = selfmes;
      } else {
        let selfmes = {
          send: "you",
          message: this.sosi,
          id: this.sosisas[uk.length - 1].id + this.randomInteger(10, 1000),
        };
        selfmess = selfmes;
      }

      this.sosisas.push(selfmess);
      setTimeout(() => {
        const tmp = selfmess;
        const ms = selfmess.message;
        const arrayms = ms.split("\n");
        let sta = "";
        arrayms.forEach((strrr) => {
          const re = /(http|https)\:\/\/[\w\-\.\/]+/g;
          const ma = strrr.match(re);
          console.log(strrr);
          let stt = strrr;
          if (ma) {
            stt = strrr.replace(
              re,
              '<a href ="' + ma[0] + '"> "' + ma[0] + '"</a>'
            );
          }
          sta += stt + "<br>";
        });
        document.getElementById("li" + selfmess.id).innerHTML = sta;
      }, 100);

      this.sosi = "";
      setTimeout(() => {
        document.getElementById("ueu").scrollTop =
          document.getElementById("ueu").scrollHeight;
      }, 50);
    },
  },
  mounted() {
    const ztx = this;
    const socket = new WebSocket("wss://api.steepmail.com/websocket");
    this.socket = socket;
    this.socket.onopen = function () {
      const auth = {
        method: "auth",
        token: localStorage.getItem("token"),
      };
      // socket.send(JSON.stringify(auth));
      socket.send(
        JSON.stringify({
          event: "auth",
          data: JSON.stringify(auth),
        })
      );
    };

    this.socket.onclose = function (event) {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения"); // например, "убит" процесс сервера
      }
      console.log("Код: " + event.code + " причина: " + event.reason);
    };

    this.socket.onmessage = function (event) {
      const mes = JSON.parse(event.data);
      if (mes.event == "chats") {
        ztx.messages = mes.data;
      }
      if (mes.event == "getMes") {
        ztx.opened = false;
        ztx.sosisas = mes.data;
        ztx.opened = true;
        setTimeout(() => {
          const tmp = mes.data;
          tmp.forEach((str) => {
            const ms = str.message;
            const arrayms = ms.split("\n");
            let sta = "";
            arrayms.forEach((strrr) => {
              const re = /(http|https)\:\/\/[\w\-\.\/]+/g;
              const ma = strrr.match(re);
              console.log(strrr);
              let stt = strrr;
              if (ma) {
                stt = strrr.replace(
                  re,
                  '<a href ="' + ma[0] + '"> "' + ma[0] + '"</a>'
                );
              }
              sta += stt + "<br>";
            });
            document.getElementById("li" + str.id).innerHTML = sta;
          });
        }, 100);

        console.log(mes.data);

        setTimeout(() => {
          document.getElementById("ueu").scrollTop =
            document.getElementById("ueu").scrollHeight;
        }, 50);
      }
      if (mes.event == "newMes") {
        console.log("12");
        console.log(ztx.idchatstoSend);
        console.log(mes.data.chats);
        if (ztx.idchatstoSend == mes.data.chats) {
          console.log("1");
          mes.data.id = ztx.randomInteger(10, 30000);
          ztx.sosisas.push(mes.data);
          console.log(mes.data);
          setTimeout(() => {
            const tmp = mes.data;
            const ms = tmp.message;
            const arrayms = ms.split("\n");
            let sta = "";
            arrayms.forEach((strrr) => {
              const re = /(http|https)\:\/\/[\w\-\.\/]+/g;
              const ma = strrr.match(re);
              console.log(strrr);
              let stt = strrr;
              if (ma) {
                stt = strrr.replace(
                  re,
                  '<a href ="' + ma[0] + '"> "' + ma[0] + '"</a>'
                );
              }
              sta += stt + "<br>";
            });
            document.getElementById("li" + tmp.id).innerHTML = sta;
            document.getElementById("ueu").scrollTop =
              document.getElementById("ueu").scrollHeight;
          }, 100);
        }

        console.log(mes.data);
      }
    };

    this.socket.onerror = function (error) {};
    this.socket = socket;
  },
};
</script>
<style lang="scss">
.mainco {
  padding: 5%;
  min-height: 100vh;
  background-color: #e9e9e9;
}
.users {
  overflow-y: scroll;
}
.oneuser{
  margin-bottom: 10px;
}
.oneuser .card-body{
  padding: 0 !important;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
}
.oneuser:hover {
  background-color: #ececec;
  cursor: pointer;
  transition: all 0.5s;
}
.first {
  margin-top: 20px;
  text-align: center !important;
}
.chat {
  text-align: left;
  width: 90%;
  height: 100%;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.forgrid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 620px;
  max-height: 100%;
  min-height: 100%;
}
.meow {
  display: inline-block;
}
.meoww {
  display: inline-block;
}
.forcont {
  height: 510px;
  overflow-y: scroll;
}
.forinput {
  display: grid;
  grid-template-columns: 18fr 1fr;
}
.vorpers {
  width: 100%;
  height: 100%;
}
.murmur {
  position: relative;
  top: 15px;
  left: -35px;
  border: 1px solid rgb(103, 103, 255);
  border-radius: 100rem;
  font-size: 30px;
}
.murmur:hover {
  cursor: pointer;
  fill: rgb(103, 103, 255);
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
.curmessage {
  display: grid;
  grid-template-columns: 1fr 10fr;
}
</style>
