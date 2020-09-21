import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor() { }

  public chart: any = null;
  public chart2: any = null;
  private intervalUpdate: any = null;

  ngOnInit(): void {
    this.intervalUpdate = setInterval(function(){
      this.showData();
     }.bind(this), 1000);

     this.chart = new Chart('realtime', {
      type: 'line',
      data: {
       labels: [],
       datasets: [
         {
        label: 'temperatura',
        fill: false,
        data: [],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         },
         {
          label: 'humedad',
          fill: false,
          data: [],
          backgroundColor: '#ff4017',
          borderColor: '#ff4017'
           }
       ]
        },
        options: {
       tooltips: {
        enabled: false
       },
       legend: {
        display: true,
        position: 'bottom',
        labels: {
         fontColor: 'black'
        }
       },
       scales: {
         yAxes: [{
          ticks: {
           fontColor: "black"
          }
         }],
         xAxes: [{
        ticks: {
         fontColor: "black",
         beginAtZero: true
        }
         }]
       }
        }
     });

     this.chart2 = new Chart('realtime2', {
      type: 'line',
      data: {
       labels: [],
       datasets: [
         {
        label: 'corriente',
        fill: false,
        data: [],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         },
         {
          label: 'intensidad',
          fill: false,
          data: [],
          backgroundColor: '#ff4017',
          borderColor: '#ff4017'
           }
       ]
        },
        options: {
       tooltips: {
        enabled: false
       },
       legend: {
        display: true,
        position: 'bottom',
        labels: {
         fontColor: 'black'
        }
       },
       scales: {
         yAxes: [{
          ticks: {
           fontColor: "black"
          }
         }],
         xAxes: [{
        ticks: {
         fontColor: "black",
         beginAtZero: true
        }
         }]
       }
        }
     });

  }

  private showData(): void {
   
    var x=Math.floor(Math.random() * 50) + 51  ;

    let chartTime: any = new Date();
    chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
    this.chart.data.labels.push(chartTime);
    this.chart.data.datasets[0].data.push(x);
    

    x=Math.floor(Math.random() * 50) + 51  ;
    this.chart.data.datasets[1].data.push(x);
      console.log('aqui '+this.chart.data.datasets[1].data.length);
    if (this.chart.data.datasets[1].data.length>10){
      console.log('el shift ');
      this.chart.data.datasets[1].data.shift(); 
      this.chart.data.datasets[0].data.shift(); 
      this.chart.data.labels.shift(); 
    }

    this.chart.update();

    x=Math.floor(Math.random() * 50) + 51  ;

    this.chart2.data.labels.push(chartTime);
    this.chart2.data.datasets[0].data.push(x);
    

    x=Math.floor(Math.random() * 50) + 51  ;
    this.chart2.data.datasets[1].data.push(x);
      console.log('aqui '+this.chart.data.datasets[1].data.length);
    if (this.chart2.data.datasets[1].data.length>10){
      console.log('el shift ');
      this.chart2.data.datasets[1].data.shift(); 
      this.chart2.data.datasets[0].data.shift(); 
      this.chart2.data.labels.shift(); 
    }

    this.chart2.update();


  }

  private ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
   }
}
