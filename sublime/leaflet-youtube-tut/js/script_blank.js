//JS and Leaflet stuff

var mymap = L.map('map', {
	center: [5, 28],
	zoom: 3,
	minZoom: 2,
	mazZoom: 18
});

L.tilelayer('https://api.mapbox.com/styles/v1/tsukihall/ciqmm133r0013bnngck7l3ag1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHN1a2loYWxsIiwiYSI6ImNpcW1tMDE4OTAwdTlmbm5uajk1N3duNzMifQ.YXqXdaozTI35jm069S01qw',
{attribution:"Mapbox"}).addTo(mymap):