const roadMapData = [
  {
    name: "Reptilian",
    data: [
      {
        task: "Fixes feedback issues",
        long: 1,
        startMonth: 1,
        backgroundColor: "blue",
        textColor: "red"
      },
      {
        task: "Any task",
        long: 1, startMonth: 2,
        startMonth: 2,
        backgroundColor: "#DADADA",
        textColor: "#000"
      },
      {
        task: "Launch in stores and publishing on forums",
        long: 1,
        startMonth: 2,
        backgroundColor: "#dada",
        textColor: "#0e0"
      }
    ]
  },
  {
    name: "CatFall",
    data: [
      {
        task: "Design",
        long: 3,
        startMonth: 1,
        backgroundColor: "#DADADA",
        textColor: "#000"
      }
    ]
  },
  {
    name: "MindHealth",
    data: [
      {
        task: "Interview and polls. Collect data.",
        long: 1,
        startMonth: 1,
        backgroundColor: "#DADADA",
        textColor: "#000"
      },
      {
        task: "Design",
        long: 2,
        startMonth: 1,
        backgroundColor: "#DADADA",
        textColor: "#000"
      },
      {
        task: "Develop 1st build",
        long: 1,
        startMonth: 2,
        backgroundColor: "#DADADA",
        textColor: "#000"
      },
    ]
  }
];

const months = ["November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

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

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', scrollHandler);
  const roadmap = document.getElementById('roadmap-table');
  const roadmapWrapper = document.getElementById('roadmap-wrapper');
  const currentDate = new Date();

  roadmapWrapper.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    roadmapWrapper.scrollLeft += evt.deltaY;
  });

  const headerWithMonths = `
    <div class="row row-months">
      <div class="row-header"></div>
      ${months.map(month => { return `<div class="header"><span class="month">${month}</span></div>` }).join('')}
    </div>
  `;

  let tableNODE = headerWithMonths;

  roadMapData.forEach((game => {
    let cells = ``;
    months.forEach((month, index) => {
      const tasksFilter = game.data.filter(task => {
        return task.startMonth === index + 1
      })
      const tasks = `${tasksFilter.map(task => { return `<span style="background-color: ${task.backgroundColor}; color: ${task.textColor}" class="data count-${task.long}">${task.task}</span>` })}`

      cells = cells + `<div class="cell">${tasks}</div>`;
    });

    const row = `
    <div class="row">
      <div class="row-header">${game.name}</div>
      ${cells}
    </div>  
    `;
    tableNODE = tableNODE + row;

  }));
  roadmap.innerHTML = tableNODE;

  var flkty = new Flickity('.carousel', {
    autoPlay: 1000,
    wrapAround: true,
    cellAlign: 'left',
    prevNextButtons: false,
    pageDots: false

  });
});
