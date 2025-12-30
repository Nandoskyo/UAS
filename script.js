// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (nama === "") {
      error.innerHTML = "Nama wajib diisi!";
      return;
    }

    if (!email.includes("@")) {
      error.innerHTML = "Email harus mengandung @";
      return;
    }

    localStorage.setItem("login", "true");
    window.location.href = "portfolio.html";
  });
}

// DAFTAR
const regForm = document.getElementById("registerForm");
if (regForm) {
  regForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("regNama").value;
    let email = document.getElementById("regEmail").value;
    let error = document.getElementById("regError");

    if (nama === "") {
      error.innerHTML = "Nama wajib diisi!";
      return;
    }

    if (!email.includes("@")) {
      error.innerHTML = "Email harus valid!";
      return;
    }

    alert("Pendaftaran berhasil!");
    window.location.href = "index.html";
  });
}

// LOGOUT
function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}
