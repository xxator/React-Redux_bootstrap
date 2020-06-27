import React, { useState } from "react";
import styles from "./Header.module.css";
import { AppBar, Toolbar, TextField } from "@material-ui/core";
import cx from "classnames";
import AnimatedNumber from "react-animated-number";
import Odometer from "react-odometerjs";
import "./odometerTheme.css";
import { useDispatch, useSelector } from "react-redux";

export const Header = props => {
  let inactive_search = styles.searchField;
  let active_search = styles.searchFieldActive;

  const [searchCss, setSearchCss] = useState(inactive_search);
//   const [cost, setCost] = useState(0);

  const cost = useSelector(state => state.cost.cost);

  const handleSearchFocus = () => {
    setSearchCss(active_search);
  };
  const handleSearchBlur = () => {
    setSearchCss(inactive_search);
  };
  const prettyCost = n => {
    return n;
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar className={styles.rootContainer}>
        <div className={styles.appTitle}>
          Shopping Cart
        </div>
        <div className={styles.searchContainer}>
            <div
              onBlur={handleSearchBlur}
              onFocus={handleSearchFocus}
              className={cx(searchCss, styles.transform)}
            >
              <input placeholder="Search" className={styles.searchInput} />
            </div>
        </div>

        <div className={styles.cost}>
          <div>Cart Value : </div>  
          <div style={{fontSize: '1.2rem',marginLeft:'10px'}}>&#x20b9;</div>
          <Odometer value={cost} format="(,ddd).dd" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
