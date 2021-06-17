# テーブル設計

## users

| Column             | Type   | Options                   |
|------------------- | ------ | ------------------------- |
| email              | string | null: false, unique: true | 
| encrypted_password | string | null: false               |
| nickname           | string | null: false               |
| last_name          | string | null: false               |
| first_name         | string | null: false               |
| last_name_kana     | string | null: false               |
| first_name_kana    | string | null: false               |
| birth_date         | date   | null: false               |

### Association
- has_many :room_users
- has_many :comments
- has_many :collectors
- has_many :messages
- has_many :orders
- has_one :artist
- has_one :gallery
- has_one :point

## artists

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|artist_name       |string    |null: false                    |
|artist_name_kana  |string    |null: false                    |
|region_id         |integer   |null: false                    |
|phone             |integer   |null: false                    |
|artist_about      |string    |null: false                    |

### Association
- has_many :room_users
- belongs_to :user
- belongs_to :gallery
- has_many :art

## gallery

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|gallery_name      |string    |null: false                    |
|gallery_name_kana |string    |null: false                    |
|postal_code       |string    |null: false                    |
|region_id         |integer   |null: false                    |
|city              |string    |null: false                    |
|street            |string    |null: false                    |
|building_name     |string    |                               |
|phone             |integer   |null: false                    |

### Association

- belongs_to :user
- has_many :artists
- has_many :room_users
- has_many :orders

## room_users

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|room              |references|null: false, foreign_key: true |
|user              |references|null: false, foreign_key: true |
|artist            |references|null: false, foreign_key: true |
|gallery           |references|null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :artist
- belongs_to :gallery
- belongs_to :room

## room

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|name              |string    |null: false                    |

### Association

- belongs_to :room_users
- has_many :correction

## correction

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|art               |references|null: false, foreign_key: true |
|room              |references|null: false, foreign_key: true |

### Association

- belongs_to :room
- has_many :comments
- belongs_to :art

## comments

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|correction        |references|null: false, foreign_key: true |
|content           |string    |null: false                    |

### Association

- belongs_to :user
- belongs_to :correction

## orders

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|gallery           |references|null: false, foreign_key: true |
|art               |references|null: false, foreign_key: true |

### Association

- belongs_to :user
- has_one :addres
- belongs_to :art
- belongs_to :gallery

## address

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|order             |references|null: false, foreign_key: true |
|postal_code       |string    |null: false                    |
|region_id         |integer   |null: false                    |
|city              |string    |null: false                    |
|street            |string    |null: false                    |
|building_name     |string    |                               |
|phone             |integer   |null: false                    |

### Association

- belongs_to :order

## points
| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|point             |integer   |                               |

### Association

- belongs_to :user

## messages
| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|art               |references|null: false, foreign_key: true |
|content           |string    |null: false                    |

### Association

- belongs_to :user
- belongs_to :art

## collector

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|user              |references|null: false, foreign_key: true |
|art               |references|null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :art

## arts

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|artist            |references|null: false, foreign_key: true |
|gallery           |references|null: false, foreign_key: true |
|title             |string    |null: false                    |
|description       |text      |                               |
|category_id       |integer   |                               |
|cheering          |integer   |                               |

### Association

- belongs_to :artist
- has_many :collectors
- has_many :messages
- has_one :order
- has_one :sale
- has_many :correction
- has_one :sticker

## stickers
| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|art               |references|null: false, foreign_key: true |
|label             |string    |null: false                    |

### Association

- belongs_to :art

## sales

| Column           | Type     | Options                       |
|----------------- | -------- | ----------------------------- |
|art               |references|null: false, foreign_key: true |
|charge_id         |integer   |null: false                    |
|region_id         |integer   |null: false                    |
|period_id         |integer   |nu]]: false                    |
|price             |integer   |null: false                    |

### Association

- belongs_to :art
