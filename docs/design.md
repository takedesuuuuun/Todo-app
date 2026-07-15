# Todoアプリ設計書

## アプリ概要

タスクを管理するTodoアプリ。

React Routerで開発をし、LocalStrageを使用してデータを保存する。

Reactなどを活用できるようになるために開発をする。

## 機能一覧

- タスクの追加、編集、削除
- 達成度別に欄を切り替える
- カテゴリー
- 検索
- 優先度
- LocalStrage保存

## 画面構成

```text
+---------------------------+
| Header                    |
+---------------------------+
| Search Filter             |
| TodoForm                  |
|---------------------------|
| TodoList                  |
|  ├ TodoItem               |
|  ├ TodoItem               |
|  └ TodoItem               |
+---------------------------+
| Footer                    |
+---------------------------+
```

シンプルな色、構成にする

## コンポーネント設計

App
L Header        タイトル
L nav           nav全般
|  L SearchBar  検索
|  L Filter     絞り込み
|  L Todo Form  タスク追加
L Todo list     タスク一覧
|  L Todo item  タスク
L Footer        コピーライト

## データ設計

Todo

id        number    ID
title     string    名前
complete  boolean   完成度
category  string    カテゴリー
priority  string    優先度

## 状態管理

App

todos

L TodoForm
L SearchBar
L Filter
L TodoList

## 開発手順

1. Header
2. TodoForm
3. TodoList
4. TodoItem
5. 追加機能
6. 削除機能
7. 編集機能
8. フィルター
9. 検索
10. LocalStorage
11. レスポンシブ対応
12. Vercelへ公開