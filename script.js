
// script.js

const data = [
  { bulan: 'Jan', tahun: '2024', target: 261, aktual: 255.0 },
  { bulan: 'Feb', tahun: '2024', target: 266, aktual: 246.0 },
  { bulan: 'Mar', tahun: '2024', target: 271, aktual: 247.0 },
  { bulan: 'Apr', tahun: '2024', target: 240, aktual: 230.0 },
  { bulan: 'Mei', tahun: '2024', target: 271, aktual: 258.0 },
  { bulan: 'Jun', tahun: '2024', target: 274, aktual: 249.0 },
  { bulan: 'Jul', tahun: '2024', target: 278, aktual: 267.0 },
  { bulan: 'Agst', tahun: '2024', target: 281, aktual: 269.0 },
  { bulan: 'Sept', tahun: '2024', target: 284, aktual: 269.0 },
  { bulan: 'Okt', tahun: '2024', target: 288, aktual: 270.0 },
  { bulan: 'Nov', tahun: '2024', target: 291, aktual: 270.0 },
  { bulan: 'Des', tahun: '2024', target: 293, aktual: 263.0 },
  { bulan: 'Jan', tahun: '2025', target: 264, aktual: 257.0 },
  { bulan: 'Feb', tahun: '2025', target: 272, aktual: 277.0 },
  { bulan: 'Mar', tahun: '2025', target: 270, aktual: 260.0 },
  { bulan: 'Apr', tahun: '2025', target: 257, aktual: 251.0 },
];

const labels = data.map(d => `${d.bulan} ${d.tahun}`);
const target = data.map(d => d.target);
const aktual = data.map(d => d.aktual);

// Grafik bulanan
const ctx1 = document.getElementById('grafikBulanan').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Target',
        data: target,
        borderColor: 'blue',
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: 'blue'
      },
      {
        label: 'Aktual',
        data: aktual,
        borderColor: 'green',
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: 'green'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Grafik Mobil Operasi Bulanan'
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${context.parsed.y}`
        }
      }
    }
  }
});

// Hitung rata-rata
const avg2024 = data.filter(d => d.tahun === '2024').map(d => d.aktual);
const avg2025 = data.filter(d => d.tahun === '2025').map(d => d.aktual);

const mean2024 = avg2024.reduce((a,b)=>a+b,0) / avg2024.length;
const mean2025 = avg2025.reduce((a,b)=>a+b,0) / avg2025.length;

// Grafik rata-rata
const ctx2 = document.getElementById('grafikRataRata').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2024', '2025'],
    datasets: [{
      label: 'Rata-rata Aktual',
      data: [mean2024.toFixed(2), mean2025.toFixed(2)],
      backgroundColor: ['#0074D9', '#111111']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Rata-rata Mobil Operasi per Tahun'
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${context.parsed.y}`
        }
      }
    },
    scales: {
      y: {
        min: 250,
        max: 270
      }
    }
  }
});

