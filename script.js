const btn = document.getElementById("button")

const randomColor = () => {
    let val = "0123456789ABCDEF"
    let cons = "#"

    for(let i = 0 ; i < 6 ; i++){
        cons += val[Math.floor(Math.random() * 16)]
    }
    console.log(cons)

    document.body.style.backgroundColor = cons
}

btn.addEventListener("click", randomColor )
