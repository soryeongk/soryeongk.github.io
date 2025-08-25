interface SectionTitleProps {
  title: string;
  right?: React.ReactNode;
}

export default function SectionTitle({ title, right }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold">{title}</span>
      {right}
    </div>
  );
}
