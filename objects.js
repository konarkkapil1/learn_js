console.log("running");
const circle = {
    //these are properties of object
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    //functions in objects are called methods
    draw: () => {
        console.log("circle is drawn");
    }
}
circle.draw();

//factory function
const createCircle = (radius) => {
    return{
        radius,
        draw: () => {
            console.log("circle drawn from factory function");
        }
    }
}

const constructorCircle = createCircle(1);
constructorCircle.draw();

// constructor function
// naming convention: first letter should be upper case
function Circle(radius){
    // this point to the current object
    this.radius = radius;
    //without using the this keyword a variable is set as a private member with a scope in object only and can't be accessed outside
    let color = "red";
    this.draw = () => {
        console.log(color,"color circle drawn from constructor function")
    }
}
//same as line 40 new call this internally
Circle.call({}, 1);

const newCircle = new Circle(1);
newCircle.draw();
//adding properties in the existing object
//dot notation
newCircle.location = {x: 1, y: 1};
//bracket notation same as dot notation
// newCircle['location'] = {x: 1, y: 1};
console.log(newCircle);
//deleting propertiy of an object
delete newCircle.location;
console.log(newCircle);

//this is how you iterate over members of an object
for(let key in newCircle){
    //typeof operator use
    if(typeof newCircle[key] != 'function')
        console.log(key, newCircle[key]);
}

//keys can also be accessed like this "returns an array"
const key = Object.keys(newCircle);
console.log(key);

//using in operator to check whether a property exists
if('radius' in newCircle){
    console.log('circle has a radius');
}
