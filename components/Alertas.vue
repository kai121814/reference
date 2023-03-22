<template>
  <div>
    <div class="lg:w-9/12 mx-auto lg:my-4 error-bg panel w-full uppercase text-white rounded-sm my-0 h-10" v-if="alert">
      <span class="flex w-min mx-auto whitespace-nowrap text-sm-1 inline-block align-middle pt-2">
        <span class="font-bold lg:font-normal" v-html="alertas[0].alerta"></span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        alertas: null,
        alert: false
      }
    },
    async fetch(){
      const DataAlerta = await this.$axios.$get("/api/main/alertas");
      this.alertas = DataAlerta
      if (this.alertas.length > 0) {
        this.alert = true
      } 
    }
  }
</script>

<style>
  .error-bg {
    background-color: #C8142E;
  }
  .warning-bg {
    background-color: #FFA800;
  }
</style>