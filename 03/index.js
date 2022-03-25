
// События ->
// Генерирует объект, со сведениями о произошедшем событии -> e & event
// Функция ->
// Вызов функции с event в качестве параметра

// Объект события -> e, event
// Функция -> обработчик, handler, слушатель, listener, подписчик, subscriber

function onClickHandler(e) {
    // e.stopPropagation()
    // console.log(e.target.id)
    console.log(e.currentTarget.id)
}

const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

//"Всплытие" события
sml.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick = onClickHandler




// e.currentTarget -> элемент, который вызвал обработчик в процессе всплытия
// e.target -> элемент, который сгенерировал событие (первый получил клик)

// Как остановить распространение события?
// e.stopPropagation()

// Удаление обработчика
mdm.onclick = null

// Использование метода addEventListener
mdm.addEventListener("click", onClickHandler)
mdm.removeEventListener("click", onClickHandler)
//https://htmlacademy.ru/blog/boost/frontend/prevent-default

// События input

const inp = document.getElementById("input")

function onChangeHandler(e) {
    console.log(e.currentTarget.value)
}

// inp.oninput = onChangeHandler
// inp.onchange = onChangeHandler
// inp.onblur = () => { alert("фокус ушёл") }
inp.onkeydown = (e) => { console.log(e.key)}

