var elForm = document.querySelector("[data-form-distance]");
var elInput = document.querySelector("[data-input-distance]");
var elTextOnFoot = document.querySelector("[data-onfoot-speed-text]");
var elTextBicycle = document.querySelector("[data-bicycle-speed-text]");
var elTextCar = document.querySelector("[data-car-speed-text]");
var elTextPlane = document.querySelector("[data-plane-speed-text]");
var onFootSpeed = 3.6;
var bicycle = 20.1;
var car = 70;
var plane = 800;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var calculateOnFootSpeed = elInput.value / onFootSpeed;
  var calculateBicycleSpeed = elInput.value / bicycle;
  var calculateCarSpeed = elInput.value / car;
  var calculatePlaneSpeed = elInput.value / plane;

  var onFootSeedMinute =
    (calculateOnFootSpeed - Math.floor(calculateOnFootSpeed)) * 60;
  var bicycleSeedMinute =
    (calculateBicycleSpeed - Math.floor(calculateBicycleSpeed)) * 60;
  var carSeedMinute = (calculateCarSpeed - Math.floor(calculateCarSpeed)) * 60;
  var planeSeedMinute =
    (calculatePlaneSpeed - Math.floor(calculatePlaneSpeed)) * 60;
  var onFootSeedHour = calculateOnFootSpeed - Math.floor(calculateOnFootSpeed);
  var bicycleSeedHour =
    calculateBicycleSpeed - Math.floor(calculateBicycleSpeed);
  var carSeedHour = calculateCarSpeed - Math.floor(calculateCarSpeed);
  var planeSeedHour = calculatePlaneSpeed - Math.floor(calculatePlaneSpeed);

  elTextOnFoot.textContent = `Siz ${onFootSeedHour.toFixed(
    0
  )} soat ${onFootSeedMinute.toFixed(0)} minutda Piyoda yetasiz oq yo'l !`;
  elTextBicycle.textContent = `Siz ${bicycleSeedHour.toFixed(
    0
  )} soat ${bicycleSeedMinute.toFixed(
    0
  )} minutda Velosiped orqali yetasiz oq yo'l !`;
  elTextCar.textContent = `Siz ${carSeedHour.toFixed(
    0
  )} soat ${carSeedMinute.toFixed(0)} minutda Mashina orqali yetasiz oq yo'l !`;
  elTextPlane.textContent = `Siz ${planeSeedHour.toFixed(
    0
  )} soat ${planeSeedMinute.toFixed(
    0
  )} minutda Samoliyot orqali yetasiz oq yo'l !`;
});


// if ((onFootSpeedHour = 0)) {
//   elTextOnFoot.textContent = `Siz ${onFootSeedMinute.toFixed(
//     0
//   )} minutda Piyoda yetasiz oq yo'l !`;
// } else {
//   elTextOnFoot.textContent = `Siz ${onFootSeedHour.toFixed(
//     0
//   )} soat ${onFootSeedMinute.toFixed(0)} minutda Piyoda yetasiz oq yo'l !`;
// }

// console.log(computation());
// function computation(onFootSpeed, bicycle, car, plane) {
//   elInput.value / onFootSpeed;
//   elInput.value / bicycle;
//   elInput.value / plane;
//   elInput.value / car;

//   return;
// }
