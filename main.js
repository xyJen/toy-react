import { ToyReact, Component } from './toy-react.js';

class MyComponent extends Component {
  render() { 
    return <div>
      <span>hello</span>
      <p>World</p>
      <div>
        {true}
        { this.children }
      </div>
    </div>
  }
}

let a = <MyComponent name='a'>
  <div>hello world</div>
</MyComponent>

ToyReact.render(
  a,
  document.body
)
