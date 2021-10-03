import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useState ,useContext} from "react"
import {name} from "./ContetxStore"

export  function MenuBase() {

  const [activeItem, setaAtiveItem] = useState("")
  const handleItemClick = () => (e => setaAtiveItem(e.target.name))


  return (
    <Menu>
      <Menu.Item
        name='editorials'
        active={activeItem === 'editorials'}
        onClick={handleItemClick}
      >
        Editorials
      </Menu.Item>

      <Menu.Item
        name='reviews'
        active={activeItem === 'reviews'}
        onClick={handleItemClick}
      >
        Reviews
      </Menu.Item>

      <Menu.Item
        name='upcomingEvents'
        active={activeItem === 'upcomingEvents'}
        onClick={handleItemClick}
      >
        Upcoming Events
      </Menu.Item>
         </Menu>
  )

}