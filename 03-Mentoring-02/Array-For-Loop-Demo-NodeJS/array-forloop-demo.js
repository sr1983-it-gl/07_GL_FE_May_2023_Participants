
function arrayForLoopDemo(){

  console.log("Function called..")

  let colors = new Array();
  colors.push("Red");
  colors.push("Blue");
  colors.push("Green");

  colors.forEach( (color) => {

    console.log(color);
  })

}

arrayForLoopDemo();