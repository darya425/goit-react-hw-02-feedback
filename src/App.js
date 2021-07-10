import React, { Component } from 'react';

import Layout from './Components/Layout';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';

import buttons from './buttons.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setLeaveFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = neutral + good + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = neutral + good + bad;

    return Math.round((good * 100) / total) + '%';
  };

  render() {
    return (
      <Layout>
        <h1>Kафе Expresso</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.setLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Layout>
    );
  }
}

export default App;
