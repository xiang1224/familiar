// 導覽列
const navHTML = `
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #ff6f3c;">
    <div class="container">
        <a class="navbar-brand" href="index.html">
        <img src="./img/logo.png" alt="洛聖都醫護局" class="d-inline-block align-text-top" style="height: 40px;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">首頁</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">關於我們</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="team.html">醫護團隊</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#joinModal">加入我們</a>
                </li>
                <li class="nav-item">
                <ul class="navbar-nav ms-auto" id="nav-right">
    <!-- JS 會自動填入登入/登出按鈕 -->
</ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

// 頁尾
const footerHTML = `
<footer>
    <div class="container">
        <p class="mb-0">&copy; 洛聖都醫護局. All rights reserved.</p>
    </div>
</footer>
`;

function insertPriceModal() {
    const modalHTML = `
    <div class="modal fade" id="priceModal" tabindex="-1" aria-labelledby="priceModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content"
                style="background-color: #fffbe6; border: 2px solid #f6c453; box-shadow: 0 0 20px rgba(0,0,0,0.2);">
                <div class="modal-header">
                    <h5 class="modal-title" id="priceModalLabel">📋 醫療服務價目表</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-2 g-3">

                            <!-- 基本費用 -->
                            <div class="col">
                                <div class="p-3 rounded shadow" style="background-color: #fff6cc;">
                                    <h5>🧾 基本費用</h5>
                                    <ul class="list-unstyled">
                                        <li>門診：$5000</li>
                                        <li>院外急救 - 南部：$5500</li>
                                        <li>院外急救 - 中部：$5800</li>
                                        <li>院外急救 - 北部：$6000</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <!-- 附加費用 -->
                            <div class="col">
                                <div class="p-3 rounded shadow" style="background-color: #fff6cc;">
                                    <h5>➕ 附加費用</h5>
                                    <ul class="list-unstyled">
                                        <li>手術：視傷重$5000~$10000</li>
                                        <li>葡萄糖：$2000</li>
                                        <li>儀器檢查：$3000</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <!-- 商品費用 -->
                            <div class="col">
                                <div class="p-3 rounded shadow" style="background-color: #fff6cc;">
                                    <h5>🛒 商品費用</h5>
                                    <ul class="list-unstyled">
                                        <li>止血帶（暫時止血）：$800</li>
                                        <li>草本繃帶：$1000</li>
                                        <li>滅火器：$2000</li>
                                        <li>手電筒：$2000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 rounded shadow" style="background-color: #fff6cc;">
                                    <h5>🤝 醫院合作企業優惠</h5>
                                    <ul class="list-unstyled">
                                        <li>警局（憑警徽就醫及購買醫療用品享5折優惠）</li>
                                        <li>車廠（憑證件就醫及購買醫療用品享7折優惠）</li>
                                        <li>朝酩（憑證件就醫及購買醫療用品享8折優惠）</li>
                                        <li>方花（憑證件就醫及購買醫療用品享8折優惠）</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p class="mt-4 text-muted text-center">
                            洛聖督醫療中心保留價格調整之權利，如有變動將提前公告，請以最新資訊為準，敬請見諒。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // 插入到 body 最後
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// 頁面載入時插入
document.addEventListener("DOMContentLoaded", insertPriceModal);


// 將內容插入到對應的容器中
// 使用者資料庫（簡易帳密驗證）
const usersDB = [
    {
        callsign: "901",
        username: "901",
        password: "bigboss",
        role: "院長",
        name: "克拉拉 米勒斯",
        level: "3",
        phone: "28644061",
        hireDate: "2025-04-01",
        leaveDate: null,
        photo: "./img/team1.png",
        skills: ["大量傷患指揮官", "空勤資格", "手術資格"]
    },
    {
        callsign: "905",
        username: "905",
        password: "Aa338188",
        role: "副院長",
        name: "夏以熙",
        level: "3",
        phone: "66718287",
        hireDate: "2025-04-01",
        leaveDate: null,
        photo: "./img/team2.png",
        skills: ["大量傷患指揮官", "手術資格"]
    },
    {
        callsign: "920",
        username: "920",
        password: "20001224",
        role: "主任",
        name: "黃曉翔",
        level: "3",
        phone: "49699333",
        hireDate: "2025-05-22",
        leaveDate: null,
        photo: "./img/team3-1.png",
        skills: ["大量傷患指揮官", "空勤教官", "空勤資格", "手術講師", "手術資格"]
    },
    {
        callsign: "928",
        username: "ada1031",
        password: "ada1031",
        role: "督導",
        name: "朴明宇",
        level: "2",
        phone: "12674044",
        hireDate: "2025-06-01",
        leaveDate: null,
        photo: "./img/team4.png",
        skills: ["大量傷患指揮官", "空勤教官", "空勤資格", "手術資格"]
    },
    {
        callsign: "902",
        username: "902",
        password: "902",
        role: "資深急救員",
        name: "桐堯",
        level: "1",
        phone: "39672585",
        hireDate: "2025-04-01",
        leaveDate: "2025-08-11",
        photo: "./img/user.png",
        skills: ["空勤資格", "手術資格"]
    },
    {
        callsign: "940",
        username: "xuancyl",
        password: "xuan",
        role: "資深急救員",
        name: "林夕染",
        level: "1",
        phone: "22139820",
        hireDate: "2025-06-08",
        leaveDate: null,
        photo: "./img/team5.png",
        skills: ["空勤資格", "手術資格","急救心理學"]
    },
    {
        callsign: "977",
        username: "977",
        password: "1234",
        role: "急救員",
        name: "李逸庭",
        level: "1",
        phone: "12744653",
        hireDate: "2025-05-04",
        leaveDate: null,
        photo: "./img/team6.png",
        skills: ["手術資格", "急救心理學教授"]
    },
    {
        callsign: "921",
        username: "asd193206",
        password: "asd00000",
        role: "急救員",
        name: "潘紫豪",
        level: "1",
        phone: "57317398",
        hireDate: "2025-05-19",
        leaveDate: null,
        photo: "./img/team7.png",
        skills: ["暫無"]
    },
    {
        callsign: "903",
        username: "903",
        password: "903",
        role: "急救員",
        name: "張浩天",
        level: "1",
        phone: "43523710",
        hireDate: "2025-06-07",
        leaveDate: null,
        photo: "./img/team16.png",
        skills: ["空勤資格"]
    },
    {
        callsign: "988",
        username: "988",
        password: "988",
        role: "資深急救員",
        name: "李涵",
        level: "1",
        phone: "40532985",
        hireDate: "2025-06-07",
        leaveDate: null,
        photo: "./img/team17.png",
        skills: ["空勤資格", "手術資格"]
    },
    {
        callsign: "969",
        username: "969",
        password: "969",
        role: "急救員",
        name: "咪嚕苦",
        level: "1",
        phone: "48485368",
        hireDate: "2025-06-10",
        leaveDate: null,
        photo: "./img/team12.png",
        skills: ["急救心理學"]
    },
    {
        callsign: "995",
        username: "995",
        password: "995",
        role: "急救員",
        name: "王麗梅",
        level: "1",
        phone: "86982180",
        hireDate: "2025-06-16",
        leaveDate: null,
        photo: "./img/team13.png",
        skills: ["空勤資格", "急救心理學"]
    },
    {
        callsign: "950",
        username: "miji485280",
        password: "leon485280",
        role: "急救員",
        name: "溫品彥",
        phone: "30174048",
        level: "1",
        hireDate: "2025-06-27",
        leaveDate: null,
        photo: "./img/team8.png",
        skills: ["暫無"]
    },
    {
        callsign: "911",
        username: "911",
        password: "911",
        role: "急救員",
        name: "顧玄州",
        level: "1",
        phone: "20129358",
        hireDate: "2025-07-07",
        leaveDate: null,
        photo: "./img/team11.png",
        skills: ["空勤資格", "手術資格"]
    },
    {
        callsign: "999",
        username: "999",
        password: "999",
        role: "急救員",
        name: "蘇零",
        level: "1",
        phone: "83058722",
        hireDate: "2025-07-09",
        leaveDate: null,
        photo: "./img/team18.png",
        skills: ["暫無"]
    },
    {
        callsign: "988",
        username: "noctjade",
        password: "0210",
        role: "急救員",
        name: "夜嵐",
        level: "1",
        phone: "85107191",
        hireDate: "2025-06-29",
        leaveDate: null,
        photo: "./img/team15.png",
        skills: ["執刀資格","急救心理學"]
    },
    {
        callsign: "945",
        username: "945",
        password: "945",
        role: "急救員",
        name: "巴克納 尤里烏斯",
        level: "1",
        phone: "30168839",
        hireDate: "2025-07-24",
        leaveDate: null,
        photo: "./img/team9.png",
        skills: ["空勤資格"]
    },
    {
        callsign: "965",
        username: "UU030",
        password: "A123z123",
        role: "資深急救員",
        name: "野比 文泰",
        level: "1",
        phone: "30168544",
        hireDate: "2025-07-24",
        leaveDate: null,
        photo: "./img/team10-1.png",
        skills: ["空勤資格", "手術資格"]
    },
    {
        callsign: "966",
        username: "966",
        password: "966",
        role: "實習急救員",
        name: "吳乃欣",
        level: "1",
        phone: "30141541",
        hireDate: "2025-06-28",
        leaveDate: "2025-08-11",
        photo: "./img/user.png",
        skills: ["急救心理學"]
    },
    {
        callsign: "977",
        username: "997",
        password: "997",
        role: "實習急救員",
        name: "黎緋",
        level: "1",
        phone: "10175209",
        hireDate: "2025-06-29",
        leaveDate: null,
        photo: "./img/team14.png",
        skills: ["急救心理學副教授"]
    },
    {
        callsign: "910",
        username: "910",
        password: "910",
        role: "實習急救員",
        name: "顧嫣珞",
        level: "1",
        phone: "23945962",
        hireDate: "2025-07-24",
        leaveDate: "2025-09-04",
        photo: "./img/user.png",
        skills: ["暫無"]
    },
    {
        callsign: "942",
        username: "942",
        password: "942",
        role: "實習急救員",
        name: "鮑伯 史都華",
        level: "1",
        phone: "10109003",
        hireDate: "2025-08-26",
        leaveDate: null,
        photo: "./img/team19.png",
        skills: ["暫無"]
    },
    {
        callsign: "996",
        username: "wang570211",
        password: "wang87522",
        role: "實習急救員",
        name: "松井 修有",
        level: "1",
        phone: "50189933",
        hireDate: "2025-08-30",
        leaveDate: null,
        photo: "./img/team20.png",
        skills: ["暫無"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const injuryBtn = document.getElementById("injuryGuideBtn");
    const manualBtn = document.getElementById("manualBtn");

    if (user && injuryBtn) {
        injuryBtn.classList.remove("d-none");
    }

    if (user && manualBtn) {
        manualBtn.classList.remove("d-none");
    }

    // 插入 Nav 和 Footer
    const navContainer = document.getElementById("nav-placeholder");
    const footerContainer = document.getElementById("footer-placeholder");
    if (navContainer) navContainer.innerHTML = navHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // 動態產生右上角登入選單
    const navRight = document.getElementById("nav-right");
    if (navRight) {
        if (user) {
            navRight.innerHTML = `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle fs-5"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li><a class="dropdown-item" href="#">姓名：${user.name}</a></li>
                        <li><a class="dropdown-item" href="#">職位：${user.role}</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a id="adminPanelBtn" class="dropdown-item text-danger d-none" href="admin.html">查看所有員工資料</a></li>
                        <li><a id="viewAllSalariesBtn" class="dropdown-item text-warning d-none" href="all_salary.html">查看所有員工薪資</a></li>
                        <li><a id="submitRecordBtn" class="dropdown-item text-success d-none" href="salary.html">我的薪資明細</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="#" onclick="logout()">登出</a></li>
                    </ul>
                </li>
            `;

            if (user.level >= 1) document.getElementById("adminPanelBtn")?.classList.remove("d-none");
            if (user.level > 2) document.getElementById("viewAllSalariesBtn")?.classList.remove("d-none");
            if (user.level >= 1) document.getElementById("submitRecordBtn")?.classList.remove("d-none");
        } else {
            navRight.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">員工登入</a>
                </li>
            `;
        }
    }

    // 如果頁面上有薪資表格
    if (document.querySelector("#salaryTable")) {
        fetch("./json/salary.json")
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector("#salaryTable tbody");
                tbody.innerHTML = "";

                const currentPage = window.location.pathname.split("/").pop();

                data.weeks.forEach(weekBlock => {
                    weekBlock.records.forEach(record => {
                        const isAllPage = currentPage === "all_salary.html";

                        if (
                            (isAllPage && user?.level > 2) ||
                            (!isAllPage && record.name === user?.name)
                        ) {
                            
                            const tr = document.createElement("tr");
                            const formatMoney = (val) => {
                                // 如果是 "-" 就原樣回傳，不加 $
                                if (val === "-" || val === undefined || val === null) return val;
                                return "$" + val;
                            };

                            tr.innerHTML = `
                        <td>${record.name}</td>
                        <td>${record.role}</td>
                        <td>${weekBlock.week}</td>
                        <td>${record.total_hours}</td>
                        <td>${record.night_bonus}</td>
                        <td>${formatMoney(record.other_bonus)}</td>
                        <td>${formatMoney(record.meal_expenses)}</td>
                        <td>${formatMoney(record.salary)}</td>
                        <td>${(record.check)}</td>
                    `;

                            tbody.appendChild(tr);
                        }
                    });
                });

                // 篩選功能（姓名 + 日期）
                const nameInput = document.getElementById("nameFilter");
                const startDateInput = document.getElementById("startDate");
                const endDateInput = document.getElementById("endDate");
                const filterBtn = document.getElementById("filterBtn");

                if (filterBtn) {
                    filterBtn.addEventListener("click", () => {
                        const nameFilter = nameInput.value.toLowerCase();
                        const startDate = startDateInput.value;
                        const endDate = endDateInput.value;

                        document.querySelectorAll("#salaryTable tbody tr").forEach(row => {
                            const nameText = row.cells[0].textContent.toLowerCase();
                            const weekDate = row.cells[2].textContent.trim();

                            let match = true;

                            if (nameFilter && !nameText.includes(nameFilter)) match = false;
                            if (startDate && weekDate < startDate) match = false;
                            if (endDate && weekDate > endDate) match = false;

                            row.style.display = match ? "" : "none";
                        });
                    });
                }
            });
    }
});


// 先在 usersDB 加一個 originalIndex
usersDB.forEach((staff, idx) => {
    staff.originalIndex = idx;
});

// 分類
const activeStaff = usersDB.filter(s => !s.leaveDate || s.leaveDate.trim() === "");
const leftStaff = usersDB.filter(s => s.leaveDate && s.leaveDate.trim() !== "");

// 假設這是登入帳號的等級
// 從 localStorage 讀取登入使用者資料
const loggedInUserStr = localStorage.getItem("loggedInUser");
const loggedInUser = loggedInUserStr ? JSON.parse(loggedInUserStr) : null;
const loggedInLevel = loggedInUser && loggedInUser.level ? Number(loggedInUser.level) : 0;


function createRow(staff, id) {
    return `
        <tr>
            <td>${staff.callsign}</td>
            <td>${staff.name}</td>
            <td>${staff.role}</td>
            <td>${staff.phone}</td>
            <td><button  class="btn btn-outline-orange btn-sm staff-link" data-id="${id}">查看詳情</button></td>
        </tr>
    `;
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("staff-link")) {
        if (loggedInLevel >= 2) {
            const staffId = event.target.getAttribute("data-id");
            viewStaffDetails(staffId);
        } 
    }
});

function viewStaffDetails(id) {
    console.log("查看員工資料", id);
    // 這裡放原本查看的程式碼
}



// 填在職
const activeBody = document.getElementById("active-staff-body");
activeStaff.forEach((staff) => {
    activeBody.innerHTML += createRow(staff, staff.originalIndex);
});

// 填離職
const leftBody = document.getElementById("left-staff-body");
leftStaff.forEach((staff) => {
    leftBody.innerHTML += createRow(staff, staff.originalIndex);
});

// 統計
const totalActive = activeStaff.length;
const totalLeft = leftStaff.length;

// 各職位人數統計（只算在職人員）
const roleCount = {};
activeStaff.forEach(s => {
    if (!roleCount[s.role]) roleCount[s.role] = 0;
    roleCount[s.role]++;
});

let roleStats = Object.entries(roleCount)
    .map(([role, count]) => `${role}：${count}人`)
    .join("， ");

// 動態生成統計卡片
const statsDiv = document.getElementById("staff-stats");
statsDiv.innerHTML = `
    <div class="col-md-6">
        <div class="card shadow-sm border-success">
            <div class="card-body text-center">
                <h5 class="card-title text-primary">👥 在職人員</h5>
                <p class="display-6 fw-bold">${totalActive}</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card shadow-sm border-danger">
            <div class="card-body text-center">
                <h5 class="card-title text-danger">🚪 已離職人員</h5>
                <p class="display-6 fw-bold">${totalLeft}</p>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card shadow-sm border-info">
            <div class="card-body">
                <h5 class="card-title text-success text-center">📌 職位分布</h5>
                <p class="fw-bold text-center mb-0">${roleStats}</p>
            </div>
        </div>
    </div>
`;

// 點擊姓名顯示詳情
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("staff-link")) {
        event.preventDefault();  // 防止預設行為（如有）

        if (loggedInLevel >= 2) {
            const id = parseInt(event.target.getAttribute("data-id"));
            const staff = usersDB[id];

            // 填寫 modal 資料
            document.getElementById("staffName").textContent = staff.name;
            document.getElementById("staffRole").textContent = staff.role;
            document.getElementById("staffHireDate").textContent = staff.hireDate || "無";
            document.getElementById("staffLeaveDate").textContent = staff.leaveDate || "尚在職";
            document.getElementById("staffPhoto").src = staff.photo || "https://via.placeholder.com/150";

            const skillsHTML = (staff.skills && staff.skills.length > 0)
                ? staff.skills.map(s => `<span class="badge bg-primary me-1">${s}</span>`).join("")
                : `<span class="text-muted">暫無資料</span>`;
            document.getElementById("staffSkills").innerHTML = skillsHTML;

            // 開啟 modal
            new bootstrap.Modal(document.getElementById("staffModal")).show();

        } else {
            alert("無觀看權限");
            // 不做任何事，modal 不會打開
        }
    }
});

// 登入函式
function loginUser() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const result = document.getElementById("login-result");

    const user = usersDB.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        result.innerHTML = `✅ 歡迎，${user.name}（${user.role}）`;
        result.style.color = "green";

        setTimeout(() => {
            const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
            loginModal.hide();

            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = "index_after_login.html";
        }, 1000);
    } else {
        result.innerHTML = "❌ 帳號或密碼錯誤";
        result.style.color = "red";
    }
}



// 登出函式
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
