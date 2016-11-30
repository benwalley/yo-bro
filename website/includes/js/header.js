var hamb = $("#hamburger");
var smallNav = $(".navSmall")[0]
var expanded = false


hamb.click(function(){
	if(!expanded){
		smallNav.style.display = "block"

		expanded = true

	}else{
		smallNav.style.display = "none"
		expanded = false
	}
	
})