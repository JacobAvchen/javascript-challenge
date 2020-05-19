var ufotable = d3.select("tbody");
var button = d3.select(".btn");
var input = d3.select(".form-control");
var date = "";

function findDate(sighting) {
    return sighting.datetime === date;
}

data.forEach(sighting => {
    var row = ufotable.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);
  });


 button.on("click", function() {
    date = input.property("value");
    
    var dateMatch = data.filter(findDate);
    console.log(date);
    console.log(dateMatch);

    ufotable.html("");

    dateMatch.forEach(sighting => {
        var row = ufotable.append("tr");
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);
      });
  });