import './globals.css';

export const metadata = { title: 'Portfolio wissal Elkouk' };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
