import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox.tsx';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: "User", lastName: "User"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          user = {loggedIn?.firstName || 'Guest'}
          title="Welcome back,"
          subtext="Your current balance is"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1000}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;