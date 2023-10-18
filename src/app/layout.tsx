import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Fusion Dashboard",
  description: "All-in-one solution to streamline your life and interests",
};

type RootLayoutPropsType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
