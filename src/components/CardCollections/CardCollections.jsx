import { NavLink, Outlet } from "react-router-dom";
import "./CardCollections.css";
import { useTranslation } from "react-i18next";

const CardCollections = () => {
  const { t } = useTranslation();

  return (
    <div className="CardCollections">
      <aside className="CardCollections__sidebar">
        <div className="CardCollections__sidebar__links">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={"/collections/my-collections"}
          >
            <div className="CardCollections__sidebar-link">{t("my_sets")}</div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={"/collections/sets"}
          >
            <div className="CardCollections__sidebar-link">
              {t("ready_sets")}
            </div>
          </NavLink>
        </div>
        <div className="CardCollections__sidebar__title">
          {t("card_collections")}
        </div>
      </aside>
      <main className="CardCollections__main">
        <Outlet />
      </main>
    </div>
  );
};

export default CardCollections;
