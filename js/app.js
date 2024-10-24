let misTweets = [];
const localStorage = window.localStorage;
const boton = document.querySelector('.button-primary');
let tweet = document.querySelector('#tweet').value;



function eliminarTweet() {
    misTweets = [];
    localStorage.clear();
    mostrarTweets();
}


function guardarTweet(tweet) {
  misTweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(misTweets));
  mostrarTweets()
}

function cargarTweets() {
  if(localStorage.getItem('tweets')) {
    misTweets = JSON.parse(localStorage.getItem('tweets'));
  }
}

function mostrarTweets() {
    cargarTweets();
    const listaTweets = document.querySelector('#lista-tweets');
    listaTweets.innerHTML = '';
    misTweets.forEach(tweet => {
        console.log(tweet)
        
        const p = document.createElement('p');
        p.textContent = tweet;
        listaTweets.appendChild(p);
    });
    let boton = document.createElement('button');
    boton.textContent = 'Eliminar';
    boton.classList.add('button');
    boton.classList.add('button-eliminar');
    boton.classList.add('u-full-width');
    boton.onclick = () => eliminarTweet(tweet);
    listaTweets.appendChild(boton);
}

boton.addEventListener('click', ()=> {
    tweet = document.querySelector('#tweet').value;
    guardarTweet(tweet);
}); 

window.addEventListener('load', () =>
    mostrarTweets()
);
