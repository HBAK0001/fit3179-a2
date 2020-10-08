function changeMap(type, state, subgroup) {
    var i;
    var x = document.getElementsByClassName(state+"-map");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(state+'-'+subgroup).style.display = "block";
}

/*
 *  Vega embedding
 */

var spec_vic = "https://HBAK0001.github.io/fit3179-a2/fed.vic.chart.json";
vegaEmbed('#vis-vic', spec_vic).then(function(result) {
}).catch(console.error);
var spec_vic_metro = "https://HBAK0001.github.io/fit3179-a2/fed.vic.chart.metro.json";
vegaEmbed('#vis-vic-metro', spec_vic_metro).then(function(result) {
}).catch(console.error);

var spec_nsw = "https://HBAK0001.github.io/fit3179-a2/fed.nsw.chart.json";
vegaEmbed('#vis-nsw', spec_nsw).then(function(result) {
}).catch(console.error);
var spec_wa = "https://HBAK0001.github.io/fit3179-a2/fed.wa.chart.json";
vegaEmbed('#vis-wa', spec_wa).then(function(result) {
}).catch(console.error);
var spec_qld = "https://HBAK0001.github.io/fit3179-a2/fed.qld.chart.json";
vegaEmbed('#vis-qld', spec_qld).then(function(result) {
}).catch(console.error);

var spec_sa = "https://HBAK0001.github.io/fit3179-a2/fed.sa.chart.json";
vegaEmbed('#vis-sa', spec_sa).then(function(result) {
}).catch(console.error);
var spec_tas = "https://HBAK0001.github.io/fit3179-a2/fed.tas.chart.json";
vegaEmbed('#vis-tas', spec_tas).then(function(result) {
}).catch(console.error);
var spec_nt = "https://HBAK0001.github.io/fit3179-a2/fed.nt.chart.json";
vegaEmbed('#vis-nt', spec_nt).then(function(result) {
}).catch(console.error);
var spec_act = "https://HBAK0001.github.io/fit3179-a2/fed.act.chart.json";
vegaEmbed('#vis-act', spec_act).then(function(result) {
}).catch(console.error);

const states = ["vic", "nsw"]
states.forEach(function (item, index) {
    changeMap("fed", item, "regional")
})