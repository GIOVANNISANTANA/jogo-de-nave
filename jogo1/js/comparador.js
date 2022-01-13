function explosao2(inimigo2X,inimigo2Y) {
	
	$("#fundoGame").append("<div id='explosao2'></div");
	$("#explosao2").css("background-image", "url(imgs/explosao.png)");
	var div2=$("#explosao2");
	div2.css("top", inimigo2Y);
	div2.css("left", inimigo2X);
	div2.animate({width:200, opacity:0}, "slow");
	
	var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
	
		function removeExplosao2() {
			
			div2.remove();
			window.clearInterval(tempoExplosao2);
			tempoExplosao2=null;
			
		}
		
		
	} // Fim da função explosao2()

    if (colisao4.length>0) {		
        inimigo2X = parseInt($("#inimigo2").css("left"));
        inimigo2Y = parseInt($("#inimigo2").css("top"));
        $("#inimigo2").remove();
    
        explosao2(inimigo2X,inimigo2Y);
        $("#disparo").css("left",950);
        
        reposicionaInimigo2();
            
        }