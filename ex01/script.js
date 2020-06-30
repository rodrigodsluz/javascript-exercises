function update(){
    var msg = document.getElementById('msg')
    var image = document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    //var hour = 19
    msg.innerHTML = `Now it's ${hour} o'clock`

    if(hour >= 0 && hour < 12){

        image.src = 'morning.png'
        document.body.style.background = '#e2cd9f'
    }else if(hour >= 12 && hour <= 18){

        image.src = 'afternoon.png'
        document.body.style.background = '#b9846f'
    }else{

        image.src = 'night.png'
        document.body.style.background = '#515154'
    }
}
