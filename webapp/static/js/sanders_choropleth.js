$(function(){
  var sanders_map = new Datamap({
    scope: 'usa',
    element: document.getElementById('sanderschor'),
    geographyConfig: {
      highlightBorderColor: '#bada55',
     popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name + ' Percentage:' + data.percentage + ' '},
      highlightBorderWidth: 3
    },

    fills: {
    'Positive': '#00FF00',
    'Negative': '#FF0000',
    'No Data': '#000000',
    "Mixed": "#0000FF"
  },
  data:{
    "AZ": {
        "fillKey": "Negative",
        "percentage": "87.5%"
    },
    "CO": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "DE": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "FL": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "GA": {
        "fillKey": "Negative",
        "percentage": "80%"
    },
    "HI": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "ID": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "IL": {
        "fillKey": "Negative",
        "percentage": "59%"
    },
    "IN": {
        "fillKey": "Negative",
        "percentage": "70.5%"
    },
    "IA": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "KS": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "KY": {
        "fillKey": "Negative",
        "percentage": "70%"
    },
    "LA": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "MD": {
        "fillKey": "Negative",
        "percentage": "60%"
    },
    "ME": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "MA": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "MN": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "MI": {
        "fillKey": "Negative",
        "percentage": "76%"
    },
    "MS": {
        "fillKey": "No Data",
        "percentage": "-%"
    },
    "MO": {
        "fillKey": "Positive",
        "percentage": "71%"
    },
    "MT": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "NC": {
        "fillKey": "Negative",
        "percentage": "76%"
    },
    "NE": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "NV": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "NH": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "NJ": {
        "fillKey": "Negative",
        "percentage": "63%"
    },
    "NY": {
        "fillKey": "Negative",
        "percentage": "57%"
    },
    "ND": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "NM": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "OH": {
        "fillKey": "Negative",
        "percentage": "82%"
    },
    "OK": {
        "fillKey": "Negative",
        "percentage": "82%"
    },
    "OR": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "PA": {
        "fillKey": "Negative",
        "percentage": "59%"
    },
    "RI": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "SC": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "SD": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "TN": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "TX": {
        "fillKey": "Negative",
        "percentage": "85%"
    },
    "UT": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "WI": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "VA": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "VT": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "WA": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "WV": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "WY": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "CA": {
        "fillKey": "Negative",
        "percentage": "73%"
    },
    "CT": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "AK": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "AR": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "AL": {
        "fillKey": "Negative",
        "percentage": "75%"
    }
  }
  });
  sanders_map.labels();
  sanders_map.legend();
});
