import styles from "./BackForm.module.css"
export const BackForm = ()=>{

    return(<footer className={styles.footer}>
        <form className={styles.form} action="">
        <label  htmlFor="Name" >Your Name</label>
        <input className={styles.input} placeholder="Please introduce yorself" type="text" />
        <label htmlFor="">Email</label>
        <input  className={styles.input} placeholder="ivanov@gmail.com" type="text" />
        <label htmlFor="">Phone number</label>
        <input className={styles.input} placeholder="+7(910)777-22-08" type="text" />
        <label htmlFor="">Comment</label>
        <input className={styles.input} placeholder="Write smth" type="text" />
        <button type="submit" className={styles.button}>Send</button>
        </form>
        <section className={styles.extra}>
            <p>We will advise you and help you start a new project</p>
            <p>+7 499-66-69  
            mail@greensight.ru
            </p>
            <p>
            Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
            </p>
            <a target="_blank" href="https://yandex.ru/maps/216/zelenograd/house/tsentralny_prospekt_k305/Z04YdAZhQU0DQFtvfXV4eXhibA==/?ll=37.211884%2C55.998418&z=15">
            How to get there?
            </a>
        </section>
        </footer>
    )
}