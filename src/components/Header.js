import "./styles/Header.css";
const styles = {
  navBar: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "flex-end",
    marginRight: "3rem",
  },
  navItem: {
    marginLeft: "3rem",
  },
};

export function Header({ onNavItemClick }) {
  return (
    <div class="headerContainer">
      <h1>Bobby Gilbreath</h1>
      <nav>
        <ul style={styles.navBar}>
          {NAV_ITEMS.map((item) => {
            return (
              <li
                key={item.itemName}
                onClick={() => onNavItemClick(item.itemName)}
                style={styles.navItem}
              >
                {item.itemName}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export const NAV_ITEMS = [
  {
    itemName: "About Me",
  },
  {
    itemName: "Portfolio",
  },
  {
    itemName: "Contact",
  },
  {
    itemName: "Resume",
  },
];
