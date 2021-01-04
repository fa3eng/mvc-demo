import '../css/app2.css';
import $ from 'jquery';

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

$tabBar.on('click', 'li', (event)=> {
    const $li = $(event.currentTarget);

    // siblings 方法返回被选元素的所有同级元素。
    $li.addClass('selected')
        .siblings()
        .removeClass('selected');

    const index = $li.index();
    $tabContent.children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
})
