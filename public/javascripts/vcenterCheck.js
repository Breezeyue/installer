$(document).ready(function(){
    console.log("ready for send requirest")
    $("#vcCheckButton").click(function(){
      var dataArr = {
        "vcenterIP":"172.16.24.141",
        "vcenterUser":"administrator@lenovocloud.com",
        "vcenterPwd":"1qazXSW@"
      }

      var url="http://172.16.21.206/v1/vcenter/validate"
        $.ajax({
          type : "POST",
          url : "http://172.16.21.206:17000/v1/actions/vcenter/validate",
          dataType : "json",
          data : dataArr,
          success : function(test) {
            console.log(test);
          }
        });
    });
});
