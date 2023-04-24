let display=document.getElementById("disp");
let button=document.getElementById("but");
let stateval=document.getElementById("state");
let lat=document.getElementById("lat");
let long=document.getElementById("long");


button.addEventListener('click',()=>{


 async function zip(){
  let cou=document.getElementById("country").value;
  let zipvalue=document.getElementById("zipcode").value;

  console.log(cou,zipvalue)
   
  
 let url=new URL(`https://api.zippopotam.us/${cou}/${zipvalue}`)

   let response=await fetch(url);

   let data=await response.json()
  if(cou==data.country)
  {
    alert("wrong")
  }
 
  let place = data.places[0]["place name"];
  let state=data.places[0]["state"];
  let longitude=data.places[0]["longitude"];
  let latitude=data.places[0]["latitude"];
  
  display.innerHTML=place
  stateval.innerHTML=state;
  lat.innerHTML=latitude;
  long.innerHTML=longitude;
   

 }

 zip()

})
