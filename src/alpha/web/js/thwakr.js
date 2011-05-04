/**
 * @author andrew
 */

// yui adds

YUI.add("thwakr", function(Y){
     var Lang = Y.Lang,
     CBX  = 'contentBox', 
     BBX  = 'boundingBox',
     NAME = 'thwakr';
	
	Y.Thwakr = Y.Base.create(
		NAME,
		Y.Widget,
		Y.WidgetParent,
		{
			//Instance members here
		},{
			//Static members here, specially:
			ATTRS: {
				
			}
		}
	);
	
	 
},'0.01',{
	requires: ['widget','widget-parent']
})


//main

YUI().use("node", "gallery-storage-lite", function(Y){
	Y.log("in startup...");
});
