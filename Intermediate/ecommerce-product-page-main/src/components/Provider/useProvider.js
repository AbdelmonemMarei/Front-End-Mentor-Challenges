import {useState,useEffect} from 'react'

const useProvider = () => {
    // To handle responsive web Page size
    const [screenSize, setscreenSize] = useState(window.innerWidth);
    useEffect(() => {
    const handleWindowResize = () => setscreenSize(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    // To handle Menu Icon
    const [showMenuIcon,setshowMenuIcon] = useState(false)
    useEffect(() => {
    if(screenSize < 776){
        setshowMenuIcon(true)
    }else{
        setshowMenuIcon(false)
    }
    }, [screenSize]);

    const [activeMenu,setActiveMenu] = useState(false)
    
    
    
    const [numberItemsToAdd,setNumberItemsToAdd] = useState(0)

    const increaseNumberItems = () => {
        setNumberItemsToAdd((prevState)=>(prevState + 1))
    }
    const decreaseNumberItems = () => {
        if (numberItemsToAdd > 0){
            setNumberItemsToAdd((prevState)=>(prevState - 1))
        }
    }

    const [chosenItems,setChosenItems] = useState(0)
    const [notificationItems,setNotificationItems] = useState(0)
    const [notificationClicked,setNotificationClicked] = useState(false)
    const [modalOpened,setModalOpened] = useState(false)

    return (
        {screenSize,showMenuIcon,activeMenu,setActiveMenu,numberItemsToAdd,setNumberItemsToAdd,increaseNumberItems,decreaseNumberItems,chosenItems,setChosenItems,notificationItems,setNotificationItems,notificationClicked,setNotificationClicked,modalOpened,setModalOpened}
    )
}

export default useProvider