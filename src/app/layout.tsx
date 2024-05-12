import React from "react";
import { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  applicationName: "Coffuel",
  keywords: [
    "Coffuel",
    "Viên nén sinh khối",
    "Bã cà phê",
    "Năng lượng xanh",
    "Quán quân Kawai",
    "Quán quân Techstart",
    "Á quân khởi nghiệp trẻ",
    "Quán quân Startup LauchPad",
  ],
  authors: [
    { name: "Liam Lee" },
    { name: "Đại", url: "https://liamlee.id.vn" },
  ],
  creator: "Liam Lee",
  publisher: "Liam Lee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "Coffuel",
  description:
    "Coffuel - viên nén sinh khối từ bã cà phê. Hiện nay khủng hoảng năng lượng và ô nhiễm môi trường đang là 2 vấn đề lớn của xã hội. Vì vậy, Coffuel mang đến sản phẩm viên nén sinh khối có thành phần từ bã cà phê, vừa tái sử dụng phụ phẩm của ngành công nghiệp vừa mang đến nguồn năng lượng xanh.",
  openGraph: {
    images: "https://coffuel.asia/logo.png",
    title: "Coffuel",
    description: "Coffuel - Viên nén sinh khối từ bã cà phê",
    url: "https://coffuel.asia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
