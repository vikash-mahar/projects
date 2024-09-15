const getcolor=()=>{
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode ='#'+randomnumber.toString(16);
    document.body.style.backgroundColor= randomcode;
    document.getElementById("color-code").innerText=randomcode;

     navigator.clipboard.writeText(randomcode)
}

document.getElementById("btn").addEventListener("click",getcolor)

getcolor();