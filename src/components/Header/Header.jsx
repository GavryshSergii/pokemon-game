import style from './style.module.css';

export default function Header({title, descr}) {
    return (
        <>
            <header className={style.root}>
                <div className={style.forest}></div>
                <div className={style.container}>
                    {
                        title && (<h1>{title}</h1>)
                    }
                    {
                        descr && (<p>{descr}</p>)
                    }
                </div>
            </header>
        </>
    );
}
