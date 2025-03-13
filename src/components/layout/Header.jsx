'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="ゆっくりネット" 
                width={40} 
                height={40} 
                className="block h-8 w-auto rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-primary-700">ゆっくりネット</span>
            </Link>
          </div>

          {/* デスクトップメニュー */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition duration-150">
              ホーム
            </Link>
            <Link href="/terms" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition duration-150">
              利用規約
            </Link>
            <Link href="/privacy-policy" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition duration-150">
              プライバシーポリシー
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition duration-150">
              お問い合わせ
            </Link>
            <a 
              href="https://yukkuri.net/login" 
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              ログイン
            </a>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {/* メニューアイコン */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* 閉じるアイコン */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            ホーム
          </Link>
          <Link 
            href="/terms" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            利用規約
          </Link>
          <Link 
            href="/privacy-policy" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            プライバシーポリシー
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
}