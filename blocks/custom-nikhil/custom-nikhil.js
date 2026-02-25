export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

  fetch(`https://strobilaceous-wanier-omer.ngrok-free.dev/bin/myservlet?title=${encodeURIComponent(titleText)}`)
  .then(res => res.text())
  .then(text => {
    try {
      const data = JSON.parse(text);
      console.log("✅ SUCCESS:", data);
    } catch {
      console.error("❌ Not JSON:", text);
    }
  })
  .catch(err => {
    console.error("❌ Fetch error:", err);
  });
});
}