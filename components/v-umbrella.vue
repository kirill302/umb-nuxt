<template>
  <tit-h2 class="anim-title mark" ref="anim">
    <span class="_before ">{{text}}</span>
    <!-- <span class="_after">umbrella!</span> -->
  </tit-h2>
</template>

<script>
export default {
  data() {
    return {
      text: 'лучшее!'
    }
  },
  mounted() {
    setInterval(() => {
      this.text = this.text === 'лучшее!' ?  'UMBRELLA!' : 'лучшее!'
      this.$refs.anim.$el.classList.toggle('fz-20')
    }, 2000)
  }
};
</script>

<style scoped lang="scss">
.anim-title {
  margin: 0 !important;
  display: inline-flex;
  overflow: hidden;
  line-height: 1;

  span {
    display: inline-block;
    overflow: hidden;
  }

  span._before {
    animation: text1 1s step-end infinite alternate;
  }
  &.fz-20 {
    span._before {
      font-size: 39.3px !important;

      @media (max-width: 567px) {
        font-size: 24.3px !important;
      }
    }
    
  }
  span._after {
    width: 100%;
    display: none;
    // animation: text2 1.5s step-end infinite alternate;
  }
}

@keyframes text1 {
  0% {
    width: 0%;
  }
  7% {
    width: 15%;
  }
  16% {
    width: 28%;
  }
  22% {
    width: 44%;
  }
  32% {
    width: 65%;
  }
  39% {
    width: 80%;
  }
  46% {
    width: 93%;
  }
  50% {
    width: 100%;
  }
}
@keyframes text2 {
  0% {
    width: 0%;
  }
  57% {
    width: 14%;
  }
  67% {
    width: 35%;
  }
  72% {
    width: 48%;
  }
  78% {
    width: 56%;
  }
  85% {
    width: 69%;
  }
  87% {
    width: 75%;
  }
  90% {
    width: 81%;
  }
  95% {
    width: 93%;
  }
  100% {
    width: 100%;
  }
}
// @keyframes text1 {
//   0% {
//     width: 0%;
//   }
//   15% {
//     width: 15%;
//   }
//   28% {
//     width: 28%;
//   }
//   44% {
//     width: 44%;
//   }
//   65% {
//     width: 65%;
//   }
//   79% {
//     width: 80%;
//   }
//   93% {
//     width: 93%;
//   }
//   100% {
//     width: 100%;
//   }
// }

// @keyframes text2 {
//   0% {
//     width: 0%;
//   }
//   14% {
//     width: 14%;
//   }
//   35% {
//     width: 35%;
//   }
//   48% {
//     width: 48%;
//   }
//   56% {
//     width: 56%;
//   }
//   69% {
//     width: 69%;
//   }
//   75% {
//     width: 75%;
//   }
//   81% {
//     width: 81%;
//   }
//   93% {
//     width: 93%;
//   }
//   100% {
//     width: 100%;
//   }
// }
</style>