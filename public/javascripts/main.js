var store = {

}

$(function() {
  var currentIndex = 0
  // 下一步
  $('.btn-next').click(function () {
    $($('.tab-content').children()[currentIndex]).toggleClass('hidden')
    $($('.tab-list').children()[currentIndex]).toggleClass('active')
    currentIndex++
    $($('.tab-content').children()[currentIndex]).toggleClass('hidden')
    $($('.tab-list').children()[currentIndex]).toggleClass('active')
  })
  // 上一步
  $('.btn-prev').click(function () {
    $($('.tab-content').children()[currentIndex]).toggleClass('hidden')
    $($('.tab-list').children()[currentIndex]).toggleClass('active')
    currentIndex--
    $($('.tab-content').children()[currentIndex]).toggleClass('hidden')
    $($('.tab-list').children()[currentIndex]).toggleClass('active')
  })
});

//表单
$(document).ready(function() {
  // bind 'myForm' and provide a simple callback function
  var options = {
    target:        '#output1',   // target element(s) to be updated with server response
    beforeSubmit:  function(formData, jqForm, options) {
      if (formData)
        formData.map(function (item) {
          console.log(item)
          if (item.name == 'name' && !item.value) {
            $('.tips').toggleClass('hidden')
          }
        })
      console.log(formData)
      console.log(jqForm)
    },  // pre-submit callback
    // success:       showResponse  // post-submit callback

    // other available options:
    //url:       url         // override for form's 'action' attribute
    //type:      type        // 'get' or 'post', override for form's 'method' attribute
    //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
    //clearForm: true        // clear all form fields after successful submit
    //resetForm: true        // reset the form after successful submit

    // $.ajax options can be used here too, for example:
    //timeout:   3000
  };
  $('#myForm').ajaxForm(options);
});