<template>
  <div>
    <adminheader />
    <adminn :user="user" />

  </div>
</template>

<script>
// @ is an alias to /src
import adminheader from "../components/adminheader.vue";
import adminn from "../components/adminn.vue";
import { Auth } from "../auth";

export default {
  name: "Home",
  components: {
    adminheader,
    adminn
  },
  data() {
    return {
      user: {}
    };
  },
  async mounted() {
    this.user = await Auth();
    if (this.user.id !== 91 && this.user.id !== 3 && this.user.id !== 2 && this.user.id !== 1) {
      window.location.href = "/";
    }
  }
};
</script>
