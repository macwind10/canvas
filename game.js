var canvas = document.getElementById("container")
ctx = canvas.getContext('2d')


var Circle = function(x, y, dx, dy, radius, colorId){
    this.radius = radius
    this.x = x + radius
    this.y = y + radius
    this.dx = dx
    this.dy = dy

    this.draw = function(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2,false)
        ctx.fillStyle = colorId
        ctx.closePath()
        ctx.fill()
        ctx.strokeStyle = "blue"
        ctx.stroke()
    }
    this.update = function(){
        if (this.x + this.radius  > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if ( this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        //interactivity

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            this.radius += 1
        }else if (this.radius > 10){
            this.radius -= 1
        }

        this.draw()
    }
}

var mouse = new Object()

window.addEventListener('mousemove', function(event){
    mouse.x = event.x 
    mouse.y = event.y 
})

var ColorArray = [
    "black",
    "green",
    "red",
    "yellow"
]

CircleArray = []

function init() {
    for(var i = 0; i < 1000 ; i++ ){
        var x = Math.floor(Math.random() * canvas.width)
        var y = Math.floor(Math.random() * canvas.height)
        var dx = (Math.random() - 0.5) * 8
        var dy = (Math.random() - 0.5) * 8
        var radius = 30
        var colorID = Math.floor(Math.random() * ColorArray.length)
        console.colorID
    
        var c = new Circle(x, y, dx, dy, radius, ColorArray[colorID])
        CircleArray.push(c)
    }
}




function animated(){
    requestAnimationFrame(animated)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 0 ; i < CircleArray.length; i++ ){
        CircleArray[i].update()
    }
        
}


init()
animated()