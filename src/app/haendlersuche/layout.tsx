import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Händlersuche",
};

export default function HaendlersucheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
