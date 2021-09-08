var T = ["rong","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","X","Y","Z"];
var A=[];
var chair = [];
var L=[];
var k=-1;
var kt=[]
		for (var j = 1; j <= 24; j++) {
			var h = document.createElement('br');
			document.body.appendChild(h);
			
			var h = document.createElement('button');
			h.className = 'button0';
			h.id = (j-1)*40+i;
			h.innerHTML = T[j];
			
			document.body.appendChild(h);

			for (var i = 1; i<=40; i++) {
					
				    
						// 
					var x = document.createElement('button');
					x.innerHTML = i;
					x.id = T[j] + String(i);
					x.setAttribute("onclick", "show(this)");
					x.setAttribute("data", "on");
					x.className = 'button';
					if (i<10)  x.style.padding = '0.1% 0.52% 0.1% 0.52%';
					if (i==10 || i==30) x.style.margin = '0px 0px 0px 65px';
					document.body.appendChild(x);
					
			}
		}

