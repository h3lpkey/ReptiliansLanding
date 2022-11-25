const contentHandler = () => {
  const infoNODE = document.querySelectorAll('.hidden-info')[0];
  const buttonShowMore = document.getElementById('showMore');
  const buttonShowLess = document.getElementById('showLess');
  if (infoNODE.classList.contains('visible')) {
    infoNODE.classList.remove('visible')
    buttonShowMore.style.display = "flex";
    buttonShowLess.style.display = "none";
    infoNODE.style.maxHeight = 0
  } else {
    infoNODE.classList.add('visible');
    buttonShowMore.style.display = "none";
    buttonShowLess.style.display = "flex";
    infoNODE.style.maxHeight = infoNODE.scrollHeight + "px";
  }
}

const mobileMenuHandler = () => {
  const menuNODE = document.querySelectorAll('.mobile-menu')[0];
  if (menuNODE.classList.contains('visible')) {
    menuNODE.classList.remove('visible')
  } else {
    menuNODE.classList.add('visible');
  }
}

const scrollHandler = () => {
  let menu = document.querySelector('.menu');

  let menuWeare = document.getElementById('weare');
  let menuNft = document.getElementById('nft');
  let menuGameApps = document.getElementById('gameapps');
  let menuRoadmap = document.getElementById('roadmap');
  let menuContacts = document.getElementById('contacts');

  let posMenu = window.pageYOffset + menu.offsetHeight;

  let posMenuWeare = menuWeare.offsetTop + menuWeare.offsetHeight;
  let posMenuNft = menuNft.offsetTop + menuNft.offsetHeight;
  let posMenuGameApps = menuGameApps.offsetTop + menuGameApps.offsetHeight;
  let posMenuRoadmap = menuRoadmap.offsetTop + menuRoadmap.offsetHeight;
  let posMenuContacts = menuContacts.offsetTop + menuContacts.offsetHeight;

  let distancePosMenuWeare = posMenuWeare - posMenu;
  let distancePosMenuNft = posMenuNft - posMenu;
  let distancePosMenuGameApps = posMenuGameApps - posMenu;
  let distancePosMenuRoadmap = posMenuRoadmap - posMenu;
  let distancePosMenuContacts = posMenuContacts - posMenu;

  let min = Math.min(...[distancePosMenuWeare, distancePosMenuNft, distancePosMenuGameApps, distancePosMenuRoadmap, distancePosMenuContacts].filter(num => num > 0));

  document.querySelectorAll('.menu-item')[0].classList.remove('active');
  document.querySelectorAll('.menu-item')[1].classList.remove('active');
  document.querySelectorAll('.menu-item')[2].classList.remove('active');
  document.querySelectorAll('.menu-item')[3].classList.remove('active');
  document.querySelectorAll('.menu-item')[4].classList.remove('active');

  if (min === distancePosMenuWeare) document.querySelectorAll('.menu-item')[0].classList.add('active');
  if (min === distancePosMenuNft) document.querySelectorAll('.menu-item')[1].classList.add('active');
  if (min === distancePosMenuGameApps) document.querySelectorAll('.menu-item')[2].classList.add('active');
  if (min === distancePosMenuRoadmap) document.querySelectorAll('.menu-item')[3].classList.add('active');
  if (min === distancePosMenuContacts) document.querySelectorAll('.menu-item')[4].classList.add('active');
}


document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', scrollHandler);
});
