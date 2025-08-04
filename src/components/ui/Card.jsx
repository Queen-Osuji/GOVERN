import React from 'react';

export function Card({ className, ...props }) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...props}
    />
  );
}

const SimpleCard = ({ title, content }) => {
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