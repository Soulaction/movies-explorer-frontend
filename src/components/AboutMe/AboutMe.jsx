import './AboutMe.css'
import myImg from '../../images/my-img.jpg'

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me__content">
                <h1 className="about-me__title">Студент</h1>
                <div className="about-me__description">
                    <h1 className="about-me__name">Дмитрий</h1>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 23 года</p>
                    <p className="about-me__info">
                        Я родился в Тверской области, на данный момент проживаю в городе Москва.
                        Занимаюсь лёгкой атлетикой, катаюсь на сноуборде. Обучаюсь на втором курсе магистратуры по
                        направлению:
                        "Информационная аналитика и технология больших данных"
                    </p>
                    <a className="about-me__github" href="https://github.com/Soulaction?tab=repositories">Github</a>
                </div>
                <img className="about-me__img" src={myImg} alt="Аватарка студента"/>
            </div>
        </section>
    )
}

export default AboutMe;
