<template>
  <div>
    <b-dropdown
      size="lg"
      variant="link"
      dropleft
      toggle-class="text-decoration-none"
      no-caret
      style="top: 8px;"
    >
      <template #button-content>
        <b-avatar style="margin-right: 10px; color: #fe6637"  :src="'https://api.steepmail.com/api/users/' +user.login +'/photo'"> </b-avatar> {{user.name}}      </template>
      <b-dropdown-item>Баланс: {{user.balance}}</b-dropdown-item>
      <b-dropdown-divider>
      </b-dropdown-divider>
      <b-dropdown-item v-if="user.login" :href="'https://' + user.login + '.neearby.com/page'"><b-icon icon="person-circle" style="color: #fe6637; margin-right: 7px;"></b-icon>Моя страница</b-dropdown-item>
      <b-dropdown-item :href="'https://neearby.com'+'/mysubs'" ><b-icon icon="github" style="color: #fe6637; margin-right: 7px;"></b-icon>Мои подписки</b-dropdown-item>
      <b-dropdown-item :href="'https://neearby.com'+'/Settings'"><b-icon icon="gear" style="color: #fe6637; margin-right: 7px;"></b-icon>Настройки аккаунта</b-dropdown-item>
      <b-dropdown-item v-if="user.login" :href="'https://' + user.login + '.neearby.com'+'/statisticks'"><b-icon icon="table" style="color: #fe6637; margin-right: 7px;"></b-icon>Моя статистика</b-dropdown-item>
      <b-dropdown-item v-if="user.login" :href="'https://' + user.login + '.neearby.com'+'/Money'"><b-icon icon="wallet2" style="color: #fe6637; margin-right: 7px;"></b-icon>Вывод средств  </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item :href="'https://neearby.com' + '/chats'"> <b-icon icon="chat-dots-fill" style="color: #fe6637; margin-right: 7px;"></b-icon>Сообщения</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="logout()"><b-icon icon="box-arrow-left" style="color: #fe6637; margin-right: 7px;"></b-icon>Выйти</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
import {getCookie, setCookie, deleteCookie} from "../utils.js"
export default {
  name: "registrated",
  methods: {
    logout() {
      deleteCookie('token')
      localStorage.removeItem('token')
      console.log(document.cookie)
      window.location.reload();
    },
  },
  props: {
    user: Object,
  },
};
</script>
<style lang="scss">
</style>