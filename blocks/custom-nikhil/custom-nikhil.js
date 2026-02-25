export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const titleText = cols[1].textContent.trim();

    fetch(`http://localhost:4502/bin/myservlet?title=${encodeURIComponent(titleText)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("SUCCESS:", data);
      })
      .catch(error => {
        console.error("ERROR:", error);
      });
  });
}