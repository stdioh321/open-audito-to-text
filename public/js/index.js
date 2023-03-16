const result = document.querySelector("#result");
const btnSubmit = document.querySelector("button[type=submit]");
function uploadAudio(event) {
  event.preventDefault();
  btnSubmit.setAttribute('disabled',true);
  btnSubmit.classList.add('loading');
  result.innerHTML = '';

  const form = new FormData();
  const fileInput = document.getElementById('audioFile');
  form.append('file',fileInput.files[0]);
  result.classList.remove('alert-success');
  result.classList.remove('alert-danger');
  axios.post('/audio',form)
    .then(response => {
      console.log(response.data);
      const text = response.data.text;
      result.innerHTML = text;
      result.classList.add('alert-success');
      btnSubmit.removeAttribute('disabled');
      btnSubmit.classList.remove('loading');
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = error?.message || 'ERROR';
      result.classList.add('alert-danger');
      btnSubmit.removeAttribute('disabled');
      btnSubmit.classList.remove('loading');
    });
}

const form = document.getElementById('audioForm');
form.addEventListener('submit',uploadAudio);
