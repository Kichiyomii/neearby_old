<template>
  <div class="forback">
                      <b-modal ref="fortov" id="fortov" no-close-on-backdrop>
                        <template #modal-header="">
                          <!-- Emulate built in modal header close button action -->
                          <h4>Ссылка для одностраничника</h4>
                        </template>

                        <template #default="">
                          <label for="name">
                            Ваша ссылка: <a>https://neearby.com/forprdocut/{{link}} </a> 
                          </label>
                        </template>

                        <template #modal-footer="{}">
                          <b-button variant="info" href="/page" >Ок</b-button>
                          <!-- Button with custom close trigger value -->
                        </template>
                      </b-modal>
    <b-card>
      <h3 style="padding-top: 20px">
        Добавление товара, услуги, доната(пожертвования)
      </h3>
      <div class="fullcont">
        <div class="leftcontt">
          <div class="tovartype">
            <h5>Категория товара</h5>
            <b-form-select
              class="selectionn"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>

          <div class="nametovar">
            <h5>Название товара</h5>
            <b-form-input
              v-model="nametovar"
              placeholder="Название товара"
            ></b-form-input>
          </div>
        </div>
        <div class="righttcontt">
          <div class="desctovar">
            <h5>Описание товара</h5>
            <b-form-textarea
              v-model="desctovar"
              placeholder="Напишите о вашем товаре"
              rows="4"
              max-rows="10"
            ></b-form-textarea>
          </div>
          <div class="linkdesctovar">
            <h5>Ссылка на продающий одностраничник товара</h5>
            <b-form-input
              v-model="linktovar"
              placeholder="https://landing.com"
            ></b-form-input>
          </div>
          <div class="linkdesctovar">
            <h5>Ссылка для оплаты товара</h5>
            <b-form-input
              v-model="chtotoschemto"
              placeholder="https://landing.com"
            ></b-form-input>
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
          <div class="imagetovar">
            <b-button variant="info">
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
        <!-- <h5>Партнерская программа</h5>
        <b-form-group
          style="text-align: left"
          label="Пожалуйста, выберите 1 из пунктов"
        >
          <b-form-radio
            v-model="radion"
            name="some-radios"
            size="lg"
            value="Yes"
            >Да</b-form-radio
          >
          <b-form-radio v-model="radion" name="some-radios" size="lg" value="No"
            >Нет</b-form-radio
          >
        </b-form-group> -->
        <!-- <b-card v-if="radion == 'Yes'">
          <p class="desc">
            Введите число процентов, которые вы хотите, что бы тот или иной
            уровень получил
          </p>
          <div class="flexing">
            <b-input-group prepend="1Ур">
              <b-form-input
                min="10"
                max="100"
                type="number"
                v-model="lvl1"
                placeholder="5"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="2Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="5"
                max="100"
                type="number"
                v-model="lvl2"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="3Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="3"
                max="100"
                type="number"
                v-model="lvl3"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="4Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="2"
                max="100"
                type="number"
                v-model="lvl4"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="5Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="1"
                max="100"
                type="number"
                v-model="lvl5"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="6Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="1"
                max="100"
                type="number"
                v-model="lvl6"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="7Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="1"
                max="100"
                type="number"
                v-model="lvl7"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="8Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="1"
                max="100"
                type="number"
                v-model="lvl8"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="9Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="1"
                max="100"
                type="number"
                v-model="lvl9"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="10Ур" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                min="1"
                max="100"
                type="number"
                v-model="lvl10"
                placeholder="1"
              ></b-form-input>
            </b-input-group>
          </div>
        </b-card> -->
      </div>
      <div class="attention">
        <p style="color: red">
          Примечание! товар нельзя редактировать после его создания, посмотрите
          внимательно на содержание данного поста!
        </p>
      </div>
      <div class="forbutton">
        <b-button
          @click="tovar()"
          variant="info"
          style="margin-top: 20px"
          size="lg"
        >
          Сохранить
        </b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "newtov",
  props: {
    user: Object,
  },
  data() {
    return {
      link: '',
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
  methods: {
    copyStringToClipboard(str) {
      var el = document.createElement("textarea");
      el.value = str;
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    getlink() {
      console.log(link)
      let smth = document.getElementById('fortov');
      /* Select the text field */
      smth.select();
      /* Copy the text inside the text field */
      document.execCommand("copy");
      /* Alert the copied text */
      alert('Вы скопировали: ' +    "https://neearby.com/forproduct/" + link)
    },
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
      if (this.radio == "Link") {
        json["type"] = "Product";
      } else {
        json["type"] = "ProductM";
        json["messageProduct"] = this.messagefortovar;
      }
      let result = await Api.users.newtovar(
        json,
        localStorage.getItem("token")
      );
      console.log(result);
      if (!result.error) {
        this.link = result;
        console.log(this.link)
        console.log('1')
        this.$bvModal.show("fortov")
        setTimeout(() => {
          window.location.href = "/page";
        }, 60000)
      } else {
        this.errors = result.message;
      }
    },
  },
};
</script>
<style lang="scss">
.input-group-text {
  font-size: 1.1rem !important;
}
.nametovar {
  margin-top: 10px;
  margin-bottom: 10px;
}
.desctovar {
  margin-top: 10px;
  margin-bottom: 10px;
}
.limkdesctovar {
  margin-top: 10px;
  margin-bottom: 10px;
}
.wo {
  margin-top: 10px;
  margin-bottom: 10px;
}
.price {
  margin-top: 10px;
  margin-bottom: 10px;
}
.forback {
  padding: 1%;
  background-color: #e9e9e9;
  min-height: 100vh;
  height: 100%;
}
.fullcont {
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  grid-column-gap: 15%;
  grid-row-gap: 10%;
  text-align: left;
}

.selectionn {
  width: 100%;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 20px;
}
.flexing {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
}
@media only screen and (max-width: 600px) {
  .flexing{
    display: flex;
    flex-direction: column;
  }
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
