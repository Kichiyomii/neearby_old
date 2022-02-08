<template>
  <div class="maincont">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <b-table
        id="my-table"
        :fields="fields"
        :items="users"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >
        <template #cell(Индекс)="data">
          {{ data.item.id }}
        </template>
        <template #cell(Причина_Бана)="data">
          {{ data.item.Name }}
        </template>
        <template #cell(Емаил)="data">
          {{ data.item.email }}
        </template>
        <template #cell(Статус)="data">
          {{ data.item.status }}
        </template>
        <template #cell(Логин(Субдомен))="data">
          {{ data.item.login }}
        </template>
        <template #cell(Дата_Бана)="data">
          {{ data.item.createdAt.split('.')[0] }}
        </template>
        <template #cell(Действие)="data">
          <b-button @click="unban(data.item.id)"> Разбан</b-button>
        </template>
      </b-table>
            <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    
    <!-- <b-collapse id="example-collapse">
      <div class="card__content">
        <div id="league-table" class="table-responsive">
          <table class="table table--lg team-roster-table table-hover">
            <thead>
              <th class="team-roster-table__name">ID</th>
              <th class="team-roster-table__name">Name</th>
              <th class="team-roster-table__name">Status</th>
              <th class="team-roster-table__name">Login</th>
              <th class="team-roster-table__name">CreatedAt</th>
              <th class="team-roster-table__name">Email</th>
              <th class="team-roster-table__name">Buttons</th>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td class="team-roster-table__number">{{ user.id }}</td>
                <td class="team-roster-table__name">{{ user.Name }}</td>
                <td class="team-roster-table__">{{ user.status }}</td>
                <td class="team-roster-table__number">{{ user.login }}</td>
                <td class="team-roster-table__number">{{ user.createdAt }}</td>
                <td class="team-roster-table__number">{{ user.email }}</td>
                <td class="team-roster-table__number">
                  <b-button-group>
                    <b-button
                      v-if="user.status != 'banned'"
                      @click="ban(user.id)"
                      >Ban</b-button
                    ></b-button-group
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-collapse> -->
  </div>
</template>
<script>
import Api from "../api";
export default {
  name: "adminn",
  methods: {
    async unban(id) {
      let result = await Api.users.unban(localStorage.getItem("token"), id);
      if(result == true){
        window.location.reload();
      }
      console.log(result);
    },
    smth(){
      console.log('sdalkhlas')
    }
  },
  data() {
    return {
      userw: false,
      fields: [
        "Индекс",
        "Причина_Бана",
        "Емаил",
        "Статус",
        "Логин(Субдомен)",
        "Дата_Бана",
        "Действие",
      ],
      users: {},
      perPage: 50,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.users.length;
    },
  },
  async mounted() {
    const result = await Api.users.getbans(localStorage.getItem("token"));
    this.users = result;
    console.log(result);
  },
};
</script>
<style lang="scss">
.maincont {
  padding: 3%;
}
.card__content {
  margin-top: 40px;
}
</style>
