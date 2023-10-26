// const copy = require("copy-to-clipboard");

const control = document.querySelectorAll(".control");
const section= document.querySelectorAll(".sec");
const allsections= document.querySelector(".main-container");
const clickable= document.querySelectorAll(".h")
const contact = 'contact-me';


    clickable.forEach(e=>{
        e.addEventListener("click",
        function(){
           const id= this.dataset.id;
         
           if(id){
            section.forEach(e=>{
                e.classList.remove("active")
            })
            const element = document.getElementById(this.dataset.id);
            
            element.classList.add("active")
           }
          
          
        })
    })

    control.forEach(e=>{
        e.addEventListener("click",
        function(){
           const id= this.dataset.id;
           if(id){
            section.forEach(e=>{
                e.classList.remove("active")
            })
            const element = document.getElementById(id);
            console.log(id)
            element.classList.add("active")
           }
        })
    })
    
    
//   for dark mode 

const modebtn= document.querySelector("#mode");
const darkbtn= document.querySelector(".off");
const light = document.querySelector(".light");
const di = document.querySelector(".di");

modebtn.addEventListener("click",
function(){
    darkbtn.classList.toggle("dark");
    modebtn.classList.toggle("darkish");
    light.classList.toggle("on");
    di.classList.toggle("sl")
})


const con = document.querySelector(".contact");
con.addEventListener("click",
function(){
    const c = document.querySelector(".contact").innerHTML;
   
    navigator.clipboard.writeText(c);
    console.log("hi")
})

// rotating text sphere
const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT','GIT', 'REACT',
    'C++', 'BOOTSTRAP',
     'NODEJS',
    'REACT', 'JAVA'
    
];

var tagCloud = TagCloud('.Sphere', Texts, {
    radius: 130,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true

});

// Giving color to each text in sphere
var color = '#FF5733 ';
document.querySelector('.Sphere').style.color = color;