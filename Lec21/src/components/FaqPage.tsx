export default function FaqPage() {
  return (
    <section className="page-card">
      <span className="eyebrow">FAQ</span>
      <h1>ხშირად დასმული კითხვები</h1>
      <div className="faq-list">
        <article>
          <h3>რისთვის ვიყენებთ React Router-ს?</h3>
          <p>React Router გვეხმარება ერთ აპლიკაციაში რამდენიმე გვერდის მართვაში.</p>
        </article>
        <article>
          <h3>გვერდის შეცვლისას აპლიკაცია თავიდან იტვირთება?</h3>
          <p>არა, route იცვლება სწრაფად და გვერდი არ იტვირთება თავიდან.</p>
        </article>
      </div>
    </section>
  );
}
