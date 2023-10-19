# React World Weather

Author: cyan5
[はじめてつくるReactアプリ with TypeScript （React + TypeScript入門シリーズ）](https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%A4%E3%81%8F%E3%82%8BReact%E3%82%A2%E3%83%97%E3%83%AA-TypeScript-mod728-ebook/dp/B094Z1R281)を参考に作成したはじめてのWebアプリケーション

## 開発環境
* Ubuntu on WSL2
* React + TypeScript + Vite
* CSS-in-JS: styled-components
* API: [Weather-API](https://www.weatherapi.com/)

----
## アプリの使い方
![](./weather_explain.png)
1. 都市名を英語で入力します。
2. Get Weather ボタンをクリックします。
3. 地域名、都市名、天気、気温、天気アイコン、天気が表示されます。
4. メニューが表示されます。

## 実装
アプリの設計、機能、デザインは参考書に基づいて設計されているが、本アプリケーションは参考書の内容に加えて以下の点を追加・改良している。
* アプリ中のウィンドウ右上にアプリの使用方法を表示するポップアップメニューを追加。
* 参考書ではcreate-react-appを使用しているが、本アプリケーションでは、より高速で安定なViteを使用している。
* 参考書ではPure CSSを採用しているが、本アプリケーションではCSS-in-JSの中でも人気の高いStyled-componentsを採用している。
