function areaF (input){

    let shape = input[0];
    let area = 0;

    if (shape === "square"){
        let side = Number (input[1]);
        area = side * side ;
        
    } else if (shape === "rectangle"){
        let side = Number (input[1]);
        let side2 = Number (input[2]);
        area = side * side2 ;
        
    } else if (shape === "circle"){
        let radius = Number (input[1])
        area = Math.PI * Math.pow(radius, 2);
        
    } else {
    let sideA = Number (input[1]);
    let high = Number (input[2]);
    area = sideA * high / 2 ; 
    
    }

    console.log(area.toFixed(3));
}


areaF (["circle","6"])

areaF (["triangle","4.5","20"])
