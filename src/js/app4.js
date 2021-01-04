import '../css/app4.css';
import $ from 'jquery';

const $circle =  $('#app4 .circle');

$circle.on('mouseenter', ()=>{
    $circle.toggleClass('active');
})