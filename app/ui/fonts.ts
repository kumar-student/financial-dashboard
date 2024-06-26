// import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// export const inter = Inter({ subsets: ['latin'] });
export const inter = localFont({
    src: '../../styles/fonts/Inter/Inter-VariableFont_slnt,wght.ttf', 
    variable: '--font-inter',
    display: 'swap',
    preload: false
});

export const lusitana = localFont({
    src: [
        {
            path: '../../styles/fonts/Lusitana/Lusitana-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../styles/fonts/Lusitana/Lusitana-Bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ], 
    variable: '--font-lusitana',
    display: 'swap',
    preload: false
});