export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

 fetch(`http://localhost:4502/bin/myservlet?title=${encodeURIComponent(titleText)}`)
  .then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then(data => console.log("SUCCESS:", data))
  .catch(err => console.error("ERROR:", err));
  })};