import style from './style.module.css';
import classNames from 'classnames';

export default function Layout({title, descr, urlBg, colorBg}) {

    let sectionStyle= {};
    if (urlBg) {
        sectionStyle = {background: `url(${urlBg})`}
    } else if (colorBg) {
        sectionStyle = {background: colorBg}
    }

    const descClasses = classNames(style.desc, style.full);
    return (
        <>
            <section className={style.root} style={sectionStyle}>
                <div className={style.wrapper}>
                    <article>
                        {
                            title && (
                                <div className={style.title}>
                                    <h3>{title}</h3>
                                    <span className={style.separator}></span>
                                </div>
                            )
                        }
                        {
                            descr && (
                                <div className={descClasses}>
                                    <p>{descr}</p>
                                </div>
                            )
                        }
                    </article>
                </div>
            </section>
        </>
    );
}
