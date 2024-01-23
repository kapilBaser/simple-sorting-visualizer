const container = document.getElementById('container')
const button = document.getElementsByTagName('button')[0]

let arr = []
function generateArray(){
    for(var i = 0; i < 9; i++)
        arr[i] = Math.floor(Math.random()*300)+10;
}

function generateBars(){
    for (var i = 0; i < 9; i++) {
        let bar = document.createElement('div');
        console.log(arr[i])
        bar.style.display = 'inline-block';
        bar.classList.add('bar');
       
        bar.style.height = arr[i] + 'px';

        container.appendChild(bar);
    } 
}

generateArray();
generateBars();


