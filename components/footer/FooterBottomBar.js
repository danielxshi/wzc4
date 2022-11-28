import ExtraSmallLayout from '../layouts/ExtraSmallLayout';
import style from '../../styles/modules/_footer.module.scss';
import Link from 'next/link';

export default function FooterBottomBar() {
  return (
    <div className={style['footer--grid--container']}>
        <div className="text-center flex justify-center mt-2 mb-2">
          <small className="whitespace-nowrap">
              &copy; 2022 加拿大温州同乡总会 Canada Wenzhou Friendship Society
            </small>
        </div>
    </div>
  );
}
