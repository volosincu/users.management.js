
(function(context, _, $){
        
    context.User = Backbone.Model.extend({
    
	url : function (){
	    return 'https://bbscript-5db8e.firebaseio.com/users/' + this.get("id") + ".json"
	},
	defaults : function (){
	    return {
		id : null,
		email : null,
		name : null,
		job : null,
		city : null,
		married : null,
		groups: ""
	    }
	},
	validate : function(props){

	    var re = /\S+@\S+\.\S+/;
	    var vemail = re.test(props.email);
	    
	    if(!props.email  || (props.email && props.email.length > 20) || !vemail ){
		return "Error: Email is a required field. Between 0 and 20 chars. (string@string.string)"
	    }else if(!props.name || (props.name && props.name.length > 20)){
		return "Error: Name is a required field. Between 0 and 20 chars."
	    }else if(!props.job || (props.job && props.job.length > 20)){
		return "Error: Job is a required field. Between 0 and 20 chars."
	    }else if(!props.city || (props.city && props.city.length > 20)){
		return "Error: City is a required field. Between 0 and 20 chars."
	    }
	},
	
	initialize : function(){
	    
	    this.on("change", function(){
		console.log("Change/Save in User model with id " + this.get("id"));
	    }, this);
	}
    });
    
    


})(window, _, jQuery);
