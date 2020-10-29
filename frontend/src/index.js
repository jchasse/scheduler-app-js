const serviceSelect = document.getElementById('category-select')

serviceSelect.addEventListener("change", function() {
    Service.renderIssueForm(serviceSelect.value)
    Service.renderDetailsTab()
    User.renderUserTab()
    Location.renderLocationTab()
})