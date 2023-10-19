# React World Weather

Author: cyan5
Date: 2023.10.19
[はじめてつくるReactアプリ with TypeScript （React + TypeScript入門シリーズ）](https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%A4%E3%81%8F%E3%82%8BReact%E3%82%A2%E3%83%97%E3%83%AA-TypeScript-mod728-ebook/dp/B094Z1R281)を参考に作成したはじめてのWebアプリケーション

## 公開ページ
https://cyan5.github.io/react-world-weather/

## 開発環境
* Ubuntu on WSL2
* React + TypeScript + Vite
* CSS-in-JS: styled-components
* API: [Weather-API](https://www.weatherapi.com/)

----
## アプリの使い方
![](./weather_explain.png)
1. 都市名を英語で入力します。
2. Get Weather ボタンをクリックすると天気を取得します。
3. 地域名、都市名、天気、気温、天気アイコン、天気が表示されます。
4. `≡`ボタンを押すとメニューが表示されます。

## 実装について
バックエンド開発の先駆けとして、簡単なWebアプリを作るために参考書を購入し、開発を行った。アプリの設計、機能、デザインは参考書に基づいているが、それに加えて以下を追加・改良している。
* アプリ中のウィンドウ右上に、アプリの使用方法を表示するポップアップメニューボタンを追加。
* 参考書ではビルドにcreate-react-appを使用しているが、本アプリケーションでは、より高速で安定なViteを使用している。
* 参考書ではスタイルにPure CSSを採用しているが、本アプリケーションではCSS-in-JSの中でも人気の高いstyled-componentsを採用している。
