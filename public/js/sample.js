


var svgHeight = 240
var barElements




d3.select("#myGraph")
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", (d, i) => {
    return i*25
  })
  .attr("width", (d, i) => {
    return d+"px"
  })
  .attr("height", "20px")



  barElements.enter()
    .append("text")
    .attr("y", function(d, i){
      return i*25 + 10
    })
    .attr("x", svgWidth-5)
    .text(function(d, i) {
      return d
    })
    .text(function(d, i){
      return dataScore[i]
    })
