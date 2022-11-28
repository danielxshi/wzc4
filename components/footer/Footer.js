import ExtraSmallLayout from '../layouts/ExtraSmallLayout';
import style from '../../styles/modules/_footer.module.scss';
import Link from 'next/link';
import FooterBottomBar from './FooterBottomBar';
import FooterNavigation from './FooterNavigation';

export default function Footer() {
  return (
    <footer className={style['footer']}>
        <FooterNavigation/>
        <FooterBottomBar/>
    </footer>
  );
}
