import styles from "./Breadcrumbs.module.css";
import { Link } from "react-router-dom";
export const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className={styles.breadcrumb}>
      {crumbs.map((crumb, index, array) => {
        if (array.length - 1 === index) {
          return <div key={crumb.path}>{crumb.label}</div>;
        } else {
          return (
            <Link className={styles.crumbLink} key={crumb.path} to={crumb.path}>
              {crumb.label}
            </Link>
          );
        }
      })}
    </div>
  );
};
