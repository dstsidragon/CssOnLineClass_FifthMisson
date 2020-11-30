"use strict";

/* Question */
$(function () {
  /*開啟VIP加速*/
  $('.btn-loading').click(function () {
    //開啟/關閉單獨loading
    $('.loading-ninja').toggleClass('d-none'); //開啟/關閉八倍loading

    $('.loadingGroup').toggleClass('d-none'); //開啟/關閉八倍loading按鈕

    $('.btn-loading').toggleClass('d-none'); //開啟/關閉八倍loading按鈕

    $('.btn-cancelLoading').toggleClass('d-none');
  });
  /*關閉VIP加速*/

  $('.btn-cancelLoading').click(function () {
    //開啟/關閉單獨loading
    $('.loading-ninja').toggleClass('d-none'); //開啟/關閉八倍loading

    $('.loadingGroup').toggleClass('d-none'); //開啟/關閉八倍loading按鈕

    $('.btn-loading').toggleClass('d-none'); //開啟/關閉八倍loading按鈕

    $('.btn-cancelLoading').toggleClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
