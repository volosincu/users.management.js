
(function(context, _, $){
        
    context.UsersCollection = Backbone.Collection.extend({
	url : 'https://bbscript-5db8e.firebaseio.com/users.json',
	model: User,
	
	initialize : function(){
	    this.on("change", function(){
		console.log("change in Users Collection");
	    });
	    
	    this.on("add", function(){
		console.log("add in Users Collection");
	    });
	},
	
	parse: function(response){
	    var items = [];
	    
	    for (var o in response){
		items.push(response[o]);
	    }
	    
	    return items;
	}
	
	
    });
    
})(window, _, jQuery);
