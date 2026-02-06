import { usePathname } from 'next/navigation';

export function useActiveRoute() {
  const pathname = usePathname();
  
  const getActiveRoute = () => {
    const path = pathname.replace(/^\//, '') || 'home';
    
    // Handle nested routes or dynamic segments
    if (path.includes('/')) {
      const segments = path.split('/');
      return segments[0];
    }
    
    return path;
  };

  return getActiveRoute();
}