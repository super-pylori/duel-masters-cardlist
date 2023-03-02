import logo from './logo.svg';
import './App.css';

const urls = [
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-s03.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-s04.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-003.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-004.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-017.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-018.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-019.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-020.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-021.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-022.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-047.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-048.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-049.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-050.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-051.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-052.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-079.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-080.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-081.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-082.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-083.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-084.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-085.jpg",
  "https://dm.takaratomy.co.jp/wp-content/card/cardimage/dm01-086.jpg",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul class="photo-list">
          {urls.map((url) => {
            return (
              <li>
                <img src={url} className="App-logo"/>
              </li>
            );
          })}
        </ul>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
