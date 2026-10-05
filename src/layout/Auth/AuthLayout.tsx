import {Outlet} from "react-router-dom";
import styles from "./AuthLayout.module.css";

export function AuthLayout() {

    return (
        <div className={styles.authLayout}>
            <div className={styles.logo}>
                <img className={styles.iconLogo} src="/favicon.svg" alt="Логотип"/>
            </div>

            <div className={styles.contentOutlet}>
                <Outlet/>
            </div>
        </div>
    );
}