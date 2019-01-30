import { Component} from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent  {


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {


    // tslint:disable-next-line:prefer-const
    let mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
