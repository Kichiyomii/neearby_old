<template>
  <div class="mainconttt">
    <div>
      <b-card>
        <div class="head">
          <h3>Создание авторассылки</h3>
        </div>
        <div class="group">
          <div>
            <b-form-group
              v-if="!allgroups"
              label="Выберите группы для авторассылок"
              label-for="tags-with-dropdown"
            >
              <b-form-tags
                id="tags-with-dropdown"
                style="font-size: 0px"
                v-model="value"
                no-outer-focus
                class="mb-2"
              >
                <template v-slot="{ tags, disabled, addTag, removeTag }">
                  <ul
                    v-if="tags.length > 0"
                    class="list-inline d-inline-block mb-2"
                  >
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                      <b-form-tag
                        @remove="removeTag(tag)"
                        :title="tag"
                        :disabled="disabled"
                        variant="info"
                        >{{ tag }}</b-form-tag
                      >
                    </li>
                  </ul>

                  <b-dropdown
                    size="sm"
                    @click="changeclass()"
                    variant="outline-secondary"
                    block
                    menu-class="w-80"
                  >
                    <template #button-content>
                      <b-icon icon="tag-fill"></b-icon>Выберите группу
                    </template>
                    <b-dropdown-item-button
                      class="smth"
                      v-for="option in array"
                      :key="option.id"
                      @click="onOptionClick({ option, addTag })"
                    >
                      {{ option.name_group }}
                    </b-dropdown-item-button>
                    <b-dropdown-text v-if="availableOptions.length === 0">
                      Нет ни одной группы
                    </b-dropdown-text>
                  </b-dropdown>
                </template>
              </b-form-tags>
            </b-form-group>
          </div>
          <b-form-checkbox
            v-model="allgroups"
            class="idk"
            id="checkbox-1"
            name="checkbox-1"
          >
            Выбрать все группы
          </b-form-checkbox>
        </div>
      </b-card>
      <br>
      <b-card>
        <div class="name">
          <label for="122">Название авторассылки</label>
          <b-form-input v-model="name" id="122" required></b-form-input>
        </div>
        <div class="whoget"></div>
      </b-card>

      <div class="mails">
        <br>
        <b-card style="margin-bottom: 10px;">
          <h3>Цепочка писем</h3>
        </b-card>
        
        <br>
        <b-card v-for="meow in mails" :key="meow" class="allmails">
          <h4 style="text-align: left"><b-icon icon="envelope"> </b-icon> {{ meow }}</h4>

          <div style="text-align: right">
            <b-button style="text-align: right" @click="rem(meow)"
              >Удалить</b-button
            >
          </div>
          <div style="text-align: left">
            <label style="text-align: left" for="12222">Название письма</label>
            <b-form-input
              style="margin-bottom: 20px"
              :id="'text' + meow"
              required
            ></b-form-input>
            <div style="text-align: center">
              <div style="display: inline-block">
                <b-form-checkbox
                  checked
                  class="idk"
                  :id="'checkbox' + meow"
                  v-model="responses[meow]"
                >
                </b-form-checkbox>
                Сейчас
              </div>

              <div
                style="text-align: center"
                v-if="!responses[meow]"
                :id="'formoch' + meow"
              >
                <b-form-datepicker
                  :id="'date' + meow"
                  v-model="resp[meow]"
                  style="width: 30%"
                  class="sadkj"
                ></b-form-datepicker>
                <b-form-timepicker
                  :id="'time' + meow"
                  v-model="respp[meow]"
                  locale="ru"
                  style="width: 30%"
                  class="sadkj"
                ></b-form-timepicker>
              </div>
            </div>
          </div>
          <vue-editor
            :id="'content' + meow"
            v-model="content[meow]"
          ></vue-editor>
          <!-- <EmailEditor
            class="editor"
            locale="ru"
            ref="emailEditor"
            v-on:load="editorLoaded"
            v-on:ready="editorReady"
          /> -->
        </b-card>
      </div>
      <div style="text-align: right">
        <b-button
          style="text-align: left; margin-top: 10px; margin-right: 30px"
          @click="moremail()"
        >
          Создать новое письмо</b-button
        >
      </div>
      <p class="warrning">{{ errors }}</p>
      <div style="text-align: center">
        <b-button class="forbutton" @click="sender()" variant="info"
          >Сохранить</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../api";
import { EmailEditor } from "vue-email-editor";
import { VueEditor } from "vue2-editor";
export default {
  name: "adminemaill",
  components: {
    EmailEditor,
    VueEditor,
  },
  methods: {
    async sender() {
      const mas = {
        name: this.name,
        groups: [],
        letters: [],
      };
      if (this.allgroups) {
        for (let i = 0; i < this.array.length; i++) {
          mas.groups.push(i);
        }
      }
      let ztx = this;
      for (var i = 0; i < this.mails.length; i++) {
        let j = i + 1;
        let json = {
          step: i + 1,
          html: this.content[j],
          tittle: document.getElementById("text" + j).value,
          type_time: "",
        };
        if (this.responses[j] == true) {
          json.type_time = "now";
        } else {
          json.type_time = this.resp[j] + "-" + this.respp[j];
        }
        mas.letters.push(json);
        console.log(json);
        console.log(mas);
        const res = await Api.users.sendsendler(
          localStorage.getItem("token"),
          mas
        );
        if (result.error == 400) {
          this.errors = "Неправильно введены данные";
        }
        if (!result.error) {
          window.location.reload();
        }
        console.log(result);
      }
    },
    rem(id) {
      const index = this.mails.indexOf(id);
      if (index > -1) {
        this.mails.splice(index, 1);
      }
    },
    moremail() {
      this.mails.push(this.mails.length + 1);
      console.log(this.mails);
    },
    removeTag() {
      console.log("1");
    },
    onOptionClick({ option, addTag }) {
      addTag(option.name_group, option.id);
      this.arr.push(option.id);
      console.log(this.arr);
      this.search = "";
    },
    // called when the editor is created
    editorLoaded() {
      console.log("editorLoaded");
      // Pass the template JSON here
      // this.$refs.emailEditor.editor.loadDesign({});
    },
    // called when the editor has finished loading
    editorReady() {
      console.log("editorReady");
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log("saveDesign", design);
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log("exportHtml", data);
      });
      let smth = document.getElementsByClassName("editor");
      console.log(smth);
    },
  },
  data() {
    return {
      content: [],
      search: "",
      array: [],
      value: [],
      valuee: "",
      arr: [],
      mails: [1],
      allgroups: false,
      ar: [],
      name: "",
      mhs: "",
      my: "",
      today: true,
      responses: [true, true],
      resp: [],
      respp: [],
      errors: "",
    };
  },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase();
    },
    availableOptions() {
      const criteria = this.criteria;
      // Filter out already selected options
      const options = this.array.filter(
        (opt) => this.value.indexOf(opt) === -1
      );
      if (criteria) {
        // Show only options that match criteria
        return options.filter(
          (opt) => opt.toLowerCase().indexOf(criteria) > -1
        );
      }
      // Show all options available
      return options;
    },
  },
  async mounted() {
    var smthp = document.getElementsByClassName("w-80");
    console.log(smthp);
    smthp[0].style.height = "500px";
    smthp[0].style.overflow = "scroll";
    const result = await Api.users.getgroup(localStorage.getItem("token"));
    console.log(result);
    this.array = result;
    var root = document.getElementById("headerfortoggle");
    root.style.display = "flex;";
    this.$root.$emit("bv::toggle::collapse", "headerfortoggle");
    this.$root.$emit("bv::toggle::collapse", "headerfortoggle");
  },
};
</script>
<style lang="scss">
#tags-with-dropdown___selected_tags__ {
  display: none;
}
#tags-with-dropdown___removed_tags__ {
  display: none;
}
.badge {
  color: black;
}
.mainconttt {
  padding: 3%;
  padding-left: 340px;
  font-size: 19px;
  background-color: #e9e9e9;
}
.sadkj {
  margin-left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 10px;
}
.forbutton {
  height: 45px;
  font-size: 22px;
  width: 250px;
}
.allmails {
  margin-bottom: 15px;
}
.formain {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
}
.line {
  margin-top: 10px;
  height: 1px;
  width: 100%;
  background-color: rgba(114, 114, 114, 0.411);
}
.pereadres {
  text-align: left;
}
.editor {
  height: 500px;
  width: 100%;
}
.group {
  text-align: left;
}
.smjd {
  width: 60%;
  height: 40px;
}
.idk {
  display: inline-block;
}
.line {
  margin-top: 10px;
  height: 1px;
  width: 100%;
  background-color: rgba(114, 114, 114, 0.411);
}
.check {
  display: inline-block;
}
.custom-control-input {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 10px;
  position: relative;
  top: 4px;
}
</style>
