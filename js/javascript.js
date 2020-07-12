/*TypeIt*/
$(document).ready(function(){
    $('.prointro').typeIt({
        strings: ["Hi, I'm Prasad", "QA Engineer", "Automation (Selenium with Java) | API (Rest-Assured, Soap UI)"],
        speed: 50,
        autoStart: true
    });
});

/*skills*/
var chart = AmCharts.makeChart( "skill-chart", {
    "type": "radar",
    "theme": "dark",
    "dataProvider": [ 
      { "Technology": "Manual Testing",
        "Percentage": 70  }, 
      { "Technology": "Automation Testing",
        "Percentage": 70  },
      { "Technology": "API Testing",
        "Percentage": 30  } 
     ],
  
    "valueAxes": [ 
      { "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.15 } 
    ],
    
    "startDuration": 2,
    "graphs": [ 
      { "balloonText": "[[value]]",
        "bullet": "round",
        "valueField": "Percentage" }
    ],
  
    "categoryField": "Technology",
    "export": {
      "enabled": true
    }
  
  });