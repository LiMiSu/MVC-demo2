import './app2.css';
import $ from 'jquery';

const html = `
 <!--tap切换-->
    <section id="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li class="active">内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`
const $element = $(html).appendTo($('body>.page'))

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

const localKey = 'app2.index';
const index = localStorage.getItem(localKey) || 0;//下次读


$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings().removeClass('selected');
    const index = $li.index();

    localStorage.setItem(localKey, index)//这次设置

    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active');
})
$tabBar.children().eq(index).trigger('click');