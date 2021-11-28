const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const perentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const btn = document.getElementById('btn')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {

    //remove the last cup selected 
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    //This whill highlight all of the cups that are smaller then the current cup
    //if idx is 3 it will highlight 0,1,2,3
    smallCups.forEach((cup, idx2) => {
        if(idx2  <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
        updateBigCup()
    })
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups == totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else { 
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)} L`
    }
}

