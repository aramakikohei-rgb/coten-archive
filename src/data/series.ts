import type { Series } from "@/types/coten";

export const seriesData: Series[] = [
  // 1. Yoshida Shoin
  {
    id: "yoshida-shoin",
    title: "吉田松陰",
    titleEn: "Yoshida Shoin",
    description:
      "幕末の思想家・教育者である吉田松陰の生涯を辿る。松下村塾での教育や、黒船密航未遂事件、そして安政の大獄による処刑までを描く。",
    category: "biography",
    region: "japan",
    coordinates: [34.42, 131.4],
    startYear: 1830,
    endYear: 1859,
    timePeriod: "earlyModern",
    episodeCount: 4,
    episodes: [
      {
        id: "yoshida-shoin-1",
        seriesId: "yoshida-shoin",
        episodeNumber: 1,
        title: "吉田松陰の生い立ちと兵学への目覚め",
        description:
          "長州藩の下級武士の家に生まれた松陰が、幼少期から兵学を学び始めた経緯を紹介する。",
      },
      {
        id: "yoshida-shoin-2",
        seriesId: "yoshida-shoin",
        episodeNumber: 2,
        title: "黒船来航と密航計画",
        description:
          "ペリー来航に衝撃を受けた松陰が、海外渡航を企て下田で密航を試みた事件を解説する。",
      },
      {
        id: "yoshida-shoin-3",
        seriesId: "yoshida-shoin",
        episodeNumber: 3,
        title: "松下村塾と門下生たち",
        description:
          "野山獄から出獄後に開いた松下村塾で、高杉晋作や伊藤博文ら維新の志士を育てた教育の実態に迫る。",
      },
      {
        id: "yoshida-shoin-4",
        seriesId: "yoshida-shoin",
        episodeNumber: 4,
        title: "安政の大獄と松陰の最期",
        description:
          "幕府の弾圧である安政の大獄により捕縛され、29歳で処刑された松陰の最期とその思想的遺産を語る。",
      },
    ],
    thumbnailColor: "#E63946",
    tags: ["幕末", "長州藩", "松下村塾", "教育", "維新"],
  },

  // 2. Alexander the Great
  {
    id: "alexander-the-great",
    title: "アレクサンドロス大王",
    titleEn: "Alexander the Great",
    description:
      "マケドニアの若き王アレクサンドロスが、ギリシャからペルシャ、インドに至る空前の大帝国を築いた軌跡を追う。古代世界を一変させた征服者の実像に迫る。",
    category: "empire",
    region: "europe",
    subRegions: ["middleEast"],
    coordinates: [40.52, 22.98],
    startYear: -356,
    endYear: -323,
    timePeriod: "ancient",
    episodeCount: 9,
    episodes: [
      {
        id: "alexander-1",
        seriesId: "alexander-the-great",
        episodeNumber: 1,
        title: "マケドニア王国とフィリッポス2世",
        description:
          "アレクサンドロスの父フィリッポス2世がマケドニアを強国に育て上げた背景を解説する。",
      },
      {
        id: "alexander-2",
        seriesId: "alexander-the-great",
        episodeNumber: 2,
        title: "アレクサンドロスの少年時代とアリストテレス",
        description:
          "哲学者アリストテレスに師事した少年時代と、早くから見せた軍事的才能について語る。",
      },
      {
        id: "alexander-3",
        seriesId: "alexander-the-great",
        episodeNumber: 3,
        title: "即位とギリシャの統一",
        description:
          "父の暗殺後に20歳で即位し、反乱を鎮圧してギリシャ世界の盟主となる過程を描く。",
      },
      {
        id: "alexander-4",
        seriesId: "alexander-the-great",
        episodeNumber: 4,
        title: "ペルシャ帝国への進撃 ― イッソスの戦い",
        description:
          "ダレイオス3世率いるペルシャ軍との激突イッソスの戦いでの劇的な勝利を追う。",
      },
      {
        id: "alexander-5",
        seriesId: "alexander-the-great",
        episodeNumber: 5,
        title: "エジプト征服とアレクサンドリア建設",
        description:
          "エジプトを征服しファラオとして迎えられた経緯と、アレクサンドリア建設の意義を解説する。",
      },
    ],
    thumbnailColor: "#457B9D",
    tags: ["古代ギリシャ", "マケドニア", "征服", "ペルシャ", "ヘレニズム"],
  },

  // 3. Genghis Khan
  {
    id: "genghis-khan",
    title: "チンギス・ハン",
    titleEn: "Genghis Khan",
    description:
      "モンゴル高原の遊牧民テムジンが、部族統一から世界史上最大の帝国を築くまでの波乱の生涯。草原の覇者がユーラシア大陸を席巻した壮大な物語を紐解く。",
    category: "empire",
    region: "centralAsia",
    coordinates: [47.92, 106.91],
    startYear: 1162,
    endYear: 1227,
    timePeriod: "medieval",
    episodeCount: 8,
    episodes: [
      {
        id: "genghis-khan-1",
        seriesId: "genghis-khan",
        episodeNumber: 1,
        title: "テムジンの過酷な少年時代",
        description:
          "父を毒殺され、一族に見捨てられたテムジン少年が、極限の環境を生き抜いた幼少期を描く。",
      },
      {
        id: "genghis-khan-2",
        seriesId: "genghis-khan",
        episodeNumber: 2,
        title: "モンゴル高原の部族統一",
        description:
          "ライバル部族との戦いを繰り広げ、モンゴル高原の諸部族を統一していく過程を追う。",
      },
      {
        id: "genghis-khan-3",
        seriesId: "genghis-khan",
        episodeNumber: 3,
        title: "チンギス・ハンの即位と帝国の制度",
        description:
          "1206年にチンギス・ハンとして即位し、千人隊制度やヤサ（法典）を整備した統治の仕組みを解説する。",
      },
      {
        id: "genghis-khan-4",
        seriesId: "genghis-khan",
        episodeNumber: 4,
        title: "ホラズム帝国への西征",
        description:
          "使者殺害をきっかけに始まったホラズム帝国への大遠征と、その圧倒的な軍事力を語る。",
      },
      {
        id: "genghis-khan-5",
        seriesId: "genghis-khan",
        episodeNumber: 5,
        title: "チンギス・ハンの遺産と後継者たち",
        description:
          "チンギス・ハンの死後、息子や孫たちによって帝国がさらに拡大していく歴史を概観する。",
      },
    ],
    thumbnailColor: "#2A9D8F",
    tags: ["モンゴル帝国", "遊牧民", "征服", "中央アジア", "草原"],
  },

  // 4. World Religions
  {
    id: "world-religions",
    title: "世界三大宗教",
    titleEn: "World Religions",
    description:
      "仏教・キリスト教・イスラム教の三大宗教が、どのように生まれ世界に広がっていったのかを比較しながら解説する。宗教が人類の歴史に与えた影響を考察する。",
    category: "religion",
    region: "global",
    coordinates: [31.77, 35.24],
    startYear: -500,
    endYear: 700,
    timePeriod: "ancient",
    episodeCount: 7,
    episodes: [
      {
        id: "world-religions-1",
        seriesId: "world-religions",
        episodeNumber: 1,
        title: "そもそも宗教とは何か？",
        description:
          "宗教の定義や人類にとっての意味を考え、三大宗教を学ぶ前提知識を整理する。",
      },
      {
        id: "world-religions-2",
        seriesId: "world-religions",
        episodeNumber: 2,
        title: "ブッダと仏教の誕生",
        description:
          "シッダールタの悟りから仏教がインドで成立し、アジア各地へ伝播していった経緯を辿る。",
      },
      {
        id: "world-religions-3",
        seriesId: "world-religions",
        episodeNumber: 3,
        title: "イエス・キリストとキリスト教の成立",
        description:
          "ナザレのイエスの教えと十字架刑、そしてパウロの伝道によるキリスト教の拡大を解説する。",
      },
      {
        id: "world-religions-4",
        seriesId: "world-religions",
        episodeNumber: 4,
        title: "ムハンマドとイスラム教の誕生",
        description:
          "預言者ムハンマドの啓示体験からイスラム教が成立し、アラビア半島を統一していく過程を追う。",
      },
      {
        id: "world-religions-5",
        seriesId: "world-religions",
        episodeNumber: 5,
        title: "三大宗教の比較と現代への影響",
        description:
          "三つの宗教の共通点と相違点を整理し、現代社会に与え続けている影響について考察する。",
      },
    ],
    thumbnailColor: "#8B5CF6",
    tags: ["仏教", "キリスト教", "イスラム教", "信仰", "思想"],
  },

  // 5. Hitler
  {
    id: "hitler",
    title: "ヒトラー",
    titleEn: "Hitler",
    description:
      "アドルフ・ヒトラーの生涯を通じて、なぜドイツ国民がナチズムに傾倒したのかを考察する。民主主義から独裁が生まれるメカニズムを歴史から学ぶ。",
    category: "politics",
    region: "europe",
    coordinates: [52.52, 13.41],
    startYear: 1889,
    endYear: 1945,
    timePeriod: "modern",
    episodeCount: 8,
    episodes: [
      {
        id: "hitler-1",
        seriesId: "hitler",
        episodeNumber: 1,
        title: "ヒトラーの生い立ちとウィーン時代",
        description:
          "オーストリアで生まれたヒトラーが、画家を志しウィーンで挫折を味わった青年期を描く。",
      },
      {
        id: "hitler-2",
        seriesId: "hitler",
        episodeNumber: 2,
        title: "第一次世界大戦とヒトラーの覚醒",
        description:
          "従軍体験とドイツの敗戦がヒトラーに与えた衝撃と、政治活動への転身を追う。",
      },
      {
        id: "hitler-3",
        seriesId: "hitler",
        episodeNumber: 3,
        title: "ナチ党の結成とミュンヘン一揆",
        description:
          "国家社会主義ドイツ労働者党の成長とミュンヘン一揆の失敗、そして獄中での『我が闘争』執筆を解説する。",
      },
      {
        id: "hitler-4",
        seriesId: "hitler",
        episodeNumber: 4,
        title: "合法的な権力掌握",
        description:
          "ワイマール共和国の民主的制度を利用して首相に就任し、全権委任法で独裁体制を確立した過程を語る。",
      },
      {
        id: "hitler-5",
        seriesId: "hitler",
        episodeNumber: 5,
        title: "第二次世界大戦とホロコースト",
        description:
          "ヨーロッパを戦火に巻き込んだ第二次世界大戦と、ユダヤ人大量虐殺の悲劇を検証する。",
      },
    ],
    thumbnailColor: "#1D3557",
    tags: ["ナチス", "独裁", "第二次世界大戦", "ドイツ", "民主主義"],
  },

  // 6. Gandhi
  {
    id: "gandhi",
    title: "ガンディー",
    titleEn: "Gandhi",
    description:
      "非暴力・不服従運動でイギリスからのインド独立を導いたマハトマ・ガンディーの生涯。弁護士から独立運動の指導者へと変貌した彼の思想と行動を追う。",
    category: "biography",
    region: "india",
    coordinates: [28.61, 77.21],
    startYear: 1869,
    endYear: 1948,
    timePeriod: "modern",
    episodeCount: 7,
    episodes: [
      {
        id: "gandhi-1",
        seriesId: "gandhi",
        episodeNumber: 1,
        title: "ガンディーの少年時代とイギリス留学",
        description:
          "インドの商人カーストに生まれたガンディーが、ロンドンで法律を学んだ青年期を紹介する。",
      },
      {
        id: "gandhi-2",
        seriesId: "gandhi",
        episodeNumber: 2,
        title: "南アフリカでの差別体験と覚醒",
        description:
          "南アフリカで人種差別を受けた経験が、ガンディーの非暴力思想の原点となった過程を描く。",
      },
      {
        id: "gandhi-3",
        seriesId: "gandhi",
        episodeNumber: 3,
        title: "インド帰国と非暴力・不服従運動の開始",
        description:
          "インドに戻ったガンディーが、サティヤーグラハ（真理の把持）の理念で独立運動を展開する姿を追う。",
      },
      {
        id: "gandhi-4",
        seriesId: "gandhi",
        episodeNumber: 4,
        title: "塩の行進とイギリスへの抵抗",
        description:
          "1930年の塩の行進に代表される大規模な市民的不服従運動でイギリス支配に立ち向かった闘いを解説する。",
      },
      {
        id: "gandhi-5",
        seriesId: "gandhi",
        episodeNumber: 5,
        title: "インド独立と分離、そしてガンディーの最期",
        description:
          "1947年のインド独立とパキスタン分離の悲劇、そしてガンディー暗殺までを語る。",
      },
    ],
    thumbnailColor: "#F4A261",
    tags: ["非暴力", "インド独立", "イギリス植民地", "思想家", "公民権"],
  },

  // 7. Lincoln
  {
    id: "lincoln",
    title: "リンカーン",
    titleEn: "Lincoln",
    description:
      "丸太小屋から大統領へ。エイブラハム・リンカーンが南北戦争を指揮し、奴隷解放を実現するまでの波乱の人生を描く。",
    category: "biography",
    region: "americas",
    coordinates: [38.91, -77.04],
    startYear: 1809,
    endYear: 1865,
    timePeriod: "modern",
    episodeCount: 6,
    episodes: [
      {
        id: "lincoln-1",
        seriesId: "lincoln",
        episodeNumber: 1,
        title: "開拓地の少年リンカーン",
        description:
          "ケンタッキーの貧しい家庭に生まれ、独学で知識を身につけたリンカーンの少年時代を描く。",
      },
      {
        id: "lincoln-2",
        seriesId: "lincoln",
        episodeNumber: 2,
        title: "弁護士から政治家への道",
        description:
          "イリノイ州で弁護士として成功し、政治の世界に足を踏み入れるまでの経緯を追う。",
      },
      {
        id: "lincoln-3",
        seriesId: "lincoln",
        episodeNumber: 3,
        title: "大統領選挙と南部の離脱",
        description:
          "1860年の大統領選挙での勝利と、それに反発した南部諸州の合衆国離脱を解説する。",
      },
      {
        id: "lincoln-4",
        seriesId: "lincoln",
        episodeNumber: 4,
        title: "南北戦争の激闘",
        description:
          "ゲティスバーグの戦いなど南北戦争の主要な戦闘と、リンカーンの戦争指導を語る。",
      },
      {
        id: "lincoln-5",
        seriesId: "lincoln",
        episodeNumber: 5,
        title: "奴隷解放宣言とゲティスバーグ演説",
        description:
          "奴隷解放宣言の発布と「人民の、人民による、人民のための政治」で知られる演説の意義を考察する。",
      },
    ],
    thumbnailColor: "#264653",
    tags: ["南北戦争", "奴隷解放", "大統領", "アメリカ", "民主主義"],
  },

  // 8. Mughal Empire
  {
    id: "mughal-empire",
    title: "ムガル帝国",
    titleEn: "Mughal Empire",
    description:
      "インド亜大陸に君臨したムガル帝国の栄枯盛衰。バーブルの建国からタージ・マハルの建設、そしてイギリスによる植民地化までの壮大な歴史を辿る。",
    category: "empire",
    region: "india",
    coordinates: [27.18, 78.02],
    startYear: 1526,
    endYear: 1857,
    timePeriod: "earlyModern",
    episodeCount: 10,
    episodes: [
      {
        id: "mughal-1",
        seriesId: "mughal-empire",
        episodeNumber: 1,
        title: "バーブルとムガル帝国の建国",
        description:
          "ティムールとチンギス・ハンの血を引くバーブルが、北インドを征服しムガル帝国を建国した経緯を描く。",
      },
      {
        id: "mughal-2",
        seriesId: "mughal-empire",
        episodeNumber: 2,
        title: "アクバル大帝の統治",
        description:
          "宗教融和政策と効率的な行政制度でムガル帝国の最盛期を築いたアクバル大帝の治世を解説する。",
      },
      {
        id: "mughal-3",
        seriesId: "mughal-empire",
        episodeNumber: 3,
        title: "シャー・ジャハーンとタージ・マハル",
        description:
          "愛妃ムムターズ・マハルのために建造されたタージ・マハルと、シャー・ジャハーンの治世を語る。",
      },
      {
        id: "mughal-4",
        seriesId: "mughal-empire",
        episodeNumber: 4,
        title: "アウラングゼーブと帝国の拡大・衰退",
        description:
          "帝国を最大版図に広げたアウラングゼーブの厳格な統治が、かえって帝国の衰退を招いた皮肉を追う。",
      },
      {
        id: "mughal-5",
        seriesId: "mughal-empire",
        episodeNumber: 5,
        title: "ムガル帝国の崩壊とイギリスの進出",
        description:
          "帝国の弱体化に乗じてイギリス東インド会社が勢力を拡大し、インド大反乱で帝国が滅亡する過程を描く。",
      },
    ],
    thumbnailColor: "#E9C46A",
    tags: ["インド", "イスラム王朝", "タージ・マハル", "植民地", "多文化"],
  },

  // 9. Zhuge Liang
  {
    id: "zhuge-liang",
    title: "諸葛孔明",
    titleEn: "Zhuge Liang",
    description:
      "三国志の天才軍師・諸葛孔明の実像に迫る。劉備三顧の礼から天下三分の計、北伐の悲願まで、知略と忠義に生きた生涯を史実に基づいて解説する。",
    category: "biography",
    region: "china",
    coordinates: [30.57, 104.07],
    startYear: 181,
    endYear: 234,
    timePeriod: "ancient",
    episodeCount: 7,
    episodes: [
      {
        id: "zhuge-liang-1",
        seriesId: "zhuge-liang",
        episodeNumber: 1,
        title: "後漢末期の混乱と三国時代の幕開け",
        description:
          "黄巾の乱から群雄割拠に至る後漢末期の動乱を概観し、三国時代の背景を整理する。",
      },
      {
        id: "zhuge-liang-2",
        seriesId: "zhuge-liang",
        episodeNumber: 2,
        title: "臥龍と三顧の礼",
        description:
          "隆中で晴耕雨読の日々を送る諸葛亮のもとを劉備が三度訪れ、天下三分の計を授けられる名場面を語る。",
      },
      {
        id: "zhuge-liang-3",
        seriesId: "zhuge-liang",
        episodeNumber: 3,
        title: "赤壁の戦いと孫権との同盟",
        description:
          "曹操の大軍に対抗するため孫権と同盟を結び、赤壁の戦いで大勝利を収めた戦略を解説する。",
      },
      {
        id: "zhuge-liang-4",
        seriesId: "zhuge-liang",
        episodeNumber: 4,
        title: "蜀漢の建国と劉備の死",
        description:
          "益州を平定し蜀漢を建国するも、関羽・張飛を失い夷陵の戦いで大敗した劉備の最期を描く。",
      },
      {
        id: "zhuge-liang-5",
        seriesId: "zhuge-liang",
        episodeNumber: 5,
        title: "出師の表と北伐の悲願",
        description:
          "劉備の遺志を継ぎ出師の表を奉じて北伐を繰り返すも、五丈原で病没した孔明の最期を追う。",
      },
    ],
    thumbnailColor: "#D62828",
    tags: ["三国志", "軍師", "蜀漢", "劉備", "戦略"],
  },

  // 10. Money History
  {
    id: "money-history",
    title: "お金の歴史",
    titleEn: "History of Money",
    description:
      "物々交換から暗号通貨まで、お金の歴史を通じて人類の経済活動の変遷を辿る。貨幣・紙幣・金融システムがいかに社会を変えてきたかを考察する。",
    category: "economics",
    region: "global",
    coordinates: [51.51, -0.13],
    startYear: -3000,
    endYear: 2000,
    timePeriod: "ancient",
    episodeCount: 7,
    episodes: [
      {
        id: "money-history-1",
        seriesId: "money-history",
        episodeNumber: 1,
        title: "物々交換とお金の誕生",
        description:
          "人類が物々交換から貨幣を発明するに至った背景と、最初期の貨幣の形態を解説する。",
      },
      {
        id: "money-history-2",
        seriesId: "money-history",
        episodeNumber: 2,
        title: "金・銀・銅 ― 金属貨幣の時代",
        description:
          "リディア王国の硬貨発明からローマ帝国の通貨制度まで、金属貨幣が果たした役割を語る。",
      },
      {
        id: "money-history-3",
        seriesId: "money-history",
        episodeNumber: 3,
        title: "中国の紙幣と信用の発明",
        description:
          "宋代に世界で初めて紙幣が登場した経緯と、信用経済の萌芽を追う。",
      },
      {
        id: "money-history-4",
        seriesId: "money-history",
        episodeNumber: 4,
        title: "銀行の誕生と近代金融システム",
        description:
          "イタリアの両替商から始まった銀行制度がヨーロッパ経済を変革していく過程を解説する。",
      },
      {
        id: "money-history-5",
        seriesId: "money-history",
        episodeNumber: 5,
        title: "金本位制の崩壊と現代の通貨",
        description:
          "ブレトンウッズ体制の成立と崩壊、そして変動相場制へ移行した現代の通貨制度を概観する。",
      },
    ],
    thumbnailColor: "#10B981",
    tags: ["貨幣", "経済史", "金融", "銀行", "資本"],
  },

  // 11. Saicho & Kukai
  {
    id: "saicho-and-kukai",
    title: "最澄と空海",
    titleEn: "Saicho and Kukai",
    description:
      "日本仏教の二大巨頭、天台宗の最澄と真言宗の空海。同時代に生きた二人の僧侶の友情と対立、そして日本の宗教史に与えた計り知れない影響を描く。",
    category: "religion",
    region: "japan",
    coordinates: [35.01, 135.77],
    startYear: 767,
    endYear: 835,
    timePeriod: "medieval",
    episodeCount: 10,
    episodes: [
      {
        id: "saicho-kukai-1",
        seriesId: "saicho-and-kukai",
        episodeNumber: 1,
        title: "奈良仏教の行き詰まりと平安遷都",
        description:
          "奈良時代の仏教が政治と癒着した状況と、桓武天皇による平安遷都の背景を解説する。",
      },
      {
        id: "saicho-kukai-2",
        seriesId: "saicho-and-kukai",
        episodeNumber: 2,
        title: "最澄の出家と比叡山での修行",
        description:
          "近江国に生まれた最澄が出家し、比叡山で厳しい修行に打ち込んだ青年期を描く。",
      },
      {
        id: "saicho-kukai-3",
        seriesId: "saicho-and-kukai",
        episodeNumber: 3,
        title: "空海の生い立ちと求聞持法",
        description:
          "讃岐国に生まれた空海が大学を中退し、山野で修行を重ねて求聞持法を成就した経緯を語る。",
      },
      {
        id: "saicho-kukai-4",
        seriesId: "saicho-and-kukai",
        episodeNumber: 4,
        title: "遣唐使と二人の入唐",
        description:
          "804年に同じ遣唐使船で唐に渡った最澄と空海が、それぞれ異なる仏教を学んだ留学体験を追う。",
      },
      {
        id: "saicho-kukai-5",
        seriesId: "saicho-and-kukai",
        episodeNumber: 5,
        title: "天台宗と真言宗の確立",
        description:
          "帰国後に最澄が天台宗を、空海が真言宗をそれぞれ開宗し、日本仏教の新時代を切り開いた意義を考察する。",
      },
    ],
    thumbnailColor: "#7C3AED",
    tags: ["仏教", "天台宗", "真言宗", "遣唐使", "平安時代"],
  },

  // 12. WWI
  {
    id: "world-war-one",
    title: "第一次世界大戦",
    titleEn: "World War I",
    description:
      "人類初の世界規模の総力戦となった第一次世界大戦。サラエボ事件から休戦まで、帝国主義の矛盾が爆発した4年間の戦争を多角的に解説する。",
    category: "war",
    region: "europe",
    coordinates: [43.86, 18.43],
    startYear: 1914,
    endYear: 1918,
    timePeriod: "modern",
    episodeCount: 14,
    episodes: [
      {
        id: "ww1-1",
        seriesId: "world-war-one",
        episodeNumber: 1,
        title: "帝国主義とヨーロッパの火薬庫",
        description:
          "19世紀末から蓄積されたヨーロッパ列強間の対立と、バルカン半島の複雑な民族問題を概観する。",
      },
      {
        id: "ww1-2",
        seriesId: "world-war-one",
        episodeNumber: 2,
        title: "サラエボ事件と連鎖する宣戦布告",
        description:
          "オーストリア皇太子の暗殺からわずか一ヶ月でヨーロッパ全体が戦争に突入した経緯を追う。",
      },
      {
        id: "ww1-3",
        seriesId: "world-war-one",
        episodeNumber: 3,
        title: "塹壕戦の地獄 ― 西部戦線",
        description:
          "マルヌの戦い以降膠着した西部戦線で、兵士たちが経験した壮絶な塹壕戦の実態を描く。",
      },
      {
        id: "ww1-4",
        seriesId: "world-war-one",
        episodeNumber: 4,
        title: "ヴェルダンとソンムの大消耗戦",
        description:
          "数十万の犠牲者を出したヴェルダンの戦いとソンムの戦いの悲惨さを語る。",
      },
      {
        id: "ww1-5",
        seriesId: "world-war-one",
        episodeNumber: 5,
        title: "アメリカ参戦と戦争の終結",
        description:
          "アメリカの参戦が戦局を決定づけ、ドイツの降伏とヴェルサイユ条約に至るまでの過程を解説する。",
      },
    ],
    thumbnailColor: "#DC2626",
    tags: ["世界大戦", "塹壕戦", "帝国主義", "ヨーロッパ", "総力戦"],
  },

  // 13. Napoleon
  {
    id: "napoleon",
    title: "ナポレオン",
    titleEn: "Napoleon",
    description:
      "コルシカ島出身の砲兵士官がフランス皇帝に上り詰め、ヨーロッパ全土を征服した英雄ナポレオン・ボナパルトの劇的な生涯を追う。",
    category: "biography",
    region: "europe",
    coordinates: [48.86, 2.35],
    startYear: 1769,
    endYear: 1821,
    timePeriod: "earlyModern",
    episodeCount: 8,
    episodes: [
      {
        id: "napoleon-1",
        seriesId: "napoleon",
        episodeNumber: 1,
        title: "コルシカ島の少年ナポレオン",
        description:
          "コルシカ島で生まれフランス本土の士官学校で学んだナポレオンの少年時代を紹介する。",
      },
      {
        id: "napoleon-2",
        seriesId: "napoleon",
        episodeNumber: 2,
        title: "フランス革命と若き将軍の台頭",
        description:
          "フランス革命の混乱の中でトゥーロン攻囲戦の功績により一躍名を馳せた経緯を描く。",
      },
      {
        id: "napoleon-3",
        seriesId: "napoleon",
        episodeNumber: 3,
        title: "イタリア遠征とエジプト遠征",
        description:
          "イタリアとエジプトでの軍事的成功により、フランス国民の英雄となったナポレオンの戦いを追う。",
      },
      {
        id: "napoleon-4",
        seriesId: "napoleon",
        episodeNumber: 4,
        title: "皇帝即位とナポレオン法典",
        description:
          "クーデターで権力を掌握し皇帝に即位、ナポレオン法典を制定して近代法の基礎を築いた業績を解説する。",
      },
      {
        id: "napoleon-5",
        seriesId: "napoleon",
        episodeNumber: 5,
        title: "ロシア遠征の悲劇とワーテルローの敗北",
        description:
          "モスクワ遠征の壊滅的敗北からエルバ島への流刑、百日天下とワーテルローの最終決戦を語る。",
      },
    ],
    thumbnailColor: "#1E40AF",
    tags: ["フランス革命", "皇帝", "征服", "ナポレオン法典", "ヨーロッパ"],
  },

  // 14. Capitalism
  {
    id: "capitalism",
    title: "資本主義",
    titleEn: "Capitalism",
    description:
      "資本主義はいかにして生まれ、世界を支配するシステムとなったのか。重商主義から産業革命、グローバル経済まで、経済思想の変遷を紐解く。",
    category: "economics",
    region: "global",
    coordinates: [40.71, -74.01],
    startYear: 1600,
    endYear: 2000,
    timePeriod: "earlyModern",
    episodeCount: 4,
    episodes: [
      {
        id: "capitalism-1",
        seriesId: "capitalism",
        episodeNumber: 1,
        title: "資本主義の萌芽 ― 重商主義と大航海時代",
        description:
          "大航海時代の貿易拡大と重商主義政策が、資本主義の土壌を作った過程を解説する。",
      },
      {
        id: "capitalism-2",
        seriesId: "capitalism",
        episodeNumber: 2,
        title: "アダム・スミスと自由市場経済",
        description:
          "『国富論』で自由放任主義を唱えたアダム・スミスの思想と、産業革命期の経済変革を追う。",
      },
      {
        id: "capitalism-3",
        seriesId: "capitalism",
        episodeNumber: 3,
        title: "マルクスの資本論と社会主義の挑戦",
        description:
          "カール・マルクスによる資本主義批判と、社会主義運動が世界に与えた影響を考察する。",
      },
      {
        id: "capitalism-4",
        seriesId: "capitalism",
        episodeNumber: 4,
        title: "現代資本主義の光と影",
        description:
          "グローバリゼーションと金融資本主義が生み出した繁栄と格差の問題について議論する。",
      },
    ],
    thumbnailColor: "#059669",
    tags: ["経済思想", "産業革命", "自由市場", "グローバリゼーション", "格差"],
  },

  // 15. American Frontier
  {
    id: "american-frontier",
    title: "アメリカ開拓史",
    titleEn: "American Frontier",
    description:
      "ジェームズタウン植民地からフロンティアの消滅まで、アメリカ大陸の開拓の歴史を辿る。先住民との関係、西部開拓、マニフェスト・デスティニーの光と影を描く。",
    category: "social",
    region: "americas",
    coordinates: [38.63, -90.2],
    startYear: 1607,
    endYear: 1890,
    timePeriod: "earlyModern",
    episodeCount: 9,
    episodes: [
      {
        id: "american-frontier-1",
        seriesId: "american-frontier",
        episodeNumber: 1,
        title: "ジェームズタウンとピルグリム・ファーザーズ",
        description:
          "イギリスから新大陸に渡った最初の入植者たちの苦闘と、植民地建設の始まりを描く。",
      },
      {
        id: "american-frontier-2",
        seriesId: "american-frontier",
        episodeNumber: 2,
        title: "13植民地と先住民との関係",
        description:
          "東海岸に形成された13植民地の発展と、ネイティブ・アメリカンとの複雑な関係を追う。",
      },
      {
        id: "american-frontier-3",
        seriesId: "american-frontier",
        episodeNumber: 3,
        title: "独立革命とアメリカ合衆国の誕生",
        description:
          "イギリスからの独立戦争を経てアメリカ合衆国が建国された歴史的経緯を解説する。",
      },
      {
        id: "american-frontier-4",
        seriesId: "american-frontier",
        episodeNumber: 4,
        title: "ルイジアナ買収と西部への大拡張",
        description:
          "ルイジアナ買収により国土を倍増させ、ルイス・クラーク探検隊が西部を調査した冒険を語る。",
      },
      {
        id: "american-frontier-5",
        seriesId: "american-frontier",
        episodeNumber: 5,
        title: "マニフェスト・デスティニーと涙の道",
        description:
          "西部開拓を正当化した「明白なる天命」の思想と、先住民強制移住の悲劇を検証する。",
      },
    ],
    thumbnailColor: "#92400E",
    tags: ["西部開拓", "植民地", "先住民", "フロンティア", "アメリカ"],
  },

  // 16. Helen Keller
  {
    id: "helen-keller",
    title: "ヘレン・ケラーとアン・サリヴァン",
    titleEn: "Helen Keller and Anne Sullivan",
    description:
      "視覚と聴覚を失いながらも世界的な社会活動家となったヘレン・ケラーと、彼女を導いた家庭教師アン・サリヴァンの絆と奮闘の物語。",
    category: "biography",
    region: "americas",
    coordinates: [34.73, -87.7],
    startYear: 1880,
    endYear: 1968,
    timePeriod: "modern",
    episodeCount: 8,
    episodes: [
      {
        id: "helen-keller-1",
        seriesId: "helen-keller",
        episodeNumber: 1,
        title: "ヘレン・ケラーの幼少期と障害",
        description:
          "アラバマ州タスカンビアで生まれ、1歳半で視力と聴力を失ったヘレンの幼少期を描く。",
      },
      {
        id: "helen-keller-2",
        seriesId: "helen-keller",
        episodeNumber: 2,
        title: "アン・サリヴァンとの出会い",
        description:
          "パーキンス盲学校からやってきた家庭教師アン・サリヴァンとの運命的な出会いを語る。",
      },
      {
        id: "helen-keller-3",
        seriesId: "helen-keller",
        episodeNumber: 3,
        title: "「ウォーター」の奇跡",
        description:
          "井戸端で水に触れた瞬間に言葉の意味を理解した有名なエピソードと、爆発的な学習の始まりを追う。",
      },
      {
        id: "helen-keller-4",
        seriesId: "helen-keller",
        episodeNumber: 4,
        title: "ラドクリフ大学への進学と著述活動",
        description:
          "ハーバード大学の女子部であるラドクリフ大学に進学し、自伝を出版するまでの挑戦を描く。",
      },
      {
        id: "helen-keller-5",
        seriesId: "helen-keller",
        episodeNumber: 5,
        title: "社会活動家としてのヘレン・ケラー",
        description:
          "障害者の権利、女性参政権、平和運動など幅広い社会活動に生涯を捧げたヘレンの後半生を紹介する。",
      },
    ],
    thumbnailColor: "#DB2777",
    tags: ["障害者", "教育", "社会活動", "女性", "アメリカ"],
  },

  // 17. Takasugi Shinsaku
  {
    id: "takasugi-shinsaku",
    title: "高杉晋作",
    titleEn: "Takasugi Shinsaku",
    description:
      "幕末の風雲児・高杉晋作の短くも激烈な生涯。奇兵隊の創設から下関戦争、功山寺決起まで、長州藩を倒幕の中心勢力に変えた革命家の実像に迫る。",
    category: "biography",
    region: "japan",
    coordinates: [33.95, 130.94],
    startYear: 1839,
    endYear: 1867,
    timePeriod: "earlyModern",
    episodeCount: 7,
    episodes: [
      {
        id: "takasugi-1",
        seriesId: "takasugi-shinsaku",
        episodeNumber: 1,
        title: "高杉晋作の生い立ちと松下村塾",
        description:
          "長州藩の上級武士の家に生まれ、吉田松陰の松下村塾で学んだ青年時代を描く。",
      },
      {
        id: "takasugi-2",
        seriesId: "takasugi-shinsaku",
        episodeNumber: 2,
        title: "上海渡航と攘夷の限界",
        description:
          "上海を訪れ欧米列強による中国支配の現実を目の当たりにし、攘夷の限界を悟った体験を追う。",
      },
      {
        id: "takasugi-3",
        seriesId: "takasugi-shinsaku",
        episodeNumber: 3,
        title: "奇兵隊の創設",
        description:
          "身分に関係なく志のある者を集めた画期的な軍事組織「奇兵隊」を創設した経緯とその意義を解説する。",
      },
      {
        id: "takasugi-4",
        seriesId: "takasugi-shinsaku",
        episodeNumber: 4,
        title: "下関戦争と四国艦隊砲撃事件",
        description:
          "外国艦隊との戦闘で惨敗した長州藩が、攘夷から開国へと方針転換する転機を語る。",
      },
      {
        id: "takasugi-5",
        seriesId: "takasugi-shinsaku",
        episodeNumber: 5,
        title: "功山寺決起と長州藩の方向転換",
        description:
          "わずかな手勢で功山寺に決起し、藩の実権を握って倒幕路線に導いた高杉の決断と早すぎる死を描く。",
      },
    ],
    thumbnailColor: "#BE123C",
    tags: ["幕末", "長州藩", "奇兵隊", "倒幕", "維新"],
  },

  // 18. Xuanzang
  {
    id: "xuanzang",
    title: "三蔵法師・玄奘",
    titleEn: "Xuanzang",
    description:
      "『西遊記』のモデルとなった唐代の僧侶・玄奘三蔵の実像。仏教の真髄を求めてシルクロードを越えインドに渡り、膨大な経典を持ち帰った17年間の大旅行を描く。",
    category: "biography",
    region: "china",
    subRegions: ["india"],
    coordinates: [34.26, 108.94],
    startYear: 602,
    endYear: 664,
    timePeriod: "medieval",
    episodeCount: 9,
    episodes: [
      {
        id: "xuanzang-1",
        seriesId: "xuanzang",
        episodeNumber: 1,
        title: "少年玄奘と出家の決意",
        description:
          "隋末の戦乱の中で幼くして出家し、各地の名僧のもとで仏教を学んだ玄奘の少年時代を紹介する。",
      },
      {
        id: "xuanzang-2",
        seriesId: "xuanzang",
        episodeNumber: 2,
        title: "国禁を犯しての西域への出発",
        description:
          "唐の太宗の出国禁止令を破り、単身でシルクロードに向かった玄奘の決断と覚悟を描く。",
      },
      {
        id: "xuanzang-3",
        seriesId: "xuanzang",
        episodeNumber: 3,
        title: "シルクロードの過酷な旅",
        description:
          "タクラマカン砂漠や天山山脈を越える命がけの旅路と、途中で出会った西域の国々を追う。",
      },
      {
        id: "xuanzang-4",
        seriesId: "xuanzang",
        episodeNumber: 4,
        title: "インド到着とナーランダ僧院での修学",
        description:
          "念願のインドに到達し、当時最高の仏教学府ナーランダ僧院で唯識学を修めた日々を解説する。",
      },
      {
        id: "xuanzang-5",
        seriesId: "xuanzang",
        episodeNumber: 5,
        title: "帰国と経典翻訳の偉業",
        description:
          "657部の経典を持ち帰り、太宗に迎えられた後、残りの生涯を経典翻訳に捧げた玄奘の偉業を語る。",
      },
    ],
    thumbnailColor: "#0891B2",
    tags: ["シルクロード", "仏教", "唐", "インド", "経典"],
  },
];
