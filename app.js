var min_id = document.getElementById('min')
var sec_id = document.getElementById('sec')
var milisec_id = document.getElementById('milisec')
var mint = 0
var second = 0;
var mil = 0;
  var interval2

function start() {
    interval2 = setInterval(timer, 100)
    document.getElementById('start').setAttribute('disabled', true)
    document.getElementById('pause').removeAttribute('disabled')
}

function timer() {
    mil++;
    milisec_id.innerText = mil
    if (mil >= 10) {
        second++;
        sec_id.innerText = second
        mil = 0
    }
    if (second >= 60) {
        mint++;
        min_id.innerText = mint;
        second = 0;
    }
}

function pause() {
    clearInterval(interval2)
    document.getElementById('start').removeAttribute('disabled')
    document.getElementById('pause').setAttribute('disabled', true)

}

 function reset() {
    mil = 0;
    mint = 0;
    second = 0;
    milisec_id.innerText = mil
    sec_id.innerText = second
    min_id.innerText = mint;
    clearInterval(interval2)
     document.getElementById('start').removeAttribute('disabled')
 }