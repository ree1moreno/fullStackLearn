var sun;
sun.name = "Sol";
sun.mass = 1989 * Math.pow(10, 30);
sun.age = 4603 * Math.pow(10, 9);
sun.planets = [];
var asteroid;
var MilkWayPlanety = /** @class */ (function () {
    function MilkWayPlanety(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    MilkWayPlanety.prototype.createSatellite = function (name) {
        //...
    };
    return MilkWayPlanety;
}());
