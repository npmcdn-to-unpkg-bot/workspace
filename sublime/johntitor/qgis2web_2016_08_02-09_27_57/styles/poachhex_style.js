var size = 0;
var ranges_poachhex = [[1.000000, 3.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,58,9,1.0)"})
    })]]];
var styleCache_poachhex={}
var style_poachhex = function(feature, resolution){
    var value = feature.get("PNTCNT");
    var style = ranges_poachhex[0][2];
    for (i = 0; i < ranges_poachhex.length; i++){
        var range = ranges_poachhex[i];
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

    if (!styleCache_poachhex[key]){
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
        styleCache_poachhex[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_poachhex[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};