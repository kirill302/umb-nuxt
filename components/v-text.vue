<template>
  <div class="v-text">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style land="scss">
.v-text {
  font-size: 14px;
  line-height: 17px;
  color: rgba(127, 128, 147, 0.83);
}
.v-text + .v-text {
  margin-top: 15px;
}
</style>