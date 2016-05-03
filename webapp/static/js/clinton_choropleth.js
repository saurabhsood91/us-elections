$(function(){
  var clinton_map = new Datamap({
    scope: 'usa',
    element: document.getElementById('clintonchor'),
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
        "percentage": "80%"
    },
    "CO": {
        "fillKey": "Negative",
        "percentage": "100%"
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
        "percentage": "73%"
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
        "percentage": "80%"
    },
    "IN": {
        "fillKey": "Negative",
        "percentage": "87.5"
    },
    "IA": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "KS": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "KY": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "LA": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "MD": {
        "fillKey": "Negative",
        "percentage": "70.58%"
    },
    "ME": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "MA": {
        "fillKey": "Negative",
        "percentage": "32%"
    },
    "MN": {
        "fillKey": "Negative",
        "percentage": "55%"
    },
    "MI": {
        "fillKey": "Negative",
        "percentage": "83%"
    },
    "MS": {
        "fillKey": "Negative",
        "percentage": "63%"
    },
    "MO": {
        "fillKey": "Positive",
        "percentage": "100%"
    },
    "MT": {
        "fillKey": "Positive",
        "percentage": "100%"
    },
    "NC": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "NE": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "NV": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "NH": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "NJ": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "NY": {
        "fillKey": "Negative",
        "percentage": "59%"
    },
    "ND": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "NM": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "OH": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "OK": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "OR": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "PA": {
        "fillKey": "Positive",
        "percentage": "51%"
    },
    "RI": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "SC": {
        "fillKey": "Negative",
        "percentage": "75%"
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
        "percentage": "55%"
    },
    "UT": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "WI": {
        "fillKey": "Negative",
        "percentage": "60%"
    },
    "VA": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "VT": {
        "fillKey": "Negative",
        "percentage": "100%"
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
        "fillKey": "Positive",
        "percentage": "100%"
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
        "percentage": "71%"
    },
    "AL": {
        "fillKey": "Negative",
        "percentage": "75%"
    }
  }
  });
  clinton_map.labels();
  clinton_map.legend();
});
