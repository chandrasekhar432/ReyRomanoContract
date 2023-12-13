const xtop = document.getElementsByClassName("back-to-topbtn")
window.addEventListener("scroll",()=> {
    if(window.pageYOffset>100){
        top.classList.add("active");
    
    }
    else{
        top.classList.remove("active");

    }
})

// let video = document.getElementById("video")
// console.log(video);

// video.addEventListener("click",()=> {
//     let chandu = video.classList.toggle("abc")
//     if(chandu){
//         video.play()
//     }
//     else{
//         video.pause()
//     }
// })

// if(navigator.onLine){
//     document.write("online35467890-87654")
// }
// else{
//     document.write("offline")
// }



// let btn = document.getElementById("btn")

// btn.onclick = function() {
//     navigator.mediaDevices.getDisplayMedia()
// }

// btn.onclick = function() {
//     navigator.share(data)
// }
// let data = {
//     name :"chadnu",
//     url :"http://www.youtube.com"
// }

// let prompt = window.prompt("enter color")
// btn.innerHTML+= prompt

// btn.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = `${prompt}`
//     btn.style.backgroundColor=`${prompt}`
//     btn.style.transition=`0.547s`
//     btn.style.content=''
// })




