<template>
  <div class="content stimg">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2 bg-dark text-white">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item text-white">Home</li>
              <li class="breadcrumb-item text-white">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mh">
      <div class="row">
        <!-- First column with the radial bar chart -->
        <div class="col-lg-4">
          <apexchart
            type="radialBar"
            height="350"
            :options="chartOptions"
            :series="series"
          />
        </div>

        <!-- Second column with the area chart -->
        <div class="col-lg-8">
          <apexchart
            type="area"
            height="350"
            :options="areaChartOptions"
            :series="areaSeries"
          />
        </div>
      </div>
      <div class="row">
        <!-- First column with the polar area chart -->
        <div class="col-lg-4">
          <apexchart
            type="polarArea"
            :options="polarAreaChartOptions"
            :series="polarAreaSeries"
          />
        </div>

        <!-- Second column (the last col-lg-8) with the bar chart -->
        <div class="col-lg-8">
          <!-- Bar chart placed here -->
          <apexchart
            type="bar"
            height="350"
            :options="barChartOptions"
            :series="barSeries"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import VueApexCharts
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'Home',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      // Radial Bar Chart Data
      series: [44, 55, 67, 83],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        title: {
          text: 'Total Project', 
          align: 'center', 
          margin: 10,
          offsetX: 0, 
          offsetY: 0, 
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#263238',
          }
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function () {
                  return 249;
                }
              }
            }
          }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      },
      
      // Area Chart Data
      areaSeries: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: 'series3',
        data: [50, 37, 85, 17, 68, 109, 54]
      }],
      
      // Polar Area Chart Data
      polarAreaSeries: [14, 23, 21, 17, 15, 10, 12],

      // Bar Chart Data (Your original series)
      barSeries: [{
        name: 'Cash Flow',
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
          5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, 
          -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
      }],

      // Chart options for the Bar Chart
      barChartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: '#F15B46'
              }, {
                from: -45,
                to: 0,
                color: '#FEB019'
              }]
            },
            columnWidth: '80%',
          }
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          title: {
            text: 'CPU',
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            }
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            rotate: -90
          }
        }
      },

      // Polar Area Chart Options
      polarAreaChartOptions: {
        chart: {
          type: 'polarArea',
        },
        title: {
          text: 'Projects Progress',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#263238',
          }
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

      // Area Chart Options
      areaChartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        title: {
          text: 'All Running Projects',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#263238',
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    };
  }
};
</script>

<style scoped>

.mh {
  height: 100%vh;
  background-color: rgba(255, 255, 255, 0.813);
  border-radius: 10px;
}

.stimg {
  background-image: url('/public/assets/dist/img/bg4.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
