var bar_spec = null;
var donut_spec = null;

/*
    Display Main Map Visualisation
*/
var spec_vic = "https://HBAK0001.github.io/fit3179-a2/fed.nat.2019.chart.json";         
vegaEmbed('#vis-main', spec_vic).then(function(result) {
    result.view.addEventListener('click', function(event, item){
        displayElectorateInfo(item);
    });
    window.dispatchEvent(new Event('resize'));
}).catch(console.error);

/* 
    Display Overview Visualisations
*/
var spec_seats = "https://HBAK0001.github.io/fit3179-a2/overview.seats.json"
vegaEmbed('#vis-seats', spec_seats).then(function(result) {
    
}).catch(console.error);

var spec_states = "https://HBAK0001.github.io/fit3179-a2/state.breakdown.json"
vegaEmbed('#vis-states', spec_states).then(function(result) {
    
}).catch(console.error);
var spec_demo = "https://HBAK0001.github.io/fit3179-a2/demographic.breakdown.json"
vegaEmbed('#vis-demo', spec_demo).then(function(result) {
    
}).catch(console.error);

var spec_heatmap = "https://HBAK0001.github.io/fit3179-a2/seats.heatmap.json"
vegaEmbed('#vis-heatmap', spec_heatmap).then(function(result) {
    
}).catch(console.error);

/*
    Display electorate results when clicked
*/
function displayElectorateInfo(item) {
    if (bar_spec !== null){
        let bar_spec_filtered = JSON.parse(JSON.stringify(bar_spec));
        if (item !== null){
            let division = item.datum.properties.Sortname;
            console.log(division);
            bar_spec_filtered.transform.unshift({
                "filter": "datum.DivisionNm == \"" + division.replace("'", "\'") + "\""
            })
            document.getElementById("electorate-title").textContent = "Division Overview: " + division;
            // Embed Chart on Page
            vegaEmbed('#vis-bar', bar_spec_filtered).then(function (result) {

            });
        }
    }
    if (donut_spec !== null) {
        let donut_spec_filtered = JSON.parse(JSON.stringify(donut_spec));
        if (item !== null){
            let division = item.datum.properties.Sortname;
            console.log(division);
            donut_spec_filtered.transform.unshift({
                "filter": "datum.DivisionNm == \"" + division.replace("'", "\'") + "\""
            })
            // Embed Chart on Page
            vegaEmbed('#vis-donut', donut_spec_filtered).then(function (result) {

            });
        }
        
    }
}

/* 
    Main initialisation function
*/
async function main(){
    bar_spec = await $.getJSON("https://hbak0001.github.io/fit3179-a2/results.bar.chart.json");
    donut_spec = await $.getJSON("https://hbak0001.github.io/fit3179-a2/results.donut.chart.json");
    displayElectorateInfo(null);
}

main()