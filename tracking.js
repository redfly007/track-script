// tracking.js
fetch('http://YOUR_SERVER_IP:3000/log-visit', {  // ← Update this line
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userAgent: navigator.userAgent,
    pageUrl: window.location.href,
    referrer: document.referrer || "Direct"
  })
})
.catch(e => console.error('Tracking error (silent):', e));
