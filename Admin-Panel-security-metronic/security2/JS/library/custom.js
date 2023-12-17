import { templateContainer } from ".././security.js";

// swiper slide js library:
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// chart js [start]
var options = {
  series: [
    {
      name: "Revenue",
      data: [56, 75, 80, 119, 80, 75, 60, 80, 110, 77, 50, 66],
    },
    {
      data: [50, 70, 75, 114, 75, 70, 55, 75, 105, 70, 45, 60],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      borderRadius: 9,
      endingShape: "rounded",
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "دی",
      "بهمن",
      "اسفند",
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "ابان",
      "اذر",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.8,
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  colors: ["#009ef7", "#565674"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// chart js [end]

export { swiper };
