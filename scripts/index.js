const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    // account info
    const html = `
      <div>Ingresaste como ${user.email}</div>
    `;
    accountDetails.innerHTML = html;

    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

const test = (data) => {
  data.forEach(doc => {
    console.log( doc.data());
  })
}
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option');
    M.FormSelect.init(elems, options);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  });
