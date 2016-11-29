//初始化各模块的高度
$("._list4").prev().css("margin-bottom","180px");
$(".mainbox").css("height",parseInt($("#rightbox1").height())+10);
$("#_list1").css("height",parseInt($(".mainbox").height()-2));
$("#not_done").click(function(){
	$(".mainbox").css("height",parseInt($("#rightbox1").height())+10);
	$("#_list1").css("height",parseInt($(".mainbox").height()-2));
	$("#not_done").css({
		"background-color": "#01a253",
		"color": "#FFF"
	});
	$("#not_done a").css({
		"background-color": "#01a253",
		"color": "#FFF"
	});
	$("#done").css({
		"background-color": "#FFF",
		"color": "#01a253"
	});
	$("#done a").css({
		"background-color": "#FFF",
		"color": "#01a253"
	});
	$("#rightbox1").css("display","block");
	$("#rightbox2").css("display","none");
});
$("#done").click(function(){
	$(".mainbox").css("height",parseInt($("#rightbox2").height())+10);
	$("#_list1").css("height",parseInt($(".mainbox").height()-2));
	$("#done").css({
		"background-color": "#01a253",
		"color": "#FFF"
	});
	$("#done a").css({
		"background-color": "#01a253",
		"color": "#FFF"
	});
	$("#not_done").css({
		"background-color": "#FFF",
		"color": "#01a253"
	});
	$("#not_done a").css({
		"background-color": "#FFF",
		"color": "#01a253"
	});
	$("#rightbox2").css("display","block");
	$("#rightbox1").css("display","none");
});
// 个人信息item被点击后
$(".item_inf").click(function(){
    alert('123');
	$("#my_project").css("display","none");
	$("#_list2").css("display","none");
	$("#my_collection").css("display","none");
	$("#my_inf").css("display","block");
	$("#current").removeAttr("id");
	$(this).attr('id',"current");

});
// 我的项目item被点击后
$(".item_pro").click(function(){
	$("#my_inf").css("display","none");
	$("#my_collection").css("display","none");
	$("#_list2").css("display","block");
	$("#my_project").css("display","block");
	$("#current").removeAttr("id");
	$(this).attr('id',"current");
});
// 个人收藏item被点击后
$(".item_collection").click(function(){
	$("#my_inf").css("display","none");
	$("#_list2").css("display","none");
	$("#my_project").css("display","none");
	$("#my_collection").css("display","block");
	$("#current").removeAttr("id");
	$(this).attr('id',"current");
});
function prompt_judge(){
    var password=prompt("请输入密码");
    var bo=true;
    //ajax密码校验返回bo值
    if(bo===true){
        document.getElementById("pas1").style.display="block";
        document.getElementById("pas2").style.display="block";
        document.getElementById("changebuttom1").style.display="none";
        document.getElementById("user1").style.display="none";
        document.getElementById("user2").style.display="block";
    }
}
function userjudge0() {
    var username = document.getElementById("inputname").value;
    if(username.length>=3){
        document.getElementById("judge0").style.display="none";
        document.getElementById("judge0").setAttribute("ref","0");
    }
    else{
        document.getElementById("judge0").style.display="inline";
        document.getElementById("judge0").setAttribute("ref","1");
    }
    var node0= parseInt(document.getElementById("judge0").getAttribute("ref"));
    var node1= parseInt(document.getElementById("judge1").getAttribute("ref"));
    var node2= parseInt(document.getElementById("judge2").getAttribute("ref"));
    if(node0+node1+node2==0){
        document.getElementById("changebuttom2").style.display="block";
    }
    else{
        document.getElementById("changebuttom2").style.display="none";
    }
}
function pasjudge1() {
    var pw1 = document.getElementById("pass1").value;
    var pw2 = document.getElementById("pass2").value;
    if(pw1.length>=6){
        document.getElementById("judge1").style.display="none";
        document.getElementById("judge1").setAttribute("ref","0");
    }
    else{
        document.getElementById("judge1").style.display="inline";
        document.getElementById("judge1").setAttribute("ref","1");
    }
    if(pw2==pw1){
        document.getElementById("judge2").style.display="none";
        document.getElementById("judge2").setAttribute("ref","0");
    }
    else{
        document.getElementById("judge2").style.display="inline";
        document.getElementById("judge2").setAttribute("ref","1");
    }
    var node0= parseInt(document.getElementById("judge0").getAttribute("ref"));
    var node1= parseInt(document.getElementById("judge1").getAttribute("ref"));
    var node2= parseInt(document.getElementById("judge2").getAttribute("ref"));
    if(node0+node1+node2==0){
        document.getElementById("changebuttom2").style.display="block";
    }
    else{
        document.getElementById("changebuttom2").style.display="none";
    }
}
function pasjudge2() {
    var pw1 = document.getElementById("pass1").value;
    var pw2 = document.getElementById("pass2").value;
    if(pw2==pw1){
        document.getElementById("judge2").style.display="none";
        document.getElementById("judge2").setAttribute("ref","0");
    }
    else{
        document.getElementById("judge2").style.display="inline";
        document.getElementById("judge2").setAttribute("ref","1");
    }
    var node0= parseInt(document.getElementById("judge0").getAttribute("ref"));
    var node1= parseInt(document.getElementById("judge1").getAttribute("ref"));
    var node2= parseInt(document.getElementById("judge2").getAttribute("ref"));
    if(node0+node1+node2==0){
        document.getElementById("changebuttom2").style.display="block";
    }
    else{
        document.getElementById("changebuttom2").style.display="none";
    }
}