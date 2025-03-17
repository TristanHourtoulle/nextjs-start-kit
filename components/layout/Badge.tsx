export type BadgeProps = {
  text: string;
};

export const Badge = ({ text }: BadgeProps) => {
  return (
    <span className="inline-block bg-accent text-primary text-xs px-3 py-1 rounded-full font-regular">
      {text}
    </span>
  );
};
