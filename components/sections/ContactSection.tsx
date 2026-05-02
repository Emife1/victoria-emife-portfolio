export default function ContactSection() {
  return (
    <section className="p-12 bg-[#0A0A0A] text-white">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form className="space-y-3">
        <input className="w-full p-2 bg-black border" placeholder="Name" />
        <input className="w-full p-2 bg-black border" placeholder="Email" />
        <textarea className="w-full p-2 bg-black border" placeholder="Message" />
        <button className="bg-white text-black px-4 py-2">Send</button>
      </form>
    </section>
  );
}