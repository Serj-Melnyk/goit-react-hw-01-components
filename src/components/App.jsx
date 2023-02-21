

import { Profile } from "./Profile/Profile"
import user from "../components/Profile/user.json"

import { Statistics } from "./Statistics/Statistics"
import data from "./Statistics/data.json"

import { Friendlist } from "./FriendList/FriendList"
import friends from "../components/FriendList/friends.json"

import { TransactionHistory } from "./Transaction/TransactionHistory"
import transactions from "../components/Transaction/transactions.json"

import { GlobalStyle } from "./GlobalStyle"
import { Layout } from "./Layout"
export const App = () => {
return <Layout>
<GlobalStyle />
  <Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar} 
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
{/* <Statistics stats={data} /> */}

< Friendlist friends = {friends} />

< TransactionHistory  items = {transactions} />

</Layout>
}






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
