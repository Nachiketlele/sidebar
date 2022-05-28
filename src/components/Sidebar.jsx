import React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'
import styles from './Styles.module.css'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
    DrawerCloseButton
  } from '@chakra-ui/react'

const Sidebar = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [placement, setPlacement] = React.useState('left')

        const menu=[{title:"Home",icon:" home_outlined",link:"home"},
                     {title:"Trending",icon:"trending_up",link:"trend"},
                     {title:"Explore",icon:"explore_outlined",link:"exp"},
                     {title:"Favorite",icon:"star_outlined",link:"fav"},
                     {title:"Setting",icon:"settings_outlined",link:"set"}
                   ]
      
        return (
          <>
          
            <Button colorScheme='blue' onClick={onOpen} >
           <HamburgerIcon />
            </Button>
            {/* 'xs', 'sm', 'md', 'lg', 'xl', 'full' */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='xs'>
              <DrawerOverlay />
              <DrawerContent  >
              <DrawerCloseButton className={styles.closebtn}/>
                <DrawerHeader borderBottomWidth='1px' className={styles.logo}><h1>Logo</h1></DrawerHeader>

              
                     <DrawerBody>
                     {menu.map((el,index)=>(
                      <div key={index} className={styles.wrapper}>
                          <div className={styles.icon_div}>
                          <i className="material-icons">{el.icon}</i>
                          </div>
                          <div>
                          <a href={el.link}>{el.title}</a>
                          </div>
               
                          
                      </div>
                             ))}
                    </DrawerBody>

         
              
              </DrawerContent>
            </Drawer>
          </>
        )
    
}

export default Sidebar