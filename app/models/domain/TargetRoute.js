const targetRoutes = [
  // [JR東日本]
  // 東海道方面
  {
    name: '東海道線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '京浜東北線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '横須賀線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '南武線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '横浜線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '伊東線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '相模線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '鶴見線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  // 東北・高崎方面
  {
    name: '宇都宮線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '高崎線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  //  {name: '京浜東北線', company: 'JR東日本', website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'}, // 重複しているので除外
  {
    name: '埼京線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '川越線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '武蔵野線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '上越線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '信越本線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  //  {name: '吾妻線', company: 'JR東日本', website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'},
  {
    name: '烏山線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  //  {name: '八高線', company: 'JR東日本', website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'},
  {
    name: '日光線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  //  {name: '両毛線', company: 'JR東日本', website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'},
  // 中央方面
  {
    name: '中央線快速電車',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '中央線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '中央本線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '中央･総武各駅停車',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '武蔵野線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '五日市線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '青梅線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  //  {name: '八高線', company: 'JR東日本', website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'},
  {
    name: '小海線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  // 常磐方面
  {
    name: '常磐線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '常磐線快速電車',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '常磐線各駅停車',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  //  {name: '水郡線', company: 'JR東日本', website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'},
  {
    name: '水戸線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  // 総武方面
  {
    name: '総武快速線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '総武本線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '中央・総武各駅停車',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '京葉線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '武蔵野線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '内房線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '鹿島線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '久留里線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '外房線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '東金線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '成田線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  // 山手線
  {
    name: '山手線',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  // 直通サービス
  {
    name: '上野東京ライン',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  {
    name: '湘南新宿ライン',
    company: 'JR東日本',
    website: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
  },
  // [東京メトロ]
  {
    name: '銀座線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/ginza.html'
  },
  {
    name: '丸ノ内線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/marunouchi.html'
  },
  {
    name: '日比谷線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/hibiya.html'
  },
  {
    name: '東西線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/touzai.html'
  },
  {
    name: '千代田線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/chiyoda.html'
  },
  {
    name: '有楽町線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/yurakucho.html'
  },
  {
    name: '半蔵門線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/hanzoumon.html'
  },
  {
    name: '南北線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/nanboku.html'
  },
  {
    name: '副都心線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/fukutoshin.html'
  },
  {
    name: '東葉高速線',
    company: '東京メトロ',
    website: 'http://www.toyokosoku.co.jp/'
  },
  {
    name: '埼玉高速鉄道線',
    company: '東京メトロ',
    website: 'https://www.s-rail.co.jp/train/'
  },
  {
    name: '東京メトロ南北線',
    company: '東京メトロ',
    website: 'https://www.tokyometro.jp/unkou/history/nanboku.html'
  },
  // [都営地下鉄]
  {
    name: '浅草線',
    company: '都営地下鉄',
    website: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
  },
  {
    name: '三田線',
    company: '都営地下鉄',
    website: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
  },
  {
    name: '新宿線',
    company: '都営地下鉄',
    website: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
  },
  {
    name: '大江戸線',
    company: '都営地下鉄',
    website: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
  },
  {
    name: '都営新宿線',
    company: '都営地下鉄',
    website: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
  },
  // [東武鉄道]
  {
    name: '東上本線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東武線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東武特急',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東武アーバンパークライン',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '日光線特急',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '伊勢崎線特急',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東武スカイツリーライン･伊勢崎線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東武スカイツリーライン',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '伊勢崎線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '伊勢崎線特急',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東武日光線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '小泉線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '亀戸線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '大師線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '特急りょうもう',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '特急スペーシア',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '東上本線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '越生線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '佐野線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '鬼怒川線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  {
    name: '桐生線',
    company: '東武鉄道',
    website: 'http://tra-rep.tobu.jp/index.html'
  },
  // [西武鉄道]
  {
    name: '西武線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '池袋線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '西武秩父線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '西武有楽町線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '西武新宿線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '豊島線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '狭山線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '新宿線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '拝島線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '多摩湖線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '国分寺線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '西武園線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '多摩川線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '特急レッドアロー',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: '山口線',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  {
    name: 'S-TRAIN',
    company: '西武鉄道',
    website: 'https://www.seiburailway.jp/railwayinfo/index.html'
  },
  // [京成電鉄]
  {
    name: '京成線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '京成本線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '東成田線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '芝山鉄道線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '成田スカイアクセス線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '特急スカイライナー',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '北総線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '押上線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '金町線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '千葉線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  {
    name: '千原線',
    company: '京成電鉄',
    website: 'http://www.keisei.co.jp/info/index.htm'
  },
  // [新京成電鉄]
  {
    name: '新京成線',
    company: '新京成電鉄',
    website: 'https://www.shinkeisei.co.jp/train/rail_info/'
  },
  // [京王電鉄]
  {
    name: '京王線',
    company: '京王電鉄',
    website: 'https://www.keio.co.jp/unkou/unkou_pc.html'
  },
  {
    name: '井の頭線',
    company: '京王電鉄',
    website: 'https://www.keio.co.jp/unkou/unkou_pc.html'
  },
  // [小田急電鉄]
  {
    name: '小田急線',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  {
    name: '小田急特急',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  {
    name: '特急電車',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  {
    name: '小田原線',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  {
    name: '江ノ島線',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  {
    name: '多摩線',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  {
    name: '特急ロマンスカー',
    company: '小田急電鉄',
    website: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
  },
  // [東急電鉄]
  {
    name: '東横線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: '目黒線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: '田園都市線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: '大井町線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: '東急多摩川線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: '池上線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: 'こどもの国線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: '世田谷線',
    company: '東急電鉄',
    website: 'https://www.tokyu.co.jp/unten2/unten.html'
  },
  {
    name: 'みなとみらい線',
    company: '東急電鉄',
    website: 'https://www.mm21railway.co.jp/service/'
  },
  // [京急電鉄]
  {
    name: '京急線',
    company: '京急電鉄',
    website: 'https://unkou.keikyu.co.jp/'
  },
  {
    name: '空港線',
    company: '京急電鉄',
    website: 'https://unkou.keikyu.co.jp/'
  },
  {
    name: '大師線',
    company: '京急電鉄',
    website: 'https://unkou.keikyu.co.jp/'
  },
  {
    name: '逗子線',
    company: '京急電鉄',
    website: 'https://unkou.keikyu.co.jp/'
  },
  {
    name: '久里浜線',
    company: '京急電鉄',
    website: 'https://unkou.keikyu.co.jp/'
  },
  // [相模鉄道]
  {
    name: '相鉄線',
    company: '相模鉄道',
    website: 'https://www.sotetsu.co.jp/train/status/'
  },
  // [新京成電鉄]
  {
    name: '新京成線',
    company: '新京成電鉄',
    website: 'https://www.shinkeisei.co.jp/train/rail_info/'
  },
  // [横浜市交通局]
  {
    name: '横浜市営地下鉄',
    company: '横浜市交通局',
    website: 'https://www.city.yokohama.lg.jp/kotsu/'
  },
  // [横浜市営地下鉄]
  {
    name: 'ブルーライン',
    company: '横浜市営地下鉄',
    website: 'https://www.city.yokohama.lg.jp/kotsu/'
  },
  {
    name: 'グリーンライン',
    company: '横浜市営地下鉄',
    website: 'https://www.city.yokohama.lg.jp/kotsu/'
  },
  // [りんかい線]
  {
    name: 'りんかい線',
    company: 'りんかい線',
    website: 'https://service.twr.co.jp/service_info/information.html'
  },
  // [つくばエクスプレス]
  {
    name: 'つくばエクスプレス線',
    company: 'つくばエクスプレス',
    website: 'http://www.mir.co.jp/info/'
  },
  // [関東鉄道]
  {
    name: '常総線',
    company: '関東鉄道',
    website: 'http://www.kantetsu.co.jp/unkouinfo/details.cgi'
  },
  {
    name: '竜ヶ崎線',
    company: '関東鉄道',
    website: 'http://www.kantetsu.co.jp/unkouinfo/details.cgi'
  },
  // [ゆりかもめ]
  {
    name: 'ゆりかもめ',
    company: 'ゆりかもめ',
    website: 'https://www.yurikamome.co.jp/ride-guidance/operation.html'
  },
  // [東京モノレール]
  {
    name: '東京モノレール',
    company: '東京モノレール',
    website: 'http://www.tokyo-monorail.co.jp/guidance/'
  },
  // [日暮里･舎人ライナー]
  {
    name: '日暮里･舎人ライナー',
    company: '日暮里･舎人ライナー',
    website: 'https://www.kotsu.metro.tokyo.jp/nippori_toneri/schedule/'
  },
  // [千葉モノレール]
  {
    name: '千葉モノレール',
    company: '千葉モノレール',
    website: 'https://chiba-monorail.co.jp/index.php/info-detail/'
  },
  // [多摩モノレール]
  {
    name: '多摩モノレール',
    company: '多摩モノレール',
    website: 'https://www.tama-monorail.co.jp/monorail/operation/index.html'
  },
  // [横浜シーサイドライン]
  {
    name: 'シーサイドライン',
    company: '横浜シーサイドライン',
    website: 'https://www.seasideline.co.jp/guidance/train_info/'
  },
  {
    name: '金沢シーサイドライン',
    company: '横浜シーサイドライン',
    website: 'https://www.seasideline.co.jp/guidance/train_info/'
  },
  // [湘南モノレール]
  {
    name: '湘南モノレール',
    company: '湘南モノレール',
    website: 'http://www.shonan-monorail.co.jp/'
  },
  // [ニューシャトル]
  {
    name: 'ニューシャトル',
    company: 'ニューシャトル',
    website: 'http://www.new-shuttle.jp/'
  },
  // [真岡鐵道]
  {
    name: '真岡線',
    company: '真岡鐵道',
    website: 'http://www.moka-railway.co.jp/'
  },
  // [小湊鉄道]
  //  {name: '小湊鉄道線', company: '小湊鉄道', website: 'https://www.kominato.co.jp/train/index.html'},
  // [銚子電気鉄道]
  {
    name: '銚子電気鉄道線',
    company: '銚子電気鉄道',
    website: 'https://www.choshi-dentetsu.jp/'
  },
  // [鹿島臨海鉄道]
  {
    name: '大洗鹿島線',
    company: '鹿島臨海鉄道',
    website: 'https://www.rintetsu.co.jp/'
  },
  // [富士急行]
  {
    name: '富士急行線',
    company: '富士急行',
    website: 'http://www.fujikyu-railway.jp/'
  },
  // [伊豆急行]
  {
    name: '伊豆急行線',
    company: '伊豆急行',
    website: 'https://www.izukyu.co.jp/'
  },
  // [上信電鉄]
  {
    name: '上信線',
    company: '上信電鉄',
    website: 'https://www.joshin-dentetsu.co.jp/'
  },
  // [上毛電気鉄道]
  {
    name: '上毛線',
    company: '上毛電気鉄道',
    website: 'http://www.jomorailway.com/'
  }
]

function getTargetRoute(companyName, routeName) {
  for (const route of targetRoutes) {
    /*
    console.log(
      'getTargetRoute(): companyName=' +
        companyName +
        ' routeName=' +
        routeName +
        ' route.company=' +
        route.company +
        ' route.name=' +
        route.name
    )*/

    if (routeName === route.name && companyName === route.company) {
      return route
    }
  }
  return null
}

export default getTargetRoute
