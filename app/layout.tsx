import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HOC Proof of Concept',
  description: 'Simple proof of concept for a Higher Order Component',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
