function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var no_hp = document.getElementById("no_hp").value;
    var alamat = document.getElementById("alamat").value;

    // Validasi nama
    if (nama.trim() == "") {
        alert("Nama harus diisi");
        return false;
    }

    // Validasi email
    if (!email.endsWith("@gmail.com")) {
        alert("Email harus diakhiri dengan '@gmail.com'");
        return false;
    }

    // Validasi nomor HP
    if (!no_hp.startsWith("08")) {
        alert("Nomor HP harus diawali dengan '08'");
        return false;
    }

    // Validasi alamat
    if (alamat.trim() == "") {
        alert("Alamat harus diisi");
        return false;
    }

    return true; // Form akan dikirim jika lolos semua validasi
}