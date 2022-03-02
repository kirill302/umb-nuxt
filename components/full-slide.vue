<template>
  <div class="full-slide">
    <div class="full-slide__content">
      <div class="full-slide__img">
        <img :src="require(`@/assets/img/${slide.img}`)" alt="" />
      </div>
      <div class="full-slide__text">
        <v-quote class="">
          <template v-slot:title> {{ slide.title }} </template>
          <template v-slot:text>
            {{ slide.text }}
          </template>
        </v-quote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: Object,
  },
};
</script>

<style lang="scss" scoped>
.full-slide {
  &__content {
  }

  &__img {
  }

  &__text {
  }
}
</style>