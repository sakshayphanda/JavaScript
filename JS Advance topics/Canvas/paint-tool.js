window.addEventListener("load", () => {
    let canvas = document.querySelector('canvas');
    let clearAllButton = document.getElementById('clear');
    let brushSize = document.getElementById('brush-size');
    let context = canvas.getContext('2d');
    let painting = false;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    context.lineCap = "round";
    context.lineWidth ="10"


    clearAllButton.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    brushSize.addEventListener('keyup', (event) => {
        console.log(event);
        context.lineWidth = event.target.value;
    });
    
    console.log(window);

    context.strokeStyle = "blue";
    context.fillRect(10, 40, 250, 250);
    context.strokeRect(50, 80, 250, 250);
//    context.fillText('sakshay', 450, 450, 400);
  //  context.ellipse(600,600,10,15,45,0,180);
    //context.stroke();


    context.beginPath();
   // context.moveTo(500, 500);
  //  context.lineTo(600, 500);
    context.stroke();



    canvas.addEventListener("mousedown", () => {
        painting = true;
        context.beginPath();
        context.lineTo(event.clientX, event.clientY);
        context.stroke();

    });

    canvas.addEventListener("mouseup", () => {
        painting = false;
    });

    canvas.addEventListener("mousemove", (event) => {
        if(!painting) return;
        console.log(painting);
            context.lineTo(event.clientX, event.clientY);
            context.stroke();
        
    });
});



