interface CategoryNotesProps {
  title: string;
  notes: string[];
}

/** Text the old page carried on its own - shop advice, section headings, team lists. */
export function CategoryNotes({ title, notes }: CategoryNotesProps) {
  if (notes.length === 0) return null;

  return (
    <section className="section">
      <h2>{title}</h2>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note} className="note-list__item">
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
}
