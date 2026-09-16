export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] px-6 md:px-16 py-8 border-t border-[#E3E3E3]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-[#6B6B6B]">
        <p>© {new Date().getFullYear()} Jesutoyosi Kayode</p>
        <p className="font-light">Social Media Manager & Content Marketer</p>
      </div>
    </footer>
  );
}
