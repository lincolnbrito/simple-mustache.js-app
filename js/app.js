$(function(){
	var tmpl, //template HTML
	tdata = {}; //Objeto de dados JSON que alimenta o template

	//inicializa a página
	var initPage = function(){
		tmpl = $("body").html();
		//$("#list_locations").hide();

		//obtendo os dados do servidor e inicializa a página
		$.getJSON(
			"dados.php",
			function(d){
				$.extend(tdata, d);
			}
		);

		$(document).ajaxStart(function(){

		});
		//quando as requisições AJAX terminam faz o parse do template
		//substituindo as tags mustache com as variavéis
		$(document).ajaxStop(function(){
			var renderedPage = Mustache.to_html( tmpl, tdata );
			console.log(tmpl);
			$("body").html( renderedPage );
			$("#list_locations").show(2000);
			console.log('oi');
		});

	}();
});