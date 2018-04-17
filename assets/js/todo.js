//check off specific todos  by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

});
//click on X to delete todo
$("ul").on("click","span",function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});

	event.stopPropagation();

});


$("h1").on("click",".fa-edit",function(){
	$("input[type='text']").fadeToggle(300);
	
});


$("input[type='text']").keypress(function(event){
if(event.which=== 13){
	//grabbing new todo text from input text
	var todoText = $(this).val();
	$(this).val("");
	//create new li and add to UL
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ todoText + "</li>")
}
});
