function lw() {
	var i = document.getElementById("in1").value;
	var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://192.168.1.56/cgi-bin/lw.py?x=" + i, true);
        xhr.send();
        xhr.onload = function() {
            var output = xhr.responseText;
            document.getElementById("d1").innerHTML = output;
        }
}

function startDocker() {
	var set = "systemctl start docker";
	var xh = new XMLHttpRequest();
	xh.open("GET", "http://192.168.1.56/cgi-bin/lw.py?x=" + set, true);
	xh.send();
	xh.onload = function(){
		var output = "Docker service started";
		document.getElementById("d1").innerHTML = output;
	}
}
function stopDocker(){
	var set = "systemctl stop docker";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://192.168.1.56/cgi-bin/lw.py?x="+set, true);
	xhr.send();
	xhr.onload = function(){
		var output = "Docker service stoped";
		document.getElementById("d1").innerHTML = output;
	}
}

