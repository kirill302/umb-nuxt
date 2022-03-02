<template>
  <div class="v-status" :class="!value ? 'disabled' : ''">
    <span
      class="v-status__item"
      v-for="item in statusArr"
      :key="item + Math.random()"
      :class="item ? 'active' : ''"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusArr: [],
      max: window.innerWidth > 820 ? 50 : 25,
      index: window.innerWidth > 820 ? 2 : 4,
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  mounted() {
    let arr = [];
    for (let i = 0; i < this.max; i++) {
      if (i < this.value / this.index) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    this.statusArr = arr;
  },
};
</script>

<style scoped lang="scss">
.v-status {
  display: flex;
  gap: 1px;

  &.disabled {
    opacity: 0.8;
  }
}
.v-status__item {
  width: 4.02px;
  height: 8px;
  background: url("~@/assets/img/status.svg") no-repeat center;

  &.active {
    background: url("~@/assets/img/status-active.svg") no-repeat center;
  }
}
</style>