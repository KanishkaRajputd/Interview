console.log("Khushy");

let i=1;

function toggler(a,b,c){

return function x(){

    if(i==1){
        console.log(a);
        
    }if(i==2){
        console.log(b);
        
    }
    if(i==3){
        console.log(c);
        
    }

    if(i==3){
        i=0;
    }
    i++;}


}
let toggle=toggler(1,2,3);


toggle();
toggle();
toggle();