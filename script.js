// query selector select the only one class
// query selector all select the all classess with same name

const panel= document.querySelectorAll('.panel');

console.log(panel);
panel.forEach((panels)=>{
    panels.addEventListener('click',()=>{
        removeActiveClass();
        panels.classList.add('active')
    })
});
function removeActiveClass(){
    panel.forEach((panels)=>{
            panels.classList.remove('active')
    }
    )
}