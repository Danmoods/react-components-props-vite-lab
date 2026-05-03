function Article({ title, date, preview }) {
  const displayDate = date || "May 3, 2026";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;