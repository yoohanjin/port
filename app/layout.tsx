import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '웹 개발자 포트폴리오',
  other: {
    'naver-site-verification': 'b368d0a75ce98898bb20a7f58657bf2b706ccc92'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 