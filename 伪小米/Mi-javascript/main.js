var preBtn = document.getElementById('pre')
var nextBtn = document.getElementById('next')


function pre(){
    count--
    if(count === 0){
        count = 5
    }
    banner(count)
}
function next(){
    count++
    if(count === 6){
        count = 1
    }
    banner(count)
}

var count = 1      //全局下标

function banner(i){
    var bannerBox = document.getElementById('banner-box')
    var res = bannerBox.className.split(' ')
    bannerBox.className = res[0]+' '+'banner-box-'+i
}
var timer = setInterval(() => {
    count++
    if(count === 6){
        count = 1 
    }
    banner(count)
},3000);
