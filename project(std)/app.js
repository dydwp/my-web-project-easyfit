var workouts = {

  chest: [
    {
      title: '푸시업 (Push-up)',
      imgUrl:'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif',
      tags: ['입문', '맨몸'],
      pose: '어깨너비보다 약간 넓게 손을 짚고, 몸을 일직선으로 유지하세요. 팔꿈치를 45° 각도로 구부리며 천천히 내려갑니다.',
      target: '대흉근 (중앙/하부), 삼두근, 전면 삼각근',
      caution: '허리가 꺾이지 않도록 코어에 힘을 주세요',
      videoUrl: 'https://www.youtube.com/results?search_query=푸시업+정확한+자세'
    },
    {
      title: '덤벨 플라이 (Dumbbell Fly)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif',
      tags: ['중급', '덤벨'],
      pose: '벤치에 누워 덤벨을 가슴 위로 들고, 팔꿈치를 약간 구부린 채 양쪽으로 넓게 펼칩니다.',
      target: '대흉근 (외측/전체), 전면 삼각근',
      caution: '덤벨을 너무 무겁게 사용하면 어깨 관절 부상 위험이 있어요.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+플라이+정확한+자세'
    },
    {
      title: '케이블 크로스오버',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif',
      tags: ['중급', '기구'],
      pose: '케이블 기구를 어깨 높이로 설정하고 양손에 잡은 후, 가슴 앞으로 교차하듯 당겨옵니다.',
      target: '대흉근 (내측 집중), 전면 삼각근',
      caution: '반동을 사용하지 않고 천천히 수축과 이완을 느끼세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=케이블+크로스오버+자세'
    }
  ],

  back: [
    {
      title: '랫 풀다운 (Lat Pulldown)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
      tags: ['입문', '기구'],
      pose: '바를 어깨너비보다 넓게 잡고, 상체를 약간 뒤로 기울이며 바를 쇄골 방향으로 당깁니다.',
      target: '광배근, 이두근, 후면 삼각근',
      caution: '바를 뒷목으로 당기지 마세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=랫+풀다운+자세'
    },
    {
      title: '덤벨 로우 (Dumbbell Row)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif',
      tags: ['중급', '덤벨'],
      pose: '벤치나 고정된 곳에 한 손과 무릎을 짚고, 반대쪽 손으로 덤벨을 쥔 채 등 근육을 이용해 당깁니다.',
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
      caution: '당길 때 상체가 과도하게 뒤로 젖혀지지 않도록 하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=시티드+케이블+로우+자세'
    }
  ],

  leg: [
    {
      title: '스쿼트 (Squat)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Squat.gif',
      tags: ['입문', '맨몸'],
      pose: '발을 어깨너비로 벌리고, 무릎이 90도가 될 때까지 앉았다가 일어납니다.',
      target: '대퇴사두근, 둔근, 햄스트링',
      caution: '무릎이 발끝을 넘어가지 않게 주의하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=스쿼트+정확한+자세'
    },
    {
      title: '런지 (Lunge)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif',
      tags: ['입문', '덤벨'],
      pose: '한 발을 크게 앞으로 내딛고, 앞 무릎이 90°가 되도록 내려갑니다.',
      target: '대퇴사두근, 둔근, 햄스트링',
      caution: '앞 무릎이 발끝을 너무 많이 넘어가지 않도록 하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=런지+자세' 
    },
    {
      title: '레그 프레스 (Leg Press)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif',
      tags: ['중급', '기구'],
      pose: '발판에 발을 어깨너비로 놓고, 무릎이 90° 될 때까지 내린 후 밀어올립니다.',
      target: '대퇴사두근, 둔근',
      caution: '무릎을 완전히 펴서 관절을 잠그지 마세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=레그+프레스+자세'
    } 
  ],

  shoulder: [
    {
      title: '숄더 프레스 (Shoulder Press)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif',
      tags: ['중급', '덤벨'],
      pose: '덤벨을 귀 높이에서 잡고, 팔꿈치가 약간 앞쪽을 향하게 한 채 머리 위로 밀어올립니다.',
      target: '전면/측면 삼각근, 삼두근',
      caution: '허리가 과도하게 아치를 그리지 않도록 코어에 힘을 주세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+숄더+프레스+자세'
    },
    {
      title: '레터럴 레이즈 (Lateral Raise)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
      tags: ['입문', '덤벨'],
      pose: '팔꿈치를 약간 구부린 채 덤벨을 양옆으로 어깨 높이까지 올립니다.',
      target: '측면 삼각근',
      caution: '반동을 사용하지 마세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=사이드+레터럴+레이즈+자세'
    },
    {
      title: '페이스풀 (Face Pull)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif',
      tags: ['입문', '기구'],
      pose: '케이블을 얼굴 높이로 설정하고, 양손으로 로프를 잡아 얼굴 방향으로 당깁니다.',
      target: '후면 삼각근, 회전근개, 승모근',
      caution: '너무 무거운 무게보다 정확한 자세로 수행하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=페이스풀+자세'
    }
  ],

  arm: [
    {
      title: '바이셉 컬 (Bicep Curl)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif',
      tags: ['입문', '덤벨'],
      pose: '덤벨을 아래팔로만 들어올리고, 팔꿈치는 옆구리에 고정합니다.',
      target: '이두근 (단두/장두)',
      caution: '팔꿈치가 앞으로 나오거나 상체 반동을 쓰지 마세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=덤벨+컬+자세'
    },
    {
      title: '트라이셉 딥스 (Tricep Dips)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif',
      tags: ['입문', '맨몸'],
      pose: '의자나 벤치를 등지고 손을 짚은 뒤, 팔꿈치를 구부리며 몸을 내립니다.',
      target: '삼두근 (전체)',
      caution: '어깨가 위로 솟지 않도록 하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=삼두+딥스+자세'
    },
    {
      title: '해머 컬 (Hammer Curl)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
      tags: ['입문', '덤벨'],
      pose: '덤벨을 세워서(엄지가 위) 들고, 바이셉 컬과 동일하게 수행합니다.',
      target: '이두근, 상완근, 전완근',
      caution: '천천히 수행하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=해머+컬+자세'
    }
  ],

  core: [
    {
      title: '크런치 (Crunch)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif',
      tags: ['입문', '맨몸'],
      pose: '무릎을 세우고 누운 채, 상체를 복근으로 말아올립니다.',
      target: '복직근 (상부)',
      caution: '목에 힘을 주면 경추에 무리가 가요.',
      videoUrl: 'https://www.youtube.com/results?search_query=크런치+자세'
    },
    {
      title: '플랭크 (Plank)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif',
      tags: ['입문', '맨몸'],
      pose: '팔꿈치를 바닥에 대고 몸을 일직선으로 유지합니다.',
      target: '코어 전체, 어깨 안정화',
      caution: '허리가 처지거나 엉덩이가 올라가지 않게 주의하세요.',
      videoUrl: 'https://www.youtube.com/results?search_query=플랭크+자세'
    },
    {
      title: '백 익스텐션 (Back Extension)',
      imgUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Weighted-Back-Extension.gif',
      tags: ['중급', '기구'],
      pose: '기구에 골반을 대고 엎드린 후, 상체를 천천히 숙였다가 들어 올립니다.',
      target: '척추기립근, 둔근, 햄스트링',
      caution: '상체를 들어 올릴 때 허리를 과도하게 뒤로 꺾으면 부상 위험이 있습니다.',
      videoUrl: 'https://www.youtube.com/results?search_query=백+익스텐션+자세'
    }
  ]
};

var currentTab = 'chest';

function selectTab(btn, tab) {

  document.querySelectorAll('.tab').forEach(function(t) {
    t.classList.remove('active');
  });

  btn.classList.add('active');

  currentTab = tab;

  renderWorkouts(tab);
}

function renderWorkouts(tab) {

  var grid = document.getElementById('workout-grid');

  var items = workouts[tab];

  var html = '';

  for(var i = 0; i < items.length; i++) {
    var w = items[i];

    html += '<div class="workout-card" id="wcard-' + tab + '-' + i + '">';
    html += '  <div class="workout-thumb">';
    html += '    <img src="' + w.imgUrl + '" alt="' + w.title + '">';
    html += '  </div>';
    html += '  <div class="workout-body">';
    html += '    <div class="workout-title">' + w.title + '</div>';
    html += '    <div class="workout-meta">';

    for(var j = 0; j < w.tags.length; j++) {
      html += '<span class="tag">' + w.tags[j] + '</span>';
    }

    html += '    </div>';
    html += '    <div onclick="toggleAccordion(\'' + tab + '-' + i + '\')">';
    html += '      <span>자세히 보기 ▼</span>';
    html += '    </div>';
    html += '    <div class="accordion" id="acc-' + tab + '-' + i + '">';
    html += '      <div class="accordion-inner">';
    html += '        <div class="accordion-section">';
    html += '          <div class="accordion-label">📌 정확한 자세</div>';
    html += '          <div class="accordion-text">' + w.pose + '</div>';
    html += '        </div>';
    html += '        <div class="accordion-section">';
    html += '          <div class="accordion-label">⚡ 자극 부위</div>';
    html += '          <div class="accordion-text">' + w.target + '</div>';
    html += '        </div>';
    html += '        <div class="accordion-section">';
    html += '          <div class="accordion-label">⚠️ 주의사항</div>';
    html += '          <div class="accordion-text">' + w.caution + '</div>';
    html += '        </div>';
    html += '        <div class="accordion-section">';
    html += '          <a href="' + w.videoUrl + '" target="_blank" class="video-btn">▶️ 영상으로 자세 확인하기</a>';
    html += '        </div>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
  }

  grid.innerHTML = html;
}

function toggleAccordion(id) {

  var acc = document.getElementById('acc-' + id);
  var isOpen = acc.classList.contains('open');

  document.querySelectorAll('.accordion').forEach(function(a) {
    a.classList.remove('open');
  });

  if(isOpen === false) {
    acc.classList.add('open');
  }
}

renderWorkouts('chest');

function showPage(id) {

  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });

  document.querySelectorAll('.nav-btn').forEach(function(b) {
    b.classList.remove('avtive');
  });

  document.getElementById('page-' + id).classList.add('active');

  document.getElementById('nav-' + id).classList.add('active');
}

// 스크롤 감지해서 카드 나타나게 하기
var observer = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {

    if(entry.isIntersecting) {
      entry.target.classList.add('reveal');
    } else {
      entry.target.classList.remove('reveal');
    }
  });
});

// .feat-crad 전무 감시 등록
document.querySelectorAll('.feat-card').forEach(function(card) {
  observer.observe(card);
})