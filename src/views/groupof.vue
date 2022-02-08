<template>
  <div>
     <HelloWorld :user="user"/>
       <adminemaill class="adminleft" />
       <autorass/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import adminemaill from "../components/adminemaill.vue";
import autorass from "../components/groupsendle.vue"
import { Auth } from "../auth";

export default {
  name: "Home",
  components: {

    HelloWorld,
    adminemaill,
     autorass,
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
