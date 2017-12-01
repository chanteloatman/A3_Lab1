(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var carImages = document.querySelectorAll(".thumbInfo IMG");

  //NEW INFO WE ADDED IN CLASS
  var carButtons = document.querySelectorAll('.data-ref');
  const httpRequest = new XMLHttpRequest();

  //debugger;

  function getCarData(){
  //let carImages = document.querySelector();
    if (!httpRequest) {
      alert('giving up, your browser sucks!');
      return false;
    }

    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
    httpRequest.send();
  }

  function processRequest(){
    //handle the stage of our AJAX call
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;

    if (httpRequest.readyState === XMLHttpRequest.DONE){
      if (httpRequest.status === 200){
        //debugger;
        let data = JSON.parse(httpRequest.responseText);
        processResult(data);
      } else {
        alert('There was a problem with the request');
      }
    }
  }

  function processResult(data){
    const { modelName, pricing, modelDetails } = data;

    let model = document.querySelector('.modelName').textContent = modelName;
    let price = document.querySelector('.priceInfo').innerHTML = pricing;
    let desc = document.querySelector('.modelDetails').textContent = modelDetails;

    carButtons.forEach(function(car, index) {
      car.classList.add('nonActive');
    });

    document.querySelector(`#${data.model}`).classList.remove('nonActive');
  }


  carImages.forEach(function(element, index) {
    element.addEventListener('click', getCarData, false);
  });
})();