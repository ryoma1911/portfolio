import React from 'react';

const Header = () => (
  <header style={styles.header}>
    <div style={styles.inner}>
      <h1 style={styles.name}>Ryoma Abe's Portfolio</h1>
      <p style={styles.title}>IT Engineer</p>
    </div>
  </header>
);

const styles = {
  header: {
    height: '15vh',  // ここを変更
    background: 'linear-gradient(to right,rgb(23, 168, 230),rgb(19, 40, 227), rgb(23, 168, 230))',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 以下略
};


export default Header;
