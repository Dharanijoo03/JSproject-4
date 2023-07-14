// const ball=document.getElementsByClassName("ball");
// document.onmousemove=(a)=>{
// const x=(a.clientX*100)/window.innerWidth+'%';
// const y=(a.clientX*100)/window.innerWidth+'%';
// for(i=0;i<100;i++){
//     ball[i].style.left=x;
//     ball[i].style.top=y;
// }
// }


const balls=document.getElementsByClassName('ball');
document.onmousemove=(a)=>{
const x=(a.clientX*100)/window.innerWidth+'%';
const y=(a.clientY*100)/window.innerHeight+'%';
for(i=0;i<100;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform ='translate(-' + x +',-' + y + ')';
}
};

