function Hello(props) {
    console.log(props);
    const {name, message} = props;
  return <div>
    <h1>Hello {name} , {message}</h1>
  </div>
}

export default Hello;