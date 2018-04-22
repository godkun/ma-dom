var text = function(el,text) {
	if(text) {
		el.innerText = text;
	} else {
		return el.innerText;
	}
}

var html = function(el,html) {
	if(html) {
		el.innerHTML = html;
	} else {
		return el.innerHTML;
	}
}

var val = function(el,val) {
	if(val) {
		el.value = val;
	} else {
		return el.value;
	}
}

var attr = function(el,attr,value) {
	if(value) {
		el.setAttribute(attr,value)
	} else {
		return el.getAttribute(attr)
	}
}

var data = function(el,data,value) {
	if(value) {
		el.dataset[data] = value;
	} else {
		return el.dataset[data]
	}
}

var append = function(el,content) {
	content&&el.insertAdjacentHTML('beforeend', content);
}
var prepend = function(el,content) {
	content&&el.insertAdjacentHTML('afterbegin', content);
}
var after = function(el,content) {
	content&&el.insertAdjacentHTML('afterend', content);
}
var before = function(el,content) {
	content&&el.insertAdjacentHTML('beforebegin', content);
}


var empty = function(el) {
	el.innerHTML = "";
}
var remove = function(el) {
	el.parentNode.removeChild(el);
}
export {
	text,
	html,
	val,
	attr,
	data,
	append,
	prepend,
	after,
	before,
	empty,
	remove
}