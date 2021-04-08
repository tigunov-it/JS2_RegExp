// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки.
// Придумать шаблон, который заменяет одинарные кавычки на двойные.

let text = "One: 'Hi Mary.'\n" +
    "Two: 'Oh, hi.'\n" +
    "One: 'How are you doing?'\n" +
    "Two: 'I'm doing alright. How about you?'\n" +
    "One: 'Not too bad. The weather is great isn't it?'\n" +
    "Two: 'Yes. It's absolutely beautiful today.'\n" +
    "One: 'I wish it was like this more frequently.'\n" +
    "Two: 'Me too.'\n" +
    "One: 'So where are you going now?'\n" +
    "Two: 'I'm going to meet a friend of mine at the department store.'\n" +
    "One: 'Going to do a little shopping?'\n" +
    "Two: 'Yeah, I have to buy some presents for my parents.'\n" +
    "One: 'What's the occasion?'\n" +
    "Two: 'It's their anniversary.'\n" +
    "One: 'That's great. Well, you better get going. You don't want to be late.'\n" +
    "Two: 'I'll see you next time.'\n" +
    "One: 'Sure. Bye.'"

console.log('Исходный текст: ' + text);
console.log('Задание 1. Заменили все кавычки на двойные: ' + text.replace(/'/g,'"'));

// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

let quoteEnd = text.replace(/'$/gm,'"');
let quoteStart = quoteEnd.replace(/\s'/gm,' "');

console.log(quoteEnd);
console.log('Задание 2. ' + quoteStart);

// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
//     a. Имя содержит только буквы.
//     b. Телефон имеет вид +7(000)000-0000.
//     c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
//     d. Текст произвольный.
//     e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.


let name = document.getElementById('name');
let tel = document.getElementById('tel');
let email = document.getElementById('email');
let submit = document.getElementById('button');

document.getElementById('button').addEventListener('click', function (event){
    let nameString = new RegExp('([^a-zA-Z])');
    let telString = new RegExp('([^0-9-])');
    let emailString = new RegExp('(^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$)');
    if (nameString.test(name.value)) {
        console.log('ошибка');
        document.getElementById('name').classList.add('error');
    }
    if (telString.test(tel.value)) {
        console.log('ошибка');
        document.getElementById('tel').classList.add('error');
    }
    if (!emailString.test(email.value)) {
        console.log('ошибка');
        document.getElementById('email').classList.add('error');
    }
})


