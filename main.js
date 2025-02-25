document.getElementById('code-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const code = document.getElementById('code-input').value;
  
  const response = await fetch('/api/deobfuscate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code, language: 'js' })
  });
  
  const data = await response.json();
  
  document.getElementById('result-display').textContent = data.deobfuscatedCode;
});
