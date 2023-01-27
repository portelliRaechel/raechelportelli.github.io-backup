// Load the data from the data.json file
d3.json("data.json", function(error, data) {
    if (error) throw error;

    // Create the SVG element and set its dimensions
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    // Create the bubble calendar layout
    var bubble = d3.layout.pack()
        .size([width, height])
        .padding(1.5);

    // Bind the data to the SVG element and create the bubbles
    var nodes = svg.selectAll(".node")
        .data(bubble.nodes(data)
        .filter(function(d) { return !d.children; }))
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    // Add the circles for the bubbles
    nodes.append("circle")
        .attr("r", function(d) { return d.r; })
        .style("fill", function(d) { return color(d.value); });

    // Add text labels to the bubbles
    nodes.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function(d) { return d.value; });
});