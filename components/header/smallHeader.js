import style from '../../styles/modules/_header.module.scss';
import ExtraSmallLayout from '../layouts/ExtraSmallLayout';
import Image from 'next/image';

function SmallHeader(props) {
  return (
    <>
      <div className={style['sm--header--bg--extend']}>
        <div className={style['bg--dimmer']} />
        <Image
          layout="fill"
          objectFit={'cover'}
          src={props.img}
          alt={props.alt}
        />
        <ExtraSmallLayout>
          <div className={style['header--content']}>
            <div className="overline">{props.overline}</div>
            <h1 className={style['logo--heading']}>{props.header}</h1>
          </div>
        </ExtraSmallLayout>
      </div>
    </>
  );
}

export default SmallHeader;
