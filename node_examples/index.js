const rectangle = require('./rectangle');
var rect = require('./rectangle');
function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rectangle(l,b,(err,rectangle)=>{
        if(err){
            console.log('Eror: ', err.message);
        }
        else{
            console.log ('The area of the rectangles of dimensions l : '+ l +', b: '+ b + ', are '+ rectangle.area());
            console.log ('The perimeter of the rectangles of dimensions l : '+ l +', b: '+ b + ', are '+ rectangle.perimeter());
        }
    });
    console.log('console log after rectangle()');
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);