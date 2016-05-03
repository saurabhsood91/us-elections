$(function(){
  var trump_map = new Datamap({
    scope: 'usa',
    element: document.getElementById('trumpchor'),
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
        "percentage": "87.5%"
    },
    "IA": {
        "fillKey": "Negative",
        "percentage": "66.67%"
    },
    "KS": {
        "fillKey": "Negative",
        "percentage": "66%"
    },
    "KY": {
        "fillKey": "Negative",
        "percentage": "55%"
    },
    "LA": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "MD": {
        "fillKey": "Negative",
        "percentage": "70%"
    },
    "ME": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "MA": {
        "fillKey": "Negative",
        "percentage": "100%"
    },
    "MN": {
        "fillKey": "Mixed",
        "percentage": "50%"
    },
    "MI": {
        "fillKey": "Negative",
        "percentage": "81%"
    },
    "MS": {
        "fillKey": "Positive",
        "percentage": "100%"
    },
    "MO": {
        "fillKey": "Positive",
        "percentage": "75%"
    },
    "MT": {
        "fillKey": "Positive",
        "percentage": "100%"
    },
    "NC": {
        "fillKey": "Negative",
        "percentage": "77%"
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
        "percentage": "57%"
    },
    "NJ": {
        "fillKey": "Negative",
        "percentage": "64%"
    },
    "NY": {
        "fillKey": "Negative",
        "percentage": "58%"
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
        "percentage": "73%"
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
        "fillKey": "Negative",
        "percentage": "54%"
    },
    "RI": {
        "fillKey": "Negative",
        "percentage": "75%"
    },
    "SC": {
        "fillKey": "Positive",
        "percentage": "60%"
    },
    "SD": {
        "fillKey": "No Data",
        "percentage": "-"
    },
    "TN": {
        "fillKey": "Negative",
        "percentage": "66%"
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
        "percentage": "75%"
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
        "percentage": "66%"
    },
    "AL": {
        "fillKey": "Negative",
        "percentage": "75%"
    }
  }
  });
  trump_map.labels();
  trump_map.legend();
});
