<template>
  <v-page class="faq">
    <template v-slot:title
      >Часто задаваемые <span class="mark">вопросы</span></template
    >

    <template v-slot:content>
      <v-block class="p-0">
        <div class="faq-list">
          <v-accordion v-for="accordion in accordionList" :key="accordion.id">
            <template v-slot:title>{{ accordion.title }}</template>
            <template v-slot:content> {{ accordion.content }}</template>
          </v-accordion>
        </div>
      </v-block>
    </template>
  </v-page>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      accordionList: [
        {
          title: `Где я могу получить еще больше информации?`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
        {
          title: `Могу ли я использовать ваш контент на своем сайте?`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
        {
          title: `Где еще я могу найти вас в Интернете? Facebook, Twitter?`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
        {
          title: `Могу ли я использовать ваш контент на своем сайте?`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
        {
          title: `Когда работы над сайтом будут завершены?`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
        {
          title: `Могу ли я использовать ваш контент на своем сайте??`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
        {
          title: `Когда работы над сайтом будут завершены?`,
          content: `У нас есть блог, страница на Facebook, а в ближайшее время
              появятся страницы и в других социальных сетях! Также мы будем
              регулярно рассылать пресс-релизы, как только у нас будет
              обновляться лента новостей. Так что, чтобы ничего не пропустить,
              подписывайтесь на нашу рассылку. И вы всегда сможете с нами
              связаться (по электронной почте).`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.faq {
  .v-block {
    border-radius: 20px;
  }
}
</style>