import d3 from 'd3';

/**
 * Draw chart
 */
export default function circle(){

  const w = 400;
  const h = 400;
  const r = h / 2;
  const color = d3.scale.category20c();

  const data = [
    { 'label': 'Category A', 'value': 20 },
    { 'label': 'Category B', 'value': 50 },
    { 'label': 'Category C', 'value': 30 }
  ];


  const vis = d3.select('#chart').append('svg:svg').data([data]).attr('width', w).attr('height', h)
    .append('svg:g').attr('transform', `translate(${r}, ${r})`);
  
  const pie = d3.layout.pie().value( (d) => {
    
    return d.value;
    
  });

  // declare an arc generator function
  const arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw
  const arcs = vis.selectAll('g.slice').data(pie).enter().append('svg:g').attr('class', 'slice');
  
  arcs.append('svg:path')
    .attr('fill', (d, i) => {
      
      return color(i);
      
    })
    .attr('d', (d) => {
      
      // log the result of the arc generator to show how cool it is :)
      //console.log(arc(d));
      return arc(d);
      
    });

  // add the text
  arcs.append('svg:text').attr('transform', (d) => {
    
    d.innerRadius = 0;
    d.outerRadius = r;
    
    return `translate(${arc.centroid(d)})`;
  
  }).attr('text-anchor', 'middle').text( (d, i) => {
      
    return data[i].label;
    
  });
  
}
