export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  const wrapper = document.createElement('div');

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 3) return;

    const [image, title, desc] = cols;
    const titleText = title.textContent.trim();

    fetch(`http://localhost:4502/bin/myservlet?title=${encodeURIComponent(titleText)}`)
      .then(res => res.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          console.log('Servlet:', data);
        } catch {
          console.error("Not JSON:", text);
        }
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