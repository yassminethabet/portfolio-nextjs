import './globals.css';

export const metadata = {
  title: 'Yasmine Thabet - Portfolio',
  description: 'Portfolio de Yasmine Thabet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
