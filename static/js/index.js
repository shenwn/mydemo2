window.onload = function(){
	var wrap = document.getElementById('waterfall');
	var boxes = wrap.getElementsByClassName('waterfall-item');
	waterfall(wrap,boxes,3,9);
}

function waterfall(wrap, boxes, column,margin){
	var boxWidth = boxes[0].offsetWidth + 2*margin;

	wrap.style.width = boxWidth * column + 'px';
	var everyHeight = new Array();
	for(var i = 0;i< boxes.length ;i++){
		if(i < column){
			everyHeight[i] = boxes[i].offsetHeight + 2*margin;
		}else{
			
			var minHeight = Math.min.apply(null,everyHeight);
			var minIndex = getIndex(minHeight,everyHeight);
			var leftValue = boxes[minIndex].offsetLeft - margin;

			boxes[i].style.position = 'absolute';
			boxes[i].style.top = minHeight + 'px';
			boxes[i].style.left = leftValue + 'px';
			everyHeight[minIndex] += boxes[i].offsetHeight + 2*margin;
		}
	}
	var maxHeight = Math.max.apply(null,everyHeight);

	wrap.style.height = maxHeight + 'px';
}
/**
 * [getIndex 获取数组里某个值的索引]
 * @param  {[type]} minNumber   [值]
 * @param  {[type]} everyNumber [数组]
 * @return {[type]}             [索引]
 */
function getIndex(minNumber,everyNumber){
	for(index in everyNumber){
		if(everyNumber[index] == minNumber){
			return index;
		}
	}
}