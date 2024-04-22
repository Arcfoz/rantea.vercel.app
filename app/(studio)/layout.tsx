export const metadata = {
  title: 'Rantea Studio',
  description: 'Rantea CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
