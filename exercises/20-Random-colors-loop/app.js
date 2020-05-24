function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
        case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(ammount){
	
    //your loop here
    for (i = 0; i < ammount; i++){
        if (i < ammount){
            var rndint1_4 = (Math.round(Math.random() * (3) +1))
            var exampleColor = getColor(rndint1_4);
            console.log(exampleColor)
            //return exampleColor
        }
    }
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

