import styles from './Hero.module.css';
import { FaSearch } from 'react-icons/fa'; // Import FontAwesome search icon

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </div>
      <div className={styles.contentSections}>
        {Array.from({ length: 3 }, (_, sectionIndex) => (
          <div key={sectionIndex} className={styles.section}>
            {Array.from({ length: 4 }, (_, cardIndex) => ( // Changed to 4 cards
              <a key={cardIndex} href="#" className={styles.card}>
                <img src="https://via.placeholder.com/50" alt="Placeholder" className={styles.cardImage} />
                <h3 className={styles.cardHeading}>APP {sectionIndex * 4 + cardIndex + 1}</h3>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
