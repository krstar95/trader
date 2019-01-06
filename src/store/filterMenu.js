const initState = {
  menus: [
    {id: '1', title: 'Open', selected: false},
    {id: '2', title: 'Active', selected: false},
    {id: '3', title: 'Today', selected: false},
  ]
}

export const filterMenus = (state = initState, action) => {

  if (action.type == "SELECT_ITEM") {
    
    let newStatus = state.menus.map(menu => {
      
      if (menu.id == action.id) {
        menu.selected = !menu.selected;
      }

      return menu
    })
    return Object.assign({menus: newStatus})
  }

  return state;
}

