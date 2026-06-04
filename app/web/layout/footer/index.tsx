import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer_style">
      <p className="text_area">
        <span className="text_color">© Front-end developer portfolio</span>
        <span style={{ margin: '0 12px', opacity: 0.3 }}>|</span>
        <span className="text_color">by Kim Gyeong Ryul</span>
      </p>
    </footer>
  );
};
