const manualRules = {
    promotion: {
        title: "⬆️ 職級與升遷",
        rules: [
            {
                rank: "實習急救員",
                content: `
            <div class="announcement p-4 rounded-2xl shadow-sm  bg-white mb-3">
                <h5 class="fw-bold mb-2">📌 實習急救員</h5>
                <p class="mb-0">上滿 <strong>7 天</strong> 可考正式急救員</p>
                <p class="text-muted mb-0">未經允許禁止單獨出車</p>
            </div>
            `
            },
            {
                rank: "正式急救員",
                content: `
<div class="announcement p-4 rounded-2xl shadow-sm  bg-white">
    <h5 class="fw-bold mb-2">📌 正式急救員</h5>
    <p class="mb-0">取得手術及直升機資格並經高層評估可升資深</p>
    <p class="text-muted mb-0">可申請電擊槍領用</p>
</div>
`
            },
            {
                rank: "資深急救員",
                content: `
<div class="announcement p-4 rounded-2xl shadow-sm bg-gradient-to-r from-orange-50 to-orange-100 mb-3">
    <h5 class="fw-bold mb-3">📢 資深救護員注意事項</h5>
    
    <div class="notice-item mb-3 p-3 rounded border-l-4 border-orange-400 bg-white">
        <h6 class="fw-bold mb-1">⏱️ 執勤時數規範</h6>
        <p class="mb-0">每週需達 <strong>15 小時</strong> 才能保住職位。</p>
        <p class="mb-0 text-muted">特殊情況需提前請假並與高層溝通，方可例外。</p>
    </div>

    <div class="notice-item p-3 mb-3 rounded border-l-4 border-green-400 bg-white">
        <h6 class="fw-bold mb-1">🩺 執刀紀錄與加給</h6>
        <p class="mb-0">有執刀任務的救護員，請於 <strong>打卡機</strong> 註明執刀次數。</p>
        <p class="mb-0 text-muted">每次執刀享有 <strong>額外加給</strong>，依紀錄發放。</p>
    </div>
</div>
`
            }
        ]
    },
    dutyDispatch: {
        title: "🩺 執勤與調度規範",
        rules: [
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-purple-400 bg-white">
            <h5 class="fw-bold mb-1">🩺 執勤基本規範</h5>
            <ul class="mb-0" style="list-style: none; padding-left: 0;">
                <li style="list-style-type: disc; margin-left: 1.2em;">禁止未告知擅離崗位，遇緊急狀況立即回報上級。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">無線電保持暢通，緊急狀況時優先通報。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">禁止穿著制服做出任何脫序行為，例如打架、鬧事。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">禁止穿著制服駕駛私家車外出。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">遇到槍傷患者務必通報警方並填寫病歷作為留檔。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">如接到倒地患者報單，務必將患者送回醫院做後續醫療處理。
                    <ul style="list-style: none; padding-left: 0; color: gray;">
                        <li style="list-style-type: circle;">例外狀況，可直接在現場進行處置：低血糖、騎警單位因訓練受傷。</li>
                    </ul>
                </li>
            </ul>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-indigo-400 bg-white">
            <h5 class="fw-bold mb-1">🚑 調度指揮與PD發單</h5>
            <ul class="mb-0" style="list-style: none; padding-left: 0;">
                <li style="list-style-type: disc; margin-left: 1.2em;">PD調度指揮順序：督導 → 主任 → 副院長 → 資深（依資歷） → 正式（依資歷），負責回應無線電。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">PD發單規範：10-99、13A 不出車，13B 可直接出車。</li>
            </ul>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-blue-400 bg-white">
            <h5 class="fw-bold mb-1">⏱️ 上下班與平板打卡</h5>
            <ul class="mb-0" style="list-style: none; padding-left: 0;">
                <li style="list-style-type: disc; margin-left: 1.2em;">遊戲一開啟即為上班狀態。若不想上班，請重新打下班卡。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">打下班卡步驟：打開平板 → 在線單位對自己右鍵 → 切換上下班 → 關閉平板 → 再重新開關一次平板，才能完全下班。</li>
                <li style="list-style-type: disc; margin-left: 1.2em; color: gray;">若未重新開關平板，無線電頻道與GPS仍會顯示你的位置。</li>
            </ul>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-gray-400 bg-white">
            <h5 class="fw-bold mb-1">🚘 公務車及救護車規範</h5>
            <ul class="mb-0" style="list-style: none; padding-left: 0;">
                <li style="list-style-type: disc; margin-left: 1.2em;">1號公務車為高層專用車，僅督導以上可駕駛，其餘員工僅能駕駛2號及3號車。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">公務車用途僅限員工購買餐點或其他公務行為，禁止用於任何娛樂活動。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">救護車抵達醫院後務必關閉警燈、熄火及上鎖。</li>
                <li style="list-style-type: disc; margin-left: 1.2em;">下班務必將救護車停回車庫</li>
            </ul>
        </div>`
        ]
    },
    taser: {
        title: "⚡ 電擊槍規範",
        rules: [
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-yellow-400 bg-white">
            <h5 class="fw-bold mb-2">🟢 1. 申請資格</h5>
            <p class="mb-0">升任正式急救員後，方可向高層提出申請領用電擊槍。</p>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-yellow-400 bg-white">
            <h5 class="fw-bold mb-2">🟡 2. 使用範圍</h5>
            <p class="mb-0">僅限值勤時自保使用。</p>
            <p class="mb-0">適用情境：⚔️ 遭市民襲擊、🐺 遇野生動物攻擊、或其他危害生命之狀況。</p>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-yellow-400 bg-white">
            <h5 class="fw-bold mb-2">🔴 3. 持槍或擊發前提</h5>
            <p class="mb-0">僅能於危害自身或他人生命安全的情況下，方可持槍警戒或擊發。</p>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-yellow-400 bg-white">
            <h5 class="fw-bold mb-2">🚫 4. 禁止不當使用</h5>
            <p class="mb-0">無充分理由，不得持槍或擊發。</p>
            <p class="mb-0">不得隨意指向他人或進行威嚇行為。</p>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-yellow-400 bg-white">
            <h5 class="fw-bold mb-2">👮 5. 警方在場規範</h5>
            <p class="mb-0">如有警方在場，急救員必須即刻收起電擊槍。</p>
            <p class="mb-0">🚷 嚴禁參與圍捕或任何執法行動。</p>
        </div>`,
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-red-400 bg-white">
            <h5 class="fw-bold mb-2">⚖️ 6. 違規處理</h5>
            <p class="mb-0">最基礎懲處：每次或每發 100,000 元罰金 💸</p>
            <p class="mb-0">視情節輕重，將合併停職、降階、沒收電擊槍及所有子彈（視狀況發回）、或除名等處置。</p>
        </div>`
        ]
    },
    billing: {
        title: "💳 帳單",
        rules: [
            `<div class="announcement p-3 mb-3 rounded border-l-4 border-pink-400 bg-white">
            <h5 class="fw-bold mb-2">📝 1. 開單前核對</h5>
            <p class="mb-0">開單前確認病患證件或姓名/手機末四碼。</p>
            <p class="mb-0">若對象為警員、車廠員工、朝酩或方花，需給予相對應折扣。</p>
            <p class="mb-0 text-muted">可參考 mail 裡的各單位員工名冊進行核查。</p>
        </div>`
        ]
    },
};



function renderManual() {
    const tabList = document.getElementById('manualTabs');
    const content = document.getElementById('manualContent');

    tabList.innerHTML = '';
    content.innerHTML = '';

    let first = true;

    for (const key in manualRules) {
        const section = manualRules[key];

        // 建立 Tab
        const li = document.createElement('li');
        li.className = 'nav-item';
        const a = document.createElement('a');
        a.className = `nav-link ${first ? 'active' : ''}`;
        a.setAttribute('data-bs-toggle', 'tab');
        a.href = `#${key}`;
        a.role = 'tab';
        a.textContent = section.title;
        li.appendChild(a);
        tabList.appendChild(li);

        // 建立 Tab 內容
        const tabPane = document.createElement('div');
        tabPane.className = `tab-pane fade ${first ? 'show active' : ''}`;
        tabPane.id = key;
        tabPane.role = 'tabpanel';

        // promotion 特殊處理
        if (key === 'promotion') {
            section.rules.forEach(item => {
                const div = document.createElement('div');

                // 如果有 HTML content，使用 innerHTML
                if (item.content) {
                    div.innerHTML = item.content;
                } else {
                    div.textContent = `${item.rank}：${item.condition}（${item.notes}）`;
                }

                tabPane.appendChild(div);
            });
        } else {
            const ul = document.createElement('ul');

            section.rules.forEach(rule => {
                const li = document.createElement('li');

                // 如果 rule 是 HTML 字串，使用 innerHTML
                if (rule.startsWith('<')) {
                    li.innerHTML = rule;
                } else {
                    li.textContent = rule;
                }

                ul.appendChild(li);
            });

            tabPane.appendChild(ul);
        }

        content.appendChild(tabPane);
        first = false;
    }
}

// 初始渲染
renderManual();