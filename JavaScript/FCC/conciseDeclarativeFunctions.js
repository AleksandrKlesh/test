// node conciseDeclarativeFunctions.js

const bicycle = {
  gear: 2,
  setGear(newGear) {
    //setGear: function (newGear) {
    "use strict";
    this.gear = newGear; // this
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);
