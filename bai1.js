const inta = document.getElementById("int-a");
const intb = document.getElementById("int-b");
const button = document.getElementById("button");
const ketQua = document.getElementById("ketqua");
const arr = [];
button.addEventListener("click",()=>{
    let a = parseInt(inta.value);
    let b = parseInt(intb.value);
    for(let i=a;i<=b;i++){
        for(let j = 1;j<=Math.floor(b/2);j++){
            if (i==j*j){
                arr.push(i);
            }
        }
    }
    ketQua.innerText = "số chính phương trong khoảng từ "+a+" đến "+b+" là : " + arr;
    // alert("các số chính phương trong khoảng " +a+" đến "+b+" là "+ arr)
})
