function change(){
	if(document.getElementById("upload_file").value==null){
		document.getElementById("upload_file_road").value = "仅能上传zip,rar,7z压缩格式文件";
	}
	else{
		document.getElementById("upload_file_road").value=document.getElementById("upload_file").value;
	}
      
}
// $("#upload_file").on("change","input[type='file']",function(){
//     var filePath=$(this).val();
//     if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
//         $(".fileerrorTip").html("").hide();
//         var arr=filePath.split('\\');
//         var fileName=arr[arr.length-1];
//         $(".showFileName").html(fileName);
//     }else{
//         $(".showFileName").html("");
//         $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
//         return false; 
//     }
// })