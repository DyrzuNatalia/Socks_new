var library =
  [
    {
      "id":1,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":2,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":3,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":4,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":5,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":6,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":7,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    },
    {
      "id":8,
      "imgSrc": "offer-1-2.png",
      "title": "",
      "description": "Roise the riveter socks - Crew socks for woman ",
      "price": "240"
    }
  ];




   // for(var i = 0; i <= 8 ; i++){

    //    $('div').clone().appendTo('body');
   //     $('#q').clone().appendTo('div').text(library[i].price);
       
   // };

// service start

async function fetchData () {
    return await axios.get('http://localhost:3000/posts');
  }
  
  
  // service end
  
  function initCard () {
    return card = $('.img-1');
  }
  
  function repeatCards (data, cardTmpl) {
    _.each(data, card => {
      let clone = cardTmpl.clone()
        .prop('id', card.id)
        .appendTo('.row-card');
  
      clone.find('img')
        .prop('src', card.imgSrc);
      clone.find('.card-title')
        .text(card.title);
      clone.find('.price')
        .text(card.price);
     
        
      clone.find('a')
        .on(('click'), => {
          $("#modal-details").modal()
        })
    })
  }
  
  window.onload = () => {
    const cardTmpl = initCard();
    fetchData()
      .then(
        (resp) => {
          repeatCards(resp.data, cardTmpl);        
        },
        (err) => alert(err)
      );
  
      $('.slider').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      });
      $("#modal-details").modal();
  }



    

