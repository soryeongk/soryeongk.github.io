interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return <span className="p-3 text-xl font-bold">{title}</span>;
}
