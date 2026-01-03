const holomemData = [
    { id: "tokino_sora", name: "ときのそら", disp: "ときのそら", region: "JP", unit: "0期生" },
    { id: "Robocosan", name: "ロボ子さん", disp: "ろぼこさん", region: "JP", unit: "0期生" },
    { id: "Sakura-Miko", name: "さくらみこ", disp: "さくらみこ", region: "JP", unit: "0期生" },
    { id: "Hoshimachi-Suisei", name: "星街すいせい", disp: "ほしまちすいせい", region: "JP", unit: "0期生" },
    { id: "AZKi", name: "AZKi", disp: "AZKi", region: "JP", unit: "0期生" },

    { id: "Aki-Rosenthal", name: "アキ・ローゼンタール", disp: "あき・ろーぜんたーる", region: "JP", unit: "1期生" },
    { id: "Akai-Haato", name: "赤井はあと", disp: "あかいはあと", region: "JP", unit: "1期生" },
    { id: "Shirakami-Fubuki", name: "白上フブキ", disp: "しらかみふぶき", region: "JP", unit: "1期生", unitDisp: "1期生・ゲーマーズ" },
    { id: "Natsuiro-Matsuri", name: "夏色まつり", disp: "なついろまつり", region: "JP", unit: "1期生" },
    { id: "mel", name: "夜空メル", disp: "よぞらめる", region: "JP", unit: "1期生" },

    { id: "Nakiri-Ayame", name: "百鬼あやめ", disp: "なきりあやめ", region: "JP", unit: "2期生" },
    { id: "Yuzuki-Choco", name: "癒月ちょこ", disp: "ゆづきちょこ", region: "JP", unit: "2期生" },
    { id: "Oozora-Subaru", name: "大空スバル", disp: "おおぞらすばる", region: "JP", unit: "2期生" },
    { id: "Minato-Aqua", name: "湊あくあ", disp: "みなとあくあ", region: "JP", unit: "2期生" },
    { id: "Murasaki-Shion", name: "紫咲シオン", disp: "むらさきしおん", region: "JP", unit: "2期生" },

    { id: "Shirakami-Fubuki", name: "白上フブキ", disp: "しらかみふぶき", region: "JP", unit: "ゲーマーズ", unitDisp: "1期生・ゲーマーズ" },
    { id: "Ookami-Mio", name: "大神ミオ", disp: "おおかみみお", region: "JP", unit: "ゲーマーズ" },
    { id: "Nekomata-Okayu", name: "猫又おかゆ", disp: "ねこまたおかゆ", region: "JP", unit: "ゲーマーズ" },
    { id: "Inugami-Korone", name: "戌神ころね", disp: "いぬがみころね", region: "JP", unit: "ゲーマーズ" },

    { id: "Usada-Pekora", name: "兎田ぺこら", disp: "うさだぺこら", region: "JP", unit: "3期生" },
    { id: "Shiranui-Flare", name: "不知火フレア", disp: "しらぬいふれあ", region: "JP", unit: "3期生" },
    { id: "Shirogane-Noel", name: "白銀ノエル", disp: "しろがねのえる", region: "JP", unit: "3期生" },
    { id: "Houshou-Marine", name: "宝鐘マリン", disp: "ほうしょうまりん", region: "JP", unit: "3期生" },
    { id: "uruha_rushia", name: "潤羽るしあ", disp: "うるはるしあ", region: "JP", unit: "3期生" },

    { id: "Tsunomaki-Watame", name: "角巻わため", disp: "つのまきわため", region: "JP", unit: "4期生" },
    { id: "Tokoyami-Towa", name: "常闇トワ", disp: "とこやみとわ", region: "JP", unit: "4期生" },
    { id: "Himemori-Luna", name: "姫森ルーナ", disp: "ひめもりるーな", region: "JP", unit: "4期生" },
    { id: "Amane-Kanata", name: "天音かなた", disp: "あまねかなた", region: "JP", unit: "4期生" },
    { id: "Kiryu-Coco", name: "桐生ココ", disp: "きりゅうここ", region: "JP", unit: "4期生" },

    { id: "Yukihana-Lamy", name: "雪花ラミィ", disp: "ゆきはならみぃ", region: "JP", unit: "5期生" },
    { id: "Momosuzu-Nene", name: "桃鈴ねね", disp: "ももすずねね", region: "JP", unit: "5期生" },
    { id: "Shishiro-Botan", name: "獅白ぼたん", disp: "ししろぼたん", region: "JP", unit: "5期生" },
    { id: "Omaru-Polka", name: "尾丸ポルカ", disp: "おまるぽるか", region: "JP", unit: "5期生" },
    { id: "manoaloe", name: "魔乃アロエ", disp: "まのあろえ", region: "JP", unit: "5期生" },

    { id: "La-Darknesss", name: "ラプラス・ダークネス", disp: "らぷらす・だーくねす", region: "JP", unit: "秘密結社holoX" },
    { id: "Takane-Lui", name: "鷹嶺ルイ", disp: "たかねるい", region: "JP", unit: "秘密結社holoX" },
    { id: "Hakui-Koyori", name: "博衣こより", disp: "はくいこより", region: "JP", unit: "秘密結社holoX" },
    { id: "Sakamata-Chloe", name: "沙花叉クロヱ", disp: "さかまたくろえ", region: "JP", unit: "秘密結社holoX" },
    { id: "Kazama-Iroha", name: "風真いろは", disp: "かざまいろは", region: "JP", unit: "秘密結社holoX" },

    { id: "Otonose-Kanade", name: "音乃瀬奏", disp: "おとのせかなで", region: "JP", unit: "ReGLOSS" },
    { id: "Ichijou-Ririka", name: "一条莉々華", disp: "いちじょうりりか", region: "JP", unit: "ReGLOSS" },
    { id: "Juufuutei-Raden", name: "儒烏風亭らでん", disp: "じゅうふうていらでん", region: "JP", unit: "ReGLOSS" },
    { id: "Todoroki-Hajime", name: "轟はじめ", disp: "とどろきはじめ", region: "JP", unit: "ReGLOSS" },
    { id: "Hiodoshi-Ao", name: "火威青", disp: "ひおどしあお", region: "JP", unit: "ReGLOSS" },

    { id: "Isaki-Riona", name: "響咲リオナ", disp: "いさきりおな", region: "JP", unit: "FLOW GLOW" },
    { id: "Koganei-Niko", name: "虎金妃笑虎", disp: "こがねいにこ", region: "JP", unit: "FLOW GLOW" },
    { id: "Mizumiya-Su", name: "水宮枢", disp: "みずみやすう", region: "JP", unit: "FLOW GLOW" },
    { id: "Rindo-Chihaya", name: "輪堂千速", disp: "りんどうちはや", region: "JP", unit: "FLOW GLOW" },
    { id: "Kikirara-Vivi", name: "綺々羅々ヴィヴィ", disp: "ききらら&#12436ぃ&#12436ぃ", region: "JP", unit: "FLOW GLOW" },

    { id: "Ayunda-Risu", name: "Ayunda Risu", disp: "アユンダ・リス", region: "ID", unit: "1期生" },
    { id: "Moona-Hoshinova", name: "Moona Hoshinova", disp: "ムーナ・ホシノヴァ", region: "ID", unit: "1期生" },
    { id: "Airani-Iofifteen", name: "Airani Iofifteen", disp: "アイラニ・イオフィフティーン", region: "ID", unit: "1期生" },

    { id: "Kureiji-Ollie", name: "Kureiji Ollie", disp: "クレイジー・オリー", region: "ID", unit: "2期生" },
    { id: "Anya-Melfissa", name: "Anya Melfissa", disp: "アーニャ・メルフィッサ", region: "ID", unit: "2期生" },
    { id: "Pavolia-Reine", name: "Pavolia Reine", disp: "パヴォリア・レイネ", region: "ID", unit: "2期生" },

    { id: "Vestia-Zeta", name: "Vestia Zeta", disp: "ベスティア・ゼータ", region: "ID", unit: "3期生" },
    { id: "Kaela-Kovalskia", name: "Kaela Kovalskia", disp: "カエラ・コヴァルスキア", region: "ID", unit: "3期生" },
    { id: "Kobo-Kanaeru", name: "Kobo Kanaeru", disp: "こぼ・かなえる", region: "ID", unit: "3期生" },

    { id: "Mori-Calliope", name: "Mori Calliope", disp: "<ruby>森<rt>モリ</rt><ruby>カリオペ", region: "EN", unit: "-Myth-" },
    { id: "Takanashi-Kiara", name: "Takanashi Kiara", disp: "<ruby>小鳥遊<rt>タカナシ</rt></ruby>キアラ", region: "EN", unit: "-Myth-" },
    { id: "Ninomae-Inanis", name: "Ninomae Ina'nis", disp: "<ruby>一<rt>ニノマエ</rt></ruby><ruby>伊那尓栖<rt>イナニス</rt></ruby>", region: "EN", unit: "-Myth-" },
    { id: "Watson-Amelia", name: "Watson Amelia", disp: "ワトソン・アメリア", region: "EN", unit: "-Myth-" },
    { id: "Gawr-Gura", name: "Gawr Gura", disp: "がうる・ぐら", region: "EN", unit: "-Myth-" },

    { id: "IRyS", name: "IRyS", disp: "アイリス", region: "EN", unit: "-Promise-" },
    { id: "Ouro-Kronii", name: "Ouro Kronii", disp: "オーロ・クロニー", region: "EN", unit: "-Promise-" },
    { id: "Hakos-Baelz", name: "Hakos Baelz", disp: "ハコス・ベールズ", region: "EN", unit: "-Promise-" },
    { id: "Ceres-Fauna", name: "Ceres Fauna", disp: "セレス・ファウナ", region: "EN", unit: "-Promise-" },
    { id: "Nanashi-Mumei", name: "Nanashi Mumei", disp: "<ruby>七詩<rt>ナナシ</rt></ruby>ムメイ", region: "EN", unit: "-Promise-" },

    { id: "Shiori-Novella", name: "Shiori Novella", disp: "シオリ・ノヴェラ", region: "EN", unit: "-Advent-" },
    { id: "Koseki-Bijou", name: "Koseki Bijou", disp: "<ruby>古石<rt>コセキ</rt></ruby>ビジュー", region: "EN", unit: "-Advent-" },
    { id: "Nerissa-Ravencroft", name: "Nerissa Ravencroft", disp: "ネリッサ・レイヴンクロフト", region: "EN", unit: "-Advent-" },
    { id: "Fuwawa-Abyssgard", name: "Fuwawa Abyssgard", disp: "フワワ・アビスガード", region: "EN", unit: "-Advent-" },
    { id: "Mococo-Abyssgard", name: "Mococo Abyssgard", disp: "モココ・アビスガード", region: "EN", unit: "-Advent-" },

    { id: "Elizabeth-Rose-Bloodflame", name: "Elizabeth Rose Bloodflame", disp: "エリザベス・ローズ・ブラッドフレイム", region: "EN", unit: "-Justice-" },
    { id: "Gigi-Murin", name: "Gigi Murin", disp: "ジジ・ムリン", region: "EN", unit: "-Justice-" },
    { id: "Cecilia-Immergreen", name: "Cecilia Immergreen", disp: "セシリア・イマーグリーン", region: "EN", unit: "-Justice-" },
    { id: "Raora-Panthera", name: "Raora Panthera", disp: "ラオーラ・パンテーラ", region: "EN", unit: "-Justice-" },

    { id: "Tsukumo-Sana", name: "Tsukumo Sana", disp: "<ruby>九十九<rt>ツクモ</rt></ruby><ruby>佐命<rt>サナ</rt></ruby>", region: "EN", unit: "-Council-" }
];

const unitOrder = {
    "JP": ["0期生", "1期生", "2期生", "ゲーマーズ", "3期生", "4期生", "5期生", "秘密結社holoX", "ReGLOSS", "FLOW GLOW"],
    "ID": ["1期生", "2期生", "3期生"],
    "EN": ["-Myth-", "-Promise-", "-Advent-", "-Justice-", "-Council-"]
};

let quizPool = [], currentIdx = 0, correctCount = 0, timeLimit = 5, limitTimer = null, currentRegion = "JP", currentUnit = null, isAnswering = false;
const soundSelect = new Audio('sounds/select.mp3'), soundCorrect = new Audio('sounds/correct.mp3'), soundWrong = new Audio('sounds/wrong.mp3');
let currentTime = 0;
let isAssetsLoaded = false;
let startTime;
let wrongMembers = [];
let selectedRegionsText = "";

function playS(a) {
	a.currentTime = 0; a.play().catch(()=>{});
}

window.onload = () => {
    preloadAssets();
};

// 画像のプリロード
function preloadAssets() {
    if (isAssetsLoaded) return;

    const source = typeof holomemData !== 'undefined' ? holomemData : [];

    if (source.length === 0) {
        console.error("データが見つかりません!");
        hideLoading();
        return;
    }

    const images = source.map(m => `images/${m.id}.png`);
    let loadedCount = 0;
    const totalCount = images.length;

    images.forEach(src => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            updateLoadingProgress(loadedCount, totalCount);
            if (loadedCount === totalCount) finishLoading();
        };
        img.onerror = () => {
            console.error("読み込み失敗:", src);
            loadedCount++;
            updateLoadingProgress(loadedCount, totalCount);
            if (loadedCount === totalCount) finishLoading();
        };
        img.src = src;
    });
}

// プログレスバーの更新
function updateLoadingProgress(current, total) {
    const percent = Math.floor((current / total) * 100);
    const bar = document.getElementById('load-bar');
    const text = document.getElementById('load-text');
    if (bar) bar.style.width = percent + "%";
    if (text) text.innerText = percent + "%";
}

// ロード画面を隠す
function finishLoading() {
    isAssetsLoaded = true;
    const screen = document.getElementById('loading-screen');
    if (screen) {
        setTimeout(() => {
            screen.style.opacity = "0";
            setTimeout(() => { screen.style.display = "none"; }, 500);
        }, 500);
    }
}

// 読み込み失敗した場合の強制非表示
function hideLoading() {
    const screen = document.getElementById('loading-screen');
    if (screen) screen.style.display = "none";
}

// ゲームスタート
function startGame(diff) {
    if (limitTimer) clearInterval(limitTimer);
    playS(soundSelect);
    
    const regions = [];
    const regionNames = [];
    wrongMembers = [];
    startTime = Date.now();

    // 1. 各地域をチェック
    if(document.getElementById('check-jp').checked) { regions.push('JP'); regionNames.push('JP'); }
    if(document.getElementById('check-id').checked) { regions.push('ID'); regionNames.push('ID'); }
    if(document.getElementById('check-en').checked) { regions.push('EN'); regionNames.push('EN'); }
    
    if(regions.length === 0) return alert("地域を選択してください");

    // タブの状態を更新
    const allRegions = ['JP', 'ID', 'EN'];
    allRegions.forEach(reg => {
        const tabEl = document.getElementById(`tab-${reg}`);
        if (tabEl) {
            if (regions.includes(reg)) {
                tabEl.classList.remove('disabled');
            } else {
                tabEl.classList.add('disabled');
            }
        }
    });

    changeTab(regions[0]);

    selectedRegionsText = regionNames.join(', ');

    // --- 以下、既存の処理 ---
    timeLimit = diff === 'EASY' ? 10 : diff === 'NORMAL' ? 5 : 3;

    // データのフィルタリング（重複排除は Set を使ってスマートに）
    const filteredData = holomemData.filter(m => regions.includes(m.region));
    const uniqueData = Array.from(new Map(filteredData.map(m => [m.id, m])).values());

    quizPool = uniqueData.sort(() => Math.random() - 0.5);

    currentIdx = 0; 
    correctCount = 0;
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= quizPool.length) {
        endQuiz();
        return;
    }
    isAnswering = false;
    const q = quizPool[currentIdx];
    document.getElementById('member-img').src = `images/${q.id}.png`;
    document.getElementById('ans-space').innerHTML = "";
    document.getElementById('progress-text').innerText = `${currentIdx + 1} / ${quizPool.length} 問目`;
    document.getElementById('quiz-progress').max = quizPool.length;
    document.getElementById('quiz-progress').value = currentIdx + 1;
    if(1) {
        currentUnit = null;
        renderButtons();
    } else {
        changeTab(q.region); // 自動的に正解のタブを選択 (イージーモード)
    }
    startTimer();
}

function startTimer() {
    if (limitTimer) clearInterval(limitTimer);

    currentTime = timeLimit; 
    
    updateTimerDisplay();

    limitTimer = setInterval(() => {
        currentTime = Math.max(0, currentTime - 0.1); 
        
        updateTimerDisplay();

        if (currentTime <= 0) {
            clearInterval(limitTimer);
            checkAnswer("");
        }
    }, 100);
}

// バーとテキストの更新
function updateTimerDisplay() {
    const bar = document.getElementById('timer-bar');
    const text = document.getElementById('timer-text');
    
    if (!bar || !text) return;

    const percentage = (currentTime / timeLimit) * 100;
    bar.style.width = percentage + "%";
    
    text.innerText = currentTime.toFixed(1) + "s";
    
    bar.style.backgroundColor = currentTime <= 1 ? "#ff4757" : "#28a745";
}

function changeTab(reg) {
    currentRegion = reg; currentUnit = null;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + reg).classList.add('active');
    renderButtons();
}

function renderButtons() {
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    if(!currentUnit) {
        unitOrder[currentRegion].forEach(u => {
            const btn = document.createElement('div');
            btn.className = "option-btn"; btn.innerText = u;
            btn.onclick = () => { playS(soundSelect); currentUnit = u; renderButtons(); };
            container.appendChild(btn);
        });
    } else {
        const back = document.createElement('div');
        back.className = "option-btn btn-back";
        back.innerText = "戻る";
        back.onclick = () => { currentUnit = null; renderButtons(); };
        container.appendChild(back);
        holomemData.filter(m => m.region === currentRegion && m.unit === currentUnit).forEach(m => {
            const btn = document.createElement('div');
            btn.className = "option-btn"; btn.innerText = m.name;
            btn.onclick = () => checkAnswer(m.name);
            container.appendChild(btn);
        });
    }
}

function checkAnswer(name) {
    if (isAnswering) return; 
    isAnswering = true;
    
    clearInterval(limitTimer);
    const q = quizPool[currentIdx];
    
    const isTimeout = (name === "");
    const isCorrect = !isTimeout && (name === q.name);
    
    const fb = document.getElementById('feedback');
    
    if (isTimeout) {
        fb.innerText = "時間切れ！";
        fb.style.fontSize = "4rem";
        fb.style.color = "#ff8c00";
    } else {
        fb.innerText = isCorrect ? "〇" : "×";
        fb.style.fontSize = "15rem";
        fb.style.color = isCorrect ? "#28a745" : "#dc3545";
    }
    
    fb.style.opacity = "1";
    
    playS(isCorrect ? soundCorrect : soundWrong);

    if (isCorrect) {
        correctCount++;
    } else {
        wrongMembers.push({ id: q.id, name: q.name });
    }

    const displayUnitText = q.unitDisp ? q.unitDisp : q.unit;
    document.getElementById('ans-space').innerHTML = `
        <div style="font-size: 0.8rem; color: #888; margin-bottom: 2px;">
            ホロライブ${q.region} / ${displayUnitText}
        </div>
        <div style="font-size: 1.2rem; font-weight: bold;">
            ${q.name} (${q.disp})
        </div>
    `;

    const waitTime = isCorrect ? 1000 : 3000;

    setTimeout(() => { 
        fb.style.opacity = "0"; 
        currentIdx++; 
        showQuestion(); 
    }, waitTime);
}

function endQuiz() {
    if (limitTimer) clearInterval(limitTimer);
    
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    const timeString = `${m}:${s.toString().padStart(2, '0')}`;
    
    const totalQ = quizPool.length;
    const accuracy = (correctCount / totalQ) * 100;
    
    let rank = "C";
    let rankColor = "#666666"; 
    let message = "伸びしろ十分！配信を見て復習しましょう。";

    if (accuracy === 100) {
        if (elapsed <= totalQ * 3) {
            rank = "SSS";
            rankColor = "#ff0000";
            message = "素晴らしい判断速度です！ホロライブ愛を感じます！";
        } else if (elapsed <= totalQ * 5) {
            rank = "SS";
            rankColor = "#ff8c00";
            message = "良い判断速度です！次はSSSランクを目指してみてください！";
        } else {
            rank = "S";
            rankColor = "#ffbc00";
            message = "ノーミスクリア！全メンバーを完璧に把握していますね！";
        }
    } else if (accuracy >= 75) {
        rank = "A";
        rankColor = "#28a745";
        message = "なかなかのスコアです！次はノーミスクリアを目指してみてください！";
    } else if (accuracy >= 50) {
        rank = "B";
        rankColor = "#007bff";
        message = "安定感がありますね！さらに高いスコアを目指してみましょう！";
    }

    let diffColor = "#28a745"; // EASY
    let diffTextColor = "white";
    if (timeLimit === 5) { // NORMAL
        diffColor = "#ffbc00";
        diffTextColor = "#333";
    } else if (timeLimit === 3) { // HARD
        diffColor = "#dc3545";
        diffTextColor = "white";
    }
    const diffName = timeLimit === 10 ? "EASY" : timeLimit === 5 ? "NORMAL" : "HARD";

    const shareText = `ホロライブ名前当てクイズ\nMODE: ${diffName}\n選択問題: ${selectedRegionsText}\nランク: ${rank}\n正解率: ${accuracy.toFixed(1)}% (${correctCount}/${totalQ})\nタイム: ${timeString}\n#ホロライブ名前当てクイズ\nhttps://holo-name-quiz.pages.dev/`;
    const shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText);

    let reviewHtml = "";
    if (wrongMembers.length > 0) {
        reviewHtml = `
            <div style="margin-top: 20px; text-align: left;">
                <h3 style="font-size: 1rem; border-bottom: 2px solid #ddd; padding-bottom: 5px; margin-bottom: 10px;">間違えたホロメン</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 10px; max-height: 180px; overflow-y: auto; padding: 10px; background: #fff; border-radius: 10px; border: 1px solid #eee;">
                    ${wrongMembers.map(m => `
                        <div style="text-align: center; font-size: 0.7rem;">
                            <img src="images/${m.id}.png" style="width: 40px; height: 40px; object-fit: cover; border-radius: 50%; border: 1px solid #eee;">
                            <div style="margin-top: 3px; color: #333; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const resultScreen = document.getElementById('result-screen');
    resultScreen.innerHTML = `
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
            
            <h2 style="margin-bottom: 15px;">クイズ結果</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 3px solid ${rankColor};">
                <div style="display: inline-block; background: ${diffColor}; color: ${diffTextColor}; padding: 2px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; margin-bottom: 10px;">
                    MODE: ${diffName}
                </div>
                <div style="font-size: 1rem; color: #666; margin-bottom: 5px;">評価ランク</div>
                <div style="font-size: 5rem; font-weight: bold; color: ${rankColor}; line-height: 1; margin-bottom: 10px; text-shadow: 2px 2px 5px rgba(0,0,0,0.1);">${rank}</div>
                <p style="font-weight: bold; color: #333; margin: 0;">${message}</p>
            </div>

            <div style="display: flex; justify-content: center; gap: 40px; margin-bottom: 10px;">
                <div>
                    <div style="font-size: 0.8rem; color: #666;">正解数</div>
                    <div style="font-size: 1.4rem; font-weight: bold;">${correctCount} <span style="font-size: 0.9rem; color: #999;">/ ${totalQ}</span></div>
                </div>
                <div>
                    <div style="font-size: 0.8rem; color: #666;">タイム</div>
                    <div style="font-size: 1.4rem; font-weight: bold;">${timeString}</div>
                </div>
            </div>

            <div style="margin-top: 20px;">
                <a href="${shareUrl}" target="_blank" rel="noopener noreferrer" 
                   style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #000; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 0.9rem; margin: 0 auto; width: fit-content;">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                   結果を共有する
                </a>
            </div>

            ${reviewHtml}

            <button class="diff-btn btn-easy" style="max-width: 250px; margin: 25px auto 0;" onclick="backToTitle()">
                タイトルへ戻る
            </button>
            
        </div>
    `;

    document.getElementById('quiz-screen').classList.remove('active');
    resultScreen.classList.add('active');

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#35c5f4', '#ffffff', '#ffce54', '#28a745', '#dc3545']
    });
}

function openTwitter() {
    const twitterUrl = "https://x.com/milfeulle";
    window.open(twitterUrl, '_blank');
}

function showAbout() {
    const title = "このゲームについて";
    const body = `<p>ホロライブメンバーの画像を見て、そのメンバーの名前を当てるクイズです。</p><br>

<p><b>■ 評価ランク</b><br>SSSランクは全問正解かつ問題数×3秒以内、SSランクは全問正解かつ問題数×5秒以内、Sランクは全問正解、Aランクは正答率75%以上、Bランクは正答率50%以上、Cランクは正答率が50%未満となっています。</p><br>

<p><b>■ 参考・クレジット</b><br>
・<a href="https://seesaawiki.jp/hololivetv/" target="_blank">ホロライブ非公式wiki</a>様<br>
・<a href="https://soundeffect-lab.info/" target="_blank">効果音ラボ</a>様</p><br>

<p><b>■ 注意事項</b><br>
本ゲームはカバー株式会社の「二次創作ガイドライン」を遵守して制作されたファンゲームです。公式とは一切関係ありません。<br>
使用している画像の著作権は、すべてカバー株式会社および各権利者に帰属します。<br>
画像の利用に関して問題がある場合は、速やかに削除等の対応をいたします。`;
    openModal(title, body);
}

function openModal(title, body) {
    const overlay = document.getElementById('modal-overlay');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = body; 
    overlay.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

function backToTitle() {
    if (limitTimer) {
        clearInterval(limitTimer);
        limitTimer = null;
    }

    currentIdx = 0;
    correctCount = 0;
    isAnswering = false;
    currentTime = 0;

    document.getElementById('feedback').style.opacity = "0";
    document.getElementById('ans-space').innerHTML = "";
    
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');

    const resultScreen = document.getElementById('result-screen');
    if (resultScreen) resultScreen.classList.remove('active');
}
