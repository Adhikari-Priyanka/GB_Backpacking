var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_4km_EWRail_1 = new ol.format.GeoJSON();
var features_4km_EWRail_1 = format_4km_EWRail_1.readFeatures(json_4km_EWRail_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4km_EWRail_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4km_EWRail_1.addFeatures(features_4km_EWRail_1);
var lyr_4km_EWRail_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4km_EWRail_1, 
                style: style_4km_EWRail_1,
                interactive: true,
                title: '<img src="styles/legend/4km_EWRail_1.png" /> 4km_EWRail'
            });
var format_YHA_4kmRail_2 = new ol.format.GeoJSON();
var features_YHA_4kmRail_2 = format_YHA_4kmRail_2.readFeatures(json_YHA_4kmRail_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YHA_4kmRail_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YHA_4kmRail_2.addFeatures(features_YHA_4kmRail_2);
var lyr_YHA_4kmRail_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YHA_4kmRail_2, 
                style: style_YHA_4kmRail_2,
                interactive: true,
                title: '<img src="styles/legend/YHA_4kmRail_2.png" /> YHA_4kmRail'
            });
var format_3km_EWRail_3 = new ol.format.GeoJSON();
var features_3km_EWRail_3 = format_3km_EWRail_3.readFeatures(json_3km_EWRail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3km_EWRail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3km_EWRail_3.addFeatures(features_3km_EWRail_3);
var lyr_3km_EWRail_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3km_EWRail_3, 
                style: style_3km_EWRail_3,
                interactive: true,
                title: '<img src="styles/legend/3km_EWRail_3.png" /> 3km_EWRail'
            });
var format_YHA_3kmRail_4 = new ol.format.GeoJSON();
var features_YHA_3kmRail_4 = format_YHA_3kmRail_4.readFeatures(json_YHA_3kmRail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YHA_3kmRail_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YHA_3kmRail_4.addFeatures(features_YHA_3kmRail_4);
var lyr_YHA_3kmRail_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YHA_3kmRail_4, 
                style: style_YHA_3kmRail_4,
                interactive: true,
                title: '<img src="styles/legend/YHA_3kmRail_4.png" /> YHA_3kmRail'
            });
var format_2km_EWRail_5 = new ol.format.GeoJSON();
var features_2km_EWRail_5 = format_2km_EWRail_5.readFeatures(json_2km_EWRail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2km_EWRail_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2km_EWRail_5.addFeatures(features_2km_EWRail_5);
var lyr_2km_EWRail_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2km_EWRail_5, 
                style: style_2km_EWRail_5,
                interactive: true,
                title: '<img src="styles/legend/2km_EWRail_5.png" /> 2km_EWRail'
            });
var format_YHA_2kmRail_6 = new ol.format.GeoJSON();
var features_YHA_2kmRail_6 = format_YHA_2kmRail_6.readFeatures(json_YHA_2kmRail_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YHA_2kmRail_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YHA_2kmRail_6.addFeatures(features_YHA_2kmRail_6);
var lyr_YHA_2kmRail_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YHA_2kmRail_6, 
                style: style_YHA_2kmRail_6,
                interactive: true,
                title: '<img src="styles/legend/YHA_2kmRail_6.png" /> YHA_2kmRail'
            });

lyr_OSMStandard_0.setVisible(true);lyr_4km_EWRail_1.setVisible(false);lyr_YHA_4kmRail_2.setVisible(false);lyr_3km_EWRail_3.setVisible(false);lyr_YHA_3kmRail_4.setVisible(false);lyr_2km_EWRail_5.setVisible(true);lyr_YHA_2kmRail_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_4km_EWRail_1,lyr_YHA_4kmRail_2,lyr_3km_EWRail_3,lyr_YHA_3kmRail_4,lyr_2km_EWRail_5,lyr_YHA_2kmRail_6];
lyr_4km_EWRail_1.set('fieldAliases', {'Station name': 'Station name', 'id': 'id', 'Nearest YHA': 'Nearest YHA', });
lyr_YHA_4kmRail_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'noRail4km': 'noRail4km', });
lyr_3km_EWRail_3.set('fieldAliases', {'Station name': 'Station name', 'id': 'id', 'Nearest YHA': 'Nearest YHA', });
lyr_YHA_3kmRail_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'noRail3km': 'noRail3km', });
lyr_2km_EWRail_5.set('fieldAliases', {'Station name': 'Station name', 'id': 'id', 'Nearest YHA': 'Nearest YHA', });
lyr_YHA_2kmRail_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'noRail2km': 'noRail2km', });
lyr_4km_EWRail_1.set('fieldImages', {'Station name': 'TextEdit', 'id': 'TextEdit', 'Nearest YHA': 'TextEdit', });
lyr_YHA_4kmRail_2.set('fieldImages', {'fid': '', 'Name': '', 'noRail4km': '', });
lyr_3km_EWRail_3.set('fieldImages', {'Station name': 'TextEdit', 'id': 'TextEdit', 'Nearest YHA': 'TextEdit', });
lyr_YHA_3kmRail_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'noRail3km': 'TextEdit', });
lyr_2km_EWRail_5.set('fieldImages', {'Station name': 'TextEdit', 'id': 'TextEdit', 'Nearest YHA': 'TextEdit', });
lyr_YHA_2kmRail_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'noRail2km': 'TextEdit', });
lyr_4km_EWRail_1.set('fieldLabels', {'Station name': 'inline label', 'id': 'inline label', 'Nearest YHA': 'inline label', });
lyr_YHA_4kmRail_2.set('fieldLabels', {'fid': 'inline label', 'Name': 'inline label', 'noRail4km': 'inline label', });
lyr_3km_EWRail_3.set('fieldLabels', {'Station name': 'inline label', 'id': 'inline label', 'Nearest YHA': 'inline label', });
lyr_YHA_3kmRail_4.set('fieldLabels', {'fid': 'inline label', 'Name': 'inline label', 'noRail3km': 'inline label', });
lyr_2km_EWRail_5.set('fieldLabels', {'Station name': 'inline label', 'id': 'inline label', 'Nearest YHA': 'inline label', });
lyr_YHA_2kmRail_6.set('fieldLabels', {'fid': 'inline label', 'Name': 'inline label', 'noRail2km': 'inline label', });
lyr_YHA_2kmRail_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});