import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

import $ from 'jquery';
window.$ = $;

$(function () {
  $('.menu_btn').on('click', function () {
    $(this).toggleClass('active');
    $('.sub_menu_1').toggleClass('active');
  });
});
