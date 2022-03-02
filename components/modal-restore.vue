<template>
  <v-modal :visible="visible" :title="true" :lines="true" @hide="$store.commit('restoreHide')">
    <template v-slot:title>Восстановление</template>
    <template v-slot:lines>
      <v-email></v-email>
    </template>
    <button class="v-button w-100">
      пароль
    </button>
  </v-modal>
</template>

<script>
export default {
  props: {
    visible: Boolean
  }
}
</script>

<style>

</style>