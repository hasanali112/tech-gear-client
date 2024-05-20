"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';



const DropdownMenus = () => {
    return (
        <div>
            <Dropdown>
              <DropdownTrigger>
              <Button 
             className='text-white bg-black'
           >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="home">Home</DropdownItem>
        <DropdownItem key="category">Categories</DropdownItem>
        <DropdownItem key="product">Products</DropdownItem>
        <DropdownItem key="flashsale">Flash Sale</DropdownItem>
        <DropdownItem key="aboutus">About Us</DropdownItem>
        <DropdownItem key="contactus">Contact Us</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
        </div>
    );
};

export default DropdownMenus;