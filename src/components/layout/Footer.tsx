'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-0.5">
            <h3 className="text-lg font-semibold mb-0.5 text-center">{t('footer.quickLinks')}</h3>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link href="#properties" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.properties')}
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.community')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/AQUA+EL+PUEBLITO+PUERTO+PLATA+RD/@19.773993872098327,-70.65216997523102,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('navigation.location')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aquapuertoplata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  {t('footer.instagram')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-0.5 pt-0.5 pb-0.5 text-center text-gray-400">
          <p>
            &copy; {currentYear} AQUA. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
} 