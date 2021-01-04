import '../css/app3.css';
import $ from 'jquery';

const $square = $('#app3 .square');

$square.on('click', ()=>{
    // 该方法检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之。
    $square.toggleClass('active');
})