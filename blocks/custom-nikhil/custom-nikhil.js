export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

  fetch(`http://localhost:4502/bin/myservlet?title=${encodeURIComponent(titleText)}`)
  .then(response => {
    console.log("STATUS:", response.status);
    return response.text();   // temporarily use text
  })
  .then(text => {
    console.log("RAW RESPONSE:", text);
  })
  .catch(error => {
    console.error("ERROR:", error);
  });
  })};