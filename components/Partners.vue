<template>
  <div class="w-9/12 mx-auto mt-10 lg:mb-10 mb-3">
    <div class="lg:text-left text-center uppercase text-4xl font-bold mb-12 blue">
      Partners
    </div>
    <ul class="flex flex-wrap justify-evenly lg:gap-12">
      <li class="mb-5 mx-2" v-for="partner in partners" :key="partner.id">
        <img :src="partner.imagen" class="w-auto h-24 mx-auto">
      </li>
      <!-- <li class="mb-5">
        <div class="circle rounded-full mx-auto"></div>
      </li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      partners: Array
    },
    data() {
      return {
        partners2: [],
      }
    },
     mounted() {
      // this.fetchData();
    },
    methods: {
      async fetchData() {
        await this.$axios.$get('/api/main/home')
          .then(response => {
            this.partners2 = response.sociosall;
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blue {
    color: #1C496B;
  }
  .circle {
    background: #C4C4C4;
    width: 120px;
    height: 120px;
  }
</style>