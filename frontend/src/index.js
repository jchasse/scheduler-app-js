const form = document.getElementById('service-select')

form.addEventListener('click', Service.createService)


function titlecase(string) {
    let words = string.split(' ');
    for (let n = 0; n < words.length; n++) {
      words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
    }
    return words.join(' ');
}