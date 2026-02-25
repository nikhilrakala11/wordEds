export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

    fetch(`https://abc123.ngrok-free.app/bin/myservlet?title=${encodeURIComponent(titleText)}`)
      .then(() => {
        console.log("Servlet called for:", titleText);
      })
      .catch((err) => {
        console.error("Error calling servlet:", err);
      });
  });
}