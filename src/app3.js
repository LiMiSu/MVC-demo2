import './app3.css';
import $ from 'jquery';


const html = `
    <!--点击动画-->
    <section id="app3">
        <div class="square"></div>
    </section>
`
const $element = $(html).appendTo($('body>.page'));


const $square = $('#app3 .square');

const localKey = 'app3.active';
const active = localStorage.getItem(localKey) === 'yes';

$square.toggleClass('active', active)

$square.on('click', () => {
    if ($square.hasClass('active')) {
        $square.removeClass('active');
        localStorage.setItem(localKey, 'no');
    } else {
        $square.addClass('active');
        localStorage.setItem(localKey, 'yes');
    }
})