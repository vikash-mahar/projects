const passwordbox=document.getElementById("password");
const length=12;

const uprcase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lwrcase="abcdefghijklmnopqrstuvwxyz";
const num="1234567890";
const special="@#$%^&*()_-=+{}|[]";
const allchar=uprcase+lwrcase+num+special;

function create(){
    let number="";
    // number+=uprcase[Math.floor(Math.random()*uprcase.length)];
    // number+=lwrcase[Math.floor(Math.random()*lwrcase.length)];
    // number+=num[Math.floor(Math.random()*num.length)];
    // number+=special[Math.floor(Math.random()*special.length)];
    

   while(length>number.length){
       number+=allchar[Math.floor(Math.random()*allchar.length)];
       passwordbox.value=number;
   }
}

function copypassword()
{
    passwordbox.select();
    document.execCommand("copy");

}