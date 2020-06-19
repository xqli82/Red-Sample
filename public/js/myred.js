$(document).ready(function () {
    const newDiv = document.createElement('div')
    newDiv.setAttribute("class", "my-logout red-ui-editor")
    newDiv.innerHTML = '<a href="/api/ui">DashBoard</a><a href="/logout">注销账户</a> '

    const headerElement = document.querySelector("#red-ui-header")
    headerElement.appendChild(newDiv)
})
