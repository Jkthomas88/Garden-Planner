$(document).ready(function(){
    $("#veggies li").draggable({
        helper: 'clone'
        });
    $("#dirtDiv").droppable({
        drop : function(event,ui){
            $(".dirt").append(ui.draggable.clone());
            
        }
        
    });
    

        
  
    
});