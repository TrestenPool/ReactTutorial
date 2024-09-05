export default function Section({ title, children, ...extra }) {
  return (
    <section {...extra}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
