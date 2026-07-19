var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AreaFoodDesert_1 = new ol.format.GeoJSON();
var features_AreaFoodDesert_1 = format_AreaFoodDesert_1.readFeatures(json_AreaFoodDesert_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaFoodDesert_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaFoodDesert_1.addFeatures(features_AreaFoodDesert_1);
var lyr_AreaFoodDesert_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaFoodDesert_1, 
                style: style_AreaFoodDesert_1,
                popuplayertitle: 'Area Food Desert',
                interactive: true,
    title: 'Area Food Desert<br />\
    <img src="styles/legend/AreaFoodDesert_1_0.png" /> Food Desert<br />\
    <img src="styles/legend/AreaFoodDesert_1_1.png" /> Terlayani<br />\
    <img src="styles/legend/AreaFoodDesert_1_2.png" /> <br />' });
var format_Buffer1KM_2 = new ol.format.GeoJSON();
var features_Buffer1KM_2 = format_Buffer1KM_2.readFeatures(json_Buffer1KM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer1KM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer1KM_2.addFeatures(features_Buffer1KM_2);
var lyr_Buffer1KM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer1KM_2, 
                style: style_Buffer1KM_2,
                popuplayertitle: 'Buffer 1 KM',
                interactive: false,
                title: '<img src="styles/legend/Buffer1KM_2.png" /> Buffer 1 KM'
            });
var format_Minimarket_3 = new ol.format.GeoJSON();
var features_Minimarket_3 = format_Minimarket_3.readFeatures(json_Minimarket_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minimarket_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minimarket_3.addFeatures(features_Minimarket_3);
var lyr_Minimarket_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minimarket_3, 
                style: style_Minimarket_3,
                popuplayertitle: 'Mini market',
                interactive: true,
                title: '<img src="styles/legend/Minimarket_3.png" /> Mini market'
            });
var format_Pasarrakyat_4 = new ol.format.GeoJSON();
var features_Pasarrakyat_4 = format_Pasarrakyat_4.readFeatures(json_Pasarrakyat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasarrakyat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasarrakyat_4.addFeatures(features_Pasarrakyat_4);
var lyr_Pasarrakyat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasarrakyat_4, 
                style: style_Pasarrakyat_4,
                popuplayertitle: 'Pasar rakyat',
                interactive: true,
                title: '<img src="styles/legend/Pasarrakyat_4.png" /> Pasar rakyat'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AreaFoodDesert_1.setVisible(true);lyr_Buffer1KM_2.setVisible(true);lyr_Minimarket_3.setVisible(true);lyr_Pasarrakyat_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AreaFoodDesert_1,lyr_Buffer1KM_2,lyr_Minimarket_3,lyr_Pasarrakyat_4];
lyr_AreaFoodDesert_1.set('fieldAliases', {'fid': 'fid', 'id_wilayah': 'id_wilayah', 'nama_wilayah': 'nama_wilayah', 'id_kecamatan': 'id_kecamatan', 'nama_kecamatan': 'nama_kecamatan', 'id_kelurahan': 'id_kelurahan', 'nama_kelurahan': 'nama_kelurahan', 'kodepos': 'kodepos', 'jumlah_rt': 'jumlah_rt', 'jumlah_rw': 'jumlah_rw', 'luas_desert': 'luas_desert', 'luas_asli': 'luas_asli', 'persen_food_desert': 'persen_food_desert', 'status': 'status', 'estimasi_jumlah_kk': 'estimasi_jumlah_kk', });
lyr_Buffer1KM_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'opening_hours': 'opening_hours', 'operator': 'operator', });
lyr_Minimarket_3.set('fieldAliases', {'fid': 'fid', 'Nama Minimarket/Supermarket': 'Nama Minimarket/Supermarket', 'brand': 'brand', 'Jam Operasional': 'Jam Operasional', });
lyr_Pasarrakyat_4.set('fieldAliases', {'fid': 'fid', 'Nama Pasar': 'Nama Pasar', 'Jam Operasional': 'Jam Operasional', 'operator': 'operator', 'kapasitas': 'kapasitas', });
lyr_AreaFoodDesert_1.set('fieldImages', {'fid': 'Hidden', 'id_wilayah': 'Hidden', 'nama_wilayah': 'Hidden', 'id_kecamatan': 'Hidden', 'nama_kecamatan': 'TextEdit', 'id_kelurahan': 'TextEdit', 'nama_kelurahan': 'TextEdit', 'kodepos': 'Hidden', 'jumlah_rt': 'Hidden', 'jumlah_rw': 'Hidden', 'luas_desert': 'Hidden', 'luas_asli': 'Hidden', 'persen_food_desert': 'TextEdit', 'status': 'TextEdit', 'estimasi_jumlah_kk': 'TextEdit', });
lyr_Buffer1KM_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'opening_hours': 'TextEdit', 'operator': 'TextEdit', });
lyr_Minimarket_3.set('fieldImages', {'fid': 'Hidden', 'Nama Minimarket/Supermarket': 'TextEdit', 'brand': 'TextEdit', 'Jam Operasional': 'TextEdit', });
lyr_Pasarrakyat_4.set('fieldImages', {'fid': 'Hidden', 'Nama Pasar': 'TextEdit', 'Jam Operasional': 'TextEdit', 'operator': 'Hidden', 'kapasitas': 'TextEdit', });
lyr_AreaFoodDesert_1.set('fieldLabels', {'nama_kecamatan': 'inline label - visible with data', 'id_kelurahan': 'inline label - visible with data', 'nama_kelurahan': 'inline label - visible with data', 'persen_food_desert': 'inline label - visible with data', 'status': 'inline label - visible with data', 'estimasi_jumlah_kk': 'inline label - visible with data', });
lyr_Buffer1KM_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'opening_hours': 'no label', 'operator': 'no label', });
lyr_Minimarket_3.set('fieldLabels', {'Nama Minimarket/Supermarket': 'inline label - visible with data', 'brand': 'inline label - always visible', 'Jam Operasional': 'inline label - visible with data', });
lyr_Pasarrakyat_4.set('fieldLabels', {'Nama Pasar': 'inline label - visible with data', 'Jam Operasional': 'inline label - visible with data', 'kapasitas': 'inline label - visible with data', });
lyr_Pasarrakyat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});