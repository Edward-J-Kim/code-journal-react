export default function RenderEntry({ url, title, notes }) {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
      <p>{notes}</p>
    </div>
  );
}
