var size = 0;
var ranges_elehex2 = [[1.000000, 48.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(214,252,197,1.0)"})
    })]],
[48.000000, 96.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(122,199,123,1.0)"})
    })]],
[96.000000, 144.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(0,68,27,1.0)"})
    })]]];
var styleCache_elehex2={}
var style_elehex2 = function(feature, resolution){
    var value = feature.get("PNTCNT");
    var style = ranges_elehex2[0][2];
    for (i = 0; i < ranges_elehex2.length; i++){
        var range = ranges_elehex2[i];
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

    if (!styleCache_elehex2[key]){
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
        styleCache_elehex2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_elehex2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};