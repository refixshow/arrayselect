// Stwórz customową metodę dla Arraya .select
// podobną do defaultowego działania List w Pythonie

// input:
// - startIdx - index elementu od którego element będzie wybierany
// - endIdx - index elementu od którego element będzie wybierany
// - step - krok opóżnienia w wybieraniu - każdy element / element co drugi, co trzeci, co czwarty, co piąty, co dziesiąty

// w przypadku
// const arr = [0,1,2,3,4,5,6,7,8,9]

// -1 arr.select(0,3,0) => [0,1,2]
// -2 arr.select(1,5,0) => [1,2,2,3,4]
// -3 arr.select(0,4,2) => [0,2,4]

// -4 arr.select(-5,0,0) => [5,6,7,8,9]
// -5 arr.select(0,-5,0) => [0,1,2,3,4]
// -6 arr.select(-2,-5,0) => [5,6,7]

Array.prototype.select = function (startIdx, endIdx, step = 1) {
  // return ...
};
