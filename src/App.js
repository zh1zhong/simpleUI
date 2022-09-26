import logo from './logo.svg';
// import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button.tsx'
import Menu from './components/Menu/menu.tsx'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu
          mode={"vertical"}
          defaultOpenSubMenus={'1'}
          defaultIndex={'0'}
          onSelect={index => alert(index)}
        >
          <MenuItem>index</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dad</MenuItem>
            <MenuItem>dasdasd</MenuItem>
          </SubMenu>
          <MenuItem>live</MenuItem>
        </Menu>

        <Button
          className="App"
         autoFocus
         onClick={() => alert(1)}>Hello</Button>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          disabled
          onClick={() => alert(1)}
        >Hello1</Button>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          disabled
        >Hello1</Button>
        <Button
          btnType={ButtonType.Danger}
          size={ButtonSize.Small}
          disabled
        >Hello1</Button>
        <Button
          btnType={ButtonType.Link}
          href={'http://baidu.com'}
          target="_blank"
        >Hello2</Button>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
