<template>
  <div class="mainconttt">
    <b-card>
      <div class="head">
        <h2>Создание Письма</h2>
      </div>
      <div style="text-align:left" class="forbutton">
          <b-button variant="info">Сохранить</b-button>
      </div>
      <div class="mails">
        <EmailEditor
          class="editor"
          locale='ru'
          ref="emailEditor"
          v-on:load="editorLoaded"
          v-on:ready="editorReady"
        />
      </div>
    </b-card>
  </div>
</template>
<script>
import Api from "../api";
import { EmailEditor } from "vue-email-editor";
export default {
  name: "adminemaill",
  components: {
    EmailEditor,
  },
  methods: {
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
      let smth = document.getElementsByClassName('editor')
      console.log(smth)
    },
  },
  data() {
    return {};
  },
  computed: {},
  async mounted() {
    var root = document.getElementById("headerfortoggle");
    root.style.display = "flex;";
    this.$root.$emit("bv::toggle::collapse", "headerfortoggle");
    this.$root.$emit("bv::toggle::collapse", "headerfortoggle");
  },
};
</script>
<style scoped lang="scss">
.mainconttt {
  padding: 3%;
  padding-left: 340px;
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
.editor{
  height: 500px;
  width: 100%;
}
.group {
  text-align: left;
}
</style>
