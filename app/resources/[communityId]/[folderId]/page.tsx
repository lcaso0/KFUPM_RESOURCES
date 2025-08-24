interface Params {
  params: Promise<{ folderId: string }>;
}

export default async function FoldersPage({ params }: Params) {
  const { folderId } = await params;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Folder ID: {folderId}</h1>
    </div>
  )
}
