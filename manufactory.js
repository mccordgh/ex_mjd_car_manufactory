let Car = function() {
  this.manufactured_date = Date.now();
};

let YourFavoriteMake = function() {
  this.manufacturer = 'Toyota';
};
YourFavoriteMake.prototype = new Car();

let YourFavoriteModel = function(_plate_number, _color) {
  this.plate_number = _plate_number ? _plate_number : 'N/A';
  this.color = _color ? _color : 'N/A';
  this.year = 2003;
  this.name = 'MR2 Spyder';
  this.horsepower = 138;
  this.engine = '1.8L 4-cylinder';
  this.mpg = '26 city / 32 highway';
  this.curbWeight = 2195;
  this.dimensions = '153" L x 67" W x 49" H';
};
YourFavoriteModel.prototype = new YourFavoriteMake();

let myFirstFavoriteCar1 = new YourFavoriteModel("331PDP", 'cherry green');
let myFirstFavoriteCar2 = new YourFavoriteModel("646XAX", 'cherry red');
let myFirstFavoriteCar3 = new YourFavoriteModel("983LDJ", 'cherry blue');

let AnotherModel = function(_plate_number, _color) {
  this.plate_number = _plate_number ? _plate_number : 'N/A';
  this.color = _color ? _color : 'N/A';
  this.year = 2008;
  this.name = 'Scion TC Spec';
  this.horsepower = 161;
  this.engine = '2.4L 4-cylinder';
  this.mpg = '21 city / 29 highway';
  this.curbWeight = 2905;
  this.dimensions = '174" L x 69" W x 56" H';
};
AnotherModel.prototype = new YourFavoriteMake();

myNewCar = new AnotherModel('SEXYMAN', 'cherry white');

console.log("myFirstFavoriteCar1", myFirstFavoriteCar1);
console.log("myFirstFavoriteCar2", myFirstFavoriteCar2);
console.log("myFirstFavoriteCar3", myFirstFavoriteCar3);
console.log("myNewCar", myNewCar);