function getColor(selection)
{
    var tmp = ""+selection;
    selection = tmp.toLocaleLowerCase()
	switch(selection){
        //Add more options here
        case "red":
            return true;
        case "green":
            return true;
        case "blue":
            return true;
	    default :
	    	return false;//returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = window.prompt('What color do you want?');
var isAvailable = getColor(colorname);
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');