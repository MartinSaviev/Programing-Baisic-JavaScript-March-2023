//square, rectangle, circle or triangle
function geometricFigure(input){

    let nameFigure = input[0];
    let face = 0;

    if (nameFigure === "square") {
        let sideA = Number(input[1]);
         face = sideA*sideA;
        
    }else if(nameFigure==="rectangle"){
              let sideA = Number(input[1]);
              let sideB = Number(input[2]);
              face = sideA*sideB;
              
    }else if(nameFigure==="triangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        face = sideA*sideB/2;

    }else if(nameFigure==="circle"){
        let sideA = Number(input[1]);
        face = (sideA*sideA)*Math.PI;
    }

    console.log(face);

}
geometricFigure(["circle","6"]);