import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

export interface MenuProps {
  defaultIndex?: string; //默认选中项
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children: React.ReactNode
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

const Menu: React.FC<MenuProps> = props => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  // handleClick在父标签处定义
  const handleClick = (index: string) => {
    setCurrentActive(index)
    if (onSelect) onSelect(index);
  }

  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }

  // 因为react的children可能是任意类型，所以需要使用react内置的方法进行处理
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // FC是一个函数类型，FunctionComponentElement是一个节点类型
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      // 强制用户将child编写为MenuItem
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return (
    <ul data-testid="test-menu" className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export default Menu