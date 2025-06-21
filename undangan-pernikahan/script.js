
const form = document.getElementById('formUcapan');
const list = document.getElementById('listUcapan');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;

  const div = document.createElement('div');
  div.innerHTML = `<strong>${nama}</strong><p>${pesan}</p><hr>`;
  list.prepend(div);

  form.reset();
});
