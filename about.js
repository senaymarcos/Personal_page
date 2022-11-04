let experience=[ 
    {
         name:"html",
         imageUrl:`./image/html.png`,
       //   OtherPage:function changeOpacity() {
       //    var element=document.getElementsByClassName("personalInfo_card");
       //    element.style.opacity=0.5;
       //    console.log(element);
       //   }
     },

   {
       name:"css",
    
        imageUrl:`./image/css.png`
   },

   {
       name:"Javascript",
       
        imageUrl:`./image/javascript.png`
   },
   {
       name:"Bootstrapt",
        imageUrl:`./image/bootsrapt.png`
   },
   {
       name:"Sass ",
        imageUrl:`./image/sass.png`
   },
   {
    name:" microsoftdatabase ",
     imageUrl:`./image/sql.png`
  },
 
]

let imgContainer=document.getElementById("container_experience");
let str="";
for (let i = 0; i< experience.length; i++) {
    let field=experience[i];
    
    str+=`<div  class="imj">`
    str+="<img src="+ field.imageUrl +">"
   str+="</div>"

   str+="</div>"
   str+="</div>"
}

imgContainer.innerHTML=str;