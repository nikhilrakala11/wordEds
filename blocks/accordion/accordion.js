export default function decorate(block) {
  const rows = [...block.children];
  rows.shift(); // remove header

  const accordion = document.createElement('div');

  rows.forEach((row) => {
    const question = row.children[0].textContent;
    const answer = row.children[1].textContent;

    const details = document.createElement('details');
    const summary = document.createElement('summary');

    summary.textContent = question;

    const p = document.createElement('p');
    p.textContent = answer;

    details.append(summary);
    details.append(p);

    accordion.append(details);
  });

  block.textContent = '';
  block.append(accordion);
}