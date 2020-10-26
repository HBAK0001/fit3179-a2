var bar_json = null;

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
    if (item !== null){
        let division = item.datum.properties.Sortname;
        console.log(division);
    }
    else {
        let division = "national";
        console.log(division);
    }
}

/* 
    Main initialisation function
*/
async function main(){
    
}

main()