// const myNumber = 5;
// const userNumber = prompt('Ведіть ваше число')
// if(myNumber == userNumber){
//     alert('win')
// } 
// else if(userNumber == 10){
//     alert('ви написали число 10')
// }

// else if(userNumber == 15){
//     alert('ви написали число 15')
// }

// else{
//     alert('lose')
// }

// const firstThing = prompt('Напишіть назву вашого першого багажу')
// const secondThing = prompt('Напишіть назву вашого другого багажу')
// const thirdThing = prompt('Напишіть назву вашого третього багажу')

// if(firstThing == 'зброя' || secondThing == 'цигарки' || thirdThing == 'тварина'){
//     alert('Ви затримані!')
// }else{
//     alert('Проходьте далі')
// }

// const firstpromt= prompt('Напишіть перше число')

// const mathSymbol= prompt('Напишіть якийсь з цих символів (+,-,/,*) ')


// const promt= prompt('Напишіть друге число')

// if(firstThing == '6' || secondThing == '+' || thirdThing == '3'){
//     alert('Ви виграли!')
// }else{
//     alert('ви програли')
// }


// const firstNumber = prompt('Впишіть перше число')
// const mathSymbol = prompt('Впишіть якись з цих символів (+,-,/,*)')
// const secondNumber = prompt('Впишіть друге число')


// 1 - дізнатися у клієнта перше число (від 1 до 9)
// 2 - дізанатися у клієнта математичний символ (+,-,/,*) 
// 3 - дізнатися у клієнта перше число (від 1 до 9)

// if(firstNumber && mathSymbol && secondNumber){
//     if(firstNumber > 9 || secondNumber > 9 ){
//         alert("ви обрали число більше 9 так не можна")
//     }
//     else if(firstNumber == 0 || secondNumber == 0 ){
//         alert("ви обрали число менше 1 так не можна")
//     }
//     if(mathSymbol == '+'){
//         alert(firstNumber + secondNumber)
//     }
//     else if(mathSymbol == '-'){
//         alert(firstNumber - secondNumber)
//     }
//     else if(mathSymbol == '*'){
//         alert(firstNumber * secondNumber)
//     }
//     else if(mathSymbol == '/'){
//         alert(firstNumber / secondNumber)
//     }
// }
// else{
//     alert('Ви не заповнили якесь поле. Будь-ласка заповніть усі поля')
// }
// 4 - якщо клієнт обрав всі числа та символ - вивести йому в алерт результа його рівняння
// 5 - якщо клієнт обрав якесь число більше 9 - вивести йому в алерт фразу "ви обрали число більше 9 так не можна"
// 6 - якщо клієнт обрав число 0 - вивести йому в алерт фразу "ви обрали число менше 1 так не можна"  

const totalSpend = Number(prompt('enter total spend amaunt'))
const payment = Number(prompt('enter current spending'))

if (totalSpend && payment) {
    


if (totalSpend >= 100 && totalSpend < 1000){
    let discount = 2
     alert(`Proceeding the order in amount of ${payment} with discount ${discount}%`)
     alert("bronze partner, discount 2%")
}
     else if (totalSpend >= 1000 && totalSpend < 5000){
        let discount = 5
         alert(`Proceeding the order in amount of ${payment} with discount ${discount}%`)
         alert("silver partner, discount 5%")
     }

     else if (totalSpend >= 5000){
        let discount = 10
         alert(`Proceeding the order in amount of ${payment} with discount ${discount}%`)
         alert("gold partner, discount 10%")
     }

     else{
        let discount = 0
         alert(`Proceeding the order in amount of ${payment} with discount ${discount}%`)
         alert("not partner, discount 0%")
     }
} else{
    alert('invalid input')
}