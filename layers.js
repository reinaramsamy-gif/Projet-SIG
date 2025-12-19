var wms_layers = [];

var lyr_NaturalEarthBackground_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://view.eumetsat.int/geoserver/wfs",
                              attributions: ' ',
                              params: {
                                "LAYERS": "backgrounds:ne_background",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'NaturalEarth Background',
                            popuplayertitle: 'NaturalEarth Background',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NaturalEarthBackground_0, 0]);
var format_Microplastiquesdanslescoursdeau2023_1 = new ol.format.GeoJSON();
var features_Microplastiquesdanslescoursdeau2023_1 = format_Microplastiquesdanslescoursdeau2023_1.readFeatures(json_Microplastiquesdanslescoursdeau2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microplastiquesdanslescoursdeau2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microplastiquesdanslescoursdeau2023_1.addFeatures(features_Microplastiquesdanslescoursdeau2023_1);
var lyr_Microplastiquesdanslescoursdeau2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Microplastiquesdanslescoursdeau2023_1, 
                style: style_Microplastiquesdanslescoursdeau2023_1,
                popuplayertitle: 'Microplastiques dans les cours d\'eau (2023)',
                interactive: true,
    title: 'Microplastiques dans les cours d\'eau (2023)<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_0.png" /> 0 - 4969<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_1.png" /> 4969 - 16391<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_2.png" /> 16391 - 36238<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_3.png" /> 36238 - 60757<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_4.png" /> 60757 - 97492<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_5.png" /> 97492 - 330764<br />\
    <img src="styles/legend/Microplastiquesdanslescoursdeau2023_1_6.png" /> 330764 - 517699<br />' });

lyr_NaturalEarthBackground_0.setVisible(true);lyr_Microplastiquesdanslescoursdeau2023_1.setVisible(true);
var layersList = [lyr_NaturalEarthBackground_0,lyr_Microplastiquesdanslescoursdeau2023_1];
lyr_Microplastiquesdanslescoursdeau2023_1.set('fieldAliases', {'featurecla': 'featurecla', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'POP_YEAR': 'POP_YEAR', 'GDP_MD': 'GDP_MD', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10': 'FIPS_10', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'LABEL_X': 'LABEL_X', 'LABEL_Y': 'LABEL_Y', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'FCLASS_ISO': 'FCLASS_ISO', 'TLC_DIFF': 'TLC_DIFF', 'country': 'country', 'PlasticWas': 'PlasticWas', 'PlasticW_1': 'PlasticW_1', 'Microplast': 'Microplast', 'µ-plastic': 'µ-plastic', 'µ-P (tons': 'µ-P (tons', 'µP (tons)': 'µP (tons)', });
lyr_Microplastiquesdanslescoursdeau2023_1.set('fieldImages', {'featurecla': 'TextEdit', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'POP_YEAR': 'Range', 'GDP_MD': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10': 'TextEdit', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'LABEL_X': 'TextEdit', 'LABEL_Y': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'TLC_DIFF': 'TextEdit', 'country': 'TextEdit', 'PlasticWas': 'TextEdit', 'PlasticW_1': 'TextEdit', 'Microplast': 'TextEdit', 'µ-plastic': 'TextEdit', 'µ-P (tons': 'TextEdit', 'µP (tons)': 'Range', });
lyr_Microplastiquesdanslescoursdeau2023_1.set('fieldLabels', {'featurecla': 'hidden field', 'SOVEREIGNT': 'hidden field', 'SOV_A3': 'hidden field', 'TYPE': 'hidden field', 'ADMIN': 'hidden field', 'NAME': 'header label - visible with data', 'NAME_LONG': 'hidden field', 'ABBREV': 'hidden field', 'POSTAL': 'hidden field', 'FORMAL_EN': 'hidden field', 'FORMAL_FR': 'hidden field', 'NAME_CIAWF': 'hidden field', 'NOTE_ADM0': 'hidden field', 'NOTE_BRK': 'hidden field', 'NAME_SORT': 'hidden field', 'NAME_ALT': 'hidden field', 'MAPCOLOR7': 'hidden field', 'MAPCOLOR8': 'hidden field', 'MAPCOLOR9': 'hidden field', 'MAPCOLOR13': 'hidden field', 'POP_EST': 'hidden field', 'POP_RANK': 'hidden field', 'POP_YEAR': 'hidden field', 'GDP_MD': 'hidden field', 'GDP_YEAR': 'hidden field', 'ECONOMY': 'hidden field', 'INCOME_GRP': 'hidden field', 'FIPS_10': 'hidden field', 'CONTINENT': 'hidden field', 'REGION_UN': 'hidden field', 'SUBREGION': 'hidden field', 'REGION_WB': 'hidden field', 'NAME_LEN': 'hidden field', 'LONG_LEN': 'hidden field', 'ABBREV_LEN': 'hidden field', 'TINY': 'hidden field', 'HOMEPART': 'hidden field', 'MIN_ZOOM': 'hidden field', 'MIN_LABEL': 'hidden field', 'MAX_LABEL': 'hidden field', 'LABEL_X': 'hidden field', 'LABEL_Y': 'hidden field', 'NE_ID': 'hidden field', 'WIKIDATAID': 'hidden field', 'FCLASS_ISO': 'hidden field', 'TLC_DIFF': 'hidden field', 'country': 'hidden field', 'PlasticWas': 'hidden field', 'PlasticW_1': 'hidden field', 'Microplast': 'hidden field', 'µ-plastic': 'hidden field', 'µ-P (tons': 'hidden field', 'µP (tons)': 'header label - visible with data', });
lyr_Microplastiquesdanslescoursdeau2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});