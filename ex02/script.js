function verify(){
    var data = new Date()   
    var year = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if(fyear.value.length == 0 || fyear.value > year){
        alert('[Error] verify the data and try again')
    }else{
        var fsex = document.getElementsByName('radsex')
        var age = year - fyear.value
        var genre = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'picture')

        if(fsex[0].checked){
            genre = 'Man'
            if(age >= 0 && age < 10){
                //Child
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(age < 21){
                //Young
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(age < 50){
                //Adult
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //Old
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        }else{
            genre = 'Woman'
            if(age >= 0 && age < 10){
                //Child
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(age < 21){
                //Young
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(age < 50){
                //Adult
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //Old
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${age} years old ${genre}`
        res.appendChild(img)
    }
}