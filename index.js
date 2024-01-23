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

async function selectionSort(delay = 300) {

    //  return all div array whose class=bar
    let bars = document.querySelectorAll(".bar");


    for (var i = 0; i < bars.length - 1; i++) {

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 500)

        );

        bars[i].style.backgroundColor = "rgb(253, 93, 0)";

        for (var j = i + 1; j < bars.length; j++) {

            bars[j].style.backgroundColor = 'rgb(253, 93, 0)';

            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 500)

            );
            if (arr[i] > arr[j]) {

                bars[j].style.backgroundColor = "red";

                //await function to pause for a while
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 500)

                );

                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                bars[i].style.height = arr[i] + 'px';
                bars[j].style.height = arr[j] + 'px';
            }

            if (i == bars.length - 2) {

                bars[i].style.transitionProperty = "background-color";
                bars[i].style.transitionDuration = '1s';
                bars[j].style.backgroundColor = "green";
            } 
            else{
                bars[j].style.backgroundColor = "rgb(43, 42, 42)";
            }
            //await function to pause for a while
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 500)

            );
        } // for loop end

        bars[i].style.transitionProperty = "background-color";
        bars[i].style.transitionDuration = '1s';
        bars[i].style.backgroundColor = "green ";

    } // for loop end

   
}
