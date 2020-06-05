import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function () {
  $('div').eq(2).toggleClass('active');
});

$('input').setAtt('id', 'lol');
$('input').setAtt('type', 'checkbox');
$('input').setAtt('checked');
console.log($('input').getAtt('id'));

console.log($('button').html(''));

$('div').click(function () {
  console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));

console.log($('.more').closest('.findme').addClass('closest')); //!!!!!

console.log($('.more').eq(0).siblings());
