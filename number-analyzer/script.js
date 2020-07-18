let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let values = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumber(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Invalid value or value aready found in the list!')
    }
    num.value = ''
    num.focus()
}

function finalize(){
    if(values.length == 0){
        alert('Add values before finalize')
    }else{
        let tot = values.length

        let greater = values[0]
        let less = values[0]

        let sum = 0
        let average = 0

        for(let pos in values){
            sum += values[pos]

            greater = values[pos] > greater ? values[pos] : greater
            less = values[pos] < less ? values[pos] : less

            /*    
            if(values[pos] > greater){
                greater = values[pos]
            }

            if(values[pos] < less){
                less = values[pos]
            }
            */
        }
        average = sum / tot


        res.innerHTML = ''
        res.innerHTML += `<p>In all, we have ${tot} registered numbers</p>`
        res.innerHTML += `<p>The lowest value is ${less}</p>`
        res.innerHTML += `<p>The greater values is ${greater}</p>`
        res.innerHTML += `<p>The sum of all values is ${sum}</p>`
        res.innerHTML += `<p>The average is ${average}</p>`

    }
}