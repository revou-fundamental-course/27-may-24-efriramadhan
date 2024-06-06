document.addEventListener("DOMContentLoaded", function() {
    // Form validation and display result
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Ambil nilai input
        const nama = document.getElementById("nama").value;
        const tanggalLahir = document.getElementById("tanggal-lahir").value;
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
        const pesan = document.getElementById("pesan").value;

        // Validasi form
        if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
            alert("Semua kolom harus diisi!");
            return;
        }

        // Tampilkan hasil di form-result
        const formResult = document.getElementById("formResult");
        formResult.value = `
Nama: ${nama}
Tanggal Lahir: ${tanggalLahir}
Jenis Kelamin: ${jenisKelamin}
Pesan: ${pesan}
        `;

        // Isi pesan selamat datang di home
        document.getElementById("welcome-message").textContent = `Hi ${nama}, Welcome To Website`;
    });
});
