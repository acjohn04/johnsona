import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames. 
  // Next-intl handles the prefixing internally.
  matcher: ['/', '/(es|en)/:path*']
};
