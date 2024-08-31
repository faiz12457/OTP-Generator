let input =document.querySelectorAll("input");
let arr=[];
let button=document.querySelector("button");
let p=document.querySelector("p");
let pass=document.querySelector(".pass");
let generateOpt=document.querySelector(".generateOtp");

let RandomOtp=()=>{
    let length=4;
    let otp=[];
    for(let i=0;i<4;i++){

        let random=Math.floor(Math.random()*10);
        otp.push(random);
    }
    return otp;
}


console.log(length);
input.forEach((btn,index)=>{
    

    btn.addEventListener("keyup",(evt)=>{
        
       
        let length = btn.getAttribute("maxlength");
        
         arr[index]=evt.target.value;

          
           if(evt.key==="Backspace" && evt.target.value.length===0){
            const prevInput = input[index - 1];
            if(prevInput){
                 prevInput.focus();
            }
        }
       else if(evt.target.value.length=length){
           
            const nextInput = input[index + 1];
            if(nextInput){
                 nextInput.focus();
            }
        }
          
       

        })
        
        

    })
    
let checkanswer=(otp1)=>{
    
    let array=arr.join('')
    console.log(array);
    if(otp1==="" || array===""){
        p.innerText="Enter OTP";
    }
  else  if(otp1!=""  &&array===otp1){

           p.innerText="Correct";
        
    }
    else{
        p.innerText="Wrong";
    }
    setTimeout(()=>{
        input.forEach(btn => btn.value = "");
    input[0].focus(); 
    p.innerText="";



    },2000);


}
  

button.addEventListener("click",()=>{
    let otp=pass.innerText;

    
    
    checkanswer(otp);
  







});
document.addEventListener("keypress",(evt)=>{
    if(evt.key==="Enter"){
        let otp=pass.innerText;
        checkanswer(otp);

    }


})

generateOpt.addEventListener("click",()=>{
    let otp=RandomOtp();
let otp1=otp.join('');
console.log(otp1);
    
    pass.innerText=otp1;

    
    
   
    input.forEach(btn => btn.value = "");
    input[0].focus(); 

})



