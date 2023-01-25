import { Component } from 'react';

import Section from './Section/Section';
import Options from './Options/Options';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  increaseFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  calcPercent = name => {
    const total = this.calcTotal();
    if (total === 0) return 0;
    const value = this.state[name];
    const part = (value / total) * 100;
    const result = part.toFixed(0);
    return Number(result);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calcTotal();
    const positiveFeedback = this.calcPercent('good');
    return (
      <>
        <Section title="Please leave feedback">
          <Options
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increaseFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}