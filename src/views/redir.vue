<template>
  <div>
    <HelloWorld :user="user" :meow="'meow'" />
    <div style="min-height: 95vh"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import landing from "@/components/landing.vue";
import { Auth } from "../auth";
import Api from "../api";

export default {
  name: "Home",
  components: {
    HelloWorld,
    landing,
  },
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    this.user = await Auth();
    const result = await Api.users.dest(this.$route.params.idd);
  },
};
</script>
