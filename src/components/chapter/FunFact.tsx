interface FunFactProps {
  fact: string;
}

export default function FunFact({ fact }: FunFactProps) {
  return (
    <div className="rounded-lg p-4 bg-[#F5F0E8] border-l-4 border-[#C8B99A]">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#C8B99A] mb-1">
        Did you know?
      </p>
      <p className="italic font-heading text-charcoal/80 leading-relaxed text-sm">
        {fact}
      </p>
    </div>
  );
}
