<template>
  <div class="home px-7">
    <div class="rounded-3xl bg-white p-8">
      <div class="flex flex-wrap" v-if="Allemployees">
        <div class="w-2/5 px-5">
          <p class="text-lg font-medium text-yellow-800">
            Barcha xodimlar soni:
            <span class="text-4xl font-serif">{{ Allemployees }}</span>
          </p>
          <p class="text-lg font-medium text-blue-500">
            Erkaklar: <span class="text-4xl font-serif">{{ series[0] }}</span>
          </p>
          <p class="text-lg font-medium text-red-500">
            Ayollar: <span class="text-4xl font-serif">{{ series[1] }}</span>
          </p>
          <br />
          <p class="text-lg font-medium text-green-500">
            Xodimlarning o'rtacha yoshi:
            <span class="text-4xl font-serif">{{ urtayosh }}</span> yosh
          </p>
        </div>
        <div class="w-3/5">
          <apexchart
            type="bar"
            height="350"
            :options="chartOptions1"
            :series="series1"
          ></apexchart>
        </div>
        <div class="w-1/2">
          <apexchart
            type="pie"
            height="300"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="w-1/2">
          <apexchart
            type="donut"
            height="300"
            :options="chartOptions3"
            :series="series3"
          ></apexchart>
        </div>
      </div>
      <div v-else>
        <h1 class="font-serif text-lg text-indigo-800">Sizda ma'lumotlar yo'q. Iltimos ma'lumot kiritib keyin Dashboardni oching. Raxmat</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      urtayosh: null,
      Allemployees: 0,
      series: [],
      chartOptions: {
        chart: {
          // width: 380,
          type: "pie",
        },
        labels: ["Erkak", "Ayol"],
        colors: ["#008ffb", "#ff4560"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series1: [
        {
          data: [],
        },
      ],
      chartOptions1: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            ["18-21 yoshlar"],
            ["22-25 yoshlar"],
            ["26-30 yoshlar"],
            ["31-36 yoshlar"],
            ["37-44 yoshlar"],
            ["44-50 yoshlar"],
            ["51 dan kattalar"],
          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
      series3: [],
      chartOptions3: {
        chart: {
          type: "donut",
        },
        labels: ["Buxgalteriya", "IT", "Marketing"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    let arr = localStorage.list ? JSON.parse(localStorage.list) : [];
    this.Allemployees = arr.length;
    this.series.push(0);
    this.series.push(0);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].gender === "Erkak") {
        this.series[0]++;
      } else {
        this.series[1]++;
      }
    }
    this.series3.push(0);
    this.series3.push(0);
    this.series3.push(0);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].department === "accounting") {
        this.series3[0]++;
      } else if (arr[i].department === "IT") {
        this.series3[1]++;
      } else {
        this.series3[2]++;
      }
    }
    for(let i = 0; i < 7; i++){
      this.series1[0].data.push(0)
    }
    let D = new Date;
    for (let i = 0; i < arr.length; i++) {
      this.urtayosh += parseInt(D.getFullYear() - arr[i].date.slice(6));
      if (D.getFullYear() - arr[i].date.slice(6) > 50) {
        this.series1[0].data[6]++;
      } else if (D.getFullYear() - arr[i].date.slice(6) > 44) {
        this.series1[0].data[5]++;
      } else if (D.getFullYear() - arr[i].date.slice(6) > 36) {
        this.series1[0].data[4]++;
      } else if (D.getFullYear() - arr[i].date.slice(6) > 30) {
        this.series1[0].data[3]++;
      } else if (D.getFullYear() - arr[i].date.slice(6) > 25) {
        this.series1[0].data[2]++;
      } else if (D.getFullYear() - arr[i].date.slice(6) > 21) {
        this.series1[0].data[1]++;
      } else if (D.getFullYear() - arr[i].date.slice(6) > 17) {
        this.series1[0].data[0]++;
      } 
    }
    this.urtayosh = this.urtayosh / arr.length;
  },
};
</script>
