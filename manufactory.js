/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
let Car = function() {
  this.manufactured_date = Date.now();
};

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */
let YourFavoriteMake = function() {
  this.manufacturer = 'Toyota';
};
YourFavoriteMake.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
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
// Set the prototype to appropriate model you created above and set the model name argument
YourFavoriteModel.prototype = new YourFavoriteMake();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
let myFirstFavoriteCar1 = new YourFavoriteModel("331PDP", 'cherry green');
let myFirstFavoriteCar2 = new YourFavoriteModel("646XAX", 'cherry red');
let myFirstFavoriteCar3 = new YourFavoriteModel("983LDJ", 'cherry blue');

/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
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

/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
myNewCar = new AnotherModel('SEXYMAN', 'cherry white');

console.log("myFirstFavoriteCar1", myFirstFavoriteCar1);
console.log("myFirstFavoriteCar2", myFirstFavoriteCar2);
console.log("myFirstFavoriteCar3", myFirstFavoriteCar3);
console.log("myNewCar", myNewCar);


/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */