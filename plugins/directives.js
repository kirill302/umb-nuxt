import Vue from 'vue'

Vue.directive('full-img', {
  inserted: (img, data) => {
    const body = document.body
    const cloneImg = img.cloneNode();

    img.addEventListener('click', (e) => {
      // убираем прокрутку
      body.classList.add('body-fixed')

      // обнуляем стили для изображения
      cloneImg.style.cssText = ``;

      // создаём нужные нам элементы
      const fullImgContainer = document.createElement('div');
      const fullImgClose = document.createElement('button')
      const fullImgBg = document.createElement('div');
      const fullImgContent = document.createElement('div');
      const fullImgImg = document.createElement('div');
      const fullImgText = document.createElement('div');

      // добавляем классы
      fullImgContainer.classList.add('full-img')
      fullImgClose.classList.add('full-img__close')
      fullImgBg.classList.add('full-img__bg')

      fullImgImg.classList.add('full-img__img')
      fullImgContent.classList.add('full-img__content')

      const quote = document.createElement('div')

      quote.classList.add('quote')

      quote.innerHTML = `
      <h3 class="quote__title">
        ${data.value.title}
      </h3>
      <p class="quote__text">
        ${data.value.text}
      </p>
      `

      // добавляем элементы друг в друга
      fullImgContainer.append(fullImgBg, fullImgContent)
      fullImgContent.append(fullImgClose, fullImgImg, fullImgText)
      fullImgContent.append(quote);
      fullImgImg.append(cloneImg)
      body.prepend(fullImgContainer)

      function closeFullImg() {
        fullImgContainer.classList.add('_hide');
        setTimeout(() => {
          fullImgContainer.remove()
          body.classList.remove('body-fixed')
        }, 200);

      }

      fullImgBg.addEventListener('click', () => {
        closeFullImg()
      })
      fullImgClose.addEventListener('click', () => {
        closeFullImg()
      })
      document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape') {
          closeFullImg()
        }
      })
    })
  }
})
