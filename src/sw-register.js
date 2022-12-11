if('serviceWorker' in navigator)
{


  navigator.serviceWorker.register('sw.js',{

    scope:'/'
  }).then((registeration)=>{

    console.log('service worker register complited');

  });
}
