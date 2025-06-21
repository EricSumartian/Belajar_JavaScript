// IIFE (Immediately Invoked Function Expressio)
(function () {
  console.log("IIFE dipanggil");
})();

const appConfig = (function(){
  appKey = 12345;
  appUrl = "https://api.example.com";

  return {
    getApiKey: function (){
      return appKey;
    },
    getApiUrl: function (){
      return appUrl;
    }
  }
})();
console.log(appConfig.getApiKey());
console.log(appConfig.getApiUrl());