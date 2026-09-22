const videos = [
  { title: "Content Reel 1", fileId: "1TkBP4HBrAWbm-j2mvmwqNKtatoyX-F5h" },
  { title: "Content Reel 2", fileId: "100VM-nxcp3N7wRAqlvASYr20Sp84ulX3" },
  { title: "Content Reel 3", fileId: "1BdN5tthEyKumfHBXlDfTYvOhFJdQIhKx" },
];

export default function ContentShowcase() {
  return (
    <section id="content" className="bg-[#F7F7F7] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
          Featured Content
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.fileId}
              className="aspect-[9/16] bg-black rounded-xl overflow-hidden"
            >
              <iframe
                src={`https://drive.google.com/file/d/${video.fileId}/preview`}
                title={video.title}
                allow="autoplay"
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
