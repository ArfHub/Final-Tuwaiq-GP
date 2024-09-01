function Sidebar() {
  return (
    <>
      <div className="drawer z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn border-orange-500 bg-white text-orange-500 hover:text-white hover:bg-orange-500 hover:border-none drawer-button"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
            <h1 className="text-gray-800 text-2xl">User profile</h1>
            <br />

            <li>
              <a className="text-orange-500 hover:bg-orange-500 hover:text-white">
                Profile
              </a>
              <br />
            </li>
            <li>
              <a className="text-orange-500 hover:bg-orange-500 hover:text-white">
                Previos plans
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
