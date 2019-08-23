import db from './posts.js'

db.myPlaylist  = [];
const createElement  = (tag)=>document.createElement(tag);

const inserElementTo = (element, to) => {  
    return to.appendChild(element);  // функция для дальнейшего использования создание элементов
  };

  const addItemToChart = (itemId)=>{  // функц для добавления в плейлист "мой" 
  let item;   // создаем переменную 
  
  _.each(db, dbItem=>{  // перебираем базу дб 
    item = _.findWhere(dbItem, {"id": +itemId}); // в переменную айтем записываем элемент который
    if (item && !_.findWhere(db.myChart, {"id": +itemId})) { // 
      db.myChart.unshift(item);
    }
  })
};

// create elements
const createCardConteiner = (post) => {
    const cardContainer   = createElement('div');
    const cardAuthor      = createElement('p');
    const cardDescription = createElement('p');
    const cardTitle       = createElement('h3');
    const cardtImg         = createElement('img');
    const cardAddButton   = createElement('button');
    const cardAudio       = createElement('audio');
    const cardAudioSource = createElement('source');
  
    postContainer.className   = 'post';
    postAuthor.innerText      = post.author;
    postAuthor.className      = 'author';
    postTitle.innerText       = post.title;
    postDescription.innerText = post.description;
    postImg.setAttribute("src",post.imgUrl);
    postAddButton.innerText = 'To playlist';
    postAddButton.className = 'addToMyPlaylist';
    postAddButton.id        = post.id;
    postAudio.id = 'myTune';
    postAudioSource.setAttribute('src', 'BachGavotteShort.mp3');
  
    postAddButton.addEventListener('click', event=>{
      const itemId = event.currentTarget.id;
      addItemToMyPlayList(itemId);
    });

   