import React from 'react';
import { Link } from './Link';

const Header = () => {
  const links = [
    { name: 'Blogs', href: '#blogs' },
    { name: 'From the First Principles', href: '#principles' },
    { name: 'Papershelf', href: '#papers' },
    { name: 'Courses', href: '#courses' },
    { name: 'Talks', href: '#talks' },
    { name: 'Collaborate', href: '#collaborate' }
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Purushottam Dewangan</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;