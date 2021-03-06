var assert = require("assert")
var Food = require("../food.js")
var Hero = require("../hero.js")
var Rat = require("../rat.js")

describe("Rat", function(){

  beforeEach(function() {
    batman = new Hero("Batman", 100, "batcakes")
    favFood = new Food("batcakes", 50)
    food = new Food("pizza", 25)
    fido = new Rat("fido")
  })

  it("Rat touched bats batcakes!!!!", function(){
    fido.touchFood(favFood)
    assert.strictEqual(favFood.regenValue, -50)
  })

  it("the Bat gets sick becuz of rats", function(){
    batman.damageHealth(50)
    fido.touchFood(favFood)
    batman.heroEatsFood(favFood)
    assert.strictEqual(batman.health, -25)
  })

})
