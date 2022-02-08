<template>
  <div class="about">
    <HelloWorld :user="user" />
    <fzf v-if="status.status == false" />
    <account :user="user" :author="author" v-else :status="status" />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import {getCookie, setCookie, deleteCookie} from "../utils.js"
import account from "@/components/account.vue";
import fzf from "@/components/fzf.vue";
import { Auth } from "../auth";
import Api from "../api";
export default {
  name: "About",
  components: {
    fzf,
    HelloWorld,
    account,
  },
  data() {
    return {
      user: {},
      author: {},
      status: {},
    };
  },
  async mounted() {
    
    this.user = await Auth();
    // document.cookie =
    //   "token=" + localStorage.getItem("token") + "; domain=neearby.com";
    const hosts = window.location.host.split(".");
    if (hosts.length == 3) {
    const result = await Api.users.getauthor(hosts[0]);
    this.author = result;
    if (result.message) {
      this.status = {
        status: false,
      };
      return 0;
    }
    this.status = {
      status: true,
      login: hosts[0],
    };
    }
    else {

      return 0;
      // window.location.href = "/"
    }
  },
};
</script>
