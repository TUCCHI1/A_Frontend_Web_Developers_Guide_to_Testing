if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Service worker registered!', reg);
  });
}

if ("serviceWorker" in navigator ) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then((registlation) => {
      // Registration was successful
      console.log("ServiceWorker registration with scope: ",registlation.scope);
    })
  })
}

const errCheck = (err: any) => {
  console.log('ServiceWorker registration failed: ', err);
}