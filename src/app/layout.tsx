import "../../styles/globals.css";

export const metadata = {
  title: "CrewGames • Name Picker",
  description: "Spin the wheel to choose a random name",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </body>
    </html>
  );
}