//$(document).ready(function(){
//    console.log("ready for send requirest")
//    $("#vcCheckButton").click(function(){
//      var vcIp = $("#vcIp").val()
//      var vcUser = $("#vcUsername").val()
//      var vcPwd = $("#vcPassword").val()
//      var dataArr = '{"vcenterIP":"'+vcIp+'","vcenterUser":"'+vcUser+'","vcenterPwd":"'+vcPwd+'"}'
//      console.log(vcIp);
//      console.log(vcUser);
//      console.log(vcPwd);
//        $.ajax({
//          type : "POST",
//          url : "http://172.16.21.206:17000/v1/actions/vcenter/validate",
//          dataType : "jsonp",
//          data : dataArr,
//          success : function() {
//            console.log("success");
//          }
//        });
//    });
//});
