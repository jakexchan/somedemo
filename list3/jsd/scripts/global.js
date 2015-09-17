//共享onload
function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof window.onload != "function")
	{
		window.onload = func;
	}
	else
	{
		window.onload = function(){
			oldLoad();
			func();
		}
	}
}
//插入在目标元素后面
function insertAfter(newElement,targetElement){  //document object
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement)
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//追加class
function addClass(element,value){
	if(!element.className)
	{
		element.className = value;
	}
	else
	{
		newClassName = element.className;
		newClassName += "";
		newClassName += value;
		element.className = newClassName;
	}
}

function highlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;

	var headers = document.getElementsByTagName("header");
	if(headers.length == 0) return false;

	var navs = headers[0].getElementsByTagName("nav");
	if(navs.length == 0) return false;

	var links = navs[0].getElementsByTagName("a");
	var linkurl;

	for(var i = 0; i < links.length; i++)
	{
		linkurl = links[i].getAttribute("href");
		if(window.location.href.indexOf(linkurl) != -1)
		{
			links[i].className = "here";
		}
	}

}
//移动
function moveElement(elementId,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementId)) return false;

	var elem = document.getElementById(elementId);
	if(elem.movement)
	{
		clearTimeout(elem.movement);
	}

	if(!elem.style.left)
	{
		elem.style.left = "0px";
	}
	if(!elem.style.top)
	{
		elem.style.top = "0px";
	}

	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	if(xpos == final_x && ypos == final_y)
	{
		return true;
	}

	if(xpos < final_x)
	{
		var dist = Math.ceil((final_x - xpos) / 10);
		xpos += dist;
	}
	if(xpos > final_x)
	{
		var dist = Math.ceil((xpos - final_x) / 10);
		xpos -= dist;
	}
	if(ypos < final_y)
	{
		var dist = Math.ceil((final_y - ypos) / 10);
		ypos += dist;
	}
	if(ypos > final_y)
	{
		var dist = Math.ceil((ypos - final_y) / 10);
		ypos -= dist;
	}

	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	var repeat = "moveElement(\"" +elementId+ "\"," +final_x+ "," +final_y+ "," +interval+ ")";
	elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("intro")) return false;

	var intro = document.getElementById("intro");
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");

	var preview = document.createElement("img");
	preview.setAttribute("src","images/slideshow.gif");
	preview.setAttribute("alt","a glimpse of what awaits you");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);

	var links = document.getElementsByTagName("a");
	var destination;

	for(var i = 0; i < links.length; i++)
	{
		links[i].onmouseover = function(){
			destination = this.getAttribute("href");
			if(destination.indexOf("index.html") != -1)
			{
				moveElement("preview",0,0,5);
			}
			if(destination.indexOf("about.html") != -1)
			{
				moveElement("preview",-150,0,5);
			}
			if(destination.indexOf("photos.html") != -1)
			{
				moveElement("preview",-300,0,5);
			}
			if(destination.indexOf("live.html") != -1)
			{
				moveElement("preview",-450,0,5);
			}
			if(destination.indexOf("contact.html") != -1)
			{
				moveElement("preview",-600,0,5);
			}
		}
	}
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);


function showSection(id){
	var sections = document.getElementsByTagName("section");
	for(var i = 0; i < sections.length; i++)
	{
		if(sections[i].getAttribute("id") != id)
		{
			sections[i].style.display = "none";
		}
		else
		{
			sections[i].style.display = "block";
		}
	}
}

function prepareInternalnav(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var articles = document.getElementsByTagName("article");
	if( articles.length == 0) return false;
	var navs = articles[0].getElementsByTagName("nav");
	if(navs.length == 0) return false;
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++)
	{
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;
		links[i].onclick = function(){
			showSection(this.destination);
			return false;
		}
	}
}

addLoadEvent(prepareInternalnav);


function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title"))
	{
		var text = whichpic.getAttribute("title");
	}
	else
	{
		var text = "";
	}

	var description = document.getElementById("description");
	if(description.firstChild.nodeValue == 3)
	{
		description.firstChild.nodeValue = text;
	}
	return false;
}

function preparePlaceholder(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");

	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	insertAfter(description,gallery);
	insertAfter(placeholder,description);
}

function prepareGallery(){	
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var alinks = gallery.getElementsByTagName("a");
	for(var i = 0; i < alinks.length; i++)
	{
		alinks[i].onclick = function(){
			return showPic(this);
		}
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

function stripeTable(){
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for(var i = 0; i < tables.length; i++)
	{
		var odd = false;
		var rows = tables[i].getElementsByTagName("tr");
		for(var j = 0; j < rows.length; j++)
		{
			if(odd == true)
			{
				addClass(rows[j],"odd");
				odd = false;
			}
			else
			{
				odd = true;
			}
		}
	}
}

function hightlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for(var i = 0; i < rows.length; i++)
	{
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout = function(){
			this.className = this.oldClassName;
		}
	}
}

function displayAbbreviations(){
	if(!document.getElementById || !document.createElement || !document.createTextNode) return false;
	if(!document.getElementsByTagName("abbr")) return false;
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length < 1) return false;
	var defs = new Array();

	for(var i = 0; i < abbreviations.length; i++)
	{
		var current_abbr = abbreviations[i];
		if(current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}

	var dlist = document.createElement("dl");
	for(key in defs)
	{
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dt_text = document.createTextNode(key);
		dtitle.appendChild(dt_text);
		var ddesc = document.createElement("dd");
		var dd_text = document.createTextNode(definition);
		ddesc.appendChild(dd_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length < 1) return false;
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	var articles = document.getElementsByTagName("article");
	if(articles.length == 0) return false;
	var containes = articles[0];
	containes.appendChild(header);
	containes.appendChild(dlist);
}

addLoadEvent(stripeTable);
addLoadEvent(hightlightRows);
addLoadEvent(displayAbbreviations);


function focusLabels(){
	if(!document.getElementsByTagName) return false;
	var labels = document.getElementsByTagName("label");
	for(var i = 0; i < labels.length; i++)
	{
		if(!labels[i].getAttribute("for")) continue;
		labels[i].onclick = function(){
			var fortext = this.getAttribute("for");
			if(!document.getElementById(fortext)) return false;
			var elem = document.getElementById(fortext);
			elem.focus();
		}
	}
}

addLoadEvent(focusLabels);

function resetFields(whichForm){
	if(Modernizr.input.placeholder) return;
	for(var i = 0; i < whichForm.length; i++)
	{
		var elem = whichpic.elements[i];
		if(elem.type == "submit") continue;
		var check = elem.placeholder || elem.getAttribute("placeholder");
		if(!check) 
		{
			elem.onfocus = function(){
				var text = this.placeholder || this.getAttribute("placeholder");
				if(this.value == text)
				{
					this.className = "";
					this.value = "";
				}
			}
			elem.onblur = function(){
				if(this.value == "")
				{
					this.className = "placeholder";
					this.value = this.placeholder || this.getAttribute("placeholder");
				}
			}
		}
		elem.onblur();
	}
}

function prepareForms(){
	if(!document.forms) return false;
	for(var i = 0; i < document.forms.length; i++)
	{
		var thisform = document.forms[i];
		resetFields(thisform);
	}
}

addLoadEvent(prepareForms);