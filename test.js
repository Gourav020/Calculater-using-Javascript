let string= "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (ca)=>{
        try{
        if(ca.target.innerHTML == '='){
            string= eval(string);
            document.querySelector('input').value = string
        }

        else if(ca.target.innerHTML == 'DE'){
            string= "";
            document.querySelector('input').value = string
        }


        else if(ca.target.innerHTML == 'AC'){
            string= "0";
            document.querySelector('input').value = string
        }
        else{
         console.log(ca.target)
     string=string + ca.target.innerHTML;
          document.querySelector('input').value = string;
        }
    }
    catch(err){
        console.log("wait")
    }
        });
});