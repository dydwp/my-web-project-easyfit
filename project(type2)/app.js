/* ══════════════════════════════
   DATA (영상 링크 videoUrl 추가)
══════════════════════════════ */
const workouts = {
  chest: [
    {
      title: '푸시업 (Push-up)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif', 
      tags: ['입문', '맨몸'],
      pose: '어깨너비보다 약간 넓게 손을 짚고, 몸을 일직선으로 유지하세요. 팔꿈치를 45° 각도로 구부리며 천천히 내려갑니다.',
      target: '대흉근 (중앙/하부), 삼두근, 전면 삼각근',
      caution: '허리가 꺾이지 않도록 코어에 힘을 주세요. 팔꿈치가 너무 벌어지면 어깨에 부담이 됩니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=푸시업+정확한+자세'
    },
    {
      title: '덤벨 플라이 (Dumbbell Fly)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif', 
      tags: ['중급', '덤벨'],
      pose: '벤치에 누워 덤벨을 가슴 위로 들고, 팔꿈치를 약간 구부린 채 양쪽으로 넓게 펼칩니다.',
      target: '대흉근 (외측/전체), 전면 삼각근',
      caution: '덤벨을 너무 무겁게 사용하면 어깨 관절 부상 위험이 있어요. 가슴이 충분히 늘어나는 것을 느끼세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+플라이+정확한+자세'
    },
    {
      title: '케이블 크로스오버', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif', 
      tags: ['중급', '기구'],
      pose: '케이블 기구를 어깨 높이로 설정하고 양손에 잡은 후, 가슴 앞으로 교차하듯 당겨옵니다.',
      target: '대흉근 (내측 집중), 전면 삼각근',
      caution: '반동을 사용하지 않고 천천히 수축과 이완을 느끼세요. 상체가 앞으로 너무 기울지 않도록 합니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=케이블+크로스오버+자세'
    },
  ],
  back: [
    {
      title: '랫 풀다운 (Lat Pulldown)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif', 
      tags: ['입문', '기구'],
      pose: '바를 어깨너비보다 넓게 잡고, 상체를 약간 뒤로 기울이며 바를 쇄골 방향으로 당깁니다.',
      target: '광배근, 이두근, 후면 삼각근',
      caution: '바를 뒷목으로 당기지 마세요. 등이 아닌 팔로 당기는 느낌이 들면 그립을 조정하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=랫+풀다운+자세'
    },
    {
      title: '덤벨 로우 (Dumbbell Row)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif', 
      tags: ['중급', '덤벨'],
      pose: '벤치나 고정된 곳에 한 손과 무릎을 짚고, 반대쪽 손으로 덤벨을 쥔 채 등 근육을 이용해 골반 방향으로 당깁니다.',
      target: '광배근, 승모근, 척추기립근',
      caution: '허리가 굽지 않게 곧게 펴고, 팔이 아닌 등으로 당긴다는 느낌에 집중하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+로우+자세'
    },
    {
      title: '시티드 케이블 로우', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif', 
      tags: ['입문', '기구'],
      pose: '케이블 기구 앞에 앉아 V바를 잡고 상체를 곧게 세운 채 배쪽으로 당깁니다.',
      target: '광배근 (하부), 중간 등 근육',
      caution: '당길 때 상체가 과도하게 뒤로 젖혀지지 않도록 하세요. 등의 수축을 느끼는 것이 중요합니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=시티드+케이블+로우+자세'
    },
  ],
  leg: [
    {
      title: '핵 스쿼트 (Hack Squat)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sled-Hack-Squat.gif', 
      tags: ['중급', '기구'],
      pose: '머신에 등을 대고 어깨 패드에 밀착한 후, 발판에 발을 어깨너비로 놓습니다. 무릎이 90도가 될 때까지 내린 뒤 밀어 올립니다.',
      target: '대퇴사두근(허벅지 앞), 둔근',
      caution: '발을 발판 너무 아래에 두면 무릎에 무리가 갈 수 있습니다. 무릎이 안쪽으로 모이지 않게 주의하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=핵+스쿼트+자세'
    },
    {
      title: '런지 (Lunge)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif', 
      tags: ['입문', '덤벨'],
      pose: '한 발을 크게 앞으로 내딛고, 앞 무릎이 90°가 되도록 내려갑니다. 뒷 무릎은 바닥에 가볍게 닿도록.',
      target: '대퇴사두근, 둔근, 햄스트링',
      caution: '앞 무릎이 발끝을 너무 많이 넘어가지 않도록 하세요. 상체는 곧게 유지합니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=런지+자세'
    },
    {
      title: '레그 프레스 (Leg Press)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif', 
      tags: ['중급', '기구'],
      pose: '발판에 발을 어깨너비로 놓고, 무릎이 90° 될 때까지 내린 후 밀어올립니다.',
      target: '대퇴사두근, 둔근 (발 위치에 따라 다름)',
      caution: '무릎을 완전히 펴서 관절을 잠그지 마세요. 허리가 시트에서 떨어지지 않도록 합니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=레그+프레스+자세'
    },
  ],
  shoulder: [
    {
      title: '숄더 프레스 (Shoulder Press)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif', 
      tags: ['중급', '덤벨'],
      pose: '덤벨을 귀 높이에서 잡고, 팔꿈치가 약간 앞쪽을 향하게 한 채 머리 위로 밀어올립니다.',
      target: '전면/측면 삼각근, 삼두근',
      caution: '허리가 과도하게 아치를 그리지 않도록 코어에 힘을 주세요. 무게를 너무 무겁게 사용하지 마세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+숄더+프레스+자세'
    },
    {
      title: '레터럴 레이즈 (Lateral Raise)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif', 
      tags: ['입문', '덤벨'],
      pose: '팔꿈치를 약간 구부린 채 덤벨을 양옆으로 어깨 높이까지 올립니다.',
      target: '측면 삼각근',
      caution: '반동을 사용하지 마세요. 올릴 때 새끼손가락이 약간 위를 향하면 측면 삼각근이 더 자극됩니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=사이드+레터럴+레이즈+자세'
    },
    {
      title: '페이스풀 (Face Pull)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif', 
      tags: ['입문', '기구'],
      pose: '케이블을 얼굴 높이로 설정하고, 양손으로 로프를 잡아 얼굴 방향으로 당깁니다.',
      target: '후면 삼각근, 회전근개, 승모근',
      caution: '어깨 건강에 매우 좋은 운동입니다. 너무 무거운 무게보다 정확한 자세로 수행하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=페이스풀+자세'
    },
  ],
  arm: [
    {
      title: '바이셉 컬 (Bicep Curl)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif', 
      tags: ['입문', '덤벨'],
      pose: '덤벨을 아래팔로만 들어올리고, 팔꿈치는 옆구리에 고정합니다.',
      target: '이두근 (단두/장두)',
      caution: '팔꿈치가 앞으로 나오거나 상체 반동을 쓰지 마세요. 천천히 내리는 것도 중요합니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+컬+자세'
    },
    {
      title: '트라이셉 딥스 (Tricep Dips)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif', 
      tags: ['입문', '맨몸'],
      pose: '의자나 벤치를 등지고 손을 짚은 뒤, 팔꿈치를 구부리며 몸을 내립니다.',
      target: '삼두근 (전체)',
      caution: '어깨가 위로 솟지 않도록 하세요. 내려갈 때 어깨 통증이 있으면 범위를 줄이세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=삼두+딥스+자세'
    },
    {
      title: '해머 컬 (Hammer Curl)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif', 
      tags: ['입문', '덤벨'],
      pose: '덤벨을 세워서(엄지가 위) 들고, 바이셉 컬과 동일하게 수행합니다.',
      target: '이두근, 상완근, 전완근',
      caution: '바이셉 컬에 비해 전완 부위 자극이 강합니다. 천천히 수행하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=해머+컬+자세'
    },
  ],
  core: [
    {
      title: '백 익스텐션 (Back Extension)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Weighted-Back-Extension.gif', 
      tags: ['중급', '기구'],
      pose: '기구에 골반을 대고 엎드린 후, 상체를 천천히 숙였다가 척추기립근과 둔근의 힘으로 일직선이 될 때까지 들어 올립니다.',
      target: '척추기립근(코어 후면), 둔근, 햄스트링',
      caution: '상체를 들어 올릴 때 허리를 과도하게 뒤로 꺾으면 부상 위험이 있습니다. 몸이 일자가 되는 지점까지만 올리세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=백+익스텐션+자세'
    },
    {
      title: '크런치 (Crunch)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif', 
      tags: ['입문', '맨몸'],
      pose: '무릎을 세우고 누운 채, 상체를 복근으로 말아올립니다. 목이 아닌 복부로 올라가는 것을 느끼세요.',
      target: '복직근 (상부)',
      caution: '목에 힘을 주면 경추에 무리가 가요. 손을 귀 옆에 가볍게 대고 목을 당기지 마세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=크런치+자세'
    },
    {
      title: '푸시업 플러스 (코어/전거근)', 
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif', 
      tags: ['중급', '맨몸'],
      pose: '푸시업 자세에서 팔을 곧게 편 상태로 날개뼈만 모았다가, 바닥을 강하게 밀어내며 등을 둥글게 맙니다.',
      target: '전거근, 코어 전체, 어깨 안정화',
      caution: '팔꿈치가 구부러지지 않게 주의하고, 코어의 긴장을 계속 유지한 채 견갑골(날개뼈)만 움직이세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=푸시업+플러스+자세'
    },
  ],
};

/* ══════════════════════════════
   PAGE NAVIGATION
══════════════════════════════ */
let currentTab = 'chest';

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');

  if (id === 'guide') renderWorkouts(currentTab);
  if (id === 'calendar') renderCalendar();

  window.scrollTo(0, 0);
}

/* ══════════════════════════════
   WORKOUT GUIDE (버튼 추가 렌더링)
══════════════════════════════ */
function selectTab(btn, tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  currentTab = tab;
  renderWorkouts(tab);
}

function renderWorkouts(tab) {
  const grid = document.getElementById('workout-grid');
  const items = workouts[tab] || [];

  grid.innerHTML = items.map((w, i) => `
    <div class="workout-card" id="wcard-${tab}-${i}">
      <div class="workout-thumb">
        <img src="${w.imgUrl}" alt="${w.title}">
      </div>
      <div class="workout-body">
        <div class="workout-title">${w.title}</div>
        <div class="workout-meta">
          ${w.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="accordion-toggle" onclick="toggleAccordion('${tab}-${i}')">
          <span class="toggle-hint">자세히 보기</span>
          <span class="toggle-arrow">▼</span>
        </div>
        <div class="accordion" id="acc-${tab}-${i}">
          <div class="accordion-inner">
            <div class="accordion-section">
              <div class="accordion-label">📌 정확한 자세</div>
              <div class="accordion-text">${w.pose}</div>
            </div>
            <div class="accordion-section">
              <div class="accordion-label">⚡ 자극 부위</div>
              <div class="accordion-text">${w.target}</div>
            </div>
            <div class="accordion-section">
              <div class="accordion-label">⚠️ 주의사항</div>
              <div class="accordion-text">${w.caution}</div>
            </div>
            <div class="accordion-section" style="margin-bottom: 0;">
              <a href="${w.videoUrl}" target="_blank" class="video-btn">▶️ 영상으로 자세 확인하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleAccordion(id) {
  const acc = document.getElementById('acc-' + id);
  const card = acc.closest('.workout-card');
  const isOpen = acc.classList.contains('open');

  document.querySelectorAll('.accordion').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.workout-card').forEach(c => c.classList.remove('open'));

  if (!isOpen) {
    acc.classList.add('open');
    card.classList.add('open');
  }
}

/* ══════════════════════════════
   CALENDAR
══════════════════════════════ */
let calYear, calMonth;
let selectedDate = null;

function initCalendar() {
  const now = new Date();
  calYear = now.getFullYear();
  calMonth = now.getMonth(); 
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  else if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
}

function renderCalendar() {
  if (calYear === undefined) initCalendar();

  const monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  document.getElementById('cal-title').textContent = `${calYear}년 ${monthNames[calMonth]}`;

  const firstDayOfWeek = new Date(calYear, calMonth, 1).getDay(); 
  const totalDays = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  const container = document.getElementById('cal-days');

  let html = '';

  for (let i = 0; i < firstDayOfWeek; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  for (let d = 1; d <= totalDays; d++) {
    const key = dateKey(calYear, calMonth + 1, d);
    const isToday = (
      d === today.getDate() &&
      calMonth === today.getMonth() &&
      calYear === today.getFullYear()
    );
    const isStamped = localStorage.getItem('stamp-' + key) === '1';
    const isSelected = selectedDate === key;
    const memo = localStorage.getItem('memo-' + key);

    const classes = ['cal-day'];
    if (isToday) classes.push('today');
    if (isStamped) classes.push('stamped');
    else if (isSelected) classes.push('selected');

    const memoHtml = memo ? `<div class="cal-day-memo">${memo}</div>` : '';
    html += `<div class="${classes.join(' ')}" onclick="selectDay('${key}')">
               <span class="cal-day-num">${d}</span>
               ${memoHtml}
             </div>`;
  }

  container.innerHTML = html;
  updateStreak();
}

function dateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function selectDay(key) {
  selectedDate = key;
  renderCalendar(); 

  const parts = key.split('-');
  document.getElementById('selected-date-label').textContent =
    `${parts[0]}년 ${parseInt(parts[1])}월 ${parseInt(parts[2])}일`;

  updateMemoPanel();
  document.getElementById('memo-input').focus();
}

function updateMemoPanel() {
  if (!selectedDate) return;

  const isStamped = localStorage.getItem('stamp-' + selectedDate) === '1';
  const btn = document.getElementById('stamp-btn');

  btn.textContent = isStamped ? '오운완 완료! ✓' : '오운완 스탬프 찍기 ✓';
  btn.className = 'memo-stamp-btn' + (isStamped ? ' stamped' : '');
  btn.disabled = false;

  document.getElementById('memo-input').value =
    localStorage.getItem('memo-' + selectedDate) || '';
}

function toggleStamp() {
  if (!selectedDate) return;

  const key = 'stamp-' + selectedDate;
  const current = localStorage.getItem(key) === '1';
  localStorage.setItem(key, current ? '0' : '1');

  renderCalendar();
  updateMemoPanel();
}

function saveMemo() {
  if (!selectedDate) return;

  localStorage.setItem('memo-' + selectedDate, document.getElementById('memo-input').value);

  const btn = document.querySelector('.memo-save-btn');
  btn.textContent = '✅ 저장됨!';
  setTimeout(() => { btn.textContent = '💾 저장하기'; }, 1500);

  renderCalendar();
}

function updateStreak() {
  const totalDays = new Date(calYear, calMonth + 1, 0).getDate();
  let max = 0, cur = 0;

  for (let d = 1; d <= totalDays; d++) {
    const key = 'stamp-' + dateKey(calYear, calMonth + 1, d);
    if (localStorage.getItem(key) === '1') {
      cur++;
      if (cur > max) max = cur;
    } else {
      cur = 0;
    }
  }

  document.getElementById('streak-count').textContent = max;
}

/* ══════════════════════════════
   INIT
══════════════════════════════ */
renderWorkouts('chest');
initCalendar();

/* ══════════════════════════════
   SCROLL REVEAL ANIMATION (Intersection Observer)
══════════════════════════════ */
const revealOptions = {
  threshold: 0.1 // 카드가 10% 정도 보이기 시작할 때 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      // 한 번 나타난 후에는 감시를 해제하고 싶다면 아래 주석 제거
      // observer.unobserve(entry.target); 
    } else {
      // 다시 위로 올렸을 때 초기화하고 싶다면 클래스 제거 (선택 사항)
      entry.target.classList.remove('reveal');
    }
  });
}, revealOptions);

// 감시할 요소들 등록 (Home 페이지의 특징 카드들)
document.querySelectorAll('.feat-card').forEach(card => {
  observer.observe(card);
});