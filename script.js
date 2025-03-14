document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Предотвращаем переход по ссылке

          const linkId = this.id; // Получаем ID кликнутой ссылки

          switch (linkId) {
              case 'home':
                  //  Действие для кнопки "Главная"
                  alert('Переход на главную страницу');
                  break;
              case 'services':
                  //  Действие для кнопки "Услуги"
                  alert('Переход к услугам');
                  break;
              case 'about':
                  //  Действие для кнопки "О нас"
                  alert('Переход к информации о нас');
                  break;
              case 'appointment':
                  //  Действие для кнопки "Записаться"
                  alert('Открытие формы записи или переход на страницу записи');
                  break;
              default:
                  console.log('Неизвестная ссылка');
          }
      });
  });
});