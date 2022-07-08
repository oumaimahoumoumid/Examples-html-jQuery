$( function(){
	$('input#bouton').click( function (event) {
		$("div#contenu").css("color", $("input#zcouleur").val() );
	} );
} );