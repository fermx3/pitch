interface GridProps {
  children: React.ReactNode;
  cols?: number; // Number of columns for large screens
}

const Grid = ({ children, cols = 3 }: GridProps) => {
  // Build the grid-cols class for large screens
  const lgColsClass = `lg:grid-cols-${cols}`;
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${lgColsClass} gap-4 p-4`}>
      {children}
    </div>
  );
}

export default Grid;
