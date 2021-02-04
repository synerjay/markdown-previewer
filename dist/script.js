const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "text-center mt-4" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "d-flex row" }, /*#__PURE__*/
      React.createElement("div", { className: "editor col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "Editor"), /*#__PURE__*/
      React.createElement(Editor, { input: this.state.inputValue, handleChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "Preview"), /*#__PURE__*/
      React.createElement(Preview, { input: this.state.inputValue })))));




  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("textarea", { className: "form-control p-2", id: "editor", value: this.props.input, onChange: this.props.handleChange }));

  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markdown = marked(this.props.input, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { className: "preview rounded p-2", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" }));

  }}


const placeholder = `
Welcome to my Markdown Previewer App!

This is a paragraph

**This is a bolded text**

> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](https://codepen.io/synerjay/full/rNLjEJe)

This is an inline code \`<div></div>\`

This is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)

`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("myinput"));