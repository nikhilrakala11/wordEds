export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  const wrapper = document.createElement('div');

  rows.forEach((row) => {
    const cols = [...row.children];

    if (cols.length < 3) return;

    const [image, title, desc] = cols;

    const titleText = title.textContent.trim();

    // 🔥 CALL SERVLET USING DYNAMIC VALUE
    fetch(`http://localhost:4502/bin/myservlet?title=${encodeURIComponent(titleText)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Servlet Response:', data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    const card = document.createElement('div');

    card.innerHTML = `
      <div>${image.innerHTML}</div>
      <h3>${titleText}</h3>
      <p>${desc.textContent}</p>
    `;

    wrapper.appendChild(card);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);
}