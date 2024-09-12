// src/components/layout/TopBar.js
// src/components/ui/ContextualMenu.js
import React, { useState } from 'react';
import { Menu, Bell, User, Settings, House, Info, Pencil, ListCheck, LogOut } from 'lucide-react';

import ContextualMenu from '../ui/ContextualMenu';
import IconButtonWhite from '../common/IconButtonWhite';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const menuItems = [
    { icon: House, label: 'Home', onClick: () => console.log('Home clicked') },
    { icon: Settings, label: 'Settings', onClick: () => console.log('Settings clicked') },
    { icon: Info, label: 'About', onClick: () => console.log('About clicked') },
  ];

  const profileMenuItems = [
    { icon: Pencil, label: 'Edit Profile', onClick: () => console.log('Edit Profile clicked') },
    { icon: ListCheck, label: 'My Progress', onClick: () => console.log('My Progress clicked') },
    { icon: Settings, label: 'Preferences', onClick: () => console.log('Preferences clicked') },
    { icon: LogOut, label: 'Logout', onClick: () => console.log('Logout clicked') },
  ];

  const notificationItems = [
    { label: 'New achievement unlocked!', onClick: () => console.log('Notification 1 clicked') },
    { label: 'John commented on your progress', onClick: () => console.log('Notification 2 clicked') },
    { label: 'You have a new message', onClick: () => console.log('Notification 3 clicked') },
  ];

  const handleNotificationClick = () => {
    setIsNotificationMenuOpen(true);
    setNotificationCount(0);
  };

  return (
    <>
      <header className="bg-orange-main border-transparent p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-14">
        <div className="flex items-center">
          <IconButtonWhite icon={Menu} onClick={() => setIsMenuOpen(true)} className="mr-3" />

          <img
            src={`${process.env.PUBLIC_URL}/assets/symbol-and-text-horizontal-white.svg`}
            alt="logo"
            className="w-auto"
            style={{ maxWidth: '100px' }}
          />

        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <IconButtonWhite icon={Bell} onClick={handleNotificationClick} />
            {notificationCount > 0 && (
              <span className="absolute top-0.5 -right-1 bg-orange-tomato text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>
          <IconButtonWhite icon={User} onClick={() => setIsProfileMenuOpen(true)} />
        </div>
      </header>
      <ContextualMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={menuItems}
        position="top-left"
      />
      <ContextualMenu
        isOpen={isProfileMenuOpen}
        onClose={() => setIsProfileMenuOpen(false)}
        items={profileMenuItems}
        position="top-right"
      />
      <ContextualMenu
        isOpen={isNotificationMenuOpen}
        onClose={() => setIsNotificationMenuOpen(false)}
        items={notificationItems}
        position="top-right"
      />
    </>
  );
};

export default TopBar;
