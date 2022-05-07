import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [

    `
    .mapa-container{
    width: 100%;
    height: 100%;
    }

    .row{
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
    }
    `


  ]
})
export class ZoomRangeComponent implements AfterViewInit {


  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa !: ElementRef;
  zoomLevel : number = 10;

  constructor() { }

  ngAfterViewInit(): void {


    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-69.84037583114966, 18.48835890524846],
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', ()=>{
      this.zoomLevel = this.mapa.getZoom();
    });


  }

  zoomOut(){
    this.mapa.zoomOut();
    
  }

  zoomIn(){
    this.mapa.zoomIn();
    
  }

}
