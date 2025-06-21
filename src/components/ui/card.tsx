import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...props}
    />
  );
}

interface SimpleCardProps {
  title: string;
  content: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, content }) => {
  return (
    <Card className="w-[300px]">
      <CardContent className="flex flex-col justify-center items-center p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;