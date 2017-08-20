//draggable(ele, elseEle, {x:true, y:true});
function draggable(options){
	var target = options.target;
	var range = options.range;
	var absPos = offsetPagePosition(target);
	console.log(absPos);
	target.style.position = "absolute";
	target.style.left = absPos.x + "px";
	target.style.top = absPos.y + "px";
	var heldermousemove;
	target.addEventListener("mousedown", function(e){
		var e = e || event;
		var posDown = {x:e.offsetX, y:e.offsetY};
		heldermousemove = function(e){
				var e = e || event;
				var parentRange = offsetPagePosition(range);
				console.log(parentRange);
				
				if(options.x){
					target.style.left = Math.max(parentRange.x,Math.min(e.clientX -posDown.x, parentRange.x+range.offsetWidth-target.offsetWidth))+"px";
					console.log(target.style.left);
				}
				if(options.y){
					target.style.top = Math.max(parentRange.y, Math.min(e.clientY - posDown.y, parentRange.y+range.offsetHeight-target.offsetHeight))+ "px";
				}
			}
		document.addEventListener("mousemove",heldermousemove);
	});
	
	document.addEventListener("mouseup", function(e){
		//????????如何清理doc的移动事件
		console.log("aaaaa")
		document.removeEventListener("mousemove",heldermousemove);
	});	
}

/** 计算元素在页面上的绝对位置 */
function offsetPagePosition(ele){
	console.log(ele);
	var _left = ele.offsetLeft;
	console.log(_left)
	var _top = ele.offsetTop;
	while(ele.offsetParent){
		_left += ele.offsetParent.offsetLeft;
		_top += ele.offsetParent.offsetTop;
		ele = ele.offsetParent;
	}
	return { "x":_left, "y":_top };
}
