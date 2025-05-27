const SidebarLink = ({ to, label, Icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `${baseClass} ${isActive ? activeClass : inactiveClass}`
    }
  >
    <Icon size={20} />
    {label}
  </NavLink>
)

export default SidebarLink
