import { useState } from "react";
import styles from "./BackForm.module.css"
import MaskedInput from 'react-text-mask';
export const BackForm = ()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        comment:'',
      });
      
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone number: ${formData.phone}\nComment: ${formData.comment}`);
      };

    

    return(<div className={styles.footer}>
        
        <form className={styles.form} onSubmit={handleSubmit} >
        <label  htmlFor="Name" >Your Name</label>
        <input 
        required 
        type ="text" 
        name="name"
        className={styles.input} 
        placeholder="Please introduce yorself" 
        value={formData.name}
        onChange={handleInputChange}
        />
        <label htmlFor="">Email</label>
        <input 
        required 
        className={styles.input} 
        placeholder="ivanov@gmail.com" 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        />
        <label htmlFor="">Phone number</label>
        <MaskedInput 
        required 
        className={styles.input} 
        placeholder="+7(910) 777 22 08" 
        name="phone" 
        mask={['+', '7','(',/\d/, /\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
        value={formData.phone}
        onChange={handleInputChange}
        />
        <label htmlFor="">Comment</label>
        <textarea className={styles.input} style ={{height:107}} placeholder="Write smth" 
        value={formData.comment}
        name="comment"
        onChange={handleInputChange}
        />
        <button type="submit" className={styles.button}>Send</button>
        </form>
        <section className={styles.extra}>
            <div className={styles.cont}>
            <div><p>+7 499 391-66-69</p>
            <p> 
            mail@greensight.ru
            </p></div>
            <div>
            <p>
            322A, 2nd Floor, Zelenograd, Moscow, Russia
            </p>
            <p>
            <a target="_blank" href="https://yandex.ru/maps/216/zelenograd/house/zelenograd_k322a/Z04YdAZkTkwCQFtvfXV4d3pqYg==/?ll=37.214795%2C55.996697&z=16" className={styles.link}>
            Directions
            </a></p>
            </div>
            </div>
            
            
        </section>
        </div>
    )
}