export default function Video() {
  return (
    <div
      className="h-full w-fit"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <iframe
        className="video-iframe-youtube aspect-[560/315] h-full"
        src="https://www.youtube.com/embed/FI6iIxN0l5s?si=GFchbIvAVe8Ywlj3?rel=0"
        title="Giới thiệu dự án Coffuel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
