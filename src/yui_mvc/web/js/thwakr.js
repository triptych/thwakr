YUI().use("node", "event","tabview", function(Y){
    
    Y.on("domready", function(){
        Y.log("YUI loaded...");
        
            var tabview = new Y.TabView({
        srcNode: '#demo'
    });

    tabview.render();
        
        });
        
        
        

    });