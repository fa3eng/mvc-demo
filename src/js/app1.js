import $ from 'jquery'
import '../css/app1.css';

const $add = $('#add');
const $sub = $('#sub');
const $multiply = $('#multiply');
const $divide = $('#divide');
const $numSpan = $('.output > span');

// 存放到浏览器中
const n = localStorage.getItem('n');
$numSpan.text(n || 100);

$add.on('click', () => {
    let num = parseInt($numSpan.text());
    $numSpan.text(num + 1);
    localStorage.setItem('n', num + 1);
})

$sub.on('click', () => {
    let num = parseInt($numSpan.text());
    $numSpan.text(num - 1);
    localStorage.setItem('n', num - 1);
})

$multiply.on('click', () => {
    let num = parseInt($numSpan.text());
    $numSpan.text(num * 2);
    localStorage.setItem('n', num * 2);
})

$divide.on('click', () => {
    let num = parseInt($numSpan.text());
    $numSpan.text(num / 2);
    localStorage.setItem('n', num / 2);
})