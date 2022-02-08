<template>
<div class="allstuff">
    <b-button variant="info" @click="showModal" class="subbutton" > <b-icon icon="gem" style="margin-right:7px;"> </b-icon>Подписаться</b-button>

 <b-modal size="lg"  ref="modalkek" id="modalkek">
      <template #modal-header="">
        <!-- Emulate built in modal header close button action -->
        <h5>Купить подписку</h5>
      </template>

      <template #default="">
        <label for="name"> <h5>{{subs.id}}</h5> </label>
      </template>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="primary" size="lg" v-on:click="letsub()"
          >Принять</b-button
        >
        <b-button variant="secondary" size="lg" @click="cancel()">
          Закрыть
        </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
</div>

</template>
<script>
  export default {
    methods: {
      showModal() {
          if(this.user.error){
            this.$bvModal.show('modal-scoped')
          }
          else{
              this.$refs['modalkek'].show()
          } 
        
      },
    },
    props:{
        user: Object,
        subs: Object,
    }
  }
</script>
<style lang="scss">
    
</style>