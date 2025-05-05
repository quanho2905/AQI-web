document.addEventListener("DOMContentLoaded", () => {
  // AQI Data
  const aqiData = {
    pm25: 83,
    pm10: 58,
    o3: 13,
    no2: 57,
    so2: 6,
    co: 2,
  };

  // Set bar height based on AQI value
  const bars = document.querySelectorAll(".aqi-bar .bar");
  bars[0].style.height = `${(aqiData.pm25 / 500) * 100}%`; // PM2.5 bar
  bars[1].style.height = `${(aqiData.pm10 / 500) * 100}%`; // PM10 bar
  bars[2].style.height = `${(aqiData.o3 / 500) * 100}%`; // O3 bar
  bars[3].style.height = `${(aqiData.no2 / 500) * 100}%`; // NO2 bar
  bars[4].style.height = `${(aqiData.so2 / 500) * 100}%`; // SO2 bar
  bars[5].style.height = `${(aqiData.co / 500) * 100}%`; // CO bar
});
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ], // Các ngày

    datasets: [
      {
        label: "PM2.5",
        // Lọc bỏ các giá trị undefined khỏi mảng dữ liệu
        data: [
          13,
          14,
          15,
          13,
          14,
          13,
          12,
          100,
          200,
          undefined,
          80,
          90,
          110,
          undefined,
          130,
          150,
          160,
          170,
          180,
          190,
          200,
          210,
          220,
          230,
        ].filter((value) => value !== undefined),
        backgroundColor: function (context) {
          let value = context.dataset.data[context.dataIndex]; // Lấy giá trị của dữ liệu hiện tại
          if (value <= 50 && value > 0) {
            return "rgba(0,204,0)"; // Xanh lá
          } else if (value > 51 && value <= 100) {
            return "rgb(255,255,0)"; // Vàng
          } else if (value > 100 && value <= 150) {
            return "rgb(255,165,0)"; // Cam
          } else if (value > 150 && value <= 200) {
            return "rgb(255,0,0)"; // Đỏ
          } else if (value > 200 && value <= 300) {
            return "rgb(153,0,76)"; // Đỏ tía
          } else {
            return "rgb(126,0,35)"; // Đỏ đậm cho giá trị >= 300
          }
        },
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
function openChart(evt, chartName) {
  // Lấy tất cả các tab và bỏ active class
  var tabs = document.querySelectorAll(".tablinks");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Thêm active class vào button đang được nhấn
  evt.currentTarget.classList.add("active");

  // Bạn có thể thêm mã xử lý để hiển thị chart tương ứng ở đây
}

function selectDay(day) {
  // Lấy tất cả các button và bỏ active class
  var buttons = document.querySelectorAll(".day-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Thêm active class vào button đang được nhấn
  document
    .querySelector(`button[onclick="selectDay('${day}')"]`)
    .classList.add("active");

  // Bạn có thể thêm mã xử lý để hiển thị dữ liệu cho ngày đã chọn ở đây
}
