var bar_spec = null;

/*
    Display Main Map Visualisation
*/
var spec_vic = "https://HBAK0001.github.io/fit3179-a2/fed.nat.2019.chart.json";
            
            vegaEmbed('#vis-main', spec_vic).then(function(result) {
                result.view.addEventListener('click', function(event, item){
                    displayElectorateInfo(item);
                });
            }).catch(console.error);

/*
    Display electorate results when clicked
*/
function displayElectorateInfo(item) {
    if (bar_spec !== null){
        let bar_spec_filtered = bar_spec;
        if (item !== null){
            let division = item.datum.properties.Sortname;
            bar_spec_filtered.transform.push({
                "filter": "datum.DivisionNm == " + division
            })
        }
        vegaEmbed('#vis-bar', bar_spec_filtered).then(function (result) {

        });
    }
}

/* 
    Main initialisation function
*/
async function main(){
    bar_spec = await $.getJSON("https://hbak0001.github.io/fit3179-a2/results.bar.chart.json");
    displayElectorateInfo(null);
}

main()