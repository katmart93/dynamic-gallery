export default function Card({ images }) {
  return (
    <>
      {images.map((img, idx) => (
        <div
          className="card"
          key={idx}
          style={{ background: `url("${img.url}") no-repeat center/cover` }}
        ></div>
      ))}
    </>
  );
}
