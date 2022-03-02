<template>
  <div class="accordion" :class="visible ? 'active' : 'hide'">
    <button class="accordion__title" @click="openAccordion">
      <slot name="title"></slot>
    </button>
    <div class="accordion__content" ref="content">
      <v-text>
        <slot name="content"></slot>
      </v-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      contentHeight: 0,
    };
  },
  methods: {
    openAccordion() {
      const content = this.$refs.content;
      this.visible = this.visible ? false : true;

      if (this.visible) {
        content.style.height = `${this.contentHeight}px`;
      } else {
        content.style.height = `0px`;
      }
    },
  },
  mounted() {
    this.contentHeight = this.$refs.content.clientHeight;
    this.visible = false;
    this.$refs.content.style.height = `0px`;
  },
};
</script>

<style lang="scss">
.accordion {
  position: relative;
  padding: 30px 40px 30px 60px;
  @media (max-width: 1024px) {
    padding: 20px 40px 20px 60px;
  }
  @media (max-width: 768px) {
    padding: 20px 40px 20px 60px;
  }
  &:after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: url("~@/assets/img/accordion-icon.svg");
    background-size: contain;
    position: absolute;
    top: 30px;
    left: 20px;

    @media (max-width: 1024px) {
      top: 20px;
    }
    @media (max-width: 1024px) {
      top: 30px;
    }
  }
  &:before {
    content: "";
    display: block;
    width: 11px;
    height: 7px;
    background: url("~@/assets/img/arr-accord.svg");
    background-size: contain;
    position: absolute;
    top: 30px;
    right: 20px;
    transition: 0.1s;
    @media (max-width: 1024px) {
      top: 20px;
    }
    @media (max-width: 1024px) {
      top: 30px;
    }
  }
  &.active:before {
    transform: rotate(180deg);
  }
  &__title {
    display: block;
    width: 100%;
    text-align: left;
    transition: 0.2s;
    background: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: #ffffff;
  }
  &.active {
    .accordion__title {
      margin-bottom: 10px;
    }
  }

  &__content {
    overflow: hidden;
    transition: 0.1s;
  }
}
</style>