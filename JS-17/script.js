// CLASSES
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType
    this.size = pizzaSize
    this.crust = "original"
  }
  getCrust() {
    return this.crust
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust
  }

  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`)
  }
}

const myPizza = new Pizza("sausage", "medium")
myPizza.bake()
myPizza.type = "supreme"
myPizza.bake()
console.log(myPizza.type)
myPizza.setCrust("thin")
myPizza.bake()
console.log(myPizza.getCrust())
