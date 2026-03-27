/* ===============================
 * TAB: KANJI
 * =============================== */

// DOM selector cho các tab
const tabKanji = document.getElementById('tabKanji');
const tabGrammar = document.getElementById('tabGrammar');
const tabQuizlet = document.getElementById('tabQuizlet');
const mainContent = document.getElementById('main-content');
const randomKanjiBtn = document.getElementById('randomKanjiBtn'); // lấy từ ngoài mainContent

// Biến dùng cho danh sách Kanji (dễ shuffle)
let kanjiN2Current = [...kanjiN2];

/* ===============================
 * SỰ KIỆN CHO BUTTON RANDOM KANJI
 * =============================== */
randomKanjiBtn.onclick = function() {
  shuffleKanjiList();
  if (tabKanji.classList.contains('active')) {
    renderKanjiList();
  }
  if (tabQuizlet.classList.contains('active')) {
    quizletIndex = 0;
    quizletFront = true;
    renderQuizlet();
  }
  // hiệu ứng rung cho icon
  this.style.transform = 'scale(1.15) rotate(-18deg)';
  setTimeout(() => {
    this.style.transform = '';
  }, 300);
};

/* ===============================
 * TAB KANJI
 * =============================== */
tabKanji.onclick = function(e) {
  e.preventDefault();
  tabKanji.classList.add('active');
  tabGrammar.classList.remove('active');
  tabQuizlet.classList.remove('active');
  renderKanjiList();
  updateRandomIconVisibility(); 
}

function renderKanjiList() {
  let html = `
    <div class="page-title">
      <span class="page-title-icon">📚</span>
      <span class="page-title-text">Danh sách Kanji N2</span>
    </div>
    <div class="page-subtitle">
      Bấm vào Kanji để xem chi tiết từ ghép, cách đọc, nghĩa...
    </div>
    <div class="kanji-search-bar">
      <input type="text" id="kanjiSearchInput" placeholder="🔍 Tìm Kanji, nghĩa, Hán Việt, đọc..." autocomplete="off">
    </div>
    <div class="kanji-list" id="kanjiListContainer"></div>
  `;
  mainContent.innerHTML = html;
  mainContent.classList.add('fade-in');
  renderKanjiCards(kanjiN2Current);

  // Xử lý search
  document.getElementById('kanjiSearchInput').oninput = function() {
    const q = this.value.trim().toLowerCase();
    let filtered = kanjiN2Current.filter(k => {
      return (
        k.kanji.toLowerCase().includes(q) ||
        (k.meaning && k.meaning.toLowerCase().includes(q)) ||
        (k.hanviet && k.hanviet.toLowerCase().includes(q)) ||
        (k.kunyomi && k.kunyomi.toLowerCase().includes(q)) ||
        (k.onyomi && k.onyomi.toLowerCase().includes(q)) ||
        (k.compounds && k.compounds.some(c =>
          c.word.toLowerCase().includes(q) ||
          c.meaning.toLowerCase().includes(q) ||
          (c.hiragana && c.hiragana.toLowerCase().includes(q)) ||
          (c.hanviet && c.hanviet.toLowerCase().includes(q))
        ))
      );
    });
    renderKanjiCards(filtered);
  };
}

function renderKanjiCards(data) {
  let html = '';
  for (let i = 0; i < data.length; i += 10) {
    html += `<div class="kanji-row">`;
    for (let j = i; j < i + 10 && j < data.length; j++) {
      html += `
        <div class="kanji-card" data-index="${kanjiN2.indexOf(data[j])}">
          ${data[j].kanji}
        </div>
      `;
    }
    html += `</div>`;
  }
  document.getElementById('kanjiListContainer').innerHTML = html;
  document.querySelectorAll('.kanji-card').forEach(item => {
    item.onclick = function() {
      const idx = this.getAttribute('data-index');
      showKanjiModal(kanjiN2[idx]);
    };
  });
}

// Hàm xáo trộn danh sách Kanji
function shuffleKanjiList() {
  // Fisher-Yates shuffle
  for (let i = kanjiN2Current.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kanjiN2Current[i], kanjiN2Current[j]] = [kanjiN2Current[j], kanjiN2Current[i]];
  }
}

// Modal chi tiết Kanji
function showKanjiModal(kanjiObj) {
  let compoundsHtml = kanjiObj.compounds.map(c =>
    `<div class="kanji-modal-compound">
      <span class="compound-word"><b>${c.word}</b></span>
      <span class="compound-hiragana">${c.hiragana}</span>
      <span class="compound-hanviet">(${c.hanviet})</span>
      <span class="compound-meaning ms-2">${c.meaning}</span>
    </div>`
  ).join('');
  document.getElementById('kanjiModalContent').innerHTML = `
    <div class="modal-header border-0 pb-0">
      <h5 class="modal-title d-flex align-items-center" id="kanjiModalLabel" style="font-weight:700;">
        <span style="font-size:1.7em;color:#596be7;margin-right:10px;">🔎</span>
        Chi tiết Kanji
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body pt-2 pb-3">
      <div class="text-center mb-3">
        <span class="kanji-modal-kanji">${kanjiObj.kanji}</span>
        <div style="font-size:1.1em;color:#888;margin-top:2px;">Hán Việt: <span style="color:#596be7;font-weight:bold;">${kanjiObj.hanviet}</span></div>
      </div>
      <hr>
      <div class="row mb-2">
        <div class="col-6 mb-2">
          <div class="d-flex align-items-center mb-1">
            <span style="font-size:1.5em;margin-right:7px;opacity:0.7;">🈶</span>
            <span class="kanji-modal-label">Kunyomi:</span>
          </div>
          <div style="font-size:1.12em;color:#5050cc;">${kanjiObj.kunyomi || '<span style="color:#bbb;">(không có)</span>'}</div>
        </div>
        <div class="col-6 mb-2">
          <div class="d-flex align-items-center mb-1">
            <span style="font-size:1.5em;margin-right:7px;opacity:0.7;">🈸</span>
            <span class="kanji-modal-label">Onyomi:</span>
          </div>
          <div style="font-size:1.12em;color:#5050cc;">${kanjiObj.onyomi || '<span style="color:#bbb;">(không có)</span>'}</div>
        </div>
      </div>
      <hr>
      <div class="mb-2">
        <div class="d-flex align-items-center mb-1">
          <span style="font-size:1.5em;margin-right:7px;opacity:0.7;">📚</span>
          <span class="kanji-modal-label">Bộ thủ:</span>
        </div>
        <div style="font-size:1.1em;color:#596be7;">${kanjiObj.radicals}</div>
      </div>
      <hr>
      <div class="mb-2">
        <div class="d-flex align-items-center mb-1">
          <span style="font-size:1.5em;margin-right:7px;opacity:0.7;">💡</span>
          <span class="kanji-modal-label">Giải nghĩa:</span>
        </div>
        <div style="font-size:1.1em;color:#5050cc;">${kanjiObj.meaning}</div>
      </div>
      <hr>
      <div>
        <div class="d-flex align-items-center mb-2">
          <span style="font-size:1.5em;margin-right:7px;opacity:0.7;">🔗</span>
          <span class="kanji-modal-label">Từ ghép chứa Kanji này:</span>
        </div>
        <div class="kanji-modal-compounds" style="font-size:1.07em;">
          ${compoundsHtml || '<span style="color:#bbb;">(Chưa có từ ghép)</span>'}
        </div>
      </div>
    </div>
  `;
  let modal = new bootstrap.Modal(document.getElementById('kanjiModal'));
  modal.show();
}


/* ===============================
 * TAB: QUIZLET (Flashcard Kanji)
 * =============================== */

// Biến kiểm soát trạng thái Quizlet
let quizletIndex = 0;      // Chỉ số thẻ hiện tại
let quizletFront = true;   // Mặt trước hay sau
let lastAction = '';       // Hiệu ứng chuyển thẻ: 'left', 'right', 'up', 'down', 'flip'

// Sự kiện click Tab Quizlet
tabQuizlet.onclick = function(e) {
  e.preventDefault();
  tabKanji.classList.remove('active');
  tabGrammar.classList.remove('active');
  tabQuizlet.classList.add('active');
  renderQuizlet();
  updateRandomIconVisibility(); 
}

// Render giao diện Quizlet
function renderQuizlet() {
  const k = kanjiN2Current[quizletIndex];
  let effectClass = '';
  if (lastAction === 'left') effectClass = 'slide-left';
  if (lastAction === 'right') effectClass = 'slide-right';
  if (lastAction === 'up') effectClass = 'rotate-horizontal';
  if (lastAction === 'down') effectClass = 'rotate-horizontal';
  if (lastAction === 'flip') effectClass = 'rotate-horizontal';

  mainContent.innerHTML = `
    <div class="page-title">
      <span class="page-title-icon">🎴</span>
      <span class="page-title-text">Luyện Kanji kiểu Quizlet</span>
    </div>
    <div class="page-subtitle">
      Lật thẻ để xem nghĩa, chuyển thẻ bằng phím ← → hoặc bấm nút!
    </div>
    <div class="quizlet-layout">
      <div class="quizlet-center">
        <div class="quizlet-card-big${quizletFront ? '' : ' flipped'} ${effectClass}" id="quizletCard" tabindex="0">
          <div class="quizlet-card-inner">
            <div class="quizlet-card-front quizlet-card-face">
              <div class="quizlet-kanji-big">${k.kanji}</div>
            </div>
            <div class="quizlet-card-back quizlet-card-face">
              <div class="quizlet-info">
                <div class="quizlet-row">
                  <span class="quizlet-icon">🎌</span>
                  <span class="quizlet-label">Hán Việt:</span>
                  <span class="quizlet-value">${k.hanviet}</span>
                </div>
                <div class="quizlet-row">
                  <span class="quizlet-icon">💡</span>
                  <span class="quizlet-label">Nghĩa:</span>
                  <span class="quizlet-value">${k.meaning}</span>
                </div>
                <div class="quizlet-compound-title">
                  <span class="quizlet-icon">🔗</span>
                  <span class="quizlet-label">Từ ghép:</span>
                </div>
                <div class="quizlet-compound-list">
                  ${k.compounds.map(c =>
                    `<div class="quizlet-compound-item">
                      <span class="compound-word"><b>${c.word}</b></span>
                      <span class="compound-hiragana">${c.hiragana}</span>
                      <span class="compound-hanviet">(${c.hanviet})</span>
                      <span class="compound-meaning">${c.meaning}</span>
                    </div>`).join('')
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quizlet-controls">
          <button class="btn btn-outline-secondary" id="prevQuizlet">&#8592;</button>
          <button class="btn btn-primary" id="flipQuizlet">&#8645;</button>
          <button class="btn btn-outline-secondary" id="nextQuizlet">&#8594;</button>
        </div>
        <div class="quizlet-progress">
          Thẻ <b>${quizletIndex + 1}</b> / ${kanjiN2.length}
        </div>
        <div class="quizlet-hint">
          <span style="color:#888;">← →: chuyển thẻ &nbsp;&nbsp; ↑ ↓ hoặc Space: lật thẻ</span>
        </div>
      </div>
    </div>
  `;

  document.getElementById('prevQuizlet').onclick = function() {
    lastAction = 'left';
    quizletIndex = (quizletIndex-1+kanjiN2.length)%kanjiN2.length;
    quizletFront = true;
    rerenderWithEffect();
  };
  document.getElementById('nextQuizlet').onclick = function() {
    lastAction = 'right';
    quizletIndex = (quizletIndex+1)%kanjiN2.length;
    quizletFront = true;
    rerenderWithEffect();
  };
  document.getElementById('flipQuizlet').onclick = function() {
    lastAction = 'flip';
    quizletFront = !quizletFront;
    rerenderWithEffect();
  };
  document.getElementById('quizletCard').onclick = function() {
    lastAction = 'flip';
    quizletFront = !quizletFront;
    rerenderWithEffect();
  };
  document.getElementById('quizletCard').focus();
}

// Hàm rerender Quizlet kèm hiệu ứng chuyển động
function rerenderWithEffect() {
  renderQuizlet();
  setTimeout(() => { lastAction = ''; }, 400); // Xoá hiệu ứng sau khi xong
}

// Hotkey cho Quizlet: chuyển thẻ/lật thẻ bằng bàn phím
document.addEventListener('keydown', function(e){
  if (tabQuizlet.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      lastAction = 'left';
      quizletIndex = (quizletIndex-1+kanjiN2.length)%kanjiN2.length;
      quizletFront = true;
      rerenderWithEffect();
    }
    if (e.key === 'ArrowRight') {
      lastAction = 'right';
      quizletIndex = (quizletIndex+1)%kanjiN2.length;
      quizletFront = true;
      rerenderWithEffect();
    }
    if (e.key === 'ArrowDown') {
      lastAction = 'down';
      quizletFront = !quizletFront;
      rerenderWithEffect();
    }
    if (e.key === 'ArrowUp') {
      lastAction = 'up';
      quizletFront = !quizletFront;
      rerenderWithEffect();
    }
    if (e.key === ' ') {
      lastAction = 'flip';
      quizletFront = !quizletFront;
      rerenderWithEffect();
    }
  }
});

/* ===============================
 * TAB: NGỮ PHÁP (Grammar)
 * =============================== */

// Sự kiện click Tab Ngữ pháp
tabGrammar.onclick = function(e) {
  e.preventDefault();
  tabKanji.classList.remove('active');
  tabGrammar.classList.add('active');
  tabQuizlet.classList.remove('active');
  renderGrammarList();
  updateRandomIconVisibility(); 
}

// Render danh sách mẫu ngữ pháp N2
function renderGrammarList() {
  let html = `
    <div class="page-title">
      <span class="page-title-icon">📖</span>
      <span class="page-title-text">Danh sách Ngữ pháp N2</span>
    </div>
    <div class="page-subtitle">
      Bấm vào mẫu ngữ pháp để xem cách dùng, ví dụ minh họa...
    </div>
    <div class="grammar-search-bar">
      <input type="text" id="grammarSearchInput" placeholder="🔍 Tìm ngữ pháp, ý nghĩa, ví dụ..." autocomplete="off">
    </div>
    <div class="grammar-list" id="grammarListContainer">
      <!-- Danh sách ngữ pháp sẽ render ở đây -->
    </div>
    <div id="grammarDetailContainer"></div>
  `;
  mainContent.innerHTML = html;

  // Render lần đầu (toàn bộ)
  renderGrammarCards(grammarN2);

  // Xử lý search
  document.getElementById('grammarSearchInput').oninput = function() {
    const q = this.value.trim().toLowerCase();
    let filtered = grammarN2.filter(g => {
      // Tìm trong structure, meaning, usage, examples
      return (
        g.structure.toLowerCase().includes(q) ||
        (Array.isArray(g.meaning)
          ? g.meaning.some(m => m.toLowerCase().includes(q))
          : g.meaning.toLowerCase().includes(q)
        ) ||
        (g.usage && g.usage.toLowerCase().includes(q)) ||
        (g.examples && g.examples.some(ex =>
          ex.jp.toLowerCase().includes(q) || ex.vi.toLowerCase().includes(q)
        ))
      );
    });
    renderGrammarCards(filtered);
  };
}

// Hàm render từng card ngữ pháp, tách biệt với hàm chính
function renderGrammarCards(data) {
  let html = '';
  data.forEach((g) => {
	  const originIdx = grammarN2.indexOf(g);
	  html += `
		<div class="grammar-card" data-idx="${originIdx}">
		  <div class="grammar-number">${originIdx + 1}</div>
		  <div class="grammar-structure">${g.structure}</div>
		  <div class="grammar-meaning">
			${
			  Array.isArray(g.meaning)
				? `${g.meaning.map(m=>`${m}`).join('<br/>')}`
				: g.meaning
			}
		  </div>
		</div>
	  `;
	});
  document.getElementById('grammarListContainer').innerHTML = html;

  // Xử lý click card như cũ
  document.querySelectorAll('.grammar-card').forEach(card => {
    card.onclick = function() {
      showGrammarDetail(+card.dataset.idx);
      document.querySelectorAll('.grammar-card').forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
    };
  });
}

// Hiển thị chi tiết một mẫu ngữ pháp (overlay đẹp)
function showGrammarDetail(idx) {
  const g = grammarN2[idx];
  let detailHtml = `
    <div class="grammar-detail-overlay" style="
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
      z-index: 1000; background: rgba(0,0,0,0.07); 
      display: flex; align-items: flex-start; justify-content: center;">
      <div class="grammar-detail-card animate-detail" style="margin-top: 70px;">
        <div class="grammar-detail-title">
          <span class="grammar-detail-structure">${g.structure}</span>
          <span class="grammar-detail-meaning">
			${
			  Array.isArray(g.meaning)
				? `
					${g.meaning.map(m => `${m}`).join('<br/>')}
				  `
				: g.meaning
			}
		  </span>
        </div>
        <div class="grammar-detail-block">
          <div class="grammar-detail-label">Cách dùng:</div>
          <div class="grammar-detail-usage">${g.usage}</div>
        </div>
        <div class="grammar-detail-block">
          <div class="grammar-detail-label">Ví dụ:</div>
          <div class="grammar-detail-examples">
            ${g.examples.map(ex => `
              <div class="grammar-example-item">
                <span class="grammar-example-jp">${ex.jp}</span>
                <span class="grammar-example-vi">${ex.vi}</span>
              </div>
            `).join('')}
          </div>
        </div>
        ${g.notes ? `
          <div class="grammar-detail-block">
            <div class="grammar-detail-label">Ghi chú:</div>
            <div class="grammar-detail-notes">${g.notes}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  document.getElementById('grammarDetailContainer').innerHTML = detailHtml;

  const overlay = document.querySelector('.grammar-detail-overlay');
  const card = overlay.querySelector('.grammar-detail-card');

  // Click ra ngoài card để đóng overlay
  overlay.onclick = function(e) {
    if (e.target === overlay) {
      // Thêm class fade-out vào card
      card.classList.remove('animate-detail');
      card.classList.add('fade-out');
      // Chờ hết hiệu ứng rồi mới xóa khỏi DOM
      setTimeout(() => {
        document.getElementById('grammarDetailContainer').innerHTML = '';
        document.querySelectorAll('.grammar-card').forEach(c=>c.classList.remove('active'));
      }, 300); // Thời gian phải khớp với thời gian animation
    }
  }
}

/* ===============================
 * CHỨC NĂNG PHỤ: Ẩn/hiện nút random Kanji
 * =============================== */

function updateRandomIconVisibility() {
  const btn = document.getElementById('randomKanjiBtn');
  if (tabKanji.classList.contains('active') || tabQuizlet.classList.contains('active')) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
}

/* ===============================
 * KHỞI ĐỘNG APP & KÉO/THẢ NÚT RANDOM KANJI
 * =============================== */

// Khởi động app: mặc định render Kanji
window.onload = function() {
  kanjiN2Current = [...kanjiN2];
  renderKanjiList();
  tabKanji.classList.add('active');
  updateRandomIconVisibility(); 
};

// Chức năng kéo/thả nút random Kanji, lưu vị trí vào sessionStorage
(function() {
  const btn = document.getElementById('randomKanjiBtn');
  let dragging = false, offsetX = 0, offsetY = 0;
  let dragMoved = false; // Đánh dấu có kéo hay không

  // Khôi phục vị trí nếu đã lưu
  function restorePosition() {
    const pos = JSON.parse(sessionStorage.getItem('randomKanjiBtnPos'));
    if (pos) {
      btn.style.top = pos.top + 'px';
      btn.style.left = pos.left + 'px';
      btn.style.right = '';
      btn.style.bottom = '';
    } else {
      // Vị trí mặc định: góc dưới phải
      btn.style.bottom = '30px';
      btn.style.right = '30px';
      btn.style.left = '';
      btn.style.top = '';
    }
  }
  restorePosition();

  // Mousedown: chuẩn bị kéo
  btn.addEventListener('mousedown', function(e) {
    if (e.button !== 0) return; // chỉ chuột trái
    dragging = true;
    dragMoved = false; // reset cờ
    btn.classList.add('dragging');
    const rect = btn.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    btn.style.left = rect.left + 'px';
    btn.style.top = rect.top + 'px';
    btn.style.right = '';
    btn.style.bottom = '';
    document.body.style.userSelect = 'none';
  });

  // Mousemove: thực sự kéo
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    dragMoved = true; // Có di chuyển chuột
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;
    const winW = window.innerWidth, winH = window.innerHeight;
    const btnW = btn.offsetWidth, btnH = btn.offsetHeight;
    newLeft = Math.max(0, Math.min(winW - btnW, newLeft));
    newTop = Math.max(0, Math.min(winH - btnH, newTop));
    btn.style.left = newLeft + 'px';
    btn.style.top = newTop + 'px';
    btn.style.right = '';
    btn.style.bottom = '';
  });

  // Mouseup: kết thúc kéo, lưu vị trí
  document.addEventListener('mouseup', function(e) {
    if (!dragging) return;
    dragging = false;
    btn.classList.remove('dragging');
    document.body.style.userSelect = '';
    // Lưu vị trí vào sessionStorage
    sessionStorage.setItem('randomKanjiBtnPos', JSON.stringify({
      top: parseInt(btn.style.top),
      left: parseInt(btn.style.left)
    }));
    // Sau khi kéo/thả, đặt cờ dragMoved = true để ngăn click event
    setTimeout(() => { dragMoved = false; }, 50); // Cho phép reset sau một khoảng ngắn
  });

  // Click: chỉ xử lý random nếu KHÔNG vừa kéo/thả
  btn.addEventListener('click', function(e) {
    if (dragMoved) {
      // Nếu vừa kéo/thả xong thì KHÔNG xử lý random
      dragMoved = false; // reset để click tiếp theo có hiệu lực
      return;
    }
    // Xử lý random như cũ
    shuffleKanjiList();
    if (tabKanji.classList.contains('active')) {
      renderKanjiList();
    }
    if (tabQuizlet.classList.contains('active')) {
      quizletIndex = 0;
      quizletFront = true;
      renderQuizlet();
    }
    btn.style.transform = 'scale(1.15) rotate(-18deg)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 300);
  });

  // Khi resize màn hình, nếu icon ngoài màn hình thì chuyển về vị trí mặc định
  window.addEventListener('resize', function() {
    restorePosition();
  });
})();