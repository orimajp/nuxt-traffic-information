const targetRoutes = [
  // [JR東日本]
  {
    company: 'JR東日本',
    routes: [
      // 東海道方面
      {
        name: '東海道線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '京浜東北線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '横須賀線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '南武線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '横浜線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '伊東線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '相模線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '鶴見線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      // 東北・高崎方面
      {
        name: '宇都宮線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '高崎線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      //{ // 重複しているので除外
      //  name: '京浜東北線',
      //  webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      //},
      {
        name: '埼京線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '川越線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '武蔵野線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '上越線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '信越本線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      //{
      //  name: '吾妻線',
      //  webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      //},
      {
        name: '烏山線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      //{
      //  name: '八高線',
      //  webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      //},
      {
        name: '日光線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      //{
      //  name: '両毛線',
      //  webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      //},
      // 中央方面
      {
        name: '中央線快速電車',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '中央線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '中央本線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '中央･総武各駅停車',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '武蔵野線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '五日市線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '青梅線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      //{
      //  name: '八高線',
      //  webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      //},
      {
        name: '小海線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      // 常磐方面
      {
        name: '常磐線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '常磐線快速電車',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '常磐線各駅停車',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      //{
      //  name: '水郡線',
      //  webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      //},
      {
        name: '水戸線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      // 総武方面
      {
        name: '総武快速線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '総武本線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '中央・総武各駅停車',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '京葉線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '武蔵野線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '内房線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '鹿島線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '久留里線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '外房線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '東金線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '成田線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      // 山手線
      {
        name: '山手線',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      // 直通サービス
      {
        name: '上野東京ライン',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      },
      {
        name: '湘南新宿ライン',
        webSite: 'https://traininfo.jreast.co.jp/train_info/kanto.aspx'
      }
    ]
  },
  // [東京メトロ]
  {
    company: '東京メトロ',
    routes: [
      {
        name: '銀座線',
        webSite: 'https://www.tokyometro.jp/unkou/history/ginza.html'
      },
      {
        name: '丸ノ内線',
        webSite: 'https://www.tokyometro.jp/unkou/history/marunouchi.html'
      },
      {
        name: '日比谷線',
        webSite: 'https://www.tokyometro.jp/unkou/history/hibiya.html'
      },
      {
        name: '東西線',
        webSite: 'https://www.tokyometro.jp/unkou/history/touzai.html'
      },
      {
        name: '千代田線',
        webSite: 'https://www.tokyometro.jp/unkou/history/chiyoda.html'
      },
      {
        name: '有楽町線',
        webSite: 'https://www.tokyometro.jp/unkou/history/yurakucho.html'
      },
      {
        name: '半蔵門線',
        webSite: 'https://www.tokyometro.jp/unkou/history/hanzoumon.html'
      },
      {
        name: '南北線',
        webSite: 'https://www.tokyometro.jp/unkou/history/nanboku.html'
      },
      {
        name: '副都心線',
        webSite: 'https://www.tokyometro.jp/unkou/history/fukutoshin.html'
      },
      {
        name: '東葉高速線',
        webSite: 'http://www.toyokosoku.co.jp/'
      },
      {
        name: '埼玉高速鉄道線',
        webSite: 'https://www.s-rail.co.jp/train/'
      },
      {
        name: '東京メトロ南北線',
        webSite: 'https://www.tokyometro.jp/unkou/history/nanboku.html'
      }
    ]
  },
  // [都営地下鉄]
  {
    company: '都営地下鉄',
    routes: [
      {
        name: '浅草線',
        webSite: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
      },
      {
        name: '三田線',
        webSite: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
      },
      {
        name: '新宿線',
        webSite: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
      },
      {
        name: '大江戸線',
        webSite: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
      },
      {
        name: '都営新宿線',
        webSite: 'https://www.kotsu.metro.tokyo.jp/subway/schedule/index.html'
      }
    ]
  },
  // [東武鉄道]
  {
    company: '東武鉄道',
    routes: [
      {
        name: '東上本線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東武線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東武特急',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東武アーバンパークライン',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '日光線特急',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '伊勢崎線特急',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東武スカイツリーライン･伊勢崎線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東武スカイツリーライン',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '伊勢崎線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '伊勢崎線特急',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東武日光線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '小泉線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '亀戸線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '大師線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '特急りょうもう',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '特急スペーシア',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '東上本線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '越生線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '佐野線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '鬼怒川線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      },
      {
        name: '桐生線',
        webSite: 'http://tra-rep.tobu.jp/index.html'
      }
    ]
  },
  // [西武鉄道]
  {
    company: '西武鉄道',
    routes: [
      {
        name: '西武線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '池袋線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '西武秩父線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '西武有楽町線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '西武新宿線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '豊島線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '狭山線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '新宿線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '拝島線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '多摩湖線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '国分寺線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '西武園線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '多摩川線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '特急レッドアロー',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: '山口線',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      },
      {
        name: 'S-TRAIN',
        webSite: 'https://www.seiburailway.jp/railwayinfo/index.html'
      }
    ]
  },
  // [京成電鉄]
  {
    company: '京成電鉄',
    routes: [
      {
        name: '京成線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '京成本線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '東成田線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '芝山鉄道線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '成田スカイアクセス線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '特急スカイライナー',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '北総線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '押上線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '金町線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '千葉線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      },
      {
        name: '千原線',
        webSite: 'http://www.keisei.co.jp/info/index.htm'
      }
    ]
  },
  // [新京成電鉄]
  {
    company: '新京成電鉄',
    routes: [
      {
        name: '新京成線',
        webSite: 'https://www.shinkeisei.co.jp/train/rail_info/'
      }
    ]
  },
  // [京王電鉄]
  {
    company: '京王電鉄',
    routes: [
      {
        name: '京王線',
        webSite: 'https://www.keio.co.jp/unkou/unkou_pc.html'
      },
      {
        name: '井の頭線',
        webSite: 'https://www.keio.co.jp/unkou/unkou_pc.html'
      }
    ]
  },
  // [小田急電鉄]
  {
    company: '小田急電鉄',
    routes: [
      {
        name: '小田急線',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      },
      {
        name: '小田急特急',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      },
      {
        name: '特急電車',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      },
      {
        name: '小田原線',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      },
      {
        name: '江ノ島線',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      },
      {
        name: '多摩線',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      },
      {
        name: '特急ロマンスカー',
        webSite: 'https://www.odakyu.jp/cgi-bin/user/emg/emergency_bbs.pl'
      }
    ]
  },
  // [東急電鉄]
  {
    company: '東急電鉄',
    routes: [
      {
        name: '東横線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: '目黒線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: '田園都市線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: '大井町線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: '東急多摩川線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: '池上線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: 'こどもの国線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: '世田谷線',
        webSite: 'https://www.tokyu.co.jp/unten2/unten.html'
      },
      {
        name: 'みなとみらい線',
        webSite: 'https://www.mm21railway.co.jp/service/'
      }
    ]
  },
  // [京急電鉄]
  {
    company: '京急電鉄',
    routes: [
      {
        name: '京急線',
        webSite: 'https://unkou.keikyu.co.jp/'
      },
      {
        name: '空港線',
        webSite: 'https://unkou.keikyu.co.jp/'
      },
      {
        name: '大師線',
        webSite: 'https://unkou.keikyu.co.jp/'
      },
      {
        name: '逗子線',
        webSite: 'https://unkou.keikyu.co.jp/'
      },
      {
        name: '久里浜線',
        webSite: 'https://unkou.keikyu.co.jp/'
      }
    ]
  },
  // [相模鉄道]
  {
    company: '相模鉄道',
    routes: [
      {
        name: '相鉄線',
        webSite: 'https://www.sotetsu.co.jp/train/status/'
      }
    ]
  },
  // [新京成電鉄]
  {
    company: '新京成電鉄',
    routes: [
      {
        name: '新京成線',
        webSite: 'https://www.shinkeisei.co.jp/train/rail_info/'
      }
    ]
  },
  // [横浜市交通局]
  {
    company: '横浜市交通局',
    routes: [
      {
        name: '横浜市営地下鉄',
        webSite: 'https://www.city.yokohama.lg.jp/kotsu/'
      }
    ]
  },
  // [横浜市営地下鉄]
  {
    company: '横浜市営地下鉄',
    routes: [
      {
        name: 'ブルーライン',
        webSite: 'https://www.city.yokohama.lg.jp/kotsu/'
      },
      {
        name: 'グリーンライン',
        webSite: 'https://www.city.yokohama.lg.jp/kotsu/'
      }
    ]
  },
  // [りんかい線]
  {
    company: 'りんかい線',
    routes: [
      {
        name: 'りんかい線',
        webSite: 'https://service.twr.co.jp/service_info/information.html'
      }
    ]
  },
  // [つくばエクスプレス]
  {
    company: 'つくばエクスプレス',
    routes: [
      {
        name: 'つくばエクスプレス線',
        webSite: 'http://www.mir.co.jp/info/'
      }
    ]
  },
  // [関東鉄道]
  {
    company: '関東鉄道',
    routes: [
      {
        name: '常総線',
        webSite: 'http://www.kantetsu.co.jp/unkouinfo/details.cgi'
      },
      {
        name: '竜ヶ崎線',
        webSite: 'http://www.kantetsu.co.jp/unkouinfo/details.cgi'
      }
    ]
  },
  // [ゆりかもめ]
  {
    company: 'ゆりかもめ',
    routes: [
      {
        name: 'ゆりかもめ',
        webSite: 'https://www.yurikamome.co.jp/ride-guidance/operation.html'
      }
    ]
  },
  // [東京モノレール]
  {
    company: '東京モノレール',
    routes: [
      {
        name: '東京モノレール',
        webSite: 'http://www.tokyo-monorail.co.jp/guidance/'
      }
    ]
  },
  // [日暮里･舎人ライナー]
  {
    company: '日暮里･舎人ライナー',
    routes: [
      {
        name: '日暮里･舎人ライナー',
        webSite: 'https://www.kotsu.metro.tokyo.jp/nippori_toneri/schedule/'
      }
    ]
  },
  // [千葉モノレール]
  {
    company: '千葉モノレール',
    routes: [
      {
        name: '千葉モノレール',
        webSite: 'https://chiba-monorail.co.jp/index.php/info-detail/'
      }
    ]
  },
  // [多摩モノレール]
  {
    company: '多摩モノレール',
    routes: [
      {
        name: '多摩モノレール',
        webSite: 'https://www.tama-monorail.co.jp/monorail/operation/index.html'
      }
    ]
  },
  // [横浜シーサイドライン]
  {
    company: '横浜シーサイドライン',
    routes: [
      {
        name: 'シーサイドライン',
        webSite: 'https://www.seasideline.co.jp/guidance/train_info/'
      },
      {
        name: '金沢シーサイドライン',
        webSite: 'https://www.seasideline.co.jp/guidance/train_info/'
      }
    ]
  },
  // [湘南モノレール]
  {
    company: '湘南モノレール',
    routes: [
      {
        name: '湘南モノレール',
        webSite: 'http://www.shonan-monorail.co.jp/'
      }
    ]
  },
  // [ニューシャトル]
  {
    company: 'ニューシャトル',
    routes: [
      {
        name: 'ニューシャトル',
        webSite: 'http://www.new-shuttle.jp/'
      }
    ]
  },
  // [真岡鐵道]
  {
    company: '真岡鐵道',
    routes: [
      {
        name: '真岡線',
        webSite: 'http://www.moka-railway.co.jp/'
      }
    ]
  },
  //// [小湊鉄道]
  //{
  //  company: '小湊鉄道',
  //  routes: [
  //    {
  //      name: '小湊鉄道線',
  //      webSite: 'https://www.kominato.co.jp/train/index.html'
  //    }
  //  ]
  //},
  // [銚子電気鉄道]
  {
    company: '銚子電気鉄道',
    routes: [
      {
        name: '銚子電気鉄道線',
        webSite: 'https://www.choshi-dentetsu.jp/'
      }
    ]
  },
  // [鹿島臨海鉄道]
  {
    company: '鹿島臨海鉄道',
    routes: [
      {
        name: '銚子電気鉄道線',
        webSite: 'https://www.rintetsu.co.jp/'
      }
    ]
  },
  // [富士急行]
  {
    company: '富士急行',
    routes: [
      {
        name: '富士急行線',
        webSite: 'http://www.fujikyu-railway.jp/'
      }
    ]
  },
  // [伊豆急行]
  {
    company: '伊豆急行',
    routes: [
      {
        name: '伊豆急行線',
        webSite: 'https://www.izukyu.co.jp/'
      }
    ]
  },
  // [上信電鉄]
  {
    company: '上信電鉄',
    routes: [
      {
        name: '上信線',
        webSite: 'https://www.joshin-dentetsu.co.jp/'
      }
    ]
  },
  // [上毛電気鉄道]
  {
    company: '上毛電気鉄道',
    routes: [
      {
        name: '上毛線',
        webSite: 'http://www.jomorailway.com/'
      }
    ]
  }
]

class TargetRoute {
  constructor(company, name, webSite) {
    this.company = company
    this.name = name
    this.webSite = webSite
  }
}

function getTargetRoute(companyName, routeName) {
  for (const targetRoute of targetRoutes) {
    if (companyName === targetRoute.company) {
      for (const route of targetRoute.routes) {
        if (routeName === route.name) {
          return new TargetRoute(companyName, routeName, route.webSite)
        }
      }
    }
  }

  return null
}

export default getTargetRoute
