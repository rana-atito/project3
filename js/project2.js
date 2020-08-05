// settings bos on icon
const icon = document.querySelector(".fa-angle-double-right");
console.log (icon);
icon.onclick = function(){

    document.querySelector(".settings-box").classList.toggle("open");    

};

// end setting box 

//switch colors

const colorsli = document.querySelectorAll(".colors-list.li");
//loop on all list items
colorsli.forEach(li => {
    //loop on every list items
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    });
});

//landing bage
let landingPage = document.querySelector(".landing-page");
console.log(landingPage);

let imgsArray = ["01.png","02.jpg","03.jpg","04.jpg"];

setInterval(() =>{

//get random number
let randomNumber = Math.floor(Math.random()* imgsArray.length);

//chang background img
landingPage.style.backgroundImage = `url("images/project2/${imgsArray[randomNumber]}")`;

},10000);

//kont 3yza a8er sora al background kol 3 sec bs m3rft4 



//skills
let ourSkills = document.querySelector(".skills");

window.onscroll = function (){
    //skills ofset top
    let skillsOffsetTop = ourSkills.offsetTop;

    //skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //wendow height
    let windowHeight = this.innerHeight;

    //window scrolltop
    let windowScrollTop = this.pageYOffset;
    console.log(windowScrollTop => (skillsOffsetTop + skillsOuterHeight - windowHeight));
    if(windowScrollTop => (skillsOffsetTop + skillsOuterHeight - windowHeight )){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;


        });
    }
};
//popup
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        //creat overlay
        let overlay = document.createElement("div");

        //add class to overlay
        overlay.className = 'popup-overlay';
        
        //append over lay to the body 
        document.body.appendChild(overlay);

    });


});