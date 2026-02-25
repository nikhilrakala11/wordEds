export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

    fetch(`https://strobilaceous-wanier-omer.ngrok-free.dev/bin/myservlet?title=${encodeURIComponent(titleText)}`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
    .then(res => res.text())   // 👈 ALWAYS safe
    .then(text => {
      try {
        const data = JSON.parse(text);

        console.log("✅ SUCCESS:", data);

        // 🔥 Example usage
        alert(data.titleReceived);

      } catch (e) {
        console.error("❌ Not JSON response:", text);
      }
    })
    .catch(err => {
      console.error("❌ Fetch error:", err);
    });
  });
}