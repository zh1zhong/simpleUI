import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  wrapper? : boolean,
  children?: React.ReactNode
}

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {/*
        wrapper属性的意义：
        由于children是由用户自定义的节点，当用户在自定义的节点上添加了transition属性时
        会将Transition组件的transition属性覆盖，导致动画效果失效
        所以在这里提供wrapper属性，使节点被包裹一层，从而避免transition属性冲突
      */}
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true, // 动画完成后移除节点
  appear: true,
}

export default Transition