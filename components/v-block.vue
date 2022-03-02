<template>
  <div class="v-block">
    <div class="v-block__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-block.p-0 {
  .v-block__inner {
    padding: 0;
  }
}
.v-block.gr-bottom {
  .v-block__inner:after {
    content: "";
    pointer-events: none;
    position: absolute;
    display: block;
    width: 100%;
    height: 20%;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(180deg, #0f171e 8%, #4e1617 189.26%);
  }
}
.v-block {
  padding: 2px 2px 0 2px;
  background: linear-gradient(
    180deg,
    rgba(94, 45, 48, 1) 0%,
    rgba(17, 24, 30, 0.7) 100%
  );
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media (max-width: 820px) {
    border-radius: 16px;
  }
}
.v-block__inner {
  width: 100%;
  position: relative;
  min-height: 307px;
  height: 100%;
  background: radial-gradient(
      69.58% 69.58% at 50% 6.02%,
      rgba(182, 73, 73, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(180deg, #0f171e 0%, rgba(15, 23, 30, 1) 100%);
  border-radius: 15px;
  padding: 30px;

  

  @media (max-width: 820px) {
    padding: 20px;
    min-height: 0;
  }
}
</style>