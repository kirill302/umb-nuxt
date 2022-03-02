<template>
  <div class="wrapper main">
    <modal-login :visible="this.$store.getters.loginVisible"></modal-login>
    <modal-reg :visible="this.$store.getters.regVisible"></modal-reg>
    <modal-restore :visible="this.$store.getters.restoreVisible"></modal-restore>
    <modal-bonus :visible="this.$store.getters.bonusVisible"></modal-bonus>
    <v-header></v-header>
    <Nuxt />
    <v-footer></v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.main {
  min-height: 100vh;
  position: relative;
  // background: url("~@/assets/img/page-bg.jpg") no-repeat center;
  background-size: cover;
  padding-top: 100px;
  @media (max-width: 768px) {
    padding-top: 105px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    max-height: 505px;
    background: url("~@/assets/img/page-top-bg.png") no-repeat center;
    background-position: 0 20%;
    background-size: cover;
    pointer-events: none;

    @media (max-width:1000px) {
      filter: blur(10px);
    }
    @media (max-width:768px) {
      filter: blur(20px);
    }
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    max-height: 480px;
    background: linear-gradient(180deg, #0F171E 0%, #4E1617 159.26%);
    z-index: -1;
    pointer-events: none;
  }
}
</style>