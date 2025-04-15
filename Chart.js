<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Analitik Penyerapan Anggaran</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .card {
            margin-top: 30px;
        }
        .card-body {
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-center mt-4">Dashboard Analitik Penyerapan Anggaran</h1>
        
        <!-- Chart untuk Anggaran Lintas Bidang -->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Penyerapan Anggaran Lintas Bidang</h4>
                <canvas id="anggaranChart"></canvas>
            </div>
        </div>
        
        <!-- Chart untuk Progres Anggaran -->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Progres Penyerapan Anggaran</h4>
                <canvas id="progresChart"></canvas>
            </div>
        </div>
        
        <!-- Chart untuk Pagu dan Realisasi -->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Pagu vs Realisasi</h4>
                <canvas id="paguRealisasiChart"></canvas>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        // Data contoh (bisa diganti dengan data dinamis dari database atau API)
        const dataAnggaran = {
            labels: ['Sekretariat', 'TPH', 'SDM', 'Perkebunan', 'UPTD', 'ALSINTAN', 'KETAPANG'],
            datasets: [{
                label: 'Total Anggaran (Rp)',
                data: [5000000, 499999500, 3500000, 6000000, 4500000, 2500000, 7000000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };

        const dataProgres = {
            labels: ['Sekretariat', 'TPH', 'SDM', 'Perkebunan', 'UPTD', 'ALSINTAN', 'KETAPANG'],
            datasets: [{
                label: 'Progres (%)',
                data: [80, 65, 90, 70, 85, 60, 75],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        };

        const dataPaguRealisasi = {
            labels: ['Sekretariat', 'TPH', 'SDM', 'Perkebunan', 'UPTD', 'ALSINTAN', 'KETAPANG'],
            datasets: [
                {
                    label: 'Pagu Anggaran',
                    data: [5000000, 499999500, 3500000, 6000000, 4500000, 2500000, 7000000],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Realisasi Anggaran',
                    data: [4000000, 325000000, 3150000, 4200000, 4000000, 2200000, 6500000],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        };

        // Configurasi Chart.js untuk Anggaran
        const ctxAnggaran = document.getElementById('anggaranChart').getContext('2d');
        new Chart(ctxAnggaran, {
            type: 'bar',
            data: dataAnggaran,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Configurasi Chart.js untuk Progres
        const ctxProgres = document.getElementById('progresChart').getContext('2d');
        new Chart(ctxProgres, {
            type: 'bar',
            data: dataProgres,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Configurasi Chart.js untuk Pagu vs Realisasi
        const ctxPaguRealisasi = document.getElementById('paguRealisasiChart').getContext('2d');
        new Chart(ctxPaguRealisasi, {
            type: 'bar',
            data: dataPaguRealisasi,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
</body>
</html>
