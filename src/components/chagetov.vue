<template>
  <div class="forback">
    <h3 style="padding-top: 20px">
      Добавление товара, услуги, доната(пожертвования)
    </h3>
    <div class="fullcont">
      <div class="leftcont">
        <div class="tovartype">
          <h5>Тип товара</h5>
          <b-form-select
            class="selection"
            v-model="selected"
            :options="options"
          ></b-form-select>
        </div>
        <div class="linkdesctovar">
          <h5>Ссылка на описание товара</h5>
          <b-form-input
            v-model="linktovar"
            placeholder="Ссылка на описание товара"
          ></b-form-input>
        </div>
        <div class="nametovar">
          <h5>Название товара</h5>
          <b-form-input
            v-model="nametovar"
            placeholder="Название товара"
          ></b-form-input>
        </div>
        <div class="price">
          <h5>Цена товара</h5>
          <b-form-input
            v-model="pricetovar"
            type="number"
            min="1"
            max="999999"
            placeholder="Цена товара"
          ></b-form-input>
        </div>
      </div>
      <div class="righttcont">
        <div class="desctovar">
          <h5>Описание товара</h5>
          <b-form-textarea
            v-model="desctovar"
            placeholder="Описание товара"
          ></b-form-textarea>
        </div>
        <div class="whocanwatch">
          <div>
            <b-form-group
              style="text-align: left"
              label="Пожалуйста, выберите 1 из пунктов"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="radio"
                :aria-describedby="ariaDescribedby"
                name="some-radio"
                size="lg"
                value="Link"
                >Только ссылку</b-form-radio
              >
              <b-form-radio
                v-model="radio"
                :aria-describedby="ariaDescribedby"
                name="some-radio"
                size="lg"
                value="LinkDesc"
                >Ссылку и сообщение</b-form-radio
              >
            </b-form-group>

            <div v-if="radio == 'Link'" class="wo">
              <h5>Введите ссылку</h5>
              <b-form-input
                class="contforprice"
                v-model="linkfortovar"
                type="url"
                placeholder="Введите ссылку"
              ></b-form-input>
            </div>
            <div v-if="radio == 'LinkDesc'" class="one">
              <h5>Введите ссылку</h5>
              <b-form-input
                class="contforprice"
                v-model="linkfortovar"
                type="url"
                placeholder="Введите ссылку"
              ></b-form-input>
              <h5>Введите сообщение</h5>
              <b-form-textarea
                class="contforprice"
                v-model="messagefortovar"
                type="text"
                placeholder="Введите сообщение"
              ></b-form-textarea>
            </div>
          </div>
        </div>
        <div class="imagetovar">
          <b-button variant="outline-secondary">
            <input
              type="file"
              @change="forphoto()"
              accept="image/*"
              id="cheburek"
              hidden
            />
            <label for="cheburek">
              <b-icon icon="image" style="margin-right: 5px"> </b-icon
              >Изображение</label
            >
          </b-button>
        </div>
      </div>
    </div>
    <div class="imag" style="text-align: center">
      <img
        :src="'https://api.steepmail.com/api/publication/storage/' + image"
        alt=""
        style="max-width: 300px; min-width: 290px; margin-bottom: 9px"
      />
    </div>
    <p class="forerrors">{{ errors }}</p>
    <div class="partner">
      <h5>Партнерская программа</h5>
      <b-form-group
        style="text-align: left"
        label="Пожалуйста, выберите 1 из пунктов"
      >
        <b-form-radio v-model="radion" name="some-radios" size="lg" value="Yes"
          >Да</b-form-radio
        >
        <b-form-radio v-model="radion" name="some-radios" size="lg" value="No"
          >Нет</b-form-radio
        >
      </b-form-group>
      <b-card v-if="radion == 'Yes'">
        <p class="desc">
          Введите число процентов, которые вы хотите, что бы тот или иной
          уровень получил
        </p>
        <div class="flexing">
          <b-input-group prepend="1 Ур  %">
            <b-form-input
              min="10"
              max="100"
              type="number"
              v-model="lvl1"
              placeholder="5"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="2 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="5"
              max="100"
              type="number"
              v-model="lvl2"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="3 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="3"
              max="100"
              type="number"
              v-model="lvl3"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="4 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="2"
              max="100"
              type="number"
              v-model="lvl4"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="5 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="lvl5"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="6 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="lvl6"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="7 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="lvl7"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="8 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="lvl8"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="9 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="lvl9"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="10 Ур %" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="lvl10"
              placeholder="1"
            ></b-form-input>
          </b-input-group>
        </div>
      </b-card>
    </div>
    <div class="attention">
      <p style="color: red">
        Примечание! товар нельзя удалять после его создания, посмотрите
        внимательно на содержание данного поста!
      </p>
    </div>
    <div class="forbutton">
      <b-button
        @click="tovar()"
        variant="primary"
        style="margin-top: 20px; margin-bottom: 20px;"
        size="lg"
      >
        Редактировать
      </b-button>
    </div>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "chagetov",
  props: {
    user: Object,
  },
  data() {
    return {
      lvl1: 10,
      lvl2: 5,
      lvl3: 3,
      lvl4: 2,
      lvl5: 1,
      lvl6: 1,
      lvl7: 1,
      lvl8: 1,
      lvl9: 1,
      lvl10: 1,
      errors: "",
      fordolbaeb: "Product",
      selected: "a",
      linktovar: "",
      desctovar: "",
      nametovar: "",
      pricetovar: 0,
      messagefortovar: "",
      linkfortovar: "",
      radio: "Link",
      radion: "Yes",
      image: "",
      options: [
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
  async mounted(){
    const res = await Api.users.getcurtov(this.$route.params.idtov)
          console.log(res)
        this.nametovar = res.tittle
        this.pricetovar = res.cost 
        this.image = res.img
        this.selected = res.classGoods
        this.desctovar = res.description
        
        this.linkfortovar = res.product
        this.radio = res.type
        if(!res.partner || res.partner==null || res.partner==""){
          this.radion = "No"
        }
        else{
          for(let i = 0; i < 10; i++){
            let j = i + 1;
            this['lvl'+j] = res.partner[i]
          }
        }
        if(res.type == "Product"){
          this.radio = "Link"
          this.linktovar = res.description_url
        }
        if(res.type == "ProductM"){
          this.radio = "LinkDesc"
          this.linktovar = res.description_url
          this.messagefortovar = res.messageProduct
        }
  },
  methods: {
    async forphoto() {
      const data = new FormData();
      data.append("file", document.getElementById("cheburek").files[0]);
      const result = await Api.users.publication(
        data,
        localStorage.getItem("token")
      );
      this.image = result.url;
    },
    async tovar() {
      if (this.pricetovar <= 0) {
        this.pricetovar = 1;
      }
      const json = {
        tittle: this.nametovar,
        cost: this.pricetovar,
        img: this.image,
        class: this.selected,
        description: this.desctovar,
        description_url: this.linktovar,
        product: this.linkfortovar,
        type: this.radio,
      };
      if (this.radion == "Yes") {
        json["partner"] = [
          this.lvl1,
          this.lvl2,
          this.lvl3,
          this.lvl4,
          this.lvl5,
          this.lvl6,
          this.lvl7,
          this.lvl8,
          this.lvl9,
          this.lvl10,
        ];
      } else {
        this.radion = "No";
      }
      if (this.radio == "Link") {
        json["type"] = "Product";
      } else {
        json["type"] = "ProductM";
        json["messageProduct"] = this.messagefortovar;
      }
      let result = await Api.users.changetov(
        localStorage.getItem("token"),
        this.$route.params.idtov,
        json,
        
      );
      console.log(result);
      if (result == true) {
        window.location.href = "/page";
      } else {
        this.errors = result.message;
      }
    },
  },
};
</script>
<style lang="scss">
.forback {
  background-color: #e9e9e9;
  min-height: 100vh;
  height: 100%;
}
.fullcont {
  padding: 2% 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15%;
  grid-row-gap: 10%;
  text-align: left;
}
.righttcont {
  display: grid;
  grid-row-gap: 40px;
}
.leftcont {
  display: grid;
  grid-row-gap: 40px;
}
.selection {
  width: 100%;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.flexing {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
}
.desc {
  text-align: left;
  font-weight: 700;
}
.partner {
  padding: 0 2%;
}
.forerrors {
  color: red;
}
</style>
