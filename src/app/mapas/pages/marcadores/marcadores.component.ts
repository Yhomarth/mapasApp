import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color : string,
  marker : mapboxgl.Marker
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [

    `
    .mapa-container{
    width: 100%;
    height: 100%;
    }

    .list-group {
      position : fixed;
      top: 20px;
      right: 20px;
      z-index: 99; 
    }

    li{
      cursor : pointer;
    }

    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa !: ElementRef;
  zoomLevel : number = 16;
  center: [number, number] = [-69.84037583114966, 18.48835890524846];
  marcadores : MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.zoomLevel
    });

    // const markerHtml : HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola mundo';

    // new mapboxgl.Marker()
    //     .setLngLat(this.center)
    //     .addTo(this.mapa);



    }

    irMarcador(marcador: mapboxgl.Marker){
      console.log(marcador.getLngLat()  );

      const {lng, lat} = marcador.getLngLat();
      this.mapa.flyTo({
        center  : [ lng, lat  ]
      });

    }

    agregarMarcador(){
      const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

      const nuevoMarcador = new mapboxgl.Marker(
        {
          draggable: true,
          color
        }
      )
        .setLngLat(this.center)
        .addTo(this.mapa);

        this.marcadores.push({
          color,
          marker : nuevoMarcador
        });

      

    }

  

}
