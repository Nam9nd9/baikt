const btn = document.getElementById("button-random");
const body = document.getElementById("body");
const picColor = document.getElementById("pic-color")


btn.addEventListener("click",()=>{

    let color = "";
    for(let i = 0; i < 3; i++) {
        let sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    let y="#"+color
    body.style.backgroundColor=y;


})


picColor.addEventListener("click",()=>{ 
        let value = picColor.value;
        const maMau = document.getElementById("mamau");
        maMau.innerText=value;
        const btnCopy = document.getElementById("copy");
        btnCopy.addEventListener("click",()=>{
            navigator.clipboard.writeText(value);
            alert("đã copy mã màu : " + value);
        });
        body.style.backgroundColor=value;

})