import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import userData from "./components/data/user.json";
import statisticalData from "./components/data/statistical-data.json";
import friends from "./components/data/friends.json";
import transactions from "./components/data/transactions.json";

function App() {
  const { name, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Title" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
