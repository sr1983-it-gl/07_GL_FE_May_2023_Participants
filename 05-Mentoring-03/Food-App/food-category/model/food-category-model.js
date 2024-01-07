


class FoodCategory {

  // String id
  // String name

  constructor(id, name, imagePath){

    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
  }

  // Instance / Object method
  getName(){

    return this.name;
  }

  static getSomething(){

    return "abc";
  }
}

export {FoodCategory}