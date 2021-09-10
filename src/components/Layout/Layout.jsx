import style from './style.module.css';

export default function Layout({title, urlBg, colorBg, children}) {

    let sectionStyle = {};
    if (urlBg) {
        sectionStyle = {background: `url(${urlBg})`}
    } else if (colorBg) {
        sectionStyle = {background: colorBg}
    }

    return (
        <>
            <section className={style.root} style={sectionStyle}>
                <div className={style.wrapper}>
                    <article>
                        <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}/>
                        </div>
                        <div className={`${style.desc} ${style.full}`}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
