<template>
  <div class="tarif-banner">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tarif-banner {
  width: 100%;
  background: radial-gradient(
      69.58% 69.58% at 50% 6.02%,
      rgba(182, 73, 73, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(180deg, #282a3a 0%, #2d252f 100%);
  border-radius: 15px;

  padding: 24px 30px;
}
</style>