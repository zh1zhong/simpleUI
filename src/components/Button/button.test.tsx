import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button, { ButtonSize, ButtonType } from './button'

// Bassic test case example
// test('our first react test case', () => {
//   render(<Button>Nice</Button>)
//   const element = screen.queryByText('Nice')
//   expect(element).toBeTruthy()
//   expect(element).toBeInTheDocument()
// })

const defaultProps = {
  onClick: jest.fn(),
}

const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'custom-class'
}

const LinkProps = {
  btnType: ButtonType.Link,
  href: 'http://example.com'
}

const disabledProps = {
  disabled: true,
  onClick: jest.fn(), // 被禁用时不会被调用
}

describe('test Button Component', () => {
  it('should render the corrent default button', () => {
    render(<Button {...defaultProps}>Nice</Button>)
    const element = screen.getByText('Nice') as HTMLButtonElement
    // expect(element).toBeTruthy()
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the corrent based on different props', () => {
    render(<Button {...testProps}>Nice</Button>)
    const element = screen.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg custom-class')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    render(<Button {...LinkProps}>Link</Button>)
    const element = screen.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>Nice</Button>)
    const element = screen.getByText('Nice') as HTMLButtonElement // 使用断言将返回的HTMLElement变为ButtonElement，否则拿不到disabled属性
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})