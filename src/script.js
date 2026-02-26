let allCards=document.querySelector("#allCards")
let search=document.querySelector("#search");
let searchbar= document.querySelector(".searchbar");
let add=document.querySelector(".addcard");
let cardSpace=document.querySelector("#collection");
let newWindow=document.querySelector("#newWindow");


//people array


let peoples=[
    {name:"Spandan Rana", image:"https://plus.unsplash.com/premium_photo-1706625661544-cf6ad6902f57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {
        name: "Koushik Murakunda", image: "https://images.unsplash.com/photo-1771514069115-f2d790f9ed0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Rohan Shikhar", image:"https://4kwallpapers.com/images/walls/thumbs_3t/17655.jpg" 
    },

    {
        name: "Souvik Bhattacharya", image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },

    {
        name: "Saaj", image:"https://images.unsplash.com/photo-1561928297-8ddd5d1eb54b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }

];


//display all cards function

let showPeople=()=>{
    for (let people of peoples ){
        //create cards
        let div=document.createElement("div");
        div.classList.add("card");
        div.style.backgroundImage=`url(${people.image})`;
        div.style.position="relative";
        div.style.scrollMarginLeft=`${-50}px`;
        allCards.appendChild(div);


        //create names

        let div2=document.createElement("div");
        div2.classList.add("cardname");
        div2.textContent= people.name;
        div.appendChild(div2);
        
    }

}

showPeople();

//search function
let searchPeople=()=>{
console.log(searchbar.value);
    
    //checks match and filter
    let user=searchbar.value.toLocaleLowerCase();
   let matchFound= peoples.filter((people)=>{
    return people.name.toLocaleLowerCase().includes(user);
   })

   if(matchFound!=""){

   //execution
   allCards.replaceChildren();
   add.style.display="none";
   for(match of matchFound){
    let matchCard=document.createElement("div");
    matchCard.classList.add("card");
    matchCard.style.backgroundImage=`url(${match.image})`;
    matchCard.style.margin=3.5+"px";
    allCards.appendChild(matchCard);

     let div2=document.createElement("div");
        div2.classList.add("cardname");
        div2.textContent= match.name;
        matchCard.appendChild(div2);
   }
}else{
    allCards.replaceChildren();
    let errorText=document.createElement("div");
    errorText.innerHTML="<b>NO MATCH FOUND!<b>";
    errorText.style.color="white";
    allCards.appendChild(errorText);

}  
};

//2 event listeners

searchbar.addEventListener("change",()=>{
    
searchPeople();


});

search.addEventListener("click",()=>{
    searchPeople();
})

//progress.......
add.addEventListener("click",()=>{
    newWindow.setAttribute("href","addCard.html");
});

