<!-- <template>
     <div class="content">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <Responsive class="w-full">
              <template #main="{ width }">
                <Chart
                  direction="circular"
                  :size="{ width, height: 400 }"
                  :data="data"
                  :margin="{
                    left: Math.round((width - 360)/2),
                    top: 40,
                    right: 0,
                    bottom: 20
                  }"
                  :axis="axis"
                  :config="{ controlHover: false }"
                  >
                  <template #layers>
                    <Pie
                      :dataKeys="['name', 'pl']"
                      :pie-style="{ innerRadius: 100, padAngle: 0.05 }" />
                  </template>
                  <template #widgets>
                    <Tooltip
                      :config="{
                        name: { },
                        avg: { hide: true},
                        pl: { label: 'value' },
                        inc: { hide: true }
                      }"
                      hideLine
                    />
                  </template>
                </Chart>
              </template>
            </Responsive>
          </div>
          <div class="col-lg-6">
          
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Chart, Responsive, Pie, Tooltip } from 'vue3-charts'
import { plByMonth } from './Data'

    export default{
        name:'Home',
        components: { Chart, Responsive, Pie, Tooltip },
        setup() {
          const data = ref(plByMonth)

          return { data }
        }
    }
</script>

<style>
.axis{
  display: none;
}
</style> -->

<template>
  <div class="content">
   <div class="content-header">
     <div class="container-fluid">
       <div class="row mb-2">
         <div class="col-sm-6">
           <h1 class="m-0">Dashboard</h1>
         </div>
         <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
             <li class="breadcrumb-item"><a href="#">Home</a></li>
             <li class="breadcrumb-item active">Dashboard</li>
           </ol>
         </div>
       </div>
     </div>
   </div>
   <div class="container-fluid">
     <div class="row">
       <div class="col-lg-6">
        
       </div>
       <div class="col-lg-6">
       
       </div>
     </div>
   </div>
 </div>
</template>

<script>
// import ApexCharts from 'apexcharts'
 export default{
     name:'Home',
     props:{
            msg:String
        }
 }
</script>

<style>
.axis{
display: none;
}
</style>
