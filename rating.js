//collect all stars
let target=document.querySelectorAll(".star")
target.forEach((star,index1)=>{
  //setup click listener to every stars
  star.addEventListener("click",()=>{
    target.forEach((star,index2)=>{
      //index2 runs through all the target stars
      if(index1>=index2){
        star.classList.add("highlight")
      }
      else{
        star.classList.remove("highlight")
      }
    })
    //display Rating
    const rating=document.getElementById("display")
    rating.innerHTML=`${index1+1}`
  })
})
