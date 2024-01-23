const container = document.getElementById('container')
const button = document.getElementsByTagName('button')[0]

let arr = []
function generateArray(){
    for(var i = 0; i < 9; i++)
        arr[i] = Math.floor(Math.random()*300)+10;
}
