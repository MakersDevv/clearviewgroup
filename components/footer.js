import footerStyles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <span>&copy; Clearviewgroup</span>
      <span className={footerStyles.plug}>
        Website made by{" "}
        <a href="https://makersdev.com/" className={footerStyles.siteLink}>
          MakersDev
        </a>
      </span>
    </footer>
  );
}
