function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var fido = new Dog("Fido", "Mixed", 38);
fido.owner = "Bob";
delete fido.weight;

fido.trust = function (person) {
    return person == "Bob";
};
var notBite = fido.trust("Bob");

// 以下代码行不通，因为spot对象没有方法trust。
// 这将引发如下错误：TypeError: Object #<Dog> has no method “ trust ”
var spot = new Dog("Spot", "Chihuahua", 10);
notBite = spot.trust("Bob");
