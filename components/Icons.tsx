import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'send':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      );
    case 'paperclip':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
                <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-8.609 8.609a4.5 4.5 0 006.364 6.364l6.88-6.88a.75.75 0 00-1.06-1.06l-6.88 6.88a3 3 0 11-4.243-4.243l8.609-8.609a.75.75 0 011.06 1.06l-8.609 8.609a1.5 1.5 0 01-2.122-2.122l6.88-6.88a2.25 2.25 0 00-3.182-3.182l-6.88 6.88a4.5 4.5 0 006.364 6.364l8.609-8.609a.75.75 0 00-1.06-1.06l-8.609 8.609a3 3 0 01-4.243-4.243l6.88-6.88a.75.75 0 00-1.06-1.06l-6.88 6.88z" clipRule="evenodd" />
            </svg>
        );
    case 'camera':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
                <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.342 1.374a3.026 3.026 0 01.628 2.113l-.088.442c-.083.417-.168.833-.253 1.25l-.01.042a23.85 23.85 0 01-4.482 0l-.01-.042c-.086-.417-.17-.833-.254-1.25l-.088-.442a3.026 3.026 0 01.628-2.113A3.026 3.026 0 019.344 3.071zM15.12 6.22a.75.75 0 01.564.923l-1.012 4.048a.75.75 0 11-1.478-.37l1.012-4.048a.75.75 0 01.914-.553z" clipRule="evenodd" />
                <path d="M4.5 9.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zM8.25 4.5a.75.75 0 01.75.75v.038l.004.018a18.82 18.82 0 01-2.28 4.65(2.25 2.25 0 01-1.928 1.05A2.25 2.25 0 013 9.75V7.5A2.25 2.25 0 015.25 5.25h3zm8.25.75a.75.75 0 00-.75-.75h-3a2.25 2.25 0 01-2.25 2.25V9.75c0 .414.113.804.31 1.136.298.495.735.87 1.255 1.05a18.82 18.82 0 012.28 4.65l.004.018V5.25a.75.75 0 00-.75-.75z" />
            </svg>
        );
    case 'menu':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        );
    case 'close':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        );
     case 'kps-logo':
        return (
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#fde047', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
                <path d="M20 20 L20 80 L40 80 L40 55 C40 45, 50 40, 60 40 L60 20 Z" fill="url(#goldGradient)" />
                <path d="M80 80 C60 80, 50 70, 50 50 C50 30, 60 20, 80 20" fill="none" stroke="url(#goldGradient)" strokeWidth="10" />
            </svg>
        );
    case 'notification':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
                <path d="M11.625 17.5a1.875 1.875 0 103.75 0h-3.75z" />
                <path fillRule="evenodd" d="M12 2.25c-4.142 0-7.5 3.358-7.5 7.5v3.188c0 1.121-.504 2.16-1.343 2.875C2.043 16.7 1.5 17.791 1.5 19.5h1.264a2.25 2.25 0 014.473 0h8.526a2.25 2.25 0 014.473 0h1.264c0-1.709-.543-2.8-1.657-3.687-.84-.715-1.343-1.754-1.343-2.875V9.75c0-4.142-3.358-7.5-7.5-7.5zM10.5 9.75a.75.75 0 001.5 0V7.5a.75.75 0 00-1.5 0v2.25z" clipRule="evenodd" />
            </svg>
        );
    case 'user-circle':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};