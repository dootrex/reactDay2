import { getYear } from "../utilities/dates";

function Footer({ author }) {
  return (
    <footer>
      <p>
        &copy; {getYear()} {author}
      </p>
    </footer>
  );
}

export default Footer;
