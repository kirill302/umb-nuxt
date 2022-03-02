<template>
  <div class="v-page">
    <tit-h2 class="_uppercase _line">
      <slot name="title"></slot>
    </tit-h2>
    
    <div class="page-container">
      <slot name="content"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.v-page {
  width: 100%;
  height: 100%;
  padding: 0 15px 0 15px;
  padding-bottom: 70px;
  position: relative;
}
.page-container {
  margin: 0 auto;
  max-width: 1152px;
}
</style>