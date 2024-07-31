interface PageProps {
  params: {
    documentId: string;
  };
}

export default function Page({ params: { documentId } }: PageProps) {
  return <div>Page {documentId}</div>;
}
