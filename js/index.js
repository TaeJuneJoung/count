let errorMessage = document.getElementById('errorMessage')
function minus(target) {
    let targetElement = document.getElementById(target)
    if (targetElement.textContent == 0) {
        errorMessage.innerText = "0아래로 내려갈 순 없습니다."
        setTimeout(function() {
            errorMessage.innerText = ""
        }, 3000)
    } else {
        targetElement.innerText--
    }
}

function plus(target) {
    let targetElement = document.getElementById(target)
    targetElement.innerText++
    if (targetElement.textContent > 0) {
        errorMessage.innerText = ""
    }
}