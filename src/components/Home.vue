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
        <!-- First column with the chart -->
        <div class="col-lg-4">
          <apexchart
            type="radialBar"
            height="350"
            :options="chartOptions"
            :series="series"
          />
        </div>
        
        <!-- <div class="col-sm-2 clear-flex"></div> -->
        
        <!-- Second column with donut chart -->
        <div class="col-lg-8">
          <!-- Added new Vue instance here for area chart -->
          <apexchart type="area" height="350" :options="areaChartOptions" :series="areaSeries"></apexchart>
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
          text: 'All Project', 
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
      }],
      areaChartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    };
  }
};
</script>

<style scoped>
.mh {
  height: 100vh;
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
