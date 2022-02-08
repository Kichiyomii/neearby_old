<template>
  <div>
    <b-button
      v-b-modal.modal-scrollableee
      variant="info"
      class="subbutttonnn"
      style="font-family: Inter, Arial, sans-serif;"
    >
      <b-icon icon="graph-up"></b-icon> Добавить подписку
    </b-button>
    <b-modal size="lg" id="modal-scrollableee">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Добавить уровень подписки</h5>
      </template>

      <template #default="">
        <label for="name"> <h5>Название</h5> </label>
        <b-form-input
          style="height: 45px; font-size: 20px; font-weight: 500"
          v-model="title"
          id="name"
          placeholder="Введите заголовок"
        >
        </b-form-input>

        <div class="button" style="margin-top: 15px; margin-bottom: 15px">
          <label for="primar"> <h5>Загрузить обложку</h5> </label> <br />
          <b-button
            style="width: 180px; height: 45px; font-size: 18px"
            id="info"
            variant="info"
          >
            <input type="file" @change="smth()" accept="image/*" id="uploa" hidden />
            <label for="uploa">
              <b-icon icon="images"> </b-icon> Загрузить</label
            >
          </b-button>
        </div>

        <div v-if="sucess == true" class="imgcont">
          <b-spinner variant="primary" ></b-spinner>
        </div>
        <div v-if="aftersuccess == true">
          <h5 style="color: green">Успешно!</h5>
        </div>

        <label for="desc"> <h5>Описание</h5></label>
        <b-form-textarea
          style="height: 80px"
          v-model="description"
          id="desc"
          placeholder="Введите описание"
        ></b-form-textarea>
        <label for="price" style="margin-top: 15px"> <h5>Цена</h5> </label>
        <b-form-input
          v-model="price"
          id="price"
          placeholder="300"
        ></b-form-input>

        <!-- <div class="refs">
          <h5>Реферальная система подписок</h5>
          <div class="flexingg">
          <b-input-group prepend="1 Ур  %">
            <b-form-input
              min="10"
              max="100"
              type="number"
              v-model = "lvl1"
              placeholder="5"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="2 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="5"
              max="100"
              type="number"
              v-model = "lvl2"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="3 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="3"
              max="100"
              type="number"
              v-model = "lvl3"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="4 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="2"
              max="100"
              type="number"
              v-model = "lvl4"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="5 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl5"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="6 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl6"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="7 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl7"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="8 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl8"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="9 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl9"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="10 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model = "lvl10"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
        </div> -->
        <!-- </div> -->
        <p style="color: red; font-size: 18px">
          Примечание! После создания подписки - удалить её будет невозможно,
          поэтому при создании внимательно посмотрите на её содержимое
        </p>
        <p class="wwarning" v-if="errors">
          {{ errors }}
        </p>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" size="lg" v-on:click="letsub()"
          >Принять</b-button
        >
        <b-button variant="info" size="lg" @click="cancel()">
          Закрыть
        </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "addbutton",
  data() {
    return {
      sucess: false,
      aftersuccess: false,
      title: "",
      description: "",
      price: "",
      errors: "",
      lvl1 : 10,
      lvl2 : 5,
      lvl3 : 3,
      lvl4 : 2,
      lvl5 : 1,
      lvl6 : 1,
      lvl7 : 1,
      lvl8 : 1,
      lvl9 : 1,
      lvl10 : 1,
    };
  },
  methods: {
    async letsub() {
      const data = new FormData();
      data.append("photo", document.getElementById("uploa").files[0]);
      data.append("tittle", this.title);
      data.append("description", this.description);
      data.append("cost", this.price);
      console.log(data);
      const result = await Api.users.addsubsription(
        data,
        localStorage.getItem("token")
      );
      console.log(result);
      if (result === true) {
        console.log("2");
        window.location.reload();
      }
      this.errors = result.message;
    },
    smth(){
      console.log('1')
      this.sucess = true
      setTimeout(() => {
        this.sucess = false
        this.aftersuccess = true
      }, 800);
    } 
  },
};
</script>
<style scoped lang="scss">
.subbutttonnn{
  width: 100%;
  height: 50px;
  margin-top: 20px;
}
.flexingg  {
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1px;
    margin-top: 10px;
}  
</style>
