import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NavController,
  LoadingController,
  IonicPage,
  NavParams
} from "ionic-angular";
import Highcharts, { isObject } from "highcharts";
import More from "highcharts/highcharts-more";
import { HomePage } from "../home/home";
import { Socket } from "ng-socket-io";

More(Highcharts);
@IonicPage()
@Component({
  selector: "page-firesensors",
  templateUrl: "firesensors.html"
})
export class FiresensorsPage {
  a: any;
  carbMono: number;
  temp: number;
  acc: [number, number];
  data2: [number, number] = [0, 0];
  data: any = 0;
  i: number = 1;
  carbDuo: number;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  @ViewChild("container1", { read: ElementRef }) container1: ElementRef;
  @ViewChild("container2", { read: ElementRef }) container2: ElementRef;
  showImage: boolean = true;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public socket: Socket,
    public navParams: NavParams
  ) {
    this.data2 = [new Date().getTime(), 0];
    this.carbMono = navParams.get("mono");
    this.carbDuo = navParams.get("duo");
    this.temp = navParams.get("temp");
    this.socket.connect();
    if (localStorage.getItem("userData")) {
      this.socket.on(
        JSON.parse(localStorage.getItem("userData")).homeId.toString(),
        msg => {
          this.temp = JSON.parse(msg.payload).Temp;
        }
      );
    }
    if (this.carbMono == 0) {
      let loading = this.loadingCtrl.create({
        spinner: "ios",
        content: "Please wait..."
      });
      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 5000);
    }

    //this.carbMono = 0;
    //this.carbDuo = 0;
  }

  ionViewDidLoad() {
    Highcharts.chart(
      this.container.nativeElement,
      {
        chart: {
          type: "gauge",
          height: "80%",
          backgroundColor: null,
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          style: {
            fontFamily: "Verdana, sans-serif",
            color: "#000000",
            fontWeight: "bold",
            fontSize: "15px"
          },
          text: "Carbon Monoxide Level",
          y: 30
        },

        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                //  stops: [[0, "#FFF"], [1, "#333"]]
              },
              borderWidth: 0,
              outerRadius: "109%"
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                // stops: [[0, "#333"], [1, "#FFF"]]
              },
              borderWidth: 1,
              outerRadius: "107%"
            },
            {
              // default background
            },
            {
              // backgroundColor: "#DDD",
              borderWidth: 0,
              outerRadius: "105%",
              innerRadius: "103%"
            }
          ]
        },

        // the value axis
        yAxis: {
          min: 0,
          max: 50,

          minorTickInterval: "auto",
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickColor: "#666",

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: "inside",
          tickLength: 10,
          tickColor: "#666",
          labels: {
            step: 2,
            rotation: 0
          },
          title: {
            text: "PPM"
          },
          plotBands: [
            {
              from: 0,
              to: 10,
              color: "#55BF3B" // green
            },
            {
              from: 10,
              to: 25,
              color: "#DDDF0D" // yellow
            },
            {
              from: 25,
              to: 50,
              color: "#DF5353" // red
            }
          ]
        },

        series: [
          {
            type: "gauge",
            name: "CO",
            data: [this.carbMono],
            tooltip: {
              valueSuffix: "PPM"
            }
          }
        ]
      },
      // Add some life
      function(chart) {
        setInterval(function() {
          var point = chart.series[0].points[0],
            newVal;
          if (localStorage.getItem("userData")) {
            this.socket.on(
              JSON.parse(localStorage.getItem("userData")).homeId.toString(),
              msg => {
                this.carbMono = JSON.parse(msg.payload).CarbonMonoxide;
              }
            );
          }
          newVal = this.carbMono;
          this.data = newVal;
          point.update(newVal);
        }, 2500);
      }
    );

    Highcharts.chart(
      this.container1.nativeElement,
      {
        chart: {
          type: "gauge",
          height: "80%",
          backgroundColor: null,
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          style: {
            fontFamily: "Verdana, sans-serif",
            color: "#000000",
            fontWeight: "bold",
            fontSize: "15px"
          },
          text: "Carbon Duoxide Level",
          y: 30
        },

        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                //  stops: [[0, "#FFF"], [1, "#333"]]
              },
              borderWidth: 0,
              outerRadius: "109%"
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }
                // stops: [[0, "#333"], [1, "#FFF"]]
              },
              borderWidth: 1,
              outerRadius: "107%"
            },
            {
              // default background
            },
            {
              // backgroundColor: "#DDD",
              borderWidth: 0,
              outerRadius: "105%",
              innerRadius: "103%"
            }
          ]
        },

        // the value axis
        yAxis: {
          min: 250,
          max: 15000,

          minorTickInterval: "auto",
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickColor: "#666",

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: "inside",
          tickLength: 10,
          tickColor: "#666",
          labels: {
            step: 2,
            rotation: 0
          },
          title: {
            text: "PPM"
          },
          plotBands: [
            {
              from: 250,
              to: 1000,
              color: "#55BF3B" // green
            },
            {
              from: 1000,
              to: 5000,
              color: "#DDDF0D" // yellow
            },
            {
              from: 5000,
              to: 15000,
              color: "#DF5353" // red
            }
          ]
        },

        series: [
          {
            type: "gauge",
            name: "CO²",
            data: [this.carbDuo],
            tooltip: {
              valueSuffix: "PPM"
            }
          }
        ]
      },

      // Add some life
      function(chart) {
        setInterval(function() {
          var point = chart.series[0].points[0],
            newVal;
          if (localStorage.getItem("userData")) {
            this.socket.on(
              JSON.parse(localStorage.getItem("userData")).homeId.toString(),
              msg => {
                this.carbDuo = JSON.parse(msg.payload).CarbonDioxide;
              }
            );
          }
          newVal = this.carbDuo;
          point.update(newVal);
        }, 2500);
      }
    );
  }
}
