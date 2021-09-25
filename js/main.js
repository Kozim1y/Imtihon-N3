// =================================================================================================
//    =================================== bread-type section ===================================
// =================================================================================================

var elOptoinWrapper = document.querySelector(".js-bread-type");
var breadType = [
  "Yupqa",
  "O'rta qalin",
  "Qalin",
];

var elType = document.querySelector(".js-type-result");

for (var i = 0; i < breadType.length; i++) {
  var newBreadTypeOption = document.createElement("option");
  newBreadTypeOption.id = i;
  newBreadTypeOption.value = breadType[i];
  newBreadTypeOption.textContent = breadType[i];
  
  elType.textContent = 'Yupqa';
  elOptoinWrapper.addEventListener("change", function() {

    elType.textContent = elOptoinWrapper.value;
  });


  elOptoinWrapper.appendChild(newBreadTypeOption);
}

// =================================================================================================
//  ================================== bread-type section finish===================================
// =================================================================================================


// =================================================================================================
//    =================================== Pizza size section===================================
// =================================================================================================

var elBreadSize = document.querySelector(".js-size-result");
  console.log(elBreadSize);
var elRadio = document.querySelector(".js-pizza-size")
var sizes = ["25 cm", "30 cm", "35 cm"];
for ( var k = 0; k < sizes.length; k++){
  var newElSizeWrapper= document.createElement("div");
  var newSizeRadio = document.createElement("input");
  var newSizeLabel = document.createElement("label");
  var elKattaligi = document.querySelector(".js-pizza-size");
  
  newElSizeWrapper.setAttribute("class", "form_radio_btn");
  newSizeRadio.type = "radio";
  newSizeRadio.id = k + 15;
  newSizeRadio.value = sizes[k];
  newSizeRadio.setAttribute("name", "name")
  newSizeLabel.setAttribute("for", k + 15)
  newSizeLabel.textContent = sizes[k];
  newSizeLabel.setAttribute("class", "btn_size");
  
  var elResult = document.createElement("p");
  newSizeRadio.addEventListener("change", function (){

    elBreadSize.innerHTML = this.value;

  });
  
  newElSizeWrapper.appendChild(newSizeRadio);
  newElSizeWrapper.appendChild(newSizeLabel);
  
  elRadio.appendChild(newElSizeWrapper);
  
  elBreadSize.appendChild(elResult);
}

// =================================================================================================
//     =================================== Pizza size finish===================================
// =================================================================================================

// =================================================================================================
//    =================================== Ingredients section ===================================
// =================================================================================================
var elInputWrapper = document.querySelector(".js-input-wrapper");

var ingredients = [
  " Pamidor",
  " Kurka",
  " Zaytun",
  " Tuzlangan bodring",
  " Qo'ziqorin",
  " Qazi",
];

var OnTop = [];
for (var i = 0; i < ingredients.length; i++) {
  var newelIngredientsLabel = document.createElement("label");
  var newElIngredientsCheckbox = document.createElement("input");
  var newElIngredientsSpan = document.createElement("span");

  newElIngredientsCheckbox.type = "checkbox";
  newElIngredientsCheckbox.id = i;
  newElIngredientsCheckbox.value = ingredients[i];

  newElIngredientsSpan.textContent = ingredients[i];

  newElIngredientsCheckbox.addEventListener("change", function (evt) {
    evt.preventDefault();

    var curruntIngredients = this.value;
    var index = OnTop.indexOf(curruntIngredients);
    if (index > -1) {
      OnTop.splice(index, 1);
    }else{
      OnTop.push(curruntIngredients);
    }
    ochirishQoshish1()
  });
  var elTopPush = document.querySelector(".on-top");

  // elqoshimcha
  newelIngredientsLabel.appendChild(newElIngredientsCheckbox);
  newelIngredientsLabel.appendChild(newElIngredientsSpan);

  elInputWrapper.appendChild(newelIngredientsLabel);
}



var ochirishQoshish1 = function () {
  elTopPush.innerHTML = '';
  for (var i = 0; i < OnTop.length; i++) {
    var itemLi = document.createElement('li');
    itemLi.textContent = `- ${OnTop[i]}`;
    elTopPush.append(itemLi);
  }
}

// =================================================================================================
//  ================================== Ingredients section finish ==================================
// =================================================================================================


// =================================================================================================
//    =================================== Additionals section ===================================
// =================================================================================================

var additionalWrap = document.querySelector(".additions");

var additionalArray = [" Achchiq", " Sosiskali"];

var additionalPush = [];

for (var k = 0; k < additionalArray.length; k++){
  var newPlusLabel = document.createElement("label");
  var newPlusInput = document.createElement("input");
  var newPlusSpan = document.createElement("span");
  
  newPlusInput.type = "checkbox";
  newPlusInput.id = k;
  newPlusInput.value= additionalArray[k];
  
  newPlusSpan.textContent = additionalArray[k];
  
  

  newPlusInput.addEventListener("change", function(){
    var plusValue = this.value;
    var index2 = additionalPush.indexOf(plusValue);
    if(index2 > -1){
      additionalPush.splice(index2, 1)
    }else{
      additionalPush.push(plusValue);
    }

    deleteAdd()
  });

  var elAdditionalPush = document.querySelector(".plus-push");
  
  newPlusLabel.appendChild(newPlusInput);
  newPlusLabel.appendChild(newPlusSpan);
  
  additionalWrap.appendChild(newPlusLabel);
  
}

var deleteAdd = function () {
  elAdditionalPush.innerHTML = '';
  for (var i = 0; i < additionalPush.length; i++) {
    var itemL = document.createElement('li');
    itemL.textContent = `- ${additionalPush[i]}`;
    elAdditionalPush.append(itemL);
  }
}

// =================================================================================================
// =================================== Additionals section finish===================================
// =================================================================================================

// ===========================
//  == eeee po'lni finish ==
// ===========================