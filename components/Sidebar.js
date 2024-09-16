import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.sidebar : styles.sidebarClosed}>
      <button onClick={toggleSidebar} className={styles.toggleBtn}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
