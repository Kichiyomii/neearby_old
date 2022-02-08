<template>
  <div>
    <adminheader />
    <adminban />
  </div>
</template>

<script>
// @ is an alias to /src
import adminheader from "../components/adminheader.vue";
import adminban from "../components/adminban.vue";
import { Auth } from "../auth";

export default {
  name: "Home",
  components: {
    adminheader,
    adminban
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
