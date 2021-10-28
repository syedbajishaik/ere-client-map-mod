$(document).ready(function () {

  setTimeout(function () {
    $(".bgv_check_det").addClass("active");
  }, 1000);

  $(".close_check_details").click(function () {
    $(".bgv_check_det").removeClass("active");
  })

  $(".modal_open").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    let modal = $(this).attr("data-modalName");
    $("#" + modal + "").addClass("active");
  })

  $(".open_modal_check").click(function (e) {
    if ($(this).children("input").prop("checked")) {
      console.log("checked");
      $(this).children("input").prop("checked", "true");
      let modal = $(this).attr("data-modalName");
      $("#" + modal + "").addClass("active");
    } else {
      $(this).children("input").removeAttr("checked");

      console.log("not checked");

    }
  })

  $(".custom_modal .close").click(function () {
    // console.log("close");
    $(this).closest(".custom_modal").removeClass("active");
  })

  // scroll_actions -active
  $(".scroll_actions li span").click(function () {
    $(this).parent().parent().parent(".scroll_actions").toggleClass("active");
  })

  // profile_card_show
  $(".open_popup").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).children(".action_popup").toggleClass("active");
  });
  $(".open_filter").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).siblings(".filter_wrap").toggleClass("active");
  });
  $(".open_popup_check input").change(function () {
    $(this).siblings(".action_popup").toggleClass("active");
  })

  $(".close_popup").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).closest(".filter_wrap").removeClass("active");
    $(this).closest(".action_popup").removeClass("active");
  })

  $(".popup_body, .popup_header").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
  })

  $(".docs_mainwrap p, .info_table .accordion-toggle").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
  })

  // sidebar add class
  $(".side_menu").click(function () {
    $(".leftSideBar").toggleClass("active");
  })

  $('.nav-tab').on('click', function () {
    showActiveTabContent($(this));
  });
  function showActiveTabContent(thiss) {
    var tabname = thiss.data('tab');
    $('*[data-content], *[data-tab]').removeClass('active');
    $('*[data-content="' + tabname + '"], *[data-tab="' + tabname + '"]').addClass('active');
  }


  // table_xre, table_wrap, tbody, custom_tr, custom_th, custom_td
  $('.table_xre .table_wrap .custom_tr .custom_th').each(function (index) {
    var thisth = $(this);
    $(thisth).css({ 'width': thisth.data('colwidth') + '%' });
    $('.table_xre .table_wrap .tbody .custom_tr').each(function (ind, thistr) {
      $(thistr).find('.custom_td').eq(index).css({ 'width': thisth.data('colwidth') + '%' });
      if (thisth.hasClass('text_center')) {
        $(thistr).find('.custom_td').eq(index).addClass('text_center');
      }
    });
  });
  // $('.leftSideBar_menu_option_list ul li').on('click', function(){
  //   $('.table_xre .table_wrap .custom_tr .custom_th').each(function (index) {
  //     setTimeout(function(){
  //       var thisth = $(this);
  //       $(thisth).css({ 'width': thisth.data('colwidth') + '%' });
  //       $('.table_xre .table_wrap .tbody .custom_tr').each(function (ind, thistr) {
  //         $(thistr).find('.custom_td').eq(index).css({ 'width': thisth.data('colwidth') + '%' });
  //         if (thisth.hasClass('text_center')) {
  //           $(thistr).find('.custom_td').eq(index).addClass('text_center');
  //         }
  //       });
  //     },1000)
  //   });
  // })
  // $('.table_xre .table_wrap .tbody .custom_tr .custom_td input[type="checkbox"]').on('click', function(){
  //   if($(this).prop('checked')){
  //     $(this).closest('.custom_tr').addClass('selected_row')
  //   }else{
  //     $(this).closest('.custom_tr').removeClass('selected_row')
  //   }
  //   var allchecks;
  //   $('.table_xre .table_wrap .tbody .custom_tr .custom_td input[type="checkbox"]').each(function(){
  //     if($(this).prop('checked')){
  //       allchecks =  true;
  //     }else{
  //       allchecks = false;
  //       return false;
  //     }
  //   });
  //   if(allchecks){
  //     $('.table_xre .table_wrap .custom_tr .custom_th input[type="checkbox"]').prop('checked', true);
  //   }else{
  //     $('.table_xre .table_wrap .custom_tr .custom_th input[type="checkbox"]').prop('checked', false);
  //   }
  // });
  // $('.table_xre .table_wrap .custom_tr .custom_th input[type="checkbox"]').on('click', function(){
  //   if($(this).prop('checked')){
  //     $('.table_xre .table_wrap .tbody .custom_tr .custom_td input[type="checkbox"]').prop('checked', true)
  //   }else{
  //     $('.table_xre .table_wrap .tbody .custom_tr .custom_td input[type="checkbox"]').prop('checked', false)
  //   }
  // });
});
$(function () {
  $('.box').matchHeight();
});
