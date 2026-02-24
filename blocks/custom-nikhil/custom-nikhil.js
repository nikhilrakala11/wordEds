export default function decorate(block) {
  const rows = [...block.children];
  rows.shift();

  const wrapper = document.createElement('div');

  rows.forEach((row) => {
    const cols = [...row.children];

    if (cols.length < 3) return; // safety

    const [image, title, desc] = cols;

    const card = document.createElement('div');

    card.innerHTML = `
      <div>${image.innerHTML}</div>
      <h3>${title.textContent}</h3>
      <p>${desc.textContent}</p>
    `;

    wrapper.appendChild(card);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);
}