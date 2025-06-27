
document.getElementById('language').addEventListener('change', function() {
  const lang = this.value;
  fetch(`locales/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('title').textContent = data.title;
      document.getElementById('description').textContent = data.description;
      document.getElementById('name').placeholder = data.name;
      document.getElementById('email').placeholder = data.email;
      document.getElementById('country').placeholder = data.country;
      document.getElementById('phone').placeholder = data.phone;
    });
});

async function connectPhantom() {
  if ('solana' in window) {
    const resp = await window.solana.connect();
    document.getElementById('wallet').value = resp.publicKey.toString();
  } else {
    alert("Phantom Wallet no está disponible");
  }
}

document.getElementById('airdropForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: formData
  }).then(() => alert("Datos enviados correctamente"));
});
