const utils = require("./utils");

/**
 * Task 1
 *
 * Kirjutage funktsioon, mis tagastab 2 sekundi pärast "hello"
 *
 * Tip. Peate kasutama Promise ja setTimeout
 */
const delayHello = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello');
    }, 200);
});

/* Don't change me! */
try{
    delayHello
        .then(x =>{
            utils.test(x, "hello");
        })
        .catch( () =>{
            console.log("Fail")
        });

}
catch(e) {
    console.log("Fail, function is not implemented");
}

/**
 * Task 2
 * "itemCloned" peab olema "item1" clone,
 *  ainuke erinevus objektide vahel on see, et "itemCloned.name" === "Samsung"
 */
const item1 = {
    name: "IPhone",
    cost: 998,
    features: [123,125,12,3,14]
};
/*
// Nii ei tohi teha!
const itemCloned = {
  name: "Samsung",
  cost: 998,
  features: [123,125,12,3,14]
}
*/
const itemCloned = {
        name:"Samsung",
        cost: item1.cost,
        features: item1.features
};
utils.test(
    item1.name,
    "IPhone"
);

utils.test(
    itemCloned.name,
    "Samsung"
);

utils.test(
    itemCloned.cost,
    998
);

