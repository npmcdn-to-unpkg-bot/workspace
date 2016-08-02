var size = 0;
var ranges_agrihex = [[1.000000, 48.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(153,52,4,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(153,52,4,1.0)"})
    })]]];
var styleCache_agrihex={}
var style_agrihex = function(feature, resolution){
    var value = feature.get("PNTCNT");
    var style = ranges_agrihex[0][2];
    for (i = 0; i < ranges_agrihex.length; i++){
        var range = ranges_agrihex[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_agrihex[key]){
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
        styleCache_agrihex[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_agrihex[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};