module.exports=function e(t){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.reduce(function(t,r){return t.concat(e(r))},[]),t;case"Feature":return t.geometry?e(t.geometry).map(function(e){var r={type:"Feature",properties:JSON.parse(JSON.stringify(t.properties)),geometry:e};return void 0!==t.id&&(r.id=t.id),r}):t;case"MultiPoint":return t.coordinates.map(function(e){return{type:"Point",coordinates:e}});case"MultiPolygon":return t.coordinates.map(function(e){return{type:"Polygon",coordinates:e}});case"MultiLineString":return t.coordinates.map(function(e){return{type:"LineString",coordinates:e}});case"GeometryCollection":return t.geometries.map(e).reduce(function(e,t){return e.concat(t)},[]);case"Point":case"Polygon":case"LineString":return[t]}};
//# sourceMappingURL=index.js.map
