	function one(){	
		var r=document.getElementById("Radius");
		var a=document.getElementById("Area");
		
		a.value = 3.14 * parseFloat(r.value) * parseFloat(r.value);
		
	}
	
	function two(){
	
		var r=document.getElementById("Radius");
		var c=document.getElementById("Circumference");
		c.value= 2 * 3.14 * parseFloat(r.value);
		
	}
	
	function three(){
	
		one();
		two();
	
	}