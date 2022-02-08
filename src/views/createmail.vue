<template>
  <div>
     <HelloWorld :user="user"/>
       <adminemaill class="adminleft" />
       <createmaill/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import adminemaill from "../components/adminemaill.vue";
import createmaill from "../components/createmaill.vue"
import { Auth } from "../auth";

export default {
  name: "Home",
  components: {

    HelloWorld,
    adminemaill,
     createmaill,
  },
  data() {
    return {
      user: {}
    };
  },
  async mounted() {
        this.user = await Auth();
  }
};
</script>
<style scoped lang="scss">
</style>
