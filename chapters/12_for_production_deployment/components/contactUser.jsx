import React from 'react';

class ContactUser extends React.Component {
  render() {
    const callString = this.props.match.params.number !== undefined ? `, Phone: ${this.props.match.params.number}` : '';
    return (
      <div>
        <div><h1 className="text-center">{`Namaste, ${this.props.match.params.username} ${this.props.surname} ${callString}`} </h1></div>
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"><b>Early Years</b></a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel-body">
                <p>Largely considered cricket's greatest batsman, Sachin Tendulkar was born April 24, 1973, in Bombay, India,
                to a middle-className family, the youngest of four children. His father was a writer and a professor, while his
                mother worked for a life insurance company.</p>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"><b>Cricket Superstar</b></a>
              </h4>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <div className="panel-body">
                <p>Wasting little time living up to the lofty expectations, the 15-year-old Tendulkar scored a century in his
                domestic first-className debut for Bombay in December 1988, making him the youngest player to do so. Eleven months
                later, he made his international debut for India against Pakistan, where he famously declined medical assistance
                despite getting hit in the face by Waqar Younis.
              </p>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"><b>Continued Success</b></a>
              </h4>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <div className="panel-body">
                <p>His struggles with the captaincy notwithstanding, Tendulkar remained as brilliant as ever on the field. He
                delivered perhaps his finest season in 1998, devastating Australia with both his maiden first-class double
                century and his memorable "desert storm" performance in Sharjah. In 2001, Tendulkar became the first player
                to score 10,000 runs in One Day International (ODI) competition, and the following year he surpassed the
                great Don Bradman on the all-time list with his 30th Test century. He was again the leading scorer during
                World Cup play in 2003, earning Man of the Series honors despite India's loss to Australia in the final.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ContactUser;
