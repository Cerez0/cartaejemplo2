// Menu desplegable

$(function(){

    //ENSALADAS

    $('.btn-ensaladas').on('click', function() {


        if ($('#ensaladas').is(':hidden')) {

            
            $('.contenedor-productos-ensaladas').show();
            $('html, body').animate({ scrollTop: $("#ensaladas").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#entrantes').is(':visible')) {

                $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
               $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-calientes').hide();
            }
            
            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }


        } else {

            $('.contenedor-productos-ensaladas').hide();
            
        }  
        
    });


    //ENTRANTES

    $('.btn-entrantes').on('click', function() {


        if ($('#entrantes').is(':hidden')) {

            
            $('.contenedor-productos-entrantes').show();
            $('html, body').animate({ scrollTop: $("#entrantes").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                 $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#tostas').is(':visible')) {
                
                $('.contenedor-productos-tostas').hide();
            }

           if ($('#hamburgesas').is(':visible')) {
                
                $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }


        } else {

            $('.contenedor-productos-entrantes').hide();
            
        }  
        
    });


    //TOSTAS

    $('.btn-tostas').on('click', function() {


        if ($('#tostas').is(':hidden')) {

            
            $('.contenedor-productos-tostas').show();
            $('html, body').animate({ scrollTop: $("#tostas").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
               $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }

        } else {

            $('.contenedor-productos-tostas').hide();
            
        }  
        
    });
    

    
    //HAMBURGESAS

    $('.btn-hamburgesas').on('click', function() {
        
       
        if ($('#hamburgesas').is(':hidden')) {

            
            $('.contenedor-productos-hamburgesas').show();
            $('html, body').animate({ scrollTop: $("#hamburgesas").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }


        } else {

            $('.contenedor-productos-hamburgesas').hide();
            
        }  
        
    });


    //CARNES

    $('.btn-carnes').on('click', function() {
        
       
        if ($('#carnes').is(':hidden')) {

            
            $('.contenedor-productos-carnes').show();
            $('html, body').animate({ scrollTop: $("#carnes").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
                $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }

        } else {

            $('.contenedor-productos-carnes').hide();
            
        }  
        
    });


    //BOCADILLOS CALIENTES

    $('.btn-bocadillos-calientes').on('click', function() {
        
       
        if ($('#bocadillos-calientes').is(':hidden')) {

            
            $('.contenedor-productos-bocadillos-calientes').show();
            $('html, body').animate({ scrollTop: $("#bocadillos-calientes").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
                $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }

        } else {

            $('.contenedor-productos-bocadillos-calientes').hide();
            
        }  
        
    });


    //BOCADILLOS FRIOS

    $('.btn-bocadillos-frios').on('click', function() {
        
       
        if ($('#bocadillos-frios').is(':hidden')) {

            
            $('.contenedor-productos-bocadillos-frios').show();
            $('html, body').animate({ scrollTop: $("#bocadillos-frios").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
                $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }

        } else {

            $('.contenedor-productos-bocadillos-frios').hide();
            
        }  
        
    });


    //POSTRES

    $('.btn-postres').on('click', function() {
        
       
        if ($('#postres').is(':hidden')) {

            
            $('.contenedor-productos-postres').show();
            $('html, body').animate({ scrollTop: $("#postres").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
                $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#bebidas').is(':visible')) {
                
                $('.contenedor-productos-bebidas').hide();
            }


        } else {

            $('.contenedor-productos-postres').hide();
            
        }  
        
    });


    //BEBIDAS

    $('.btn-bebidas').on('click', function() {
        
       
        if ($('#bebidas').is(':hidden')) {

            
            $('.contenedor-productos-bebidas').show();
            $('html, body').animate({ scrollTop: $("#bebidas").offset().top }, 1500);

            /* Cerramos los de mas productos */
            if ($('#ensaladas').is(':visible')) {

                $('.contenedor-productos-ensaladas').hide();
            }

            if ($('#entrantes').is(':visible')) {
               
               $('.contenedor-productos-entrantes').hide();
            }

            if ($('#tostas').is(':visible')) {
               
               $('.contenedor-productos-tostas').hide();
            }

            if ($('#hamburgesas').is(':visible')) {
               
                $('.contenedor-productos-hamburgesas').hide();
            }

            if ($('#carnes').is(':visible')) {
               
                $('.contenedor-productos-carnes').hide();
            }

            if ($('#bocadillos-calientes').is(':visible')) {
               
                $('.contenedor-productos-bocadillos-calientes').hide();
            }

            if ($('#bocadillos-frios').is(':visible')) {
                
                $('.contenedor-productos-bocadillos-frios').hide();
            }

            if ($('#postres').is(':visible')) {
                
                $('.contenedor-productos-postres').hide();
            }


        } else {

            $('.contenedor-productos-bebidas').hide();
            
        }  
        
    });





});




