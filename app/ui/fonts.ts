import {
    Inter,
    Lusitana,
} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: '400', // Regular weight
    style: 'normal', // Normal style
})

export {inter, lusitana}
