import style from '../../styles/modules/_header.module.scss';
import Image from 'next/image';

function LargeHeader(props) {
  return (
    <header className="max--layout text-color--white bg-color--primary">
      <div className={style['bg--dimmer']} />
      <Image
        layout="fill"
        objectFit={'cover'}
        src={props.img}
        alt={props.alt}
      />
      <div className="center--banner max--layout grid--container">
        <div className={style['header--lrg--text--wrapper']}>
          <div className={style['header--content']}>
            <div className={style['header--overline']}>{props.overline}</div>
            <h1 className={style['logo--heading']}>{props.header}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LargeHeader;
