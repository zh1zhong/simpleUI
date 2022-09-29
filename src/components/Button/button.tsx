import React from 'react';
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  /** 设置button的禁用*/
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

// 联合类型是A或者是B不能重复和交集，所以不能用联合类型
// 使用交叉类型，多种类型叠加到一起形成新的类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

/*
  由于按钮的某些必需属性可能a标签并没有，所以不能简单的将两个propsType交叉
  所以使用Partial将所有的属性变为可选属性
*/
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// 注意一定要在此处export组件，否则自动类型推断无效
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'simpleUI'
 * ~~~
 */
export const Button: React.FC<ButtonProps> = props => {
  const {
    btnType,
    className, // 自定义的类名
    disabled,
    size,
    href,
    children,
    ...restProps
  } = props;

  const classes = classNames('btn',
    className, {
    [`btn-${btnType}`]: btnType, // 第二个参数是布尔值，为空的时候则返回为空字符串
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled // link标签没有disable属性，通过类来实现
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;