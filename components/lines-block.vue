<template>
  <div class="lines-block">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lines-block {
  margin: 12px 0;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background: url("~@/assets/img/title-line.svg") no-repeat center;
    background-size: 130%;
    margin-bottom: 10px;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background: url("~@/assets/img/title-line.svg") no-repeat center;
    background-size: 130%;
    margin-top: 10px;
  }

  &::after,
  &::before {
    background-size: contain;
  }
}
</style>