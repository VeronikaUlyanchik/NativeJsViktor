function onClickHandler(e) {
    // e.stopPropagation()
    // console.log(e.target.id)
    console.log(e)
}

document.getElementById('small').addEventListener('click', onClickHandler)