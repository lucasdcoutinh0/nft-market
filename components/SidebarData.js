import React from "react";
import * as MdIcons from "react-icons/md"
import * as AiIcons from "react-icons/ai"
import * as CgIcons from "react-icons/cg"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillShopping/>,
        cName: "nav-text"
    },
    {
        title: "Sell NFTs",
        path: "/create-nft",
        icon: <MdIcons.MdSell/>,
        cName: "nav-text"
    },
    {
        title: "My NFTs",
        path: "/my-nfts",
        icon: <AiIcons.AiTwotoneFolderOpen/>,
        cName: "nav-text"
    },
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <CgIcons.CgProfile/>,
        cName: "nav-text"
    },
]