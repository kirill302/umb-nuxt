<template>
  <v-modal :visible="visible" :title="true" :lines="true" @hide="bonusHide"  class="modal-bonus">
    
  </v-modal>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    bonusHide() {
      this.$store.commit('bonusHide')
    }
  }
};
</script>

<style lang="scss">

</style>