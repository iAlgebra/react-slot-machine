class SlotMachine extends React.Component {
  render() {
    let msg;
    let s1 = this.props.s1;
    let s2 = this.props.s2;
    let s3 = this.props.s3;
    if (s1 === s2 && s1 === s3 && s1 !== null) {
      msg = 'You win!';
    } else {
      msg = 'You lose!';
    }
    return (
        <div>
          <img src={s1}/>
          <img src={s2}/>
          <img src={s3}/>
          <p>{msg}</p>
        </div>
    );
  }
}
