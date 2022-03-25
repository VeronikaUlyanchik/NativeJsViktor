// function onClickHandler(e) {
//     // e.stopPropagation()
//     // console.log(e.target.id)
//     console.log(e)
// }
//
// document.getElementById('small').addEventListener('click', onClickHandler)

function getBanknoteList(amountOfMoney) {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result =[];
    let newAmount = amountOfMoney;
    for (let i = 0; i < banknotes.length; i++) {
        while (newAmount>=banknotes[0]){
            newAmount = newAmount - banknotes[0];
            result.push(banknotes[0])
        }
        while (newAmount>=banknotes[i] && newAmount<banknotes[i-1]){
            newAmount = newAmount - banknotes[i];
            result.push(banknotes[i])
        }
    }
    return result
}
    // while (newAmount>=1000){
    //     newAmount = newAmount - 1000;
    //     result.push(1000)
    // }
    // while (newAmount>=500 && newAmount<1000){
    //     newAmount = newAmount - 500;
    //     result.push(500)
    // }
    // while (newAmount>=100 && newAmount<500){
    //     newAmount = newAmount - 100;
    //     result.push(100)
    // }
    // while (newAmount>=50 && newAmount<100){
    //     newAmount = newAmount - 50;
    //     result.push(50)
    // }
    // while (newAmount>=20 && newAmount<50) {
    //     newAmount = newAmount - 20;
    //     result.push(20)
    // }
    // while(newAmount>=10 && newAmount<20){
    //     newAmount = newAmount - 10;
    //     result.push(10)
    // }
    // while(newAmount>=5 && newAmount<10){
    //     newAmount = newAmount - 5;
    //     result.push(5)
    // }
    // while(newAmount>=2 && newAmount<5){
    //     newAmount = newAmount - 2;
    //     result.push(2)
    // }
    // while(newAmount>=1 && newAmount<2){
    //     newAmount = newAmount - 1;
    //     result.push(1)
    // }


console.log(getBanknoteList(2500))
console.log(getBanknoteList(2526))