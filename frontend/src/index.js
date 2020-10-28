const serviceSelect = document.getElementById('category-select')

serviceSelect.addEventListener("change", function() {
    Service.renderIssueForm(serviceSelect.value)
    Service.renderDetailsTab()
    Service.renderPersonTab()
})


function titlecase(string) {
    let words = string.split(' ');
    for (let n = 0; n < words.length; n++) {
      words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
    }
    return words.join(' ');
}