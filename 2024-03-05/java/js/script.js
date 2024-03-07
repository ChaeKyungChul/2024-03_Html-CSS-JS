$(function(){
    $("#talk").on("keyup", function(e){
   // console.log(e.keyCode);
   if(e.keyCode == 13){
     const talk = $(this).val();
     $.ajax({
        type:"post",
        url:"talk.html",
        data:{talk : talk},
        success: function(rs){
            // 완료작업
            $("#talk").val("");
        },
        error:function(err){
            console.log(err);
        }
     })
   }
    });
});