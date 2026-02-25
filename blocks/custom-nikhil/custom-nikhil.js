export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

    fetch(`https://strobilaceous-wanier-omer.ngrok-free.dev/bin/myservlet?title=${encodeURIComponent(titleText)}`)
  .then(res => res.json())
  .then(data => {
    console.log("SUCCESS:", data);
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
  });
}
