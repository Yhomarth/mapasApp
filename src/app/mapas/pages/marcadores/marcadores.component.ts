import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [

    `
    .mapa-container{
    width: 100%;
    height: 100%;
    }

    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa !: ElementRef;
  zoomLevel : number = 16;
  center: [number, number] = [-69.84037583114966, 18.48835890524846];

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

    new mapboxgl.Marker()
        .setLngLat(this.center)
        .addTo(this.mapa);

    }

  

}
