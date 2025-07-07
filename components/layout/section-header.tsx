const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {description && (
        <p className="mt-2 text-gray-600">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
