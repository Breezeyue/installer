//1. vcenter  4
//1.1 /v1/vcenter/validate [POST] 4
$(document).ready(function(){
    console.log("ready for send requirest")
    $("#vcCheckButton").click(function(){
      var vcIp = $("#vcIp").val()
      var vcUser = $("#vcUsername").val()
      var vcPwd = $("#vcPassword").val()
      var dataArr = '{"vcenterIP":"'+vcIp+'","vcenterUser":"'+vcUser+'","vcenterPwd":"'+vcPwd+'"}'
      console.log(vcIp);
      console.log(vcUser);
      console.log(vcPwd);
        $.ajax({
          type : "POST",
          url : "http://172.16.21.206:17000/v1/actions/vcenter/validate",
          dataType : "json",
          data : dataArr,
          success : function() {
            console.log("success");
          }
        });
    });
);
//2. datacenter 5
//2.1 /v1/datacenter/list [GET] 5
$(document).ready(function(){
    console.log("ready for send requirest")
    $("#vcCheckButton").click(function(){
//3. cluster  6
//3.1 /v1/cluster/list [GET]  6
//4. host 7
//4.1 /v1/host/validate [POST]  7
//4.2 /v1/host/list [GET] 7
//4.3 /v1/host/datastore/list [GET] 7
//4.4 /v1/host/vSwitch/list [GET] 8
//4.5 /v1/host/vnic/list [GET]  8
//4.6 /v1/host/nic/list [GET] 

