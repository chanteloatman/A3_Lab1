(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

var carImages = document.querySelectorAll(".thumbInfo IMG"),
modelInfo = document.querySelector(".modelInfo"),
modelName = document.querySelector(".modelName"),
modelPrice = document.querySelector(".priceInfo"),
modelDetails = document.querySelector(".modelDetails"),
appliedClass;

function changeElements(){
  //let carImages = document.querySelector();
  let objectIndex = carData[this.id];
  //let opacityChange = querySelector(".data-ref");
  //let focus = querySelector(".focusMini");

  modelName.classList.add(this.id);
  modelPrice.classList.add(this.id);
  modelDetails.classList.add(this.id);

  modelName.firstChild.nodeValue = objectIndex.model;
  modelPrice.firstChild.nodeValue = objectIndex.price;
  modelDetails.firstChild.nodeValue = objectIndex.description;

  //focusMini.remove;

  //opacityChange.opacity = 0.6;
  //focusMini.opacity = 0.6;

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
