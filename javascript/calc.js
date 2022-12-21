const select=document.querySelectorAll(".select");
const input=document.querySelector("#inputCalc");
const operatorarr=["+","-","*","/","%"];
let op="";
for(let s of select)
{
    s.addEventListener("click",(e)=>
    {
        
        if(s.textContent=="c")
        {
            input.value="";
        }
        else if(s.textContent=="back")
        {
            
          input.value=input.value.slice(0,input.value.length-1);
        }
        else if(operatorarr.includes(s.textContent))
        {
    
            op=s.textContent;
            input.value+=op;
        }
        else if(s.innerHTML=="=")
        {
            let ans="";
            let exp=input.value;
            exp=exp.split(`${op}`);
            console.log(exp,"aa to rha");
            if(op=="+")
            {
                ans= +exp[0] + +exp[1];
            }
            else if(op=="%")
            {
                ans= +exp[0] % +exp[1];
            }
            else if(op=="-")
            {
                ans= +exp[0] - +exp[1];
            }
            else if(op=="*")
            {
                ans= +exp[0] * +exp[1];
            }
            else 
            {
                ans= +exp[0] / +exp[1];
            }
            input.value=ans;
        }
        else{
            input.value+=s.textContent;
        }
    });
}
//function

