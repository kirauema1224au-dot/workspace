import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //画面に必要な部品をreact-router-domから読み込む
import Home from "./pages/Home"; //Homeページファイルを読み込む

function App() {
  return (
    <Router> //ルーティングを全体で使えるようにする
      <Routes> //URLごとの表示をまとめる
        <Route path="/" element={<Home />} /> //URLが/の時にHomeを表示する
      </Routes>
    </Router>
  );
}

export default App; //App関数を外でも使えるようにする