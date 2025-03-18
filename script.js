//your JS code here. If required.

function handleClick() {
	let colorSelected = document.getElementById("colorSelect").value;
	let select =document.getElementById("colorSelect");
	
	let options = document.getElementsByTagName("option");

	for(let i=0; i<options.length; i++){
		if(options[i].innerText === colorSelected){
			select.removeChild(options[i]);
		};
	};
};