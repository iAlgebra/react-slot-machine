class SlotMachine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    const winner = s1 === s2 && s1 === s3;
    const styles = {fontSize: '50px', backgroundColor: 'purple'};

    return (
        <div className="SlotMachine">
          <p style={styles}>
            {s1} {s2} {s3}
          </p>
          <p className={winner ? 'SlotMachine-winner' : 'SlotMachine-loser'}>
            {winner ? 'You win!' : 'You lose!'}
          </p>
        </div>
    );
  }
}
