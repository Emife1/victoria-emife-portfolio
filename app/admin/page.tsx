export default function AdminPage() {
  return (
    <main className="p-10 bg-black text-white">
      <h1 className="text-3xl font-bold">CMS Dashboard v2</h1>
      <div className="grid gap-4 mt-6">
        <div className="p-4 border">Projects (CRUD)</div>
        <div className="p-4 border">Blog Management</div>
        <div className="p-4 border">Metrics Editor</div>
        <div className="p-4 border">Media Library (Supabase)</div>
      </div>
    </main>
  );
}