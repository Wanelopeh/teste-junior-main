// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS

// window.onload = function() {
  // code
// };

// Função para abrir o menu
function openMenu() {
  var menu = document.getElementById('menu');
  menu.style.transform = 'translateX(0)';
}

// Função para fechar o menu
function closeMenu() {
  var menu = document.getElementById('menu');
  menu.style.transform = 'translateX(-100%)';
}

// Adicionar o evento de clique no botão "Abrir Menu"
document.getElementById('menu-button').addEventListener('click', openMenu);

// Adicionar o evento de clique no menu para fechá-lo quando um item for clicado
document.getElementById('menu').addEventListener('click', closeMenu);

function positionImage1() {
  
  var image = document.getElementById('video')
  image.style.position = 'relative';
  image.style.left = '0';
  image.style.top = '0';
  image.style.transition = 'none';

  image.removeEventListener('click', positionImage1);
}


function positionImage() {
  
  var image = document.getElementById('video-cover')
  image.style.position = 'relative';
  image.style.left = '0';
  image.style.top = '0';
  image.style.transition = 'none';

  image.removeEventListener('click', positionImage);
}

document.addEventListener('DOMContentLoaded', function () {
  var titles = document.querySelectorAll('.title');

  // Adiciona o evento onclick para cada título da lista
  titles.forEach(function (title) {
    title.addEventListener('click', function () {
      var item = this.parentElement;
      var description = item.querySelector('.description');

      // Verifica se o item está ativo ou não
      if (item.classList.contains('-active')) {
        item.classList.remove('-active');
        description.style.maxHeight = '0';
      } else {
        item.classList.add('-active');
        description.style.maxHeight = '800px';
      }
    });
  });
});
