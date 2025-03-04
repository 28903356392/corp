import "./globals.css";
import { ABeeZee } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
// 字体优化，修改字体
const inter = ABeeZee({
  subsets: ['latin'],
  weight:"400"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full">
      <body
      
      className={inter.className+" h-full"}
      >
        {children}
      </body>
    </html>
  );
}
