export default function decorate(block) {
  const rows = [...block.children];
  rows.shift(); // remove header row

  rows.forEach((row) => {
    const question = row.children[0].textContent;
    const answer = row.children[1].textContent;

    const details = document.createElement('details');
    const summary = document.createElement('summary');

    summary.textContent = question;
    details.append(summary);

    const p = document.createElement('p');
    p.textContent = answer;
    details.append(p);

    block.append(details);
  });

  block.innerHTML = '';
}