$.ui.ready(function(){
	var screenWidth=$("#afui").width(); 
	var bannerHeight=screenWidth*50/400;
	$("#banner").height(bannerHeight);
	
	$.ui.updateBadge("#report","1","tr");
	
});
function goPage(url,o){
	$.ui.loadContent(url,false,false,'none',o);
	$("#audio").get(0).play();
}
