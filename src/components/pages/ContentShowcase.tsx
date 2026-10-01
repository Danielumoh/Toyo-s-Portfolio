const videos = [
  {
    title: "Content Reel 1",
    url: "https://drive.google.com/file/d/1TkBP4HBrAWbm-j2mvmwqNKtatoyX-F5h/view",
  },
  {
    title: "Content Reel 2",
    url: "https://drive.google.com/file/d/100VM-nxcp3N7wRAqlvASYr20Sp84ulX3/view",
  },
  {
    title: "Content Reel 3",
    url: "https://drive.google.com/file/d/1BdN5tthEyKumfHBXlDfTYvOhFJdQIhKx/view",
  },
];

export default function ContentShowcase() {
  return (
    <section id="content" className="bg-[#F7F7F7] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
          Featured Content
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-card block border border-[#E3E3E3] rounded-xl px-6 py-8 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              <span className="text-[#111111] font-medium">{video.title}</span>
              <span className="block mt-1 text-sm text-[#6B6B6B] font-light">
                Watch on Drive →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
