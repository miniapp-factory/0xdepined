"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DepinsList() {
  const depins = [
    {
      id: "depin-1",
      name: "DEPIN One",
      description: "First DEPIN project",
      url: "https://example.com/depin-1",
    },
    {
      id: "depin-2",
      name: "DEPIN Two",
      description: "Second DEPIN project",
      url: "https://example.com/depin-2",
    },
  ];

  return (
    <div className="w-full max-w-2xl">
      {depins.map((depin) => (
        <Card key={depin.id} className="mb-4">
          <CardHeader>
            <CardTitle>{depin.name}</CardTitle>
            <CardDescription>{depin.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
