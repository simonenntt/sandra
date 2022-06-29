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
          label: 'First Dataset',
          data: [{
            x: 20,
            y: 30,
            r: 15
          }, {
            x: 40,
            y: 10,
            r: 10
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'second Dataset',
          data: [{
            x: 16,
            y: 17,
            r: 8
          }, {
            x: 29,
            y: 7,
            r: 2
          }],
          backgroundColor: 'rgb(241, 124, 3)'
        },
        {
          label: 'second Dataset',
          data: [{
            x: 33,
            y: 7,
            r: 34
          }, {
            x: 24,
            y: 14,
            r: 21
          }],
          backgroundColor: 'rgb(241, 124, 3)'
        }
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
         borderColor: '#FFFFCC',
         fill: true,
       }
       
     ],
     labels: ['Now', '2022', '2025'],
   },
 });







  }



     
}
