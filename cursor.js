const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
const particleArray =[];


window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x:null,
    y:null
}

canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i =0;i<10;i++){
        particleArray.push(new Particle());

    }
})

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i =0;i<10;i++){
        particleArray.push(new Particle());

    }

})


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleparticles();
    requestAnimationFrame(animate);
}

animate();

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 7 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.sppedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.sppedY;
        if(this.size >0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = 'greenyellow';
    ctx.strokeStyle = 'greenyellow';
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    console.log(ctx);
    }
}


function handleparticles(){
    for(let i=0;i<particleArray.length;i++){
        particleArray[i].update();
        particleArray[i].draw();
        if(particleArray[i].size <=0.3){
            particleArray.splice(i,1);
            i--;
        }
    }
}
