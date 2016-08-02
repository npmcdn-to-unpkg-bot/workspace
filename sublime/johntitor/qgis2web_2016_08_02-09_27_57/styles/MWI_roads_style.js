var size = 0;

var styleCache_MWI_roads={}
var style_MWI_roads = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(218,105,182,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,255,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MWI_roads[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_MWI_roads[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MWI_roads[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};