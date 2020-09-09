const SideMenu = (props) => {
  const { categories } = props
  return (
    <div>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((el) => {
          return (
            <a key={el.id} href="#" className="list-group-item">
              {el.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SideMenu
