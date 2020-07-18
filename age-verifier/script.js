function verify(){
    const data = new Date()   
    const year = data.getFullYear()
    const fyear = document.getElementById('txtyear')
    const res = document.querySelector('div#res')

    if(fyear.value.length == 0 || fyear.value > year){
        alert('[Error] verify the data and try again')
    }else{
        const fsex = document.getElementsByName('radsex')
        const age = year - fyear.value
        let genre = ''

        const img = document.createElement('img')
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