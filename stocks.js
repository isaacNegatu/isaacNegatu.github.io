const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function addGraph(tabName, symbol, index){


	var chart = '<div class = "well charts" id="tv-medium-widget-' + index + '"></div>';

	var button = "<button type = 'button' id = '" + index + "' class = 'btn btn-success' ><a href = 'contactUs.html'>Buy "+ tabName + "</a></button>";


	$("#charts").append(chart);
	$("#charts").append(button);


    new TradingView.MediumWidget({
      "container_id": "tv-medium-widget-" + index,
      "symbols": [
        [
         tabName,
         symbol

        ]
      ],
      "greyText": "Quotes by",
      "gridLineColor": "#e9e9ea",
      "fontColor": "#83888D",
      "underLineColor": "#dbeffb",
      "trendLineColor": "#4bafe9",
      "width": "100%",
      "height": "450pt",
      "locale": "en",
      "chartOnly": false
    });
}


function start(){

	    var stocks = {
	    	"Tesla": "TSLA",
	        "Apple": "AAPL",
	        "HP": "NYSE:HP"
	    }

	    var index = 0;
	    for (const prop in stocks) {
	      addGraph(prop, stocks[prop], ALPHABET[index]);
	      index++;
	    }



}

$(document).ready(start);
