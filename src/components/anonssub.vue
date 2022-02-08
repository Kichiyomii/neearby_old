<template>
  <div class="anoncont">
    <b-modal id="mmm">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Добавить объявление</h5>
      </template>

      <template #default="">
        <b-form-group
          style="text-align: left"
          label="Пожалуйста, выберите, какой тип объявления вы хотите "
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio
            v-model="radio"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="lg"
            value="Tovar"
          >Товар
          </b-form-radio
          >
          <b-form-radio
            v-model="radio"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="lg"
            value="Sub"
          >Подписка
          </b-form-radio
          >
        </b-form-group>

        <div v-if="radio == 'Tovar'" class="wo">
          <h5>Товар</h5>
          <select v-model="someinfo" class="selectsubs">
            <option v-for="sub in tovar" :key="sub.id" :value="sub">
              <p style="font-weight: 700">{{ sub.tittle }}</p>
            </option>
          </select>
        </div>

        <div v-if="radio == 'Sub'" class="wo">
          <h5>Подписка</h5>
          <select v-model="some" class="selectsubs">
            <option v-for="sub in subs" :key="sub.id" :value="sub">
              <p style="font-weight: 700">{{ sub.tittle }}</p>
            </option>
          </select>
        </div>
      </template>

      <template #modal-footer="{ cancel }">
        <p style="color: red">{{ er }}</p>
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" @click="creat()">Купить за 300</b-button>
        <b-button variant="info" @click="cancel()"> Закрыть</b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
    <div class="anonssub">
      <b-link class="qwerty" @click="addd()">Добавить объявление (300Р)</b-link>
      <b-card class="suban" v-for="catal in cataloges" :key="catal.arr.id" @click="kek(catal.type, catal.login)">
        <div class="forg" v-if="catal" >
          <img
            style="width: 100%"
            v-if="catal.type == 'sub'"
            :src="
              'https://api.steepmail.com/api/subscriptions/photo/' + catal.arr.id
            "
            alt=""
          />
          <img 
            style="width: 100%"
            v-if="catal && catal.type == 'tovar'"
            :src="
              'https://api.steepmail.com/api/publication/storage/' + catal.arr.img
            "
            alt=""
          />
          <div v-if="catal" class="tittlee">{{ catal.arr.tittle }}</div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import Api from "../api";

export default {
  name: "subscription",
  props: {
    user: Object
  },
  async mounted() {
    const resulttt = await Api.users.getcatalog();
    console.log(resulttt);
    this.cataloges = resulttt;
        const hosts = window.location.host.split(".");
    if (hosts.length == 3) {
          const resultt = await Api.users.getauthortovar(hosts[0]);
    this.tovar = resultt;
    let result = await Api.users.chtoto(
      this.user.id,
      localStorage.getItem("token")
    );
    this.subs = result;

    console.log(this.cataloges);
    }
    else{
      return 0;
    }

  },
  data() {
    return {
      cataloges: "",
      er: "",
      tovar: {},
      someinfo: "",
      some: "",
      radio: "",
      subs: {}
    };
  },
  methods: {
    kek(type, login) {
      if (type == "tovar") {
        window.location.href = "https://" + login + '.neearby.com/tovars'
      }
      if (type == "sub") {
        window.location.href = "https://" + login + '.neearby.com/page'
      }
    },
    addd() {
      if (this.user.error) {
        this.$bvModal.show("modal-scoped2");
      } else {
        this.$bvModal.show("mmm");
      }
    },
    async creat() {
      const json = {
        type: this.radio,
        login: this.user.login,
      };
      if (this.radio == "Tovar") {
        json["id"] = this.someinfo;
        json["type"] = "tovar";
      }
      if (this.radio == "Sub") {
        json["id"] = this.some;
        json["type"] = "sub";
      }
      let result = await Api.users.sendob(json, localStorage.getItem("token"));
      window.location.href = result
    }
  }
};
</script>
<style lang="scss">
.anoncont {
  margin-top: 15px;
}

.suban {
  margin-bottom: 10px;
  cursor: pointer;
}

.suban:hover {
  background-color: #e9e9e9e9;
}

.forg {
  display: flex;
  flex-direction: column;
}

.tittlee {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
}

.selectsubs {
  display: inline-block;
  width: 70%;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.desc {
  margin-top: 5px;
}
</style>