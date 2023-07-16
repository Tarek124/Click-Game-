const click = document.getElementById("click");
const reset = document.getElementById("reset");
const maindiv = document.getElementById('maindiv').style.display = 'none'
const start = document.getElementById("start");
document.getElementById("chapri").style.display = 'none';
start.addEventListener('click', function () {
    document.getElementById('maindiv').style.display = 'flex'
    document.getElementById('firstDiv').style.display = 'none'

    var timeleft = 10;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("maindiv").style.display = 'none';
            document.getElementById("chapri").style.display = 'block';
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
})

let number = 0;


click.addEventListener("click", function () {
    number++
    document.getElementById('num').innerText = number
})

var num = document.getElementById('num').innerHTML;

