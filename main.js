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
  const menu = document.querySelector('.menu');

  const menuWeare = document.getElementById('weare');
  const menuNft = document.getElementById('nft');
  const menuGameApps = document.getElementById('gameapps');
  const menuRoadmap = document.getElementById('roadmap');
  const menuContacts = document.getElementById('contacts');

  const posMenu = window.pageYOffset + menu.offsetHeight;

  const posMenuWeare = menuWeare.offsetTop + menuWeare.offsetHeight;
  const posMenuNft = menuNft.offsetTop + menuNft.offsetHeight;
  const posMenuGameApps = menuGameApps.offsetTop + menuGameApps.offsetHeight;
  const posMenuRoadmap = menuRoadmap.offsetTop + menuRoadmap.offsetHeight;
  const posMenuContacts = menuContacts.offsetTop + menuContacts.offsetHeight;

  const distancePosMenuWeare = posMenuWeare - posMenu;
  const distancePosMenuNft = posMenuNft - posMenu;
  const distancePosMenuGameApps = posMenuGameApps - posMenu;
  const distancePosMenuRoadmap = posMenuRoadmap - posMenu;
  const distancePosMenuContacts = posMenuContacts - posMenu;

  const min = Math.min(...[distancePosMenuWeare, distancePosMenuNft, distancePosMenuGameApps, distancePosMenuRoadmap, distancePosMenuContacts].filter(num => num > 0));

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

let tableData = [
  { name: "Reptilian", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "CatFall", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "MindHealth", height: 1520, place: "Parco Foreste Casentinesi" },
];

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', scrollHandler);


});
