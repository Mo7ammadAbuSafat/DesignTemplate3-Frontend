function set(a,b,c,d,e,f){
    document.getElementById(a).style.display="flex";
    document.getElementById(d).style.color="#f05d5b";
    document.getElementById(d).style.borderBottom= "3px solid #f05d5b";
    document.getElementById(b).style.display="none";
    document.getElementById(e).style.color="rgba(0, 0, 0, 0.622)";
    document.getElementById(e).style.borderBottom= "3px solid silver";
    document.getElementById(c).style.display="none";
    document.getElementById(f).style.color="rgba(0, 0, 0, 0.622)";
    document.getElementById(f).style.borderBottom= "3px solid silver";
}

function showHide(){
    let arrow =window.event.target.lastElementChild;
    arrow.classList.toggle("fa-angle-down");
    arrow.classList.toggle("fa-angle-up");

    let text =window.event.target.parentElement.lastElementChild;
    console.log(text);
    text.classList.toggle("hidden");
}