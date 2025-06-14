import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

$(function () {
  $('.menu_btn').on('click', function () {
    $(this).toggleClass('active');
    $('.sub_menu_1').toggleClass('active');
  });

  $('.best_deal .best_deals_btns button').on('click', function () {
    const dataId = $(this).attr('data-id');

    $('.best_deal .best_deals_content .best_deals_tab.active').removeClass(
      'active',
    );
    $('.best_deal .best_deals_btns button.active').removeClass('active');
    $(this).addClass('active');
    $(`.best_deal .best_deals_content .best_deals_tab#${dataId}`).addClass(
      'active',
    );
  });
});
