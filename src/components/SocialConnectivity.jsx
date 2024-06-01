import { useCallback, useEffect, useState } from 'react'


const ListItem = ({ itemName, itemValue }) => {
    return (
        <span className="flex justify-start py-2 px-1 items-center">
            <div className="flex-grow font-medium gap-2 flex items-center my-1"> {itemName}</div>
            <div className=" text-sm font-normal text-right mr-2 ml-3 truncate" >{itemValue}</div>
        </span>
    )
}
function SocialConnectivity({ profile }) {
    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">
                <div className="text-base-content text-opacity-60">
                    <ListItem itemName="GitHub" itemValue="evrajireddy"></ListItem>
                    <ListItem itemName="X aka Twitter" itemValue="evrajireddy"></ListItem>
                    <ListItem itemName="Email" itemValue="veda@pursuit.org"></ListItem>
                </div>
            </div>
        </div>
    )
}
SocialConnectivity.ListItem = ListItem
export default SocialConnectivity;