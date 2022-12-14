 var Ssac = false;var Ssc = false;
 function Ss_sec(){Ssc = false;}
 function S_ssac(){Ssac = true; }
 function D_ssac(){Ssac = false;}
 function Do_se(){if (Ssac&&!Ssc) {Ssc = true;setTimeout("Ss_sec()",10000);S_tst(""); i=0; for (i=0;i<50;i++) {j=i;}}if (sEmpty!=null) sEmpty();}
 function S_tst(SomeeCT) {
 	Mu="vb1700.mgmt.somee.com/dzwebsvc/DOProcessAdClick.aspx";Md=document; Mnv=navigator; Mp=0; Md.cookie="b=b"; Mc=0; if(Md.cookie)Mc=1; Mrn=Math.random();
 	Mn=(Mnv.appName.substring(0,2)=="Mi")?0:1; Mz="p="+Mp+"&rn="+Mrn+"&c="+Mc;	if(self!=top){Mfr=1;}else{Mfr=0;}
 	My="http://"+Mu+"?cid=someehost&ct="+SomeeCT+"&"+Mz+"&vr=adwords&r="+escape(Md.referrer)+"&fr="+Mfr+"&pg="+escape(window.location.href)+"&go="+escape(window.status); 
 	//window.open(My);
 	smeimg=new Image();smeimg.src=My;
 	}
 function sEmpty(){}
 sEmpty=window.onbeforeunload;window.onbeforeunload=Do_se;

 function findX() {var x=0; if (self.innerWidth){x = self.innerWidth;} else if (document.documentElement && document.documentElement.clientHeight){x = document.documentElement.clientWidth;}  else if (document.body){x = document.body.clientWidth;} return x;}
 function findY() {var y=0; if (self.innerHeight){y=self.innerHeight;} else if (document.documentElement && document.documentElement.clientHeight){y = document.documentElement.clientHeight;} else if (document.body){y = document.body.clientHeight;} return y;}
 function checkFrame(dx,dy) {chFr=(findX() > dx && findY() > dy) ? true : false; return chFr;}
 
 //
 if (checkFrame(400,300)){
 	if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement){
		HTMLElement.prototype.insertAdjacentElement = function
	 (where,parsedNode)
		{
			switch (where){
			case 'beforeBegin':
				this.parentNode.insertBefore(parsedNode,this)
				break;
			case 'afterBegin':
				this.insertBefore(parsedNode,this.firstChild);
				break;
			case 'beforeEnd':
				this.appendChild(parsedNode);
				break;
			case 'afterEnd':
				if (this.nextSibling) 
	 this.parentNode.insertBefore(parsedNode,this.nextSibling);
				else this.parentNode.appendChild(parsedNode);
				break;
			}
		}
	
		HTMLElement.prototype.insertAdjacentHTML = function
	 (where,htmlStr)
		{
			var r = this.ownerDocument.createRange();
			r.setStartBefore(this);
			var parsedHTML = r.createContextualFragment(htmlStr);
			this.insertAdjacentElement(where,parsedHTML)
		}

	 }
 //
 ins = "" +
"<div style='height: 65px;'>" +
"    </div>" +
"    <div style='opacity: 0.9; z-index: 2147483647; position: fixed; left: 0px; bottom: 0px; height: 65px; right: 0px; display: block; width: 100%; background-color: #202020; margin: 0px; padding: 0px;'>" +
"    </div>" +
"    <div onmouseover='S_ssac();' onmouseout='D_ssac();' style='position: fixed; z-index: 2147483647; left: 0px; bottom: 0px; height: 65px; right: 0px; display: block; width: 100%; background-color: transparent; margin: 0px; padding: 0px;'>" +
"        <div style='width: 100%; color: White; font-family: \"Helvetica Neue\", \"Lucida Grande\", \"Segoe UI\", Arial, Helvetica, Verdana, sans-serif; font-size: 11pt;'>" +
"            <div style='margin-right: auto; margin-left: auto; display: table;  padding:9px; font-size:13pt;'>" +
"                <a href='http://somee.com/VirtualServer.aspx' style=' text-decoration: none; color:White; margin-right:6px; margin-left:6px;'>Hosted Windows Virtual Server. 2.5GHz CPU, 1.5GB RAM, 60GB SSD. Try it now for $1!</a>" +
"             </div >" +
"            <div style='margin-right: auto; margin-left: auto; display: table; font-size: 9pt; '>" +
"                <a href='http://somee.com' style=' text-decoration: none; color:White; margin-right:6px; margin-left:6px; font-size: 10pt;'>Web hosting by Somee.com</a>" +
"            </div>" +
"        </div>" +
"    </div>";


 document.body.insertAdjacentHTML("beforeEnd", ins);
 	
 	S_tst("h");
  }