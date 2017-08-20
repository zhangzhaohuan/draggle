# *draggle*
## this is a js plugin for draggle.
## 这是一个用于拖拽的js插件
## install
```
    $ npm install draggle --save
```
## usage 
```
var draggle = require("darggle");
var target = document.getElementById("d2");
var range = document.getElementById("d1");
darggle({
    target:target,
    range:range,
    x:true,
    y:true
})
```
## api
#### draggle(options)
* type : function
* options
    * type ：object
    * include :
        * target ：this is target element 
        * range : this is the range of draggle 
        * x : 
        * y : 


eg:
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="draggable.js"></script>
	<script type="text/javascript">
		onload = function(){
			var target = document.getElementById("d2");
			var range = document.getElementById("d1");
			draggable({target:target,range:range,x:true,y:true});
		}	
	</script>
</head>
<body>
	<div id="d1" style="width: 800px;height: 800px;background: red;margin: 0 auto;">
		<div id="d2" style="width: 50px;height: 50px;background: yellow;"></div>
	</div>
</body>
</html>
```
