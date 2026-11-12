// Shared page script: footer year, and the contact form's "sent" banner.
(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  try {
    var params = new URLSearchParams(window.location.search);
    var main = document.querySelector('main.container');
    if (params.get('sent') === 'true' && main) {
      var banner = document.createElement('div');
      banner.className = 'sentBanner';
      banner.textContent = 'Thanks — your message was sent. I’ll follow up soon.';
      main.prepend(banner);
    }
  } catch (e) {}
})();
