
function Calculate()
{

	
	//get variables
	var neededTP = parseInt(document.forms[0].TPNeeded.value);
	var currentTP = parseInt(document.forms[0].TPCurrent.value);
	var TPremaining = neededTP - currentTP;
	var ECSuper = parseInt(document.forms[0].SupEC.value);
	var ECImproved = parseInt(document.forms[0].ImpEC.value);
	var ECBasic = parseInt(document.forms[0].BasEC.value);

    //output difference
	document.getElementById("TPdifference").innerHTML = TPremaining;
	
	/*
	 * Basic section
	 */
	 
	//superior kits
	document.getElementById("SupiorKits").innerHTML = Math.ceil(TPremaining / 12800); 
	document.getElementById("SuperiorDil").innerHTML = Math.ceil((TPremaining / 12800) * 1075); 
	document.getElementById("SuperiorEC").innerHTML = (Math.ceil(TPremaining / 12800)) * ECSuper; 
	document.getElementById("SupiorOver").innerHTML = Math.ceil(TPremaining  % 12800); 
		
	//improved
	document.getElementById("ImprovedKits").innerHTML = Math.ceil(TPremaining / 5000); 
	document.getElementById("ImprovedDil").innerHTML = Math.ceil((TPremaining / 5000) * 950); 
	document.getElementById("ImprovedEC").innerHTML = (Math.ceil(TPremaining / 5000)) * ECImproved; 
	document.getElementById("ImprovedOver").innerHTML = Math.ceil(TPremaining  % 5000); 
	
	//basic
	document.getElementById("BasicKits").innerHTML = Math.ceil(TPremaining / 2000); 
	document.getElementById("BasicDil").innerHTML = Math.ceil((TPremaining / 2000) * 700); 
	document.getElementById("BasicEC").innerHTML = (Math.ceil(TPremaining / 2000)) * ECBasic; 
	document.getElementById("BasicOver").innerHTML = Math.ceil(TPremaining  % 2000); 
	
	/*
	 * Optimal
	 */
	 var dilOpt = 0;
	 var ECOpt = 0;
	 var OptTP = TPremaining; 
	 
	 document.getElementById("OptSupiorKits").innerHTML = Math.floor(OptTP / 12800);
	 dilOpt += (Math.floor(OptTP / 12800))  * 1075;
	 ECOpt += (Math.floor(OptTP / 12800))  *  ECSuper;
	 OptTP = OptTP % 12800; 
	 
	 document.getElementById("OptImprovedKits").innerHTML = Math.floor(OptTP / 5000);
	 dilOpt += (Math.floor(OptTP / 5000))  * 950;
	 ECOpt += (Math.floor(OptTP / 5000))  * ECImproved;
	 OptTP = OptTP % 5000; 
	 
	document.getElementById("OptBasicKits").innerHTML =  Math.ceil(OptTP / 2000);
	 dilOpt += (Math.ceil(OptTP / 2000))  * 700;
	 ECOpt += (Math.ceil(OptTP / 2000))  * ECBasic;
	 OptTP = Math.abs(OptTP - 2000);
	 
	 document.getElementById("OptDIl").innerHTML =  dilOpt; 
	 document.getElementById("OptEC").innerHTML =  ECOpt; 	 
	 document.getElementById("OptOver").innerHTML = OptTP;
	 
}


