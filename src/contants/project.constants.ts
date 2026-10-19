import { Project } from '../types';
import dgdImage from '../assets/dgd.png';
import girigiriImage from '../assets/girigiri.svg';
import soomcareImage from '../assets/soomcare.png';
import { type Lang } from './ui.constants';

const girigiri = {
  githubLink: 'https://github.com/dsainbusan/girigiri',
  notionLink: '',
  // deployLink: 'https://girigiri.vercel.app/', // 現在アクセス不可のため非公開
  image: girigiriImage,
  videoLink: 'https://www.youtube.com/watch?v=A0KAYMMPuLs&feature=youtu.be',
};

const dgDelivery = {
  githubLink: 'https://github.com/rainBowRiceCakes',
  notionLink:
    'https://iodized-wilderness-bba.notion.site/DGD-Daegu-Delivery-Web-PWA-2b700683cadc80a0ac15fce914a8b1d0',
  // deployLink: 'https://app2.green-meerkat.kro.kr/', // 現在アクセス不可のため非公開
  image: dgdImage,
  videoLink: 'https://www.youtube.com/watch?v=R-VGD7_iKck&feature=youtu.be',
};

const soomCare = {
  githubLink: 'https://github.com/itsurfavsong/architects',
  notionLink:
    'https://iodized-wilderness-bba.notion.site/Web-PWA-2b600683cadc813eb9c7db56c2760aec?pvs=74',
  // deployLink: 'https://architects-mocha.vercel.app/', // 現在アクセス不可のため非公開
  image: soomcareImage,
};

export const projectsData: Record<Lang, Project[]> = {
  ja: [
    {
      title: 'ギリギリ（GIRIGIRI）',
      period: '2026年8月 ～ 2026年10月（完了予定）',
      team: '5名',
      role: 'Team Lead・Full-stack Developer',
      description:
        '賞味期限・消費期限が迫った商品を抱える店舗と、割引価格で購入したい利用者をつなぐWebサービス。',
      features: [
        '地図による近隣の値引き商品検索',
        '予約・事前決済',
        'QRコード提示による店頭受け取り',
        '目標:店舗の廃棄ロス削減と、食品ロスという社会課題の解決',
      ],
      responsibilities: [
        '5名チームのリーダーとして、WBS・Jiraによる進捗管理・タスク管理・担当割り振り、提出物・発表の取りまとめ',
        '週2回の定例会議の運営',
        'ERD・DB設計、テーブルスキーマの実装とエンティティのマッピング、共通CRUDの実装（チームで共同担当）',
        'グローバル例外ハンドラと共通レスポンスDTOによる、チーム全体の例外レスポンス形式の統一',
        '画面設計（ワイヤーフレーム）と、共通レイアウト・共通コンポーネント（モーダル・トースト・ページング・ローディング）の設計',
        'スーパー管理者機能を単独で担当（運営統計ダッシュボード、会員管理、出店申請の承認フロー、通報・問い合わせ対応、共通コード／カテゴリのマスタ管理）',
        'デモ用シードデータ投入スクリプトとREADMEの整備',
      ],
      technologies: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'MySQL'],
      tools: ['GitHub', 'Notion', 'Slack', 'Jira', 'Google Docs'],
      ...girigiri,
      troubleshooting: [
        {
          title: '【Server・Auth】停止した会員がログインできてしまう',
          problem: '停止した会員がログインできてしまう',
          solution:
            '原因：停止でstatusは変わるが、ログイン時にその値を確認していなかった\n対応：メールはisEnabled()、ソーシャルは共通メソッドで停止状態をチェック',
        },
        {
          title: '【Server・Design】受け取り待ちの予約があっても退会できる',
          problem: '受け取り待ちの予約があっても退会できる',
          solution:
            '原因：「未完了予約」の条件が3か所に別々にあり、すべてreadyが抜けていた\n対応：条件を1つの定数にまとめ、3か所で同じ基準を使うように',
        },
        {
          title:
            '【DB・Transaction】返金エラーで予約キャンセル全体がロールバック',
          problem: '返金エラーで予約キャンセル全体がロールバックされる',
          solution:
            '原因：PGのエラーメッセージが255文字を超え、保存時にDBエラー\n対応：保存前に255文字に切る共通メソッドを追加',
        },
      ],
      image: girigiriImage,
      imageFit: 'contain',
      imageBg: '#f6f0e3',
    },
    {
      title: 'DG Delivery',
      period: '2025年12月 ～ 2026年1月',
      team: '4名',
      role: 'Full-stack Developer',
      description:
        '大邱を訪れる旅行者向けのショッピング配送サービス（PWA）。購入商品のホテルへの配送による、手ぶら観光の実現。',
      features: [
        '注文リクエスト',
        'ライダーの受注・配達',
        'パートナー精算・決済',
      ],
      responsibilities: [
        '注文リクエストからライダー受注までの注文システムの設計・実装（WebSocket導入によるリファクタリング）',
        'Rider／Partnerの役割別アクセス権限の分離と、役割に応じた注文生成・処理フローの設計',
        '注文段階ごとの権限検証と、必須証憑画像アップロードのサーバーサイド検証の実装',
        'パートナー精算・決済の自動化（billing key方式の決済とSchedulerによるバッチ処理）',
        '終了後のリファクタリング（連打防止、Middlewareによる副作用の分離、配達員1人あたりの受注上限（3件）の実装）と、技術ブログでの公開',
      ],
      technologies: [
        'React',
        'Redux',
        'JavaScript (ES6+)',
        'HTML',
        'CSS',
        'Node.js',
        'Express.js',
        'WebSocket',
        'PWA',
      ],
      ...dgDelivery,
      troubleshooting: [
        {
          title: '【Client】画像アップロード後に次の画面へ遷移しない',
          problem:
            '画像のアップロードに成功しても、ホテルへ向かうRiderNavFlowPageに切り替わらず、前の画面が表示されたままでした。',
          solution:
            '原因：RiderNavFlowPageはordersSliceを購読していましたが、状態を変更していたのはorderPicsSliceだけだったため、Reactから見ると購読中のデータに変化がありませんでした。\n対応：orderPicsSliceはアップロードの進行状態のみを管理し、注文ステータス（order.status）の変更はordersSliceで直接処理するように修正しました。order.statusがmatからpickに変わった時点で、遅延なく次の画面が表示されるようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-nav-2dc00683cadc807d97a2e445f6119b8f',
          },
        },
        {
          title: '【Client】非同期の認証初期化タイミングによる画面崩れ',
          problem:
            'メイン画面でログインしたあと、アドレスバーに/partnersを直接入力して遷移すると、パートナー情報を取得できませんでした。一度メイン画面に戻ってから/partnersに移動すると、正常に取得できました。',
          solution:
            '原因：ユーザー情報の取得が完了する前に、ルートが先にレンダリングされていました。\n対応：認証の初期化（reissueThunk()）が完了するまで、ProtectedRouterが何もレンダリングせずに待機するように修正しました。直接のURLアクセス、内部リンク、リロード、戻る操作のいずれでも、一貫して動作するようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-React-auth-2dd00683cadc8059b2c1c2ca5c2c2cc9',
          },
        },
        {
          title:
            '【Client】リロード時にログイン状態が反映されるまで画面がちらつく',
          problem:
            'リロードのたびに、ログイン状態の確認に約1秒かかり、その間は未ログイン時の「ログイン」ボタンが表示されていました。',
          solution:
            '原因：Cookieに保存したリフレッシュトークンの確認に約1秒かかっていました。\n対応：トークンはセキュリティのためCookieに残したまま、「ログイン中」を示すフラグ（isLoginSignal）だけをlocalStorageに保存しました。リロード時（mount）にこのフラグがあれば、ログイン済みとして先に画面を描画することで、ちらつきを解消しました。トークンの期限切れやログアウトの際にはフラグを確実に削除する処理が必要なことも、あわせて確認しました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-Mount-2e400683cadc80b59663d573dea0864e',
          },
        },
        {
          title:
            '【Client】APIレスポンスの入れ子構造により注文一覧を取得できない',
          problem:
            '注文一覧APIの呼び出し後、Stateに値を入れても一覧を表示できませんでした。レスポンスは返ってきているものの、実際の注文一覧はresponse.data.dataの中に入っていました。',
          solution:
            '原因：レスポンスがres.data.dataの二重構造になっていたのに、1段階しか取り出していませんでした。\n対応：setOrders(res.data)をsetOrders(res.data.data)に修正し、Stateに配列が入ることを確認しました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-2db00683cadc80a2851cc3fc79e93c16',
          },
        },
        {
          title: '【Client】配列パラメータが認識されず、完了済み注文が混在する',
          problem:
            '1ページ目には進行中の注文だけが表示されるのに、2ページ目に進むと完了済みの注文が混在していました。',
          solution:
            '原因：statusの配列をそのままAxiosで送信していたため、サーバーが配列として認識せず、条件を無視して全ステータスを取得していました。status=mat,pickのようにカンマ区切りにしても解決しませんでした。コンソールとネットワークログで確認して特定しました。\n対応：URLSearchParamsで繰り返しappendする方式に変更し、status=mat&status=pickの形式で送信することで、サーバーが正しく処理できるようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-completed-req-status-mat-req-2db00683cadc80119165cdba041226db',
          },
        },
        {
          title: '【Client】プロフィール保存後に出勤トグルがオフになる',
          problem:
            'ProfileEditでプロフィールを修正して保存すると、RiderMyPageの出勤トグル（isWorking）がオフになっていました。',
          solution:
            '原因：ProfileEditへの遷移時に自動実行されるgetProfileThunkのfulfilledリデューサーが、サーバーのレスポンスに含まれないisWorkingまでReduxの状態ごと上書きしていました。トグルが「オフに見えた」のではなく、状態そのものが消えていました。\n対応：profileSliceでrider_userオブジェクトをマージ（既存のisWorkingを保持し、サーバーから届いた新しい情報だけを反映）するように修正しました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-isWorking-off-2e300683cadc804fa10bc84ee6a0beaa',
          },
        },
        {
          title: '【Client】タブを連続でタップすると注文が消える',
          problem:
            'Rider画面でタブを素早く2回タップすると、注文一覧がすべて消えて「注文なし」の状態になりました。',
          solution:
            '原因：タブをタップするたびにgetOrdersThunkが再実行され、pending段階でordersが空配列に初期化されていました。\n対応：pending段階で既存のordersを無条件に空にしないように修正し、同じタブの再タップ時にはdispatch自体を行わない防御ロジックを追加しました。画面が購読しているordersSliceを基準に状態を変更するよう整理し、連続タップでも注文一覧が安定して維持されるようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-tab-2db00683cadc80ba99a0d61e06c1b336',
          },
        },
        {
          title: '【Client】Reduxの分割代入でundefinedエラーが発生する',
          problem:
            "useSelectorでisLoggedInとuserを分割代入したところ、初回レンダリング時に「Cannot destructure property 'isLoggedIn' of undefined」というエラーが発生しました。",
          solution:
            '原因：auth sliceのinitialStateが定義されておらず、初期レンダリング時にstate.authがundefinedになっていました。ログインのthunkや構文を疑って切り分けたうえで、AIにも原因の候補を挙げてもらい、initialStateの未定義に気づきました。\n対応：isLoggedIn: falseとuser: nullを持つinitialStateを定義しました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-Cannot-destructure-properties-from-undefined-Redux-2bd00683cadc80fd94f5c03e98b69a10',
          },
        },
        {
          title:
            '【Server】ルーターの定義順序により固定パスが動的パスに吸われる',
          problem:
            "ログに「Rider.id = 'settlement'」というクエリが出力され、数値IDではなく文字列が入っていました。DBでは該当データが見つからず、フロントは空の画面になりました。",
          solution:
            '原因：Expressは上から順にルートを照合するため、/:idの定義が/settlementより先にあると、「settlement」がidとして解釈されていました。\n対応：固定パス（/settlement）を、パラメータを含むパス（/:id）より上に定義し直しました。getSettlementByRiderが正しく実行され、フロントも正常に表示されるようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-2e200683cadc805c827cd96ac0529382',
          },
        },
        {
          title: '【Server】注文作成時に外部キー制約違反が発生する',
          problem:
            'ordersテーブルに新規注文を挿入する際にForeignKeyConstraintErrorが発生し、partner_idの値がpartnersテーブルに存在しないとしてDBに拒否され、注文を作成できませんでした。',
          solution:
            '原因：リクエストのpayloadに問題はなく、ログを確認したところ、partner_idにreq.user.id（User ID）をそのまま入れていました。User IDとPartner IDを混同していたことが原因でした。\n対応：サービス層でuserIdからpartner.idを取得し、注文作成時には実際のPartnerのPKを使うように修正しました。パートナー情報が見つからない場合はNOT_FOUNDエラーを返します。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-ForeignKeyConstraintError-2de00683cadc80909565ea32d260eef4',
          },
        },
        {
          title: '【Server】ログアウト時にJWTエラーが発生する',
          problem:
            'ログアウトのリクエスト時に、サーバーのコンソールにJWT関連のエラーが出力され続け、フロントではログアウト処理が正常に完了しませんでした。',
          solution:
            '原因：authenticateミドルウェアで、ログアウトパスかどうかを確認する前にgetBearerTokenを呼び出しており、トークンがないとエラーになってログアウト処理まで到達していませんでした。\n対応：トークンの取得前にログアウトパスを判定し、ログアウトの場合はエラーを無視してそのまま処理を進めるようにしました。authorizeでもログアウトの場合は権限チェックを省略します。コントローラーまで正常に到達し、ログアウトが問題なく動作するようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-JWT-2df00683cadc803f8f05e9a5b889aea5',
          },
        },
        {
          title:
            '【Server】ログイン時にaccessTokenの分割代入でエラーが発生する',
          problem:
            "コントローラーでauthService.login(user)の戻り値からaccessTokenとrefreshTokenを取り出そうとしたところ、「Cannot destructure property 'accessToken' of '(intermediate value)' as it is undefined」というエラーが発生しました。",
          solution:
            '原因：JWT生成、req.body、DBの検索結果を順に確認してもすべて正常で、authService.login(user)自体をログ出力するとundefinedでした。サービス層の関数は最後まで実行されていたものの、return文がありませんでした。\n対応：サービス層の関数に、トークンを返すreturn文を追加しました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-TypeError-Cannot-destructure-property-accessToken-of-as-it-is-undefined-2f300683cadc802d9469f3ba19d75ba0',
          },
        },
        {
          title:
            '【DB】データ数と合わないページが生成され、2ページ目が空になる',
          problem:
            'データが5件（limit = 6）しかないのに2ページ目のボタンが表示され、押すと空でした。',
          solution:
            '原因：Sequelizeでinclude（JOIN）とfindAndCountAllを併用し、特に1:N関係のテーブルが混在すると、countが実際のレコード数より多く計算されます。\n対応：distinct: trueを追加し、結合結果ではなくメインモデル（Order）のPKを基準に重複なくカウントするようにしました。余計な2ページ目のボタンが消え、ページネーションと実際のデータ数が一致するようになりました。',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/DB-2-2db00683cadc808e82d8fca62f82aafb',
          },
        },
        {
          title: '【DB】進行中タブで注文が0件になる',
          problem:
            "フロントが進行中の注文を配列（status = ['mat', 'pick']）で送っていたところ、進行中タブだけ注文が0件になりました。DBには実際にデータがありました。",
          solution:
            "原因：バックエンドがstatusの型を考慮せず、そのままwhere.statusに代入しており、配列がWHERE status='mat,pick'のようなクエリになって、一致するデータがなくなっていました。\n対応：フロントではstatus=mat&status=pickの形式で直列化して送信し、バックエンドでは配列の場合にOp.inを使うようにしました（WHERE status IN ('mat', 'pick')）。",
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/DB-0-status-mat-req-2f300683cadc8025a6f2d2348a15ae3c',
          },
        },
      ],
    },
    {
      title: 'スムケア（SoomCare）',
      period: '2025年9月 ～ 2025年10月',
      team: '5名',
      role: 'Frontend Developer・Team Lead',
      description:
        '韓国の大気質情報（PM2.5・PM10など）のリアルタイム可視化Webサービス（PWA）。カード型のダッシュボードUIを採用。',
      responsibilities: [
        'React・Viteによる構造設計と、共通コンポーネント・CSS変数によるUIシステムの構築',
        'リアルタイムAPIデータ処理（フィルタリング・グルーピング・ページネーション）のルール定義と、共通utilsの設計',
        'モバイル・デスクトップ向けPWAのUI/UXガイドラインの策定',
        'Notionのガントチャートによる進捗管理と、週2回の定例会議・週1回のメンター会議の運営',
        '進捗が遅れているメンバーへの1on1メンタリングと、週次フィードバック',
      ],
      technologies: [
        'React',
        'Vite',
        'JavaScript (ES6+)',
        'HTML',
        'CSS',
        'PWA',
        'Vercel',
      ],
      ...soomCare,
      troubleshooting: [
        {
          title: '【チーム運営】初めて開発に取り組むメンバーとの協業',
          problem:
            'チームの大半が初めての開発プロジェクトで、最大の課題は日程管理と業務の分担でした。また、プロジェクトが進むにつれて、メンバーごとに思い描くサービスの姿が食い違う場面もありました。',
          solution:
            '対応：作業を細かい単位に分け、ガントチャートと機能仕様書を継続的に更新して、各作業の進み具合とボトルネックを管理しました。進みが遅いメンバーには、実装を一緒に進めたり方向性を示したりして支援し、全体の日程が遅れないように調整しました。認識のずれについては、会議でサービスの目標とユーザー価値を改めてすり合わせ、チームが同じ方向を向くようにしました。',
        },
      ],
    },
  ],
  ko: [
    {
      title: 'GIRIGIRI',
      period: '2026.08 - 2026.10 (완료 예정)',
      team: '5명',
      role: 'Team Lead · Full-stack Developer',
      description:
        '유통기한·소비기한이 임박한 상품을 가진 매장과, 할인가로 구매하려는 이용자를 연결하는 웹 서비스',
      features: [
        '지도로 근처 할인 상품 검색',
        '예약 및 사전 결제',
        'QR 코드 제시를 통한 매장 수령',
        '매장의 폐기 손실을 줄이고 식품 손실 문제 해결을 목표로 함',
      ],
      responsibilities: [
        '5인 팀 리더: WBS·Jira 기반 일정·작업 관리 및 업무 분배, 제출물 및 발표 취합',
        '주 2회 정기 회의 운영',
        'ERD·DB 설계, 테이블 스키마 및 엔티티 매핑 구현, 공통 CRUD 구현 (팀 공동 담당)',
        '글로벌 예외 핸들러와 공통 응답 DTO로 팀 전체의 예외 응답 형식 통일',
        '화면 설계(와이어프레임), 공통 레이아웃·공통 컴포넌트(모달·토스트·페이징·로딩) 설계',
        '슈퍼 관리자 기능 단독 담당: 운영 통계 대시보드, 회원 관리, 입점 신청 승인 플로우, 신고·문의 처리, 공통 코드·카테고리 마스터 관리',
        '데모용 시드 데이터 투입 스크립트 및 README 정비',
      ],
      technologies: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'MySQL'],
      tools: ['GitHub', 'Notion', 'Slack', 'Jira', 'Google Docs'],
      ...girigiri,
      troubleshooting: [
        {
          title: '[Server·Auth] 정지된 회원이 로그인 가능',
          problem: '정지된 회원이 로그인 가능함',
          solution:
            '원인: 정지 시 status는 바뀌지만, 로그인 시 그 값을 확인하지 않았음\n해결: 이메일은 isEnabled(), 소셜은 공통 메서드로 정지 상태를 체크',
        },
        {
          title: '[Server·Design] 수령 대기 중인 예약이 있어도 탈퇴 가능',
          problem: '수령 대기 중인 예약이 있어도 탈퇴 가능함',
          solution:
            '원인: "미완료 예약" 조건이 3곳에 따로 있었고, 모두 ready가 빠져 있었음\n해결: 조건을 하나의 상수로 통합해 3곳에서 같은 기준을 사용하도록 수정',
        },
        {
          title: '[DB·Transaction] 환불 오류로 예약 취소 전체가 롤백',
          problem: '환불 오류로 예약 취소 전체가 롤백됨',
          solution:
            '원인: PG 에러 메시지가 255자를 넘어 저장 시 DB 오류 발생\n해결: 저장 전에 255자로 자르는 공통 메서드 추가',
        },
      ],
      image: girigiriImage,
      imageFit: 'contain',
      imageBg: '#f6f0e3',
    },
    {
      title: 'DG Delivery',
      period: '2025.12 - 2026.01',
      team: '4명',
      role: 'Full-stack Developer',
      description:
        '대구를 찾는 여행자를 위한 쇼핑 배송 서비스(PWA). 구매한 상품을 호텔로 배송해 가볍게 여행할 수 있도록 지원',
      features: ['주문 요청', '라이더 주문 수락 및 배달', '파트너 정산·결제'],
      responsibilities: [
        '주문 요청부터 라이더 수락까지의 주문 시스템 설계·구현 (WebSocket 도입 리팩터링)',
        'Rider/Partner 역할별 접근 권한 분리, 역할에 따른 주문 생성·처리 플로우 설계',
        '주문 단계별 권한 검증, 필수 증빙 이미지 업로드의 서버 사이드 검증 구현',
        '파트너 정산·결제 자동화 (billing key 방식 결제 + Scheduler 배치 처리)',
        '종료 후 리팩터링: 중복 클릭 방지, Middleware로 부수 효과 분리, 배달원 1인당 수락 상한(3건) 구현 후 기술 블로그에 게시',
      ],
      technologies: [
        'React',
        'Redux',
        'JavaScript (ES6+)',
        'HTML',
        'CSS',
        'Node.js',
        'Express.js',
        'WebSocket',
        'PWA',
      ],
      ...dgDelivery,
      troubleshooting: [
        {
          title: '[Client] 이미지 업로드 후 다음 화면으로 전환되지 않음',
          problem:
            '이미지 업로드에 성공해도 호텔로 가는 RiderNavFlowPage로 전환되지 않고 이전 화면이 유지됨',
          solution:
            '원인: RiderNavFlowPage는 ordersSlice를 구독 중이었으나 orderPicsSlice만 변경하고 있어, React 입장에서는 구독 데이터에 변화가 없었음\n해결: orderPicsSlice는 업로드 진행 상태만 관리하고, 주문 상태(order.status) 변경은 ordersSlice에서 직접 처리하도록 수정. order.status가 mat → pick으로 바뀌는 즉시 지연 없이 다음 화면이 표시됨',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-nav-2dc00683cadc807d97a2e445f6119b8f',
          },
        },
        {
          title: '[Client] 비동기 인증 초기화 타이밍 문제',
          problem:
            '메인 화면에서 로그인한 뒤 주소창에 /partners를 직접 입력해 진입하면 파트너 정보를 가져오지 못함. 메인으로 갔다가 다시 /partners로 오면 정상 동작함',
          solution:
            '원인: 사용자 정보 fetch가 끝나기 전에 라우트가 먼저 렌더링됨\n해결: 인증 초기화(reissueThunk())가 끝날 때까지 ProtectedRouter가 아무것도 렌더링하지 않고 대기하도록 수정. 직접 URL 접근·내부 링크·새로고침·뒤로가기 모두 일관되게 동작함',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-React-auth-2dd00683cadc8059b2c1c2ca5c2c2cc9',
          },
        },
        {
          title: '[Client] 새로고침 시 로그인 상태 반영 전까지 화면 깜빡임',
          problem:
            '새로고침할 때마다 로그인 상태 확인에 약 1초가 걸려, 그동안 비로그인 기본값인 로그인 버튼이 표시됨',
          solution:
            '원인: 쿠키에 저장된 리프레시 토큰을 확인하는 데 약 1초가 소요됨\n해결: 토큰은 보안상 쿠키에 그대로 두고, "로그인 상태"를 나타내는 플래그(isLoginSignal)만 localStorage에 저장. 새로고침(mount) 시 플래그가 있으면 먼저 로그인 상태로 화면을 그려 깜빡임 해소. 토큰 만료·로그아웃 시 플래그를 확실히 삭제하는 로직의 필요성도 확인함',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-Mount-2e400683cadc80b59663d573dea0864e',
          },
        },
        {
          title: '[Client] API 응답의 중첩 구조로 주문 목록을 불러오지 못함',
          problem:
            '주문 목록 API 호출 후 State에 넣어도 목록이 표시되지 않음. 응답은 오지만 실제 주문 목록은 response.data.data 안에 들어 있었음',
          solution:
            '원인: 응답이 res.data.data의 이중 구조인데 한 단계만 꺼내고 있었음\n해결: setOrders(res.data)를 setOrders(res.data.data)로 수정, State에 배열이 들어가는 것을 확인함',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-2db00683cadc80a2851cc3fc79e93c16',
          },
        },
        {
          title: '[Client] 배열 파라미터가 인식되지 않아 완료 주문이 섞여 나옴',
          problem:
            '1페이지에는 진행 중 주문만 보이는데, 2페이지로 넘어가면 완료된 주문이 섞여 나옴',
          solution:
            '원인: status 배열을 그대로 Axios로 보내 서버가 배열로 인식하지 못하고 조건을 무시한 채 전체 상태를 조회함. 콤마로 묶어 보내는 방식(status=mat,pick)도 실패했고, 콘솔과 네트워크 로그로 원인을 특정함\n해결: URLSearchParams에 반복 append하는 방식으로 변경, status=mat&status=pick 형식으로 전송해 서버가 정상 처리함',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-completed-req-status-mat-req-2db00683cadc80119165cdba041226db',
          },
        },
        {
          title: '[Client] 프로필 저장 후 출근 토글이 꺼짐',
          problem:
            'ProfileEdit에서 프로필을 수정·저장하면 RiderMyPage의 출근 토글(isWorking)이 꺼짐',
          solution:
            '원인: ProfileEdit 진입 시 자동 호출되는 getProfileThunk의 fulfilled 리듀서가, 서버 응답에 없는 isWorking까지 포함해 Redux 상태를 통째로 덮어쓰고 있었음. 꺼진 것처럼 보인 것이 아니라 상태 자체가 사라지고 있었음\n해결: profileSlice에서 rider_user 객체를 병합(기존 isWorking 유지, 서버에서 온 새 정보만 반영)하도록 수정',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-isWorking-off-2e300683cadc804fa10bc84ee6a0beaa',
          },
        },
        {
          title: '[Client] 탭을 연달아 누르면 주문이 사라짐',
          problem:
            'Rider 화면에서 탭을 빠르게 두 번 누르면 주문 목록이 전부 사라지고 "주문 없음" 상태가 됨',
          solution:
            '원인: 탭 클릭마다 getOrdersThunk가 재호출되고, pending 단계에서 orders가 빈 배열로 초기화됨\n해결: pending 단계에서 기존 orders를 무조건 비우지 않도록 수정, 같은 탭을 다시 누르면 dispatch 자체를 막는 방어 로직 추가, 화면이 구독 중인 ordersSlice 기준으로만 상태를 변경하도록 정리. 연타해도 목록이 안정적으로 유지됨',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-tab-2db00683cadc80ba99a0d61e06c1b336',
          },
        },
        {
          title: '[Client] Redux 구조 분해 시 undefined 에러',
          problem:
            'useSelector로 isLoggedIn, user를 구조 분해하자 첫 렌더링에서 "Cannot destructure property \'isLoggedIn\' of undefined" 에러 발생',
          solution:
            '원인: auth slice의 initialState가 정의되지 않아 초기 렌더링 시 state.auth가 undefined였음. 로그인 thunk와 문법을 차례로 배제하고, AI에게 가능한 원인을 물어 initialState 누락을 발견함\n해결: isLoggedIn: false, user: null을 가진 initialState를 정의',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Client-Cannot-destructure-properties-from-undefined-Redux-2bd00683cadc80fd94f5c03e98b69a10',
          },
        },
        {
          title: '[Server] 라우터 선언 순서 이슈',
          problem:
            "로그에 Rider.id = 'settlement' 쿼리가 찍히고, 숫자 ID가 아닌 문자열이 들어감. DB에서 데이터를 못 찾아 프론트엔드에 빈 화면이 표시됨",
          solution:
            '원인: Express는 위에서부터 순서대로 경로를 매칭하므로, /:id가 /settlement보다 먼저 선언되면 "settlement"가 id로 해석됨\n해결: 고정 경로(/settlement)를 파라미터 경로(/:id)보다 위에 선언하도록 순서 조정. getSettlementByRider가 정상 실행되어 프론트엔드 화면 복구',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-2e200683cadc805c827cd96ac0529382',
          },
        },
        {
          title: '[Server] 주문 생성 시 외래 키 제약 조건 위반',
          problem:
            'orders 테이블에 새 주문을 넣을 때 ForeignKeyConstraintError가 발생. partner_id 값이 partners 테이블에 없어 DB가 거절하고 주문 생성이 실패함',
          solution:
            '원인: payload는 정상이었고, 로그 확인 결과 partner_id에 req.user.id(User ID)를 그대로 넣고 있었음. User ID와 Partner ID를 혼동함\n해결: 서비스 레이어에서 userId로 partner.id를 조회해 실제 Partner PK를 주입. 파트너가 없으면 NOT_FOUND 에러 반환',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-ForeignKeyConstraintError-2de00683cadc80909565ea32d260eef4',
          },
        },
        {
          title: '[Server] 로그아웃 시 JWT 에러 발생',
          problem:
            '로그아웃 요청 시 서버 콘솔에 JWT 관련 에러 로그가 계속 찍히고, 프론트엔드에서 로그아웃 처리가 정상적으로 끝나지 않음',
          solution:
            '원인: authenticate 미들웨어에서 로그아웃 경로 확인 전에 getBearerToken을 호출해, 토큰이 없으면 에러가 발생하고 로그아웃 로직까지 도달하지 못함\n해결: 토큰 조회 전에 로그아웃 경로를 먼저 판별하고, 로그아웃이면 에러를 무시하고 진행. authorize에서도 권한 체크를 생략. 컨트롤러까지 도달해 로그아웃이 정상 동작함',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-JWT-2df00683cadc803f8f05e9a5b889aea5',
          },
        },
        {
          title: '[Server] 로그인 시 accessToken 구조 분해 에러',
          problem:
            '컨트롤러에서 authService.login(user)의 반환값으로 accessToken, refreshToken을 꺼내려다 "Cannot destructure property \'accessToken\' ... as it is undefined" 에러 발생',
          solution:
            '원인: JWT 생성, req.body, DB 조회 결과를 차례로 확인해도 모두 정상이었고, authService.login(user) 자체를 로그로 찍으니 undefined였음. 서비스 함수가 끝까지 실행되지만 return 문이 없었음\n해결: 서비스 함수에 토큰을 반환하는 return 문을 추가',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/Server-TypeError-Cannot-destructure-property-accessToken-of-as-it-is-undefined-2f300683cadc802d9469f3ba19d75ba0',
          },
        },
        {
          title: '[DB] 데이터 수와 맞지 않는 페이지 생성, 2페이지가 비어 있음',
          problem:
            '데이터는 5개(limit = 6)인데 2페이지 버튼이 생기고, 누르면 비어 있음',
          solution:
            '원인: Sequelize에서 include(JOIN)와 findAndCountAll을 함께 쓰면, 특히 1:N 관계가 섞일 때 count가 실제 레코드 수보다 많게 계산됨\n해결: distinct: true를 추가해 조인 결과가 아닌 메인 모델(Order)의 PK 기준으로 중복 없이 집계. 불필요한 2페이지 버튼이 사라지고 페이지네이션과 실제 데이터 수가 일치함',
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/DB-2-2db00683cadc808e82d8fca62f82aafb',
          },
        },
        {
          title: '[DB] 진행 중 탭에서 주문이 0건으로 조회됨',
          problem:
            "프론트엔드에서 진행 중 주문 상태를 배열(status = ['mat', 'pick'])로 보냈는데, 진행 중 탭에서만 주문이 0건으로 나옴. DB에는 데이터가 존재함",
          solution:
            "원인: 백엔드가 status의 타입을 고려하지 않고 where.status에 그대로 대입해, 배열이 WHERE status='mat,pick' 형태의 쿼리가 되어 매칭되지 않음\n해결: 프론트엔드는 status=mat&status=pick 형식으로 직렬화해 전송하고, 백엔드는 배열일 때 Op.in 사용(WHERE status IN ('mat', 'pick'))",
          link: {
            url: 'https://iodized-wilderness-bba.notion.site/DB-0-status-mat-req-2f300683cadc8025a6f2d2348a15ae3c',
          },
        },
      ],
    },
    {
      title: '숨케어 (SoomCare)',
      period: '2025.09 - 2025.10',
      team: '5명',
      role: 'Frontend Developer · Team lead',
      description:
        '한국의 대기질 정보(PM2.5/PM10 등)를 실시간으로 시각화한 웹 서비스(PWA). 카드형 대시보드 UI 적용',
      responsibilities: [
        'React·Vite 기반 구조 설계, 공통 컴포넌트와 CSS 변수 기반 UI 시스템 구축',
        '실시간 API 데이터 처리(필터링·그룹핑·페이지네이션) 규칙 정의 및 공통 utils 설계',
        '모바일·데스크톱 PWA의 UI/UX 가이드라인 수립',
        'Notion 간트 차트로 일정 관리, 주 2회 정기 회의·주 1회 멘토 회의 운영',
        '진행이 늦은 팀원 대상 1:1 멘토링 및 주간 피드백',
      ],
      technologies: [
        'React',
        'Vite',
        'JavaScript (ES6+)',
        'HTML',
        'CSS',
        'PWA',
        'Vercel',
      ],
      ...soomCare,
      troubleshooting: [
        {
          title: '[팀 운영] 모두가 처음인 팀원들과의 협업',
          problem:
            '팀 대부분이 첫 개발 프로젝트 경험자여서 가장 큰 과제는 일정 관리와 업무 분담이었음. 프로젝트가 진행될수록 팀원마다 그리는 서비스의 모습이 달라지는 순간도 있었음',
          solution:
            '해결: 작업을 세부 단위로 나누고 간트 차트와 기능 명세서를 지속적으로 업데이트해 각 작업의 진행 속도와 병목 구간을 관리. 진행이 더딘 팀원에게는 구현을 함께 진행하거나 방향을 잡아 주는 방식으로 지원해 전체 일정이 지연되지 않도록 조율. 인식 차이는 회의를 통해 서비스의 목표와 사용자 가치를 다시 정렬해 팀이 같은 방향을 바라보도록 함',
        },
      ],
    },
  ],
};
