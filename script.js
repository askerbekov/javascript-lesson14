const imgBalls = document.querySelectorAll('.img-wrapper')
const check = document.querySelectorAll('input')
const selektAll =document.querySelector('#selAll')

imgBalls.forEach((img,idx)   => {
    img.addEventListener('click', () => {
        img.classList.toggle('bg-red')
        if ( img.classList.contains('bg-red') === true){
            check[idx].checked = true
        } else {
            check[idx].checked = false

        }
    })
})

let trueFalse = false
selektAll.addEventListener('click' , () => {
    if (trueFalse === false){
        imgBalls.forEach((img , idx) => {
            img.classList.add('bg-red')
            check[idx].checked = true
            trueFalse = true
        })
    }
    else {
        imgBalls.forEach((img , idx)    => {
            img.classList.remove('bg-red')
            check[idx].checked = false
            trueFalse = false
        })
    }
})




// const clearBg = setInterval(( ) => {
//     imgBalls.forEach((img) =>{
//         img.classList
//     })
// }, 1200)

