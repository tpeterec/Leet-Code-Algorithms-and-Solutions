/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let leftPoint = 0;
   let rightPoint = height.length -1;
   let area = 0; 
    
    while (leftPoint < rightPoint) {
        if (height[leftPoint] > height[rightPoint]){
            if(area < height[rightPoint] * (rightPoint - leftPoint) ){
                area = height[rightPoint] * (rightPoint - leftPoint);
            }
            rightPoint--;
        } else {
            if(area < height[leftPoint] * (rightPoint - leftPoint) ){
                area = height[leftPoint] * (rightPoint - leftPoint);
        }
            leftPoint++;
    }
    }
        return area;
};