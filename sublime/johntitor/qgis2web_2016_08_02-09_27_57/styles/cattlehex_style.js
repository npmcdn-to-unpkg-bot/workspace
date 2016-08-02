var size = 0;
var ranges_cattlehex = [[1.000000, 48.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(254,235,226,1.0)"})
    })]],
[48.000000, 96.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(247,104,161,1.0)"})
    })]],
[96.000000, 144.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(122,1,119,1.0)"})
    })]]];
var styleCache_cattlehex={}
var style_cattlehex = function(feature, resolution){
    var value = feature.get("PNTCNT");
    var style = ranges_cattlehex[0][2];
    for (i = 0; i < ranges_cattlehex.length; i++){
        var range = ranges_cattlehex[i];
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

    if (!styleCache_cattlehex[key]){
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
        styleCache_cattlehex[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_cattlehex[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};