import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';

import { Chart } from 'chart.js';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  canvas: any;
  canvas2: any;
  canvas3: any;
  ctx: any;
  ctx2: any;
  ctx3: any;
  @ViewChild('mychart') mychart: any;
  @ViewChild('mychart2') mychart2: any;
  @ViewChild('mychart3') mychart3: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    //1
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Produttività senza IA',
            data: [20, 22, 24, 26],
            backgroundColor: 'rgb(136 154 171 / 65%)',
            borderColor: '#83919E',
            fill: true,
          },
          {
            label: 'Produttività Con IA',
            data: [20, 23, 27, 33],
            backgroundColor: '#FFFF00',
            borderColor: '#66FF66',
            fill: true,
          },
        ],
        labels: ['2022', '2023', '2024', '2025'],
      },
    });

    //2

    this.canvas2 = this.mychart2.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');

    new Chart(this.ctx2, {
      type: 'bubble',
      data: {
        datasets: [
          {
          label: 'Tasso di crescita annuale',
          data: [{
            x: 2021,
            y: 100,
            r: 15
          },
          {
            x: 2022,
            y: 103.3,
            r: 20
          },
          {
            x: 2023,
            y: 110.3,
            r: 20
          },
          {
            x: 2025,
            y: 124.5,
            r: 20
          }
        ],
          backgroundColor: 'rgb(212, 248, 81)'
        },
        
      ]
      },
    });



 //3
 this.canvas3 = this.mychart3.nativeElement;
 this.ctx3 = this.canvas3.getContext('2d');

 new Chart(this.ctx3, {
   type: 'line',
   data: {
     datasets: [
       {
         label: 'Investimenti in IA',
         data: [85.3, 85.3, 204],
         backgroundColor: '#FFFFCC',
         borderColor:  'rgb(255, 125, 0)',
         fill: true,
       }
       
     ],
     labels: ['Now', '2022', '2025'],
   },
 });







  }



     
}
