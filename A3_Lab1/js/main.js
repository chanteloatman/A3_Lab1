(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework


var carImages = document.querySelectorAll(".thumbInfo IMG");
modelInfo = document.querySelector("modelInfo"),
modelName = document.querySelector("modelName"),
modelPrice = document.querySelector("priceInfo"),
modelDetails = document.querySelector("modelDetails"),
appliedClass;

//NEW INFO WE ADDED IN CLASS
var carButtons = document.querySelectorAll('.data-ref');
const httpRequest = new XMLHttpRequest();

debugger;

function getCarData(){
  //let carImages = document.querySelector();
if (!httpRequest){
  alert('giving up, your browser sucks!');
  return false;
}

httpRequest.onreadystatechange = processRequest;
httpRequest.open('GET', '.includes/functions.php?carModel=' + this.id);
httpRequest.send();
}

function processRequest(){
  //handle the stage of our AJAX call
  let reqIndictor = document.querySelector('.request-state');
  reqIndicator.textContent = httpRequest.readyState;

  if (httpRequest.readyState == XHttpRequest.DONE){
    if (httpRequest.status == 200){
    //  debugger;
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

}

carButtons.forEach(function(element, index) {
car.classList.add('nonActive');
});

document.querySelector().classList.remove('nonActive');
}


carButtons.forEach(function(element, index) {
element.addEventListener('click', changeElements, false);



//OLD CODE FROM ASSIGNMENT SUBMISSION

  //let opacityChange = querySelector(".data-ref"); NO
  //let focus = querySelector(".focusMini"); NO

  modelName.classList.add(this.id);
  modelPrice.classList.add(this.id);
  modelDetails.classList.add(this.id);

  modelName.firstChild.nodeValue = objectIndex.model;
  modelPrice.firstChild.nodeValue = objectIndex.price;
  modelDetails.firstChild.nodeValue = objectIndex.description;

  //focusMini.remove; NO

  //opacityChange.opacity = 0.6; NO
  //focusMini.opacity = 0.6; NO

  carImages.forEach(function(image) {
    image.classList.add('focusMini');
  });

  this.classList.remove('focusMini');


  appliedClass = this.id;

}

  carImages.forEach(function(element, index) {
  element.addEventListener('click', changeElements, false);
});


})();
