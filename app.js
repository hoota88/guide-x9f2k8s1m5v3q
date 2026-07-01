// 사이트 접속 즉시 비밀번호 확인
(function checkPassword() {
    const correctPassword = "vote2026_secure"; // 사용할 비밀번호 지정
    let userPassword = prompt("장애조치 가이드 접속 비밀번호를 입력하세요:");

    while (userPassword !== correctPassword) {
        if (userPassword === null) {
            // 취소 버튼 누른 경우 블랭크 처리
            document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>접근 권한이 없습니다.</h2>";
            return;
        }
        userPassword = prompt("비밀번호가 틀렸습니다. 다시 입력하세요:");
    }
    // 비밀번호가 맞으면 아래 기존 init() 함수 등이 실행되면서 화면이 나타남
})();

// 1. PPT 내용 데이터 구조화 (예시 데이터)
const guideData = [
    {
        "location": "행동수칙",
        "problems": [
            {
                "symptom": "기술지원",
                "caution": "",
                "steps": [],
                "img": "images/frame_02_delay-0.2s.webp"
            },
            {
                "symptom": "기술지원",
                "caution": "",
                "steps": [],
                "img": "images/frame_03_delay-0.2s.webp"
            },
            {
                "symptom": "장애처리확인서",
                "caution": "",
                "steps": [],
                "img": "images/frame_04_delay-0.2s.webp"
            },
            {
                "symptom": "기술지원",
                "caution": "",
                "steps": [],
                "img": "images/frame_66_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "LCD",
        "problems": [
            {
                "symptom": "LCD 글자깨짐",
                "caution": "",
                "steps": [
                    "1.투표지분류기 전원 재시작",
                    "2.LCD 교체"
                ],
                "img": "images/frame_06_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "장비정보",
        "problems": [
            {
                "symptom": "센서위치",
                "caution": "",
                "steps": [],
                "img": "images/frame_08_delay-0.2s.webp"
            },
            {
                "symptom": "이송 모터 동작 구간",
                "caution": "",
                "steps": [],
                "img": "images/frame_09_delay-0.2s.webp"
            },
            {
                "symptom": "이송 모터 동작 구간",
                "caution": "",
                "steps": [],
                "img": "images/frame_10_delay-0.2s.webp"
            },
            {
                "symptom": "프린터",
                "caution": "",
                "steps": [],
                "img": "images/frame_14_delay-0.2s.webp"
            },
            {
                "symptom": "보드연결 구조도",
                "caution": "",
                "steps": [],
                "img": "images/frame_78_delay-0.2s.webp"
            },
            {
                "symptom": "드라이버보드",
                "caution": "",
                "steps": [],
                "img": "images/frame_79_delay-0.2s.webp"
            },
            {
                "symptom": "드라이버보드",
                "caution": "",
                "steps": [],
                "img": "images/frame_80_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "프린터",
        "problems": [
            {
                "symptom": "용지 장착방법",
                "caution": "",
                "steps": [],
                "img": "images/frame_15_delay-0.2s.webp"
            },
            {
                "symptom": "잉크,유지보수상자 교체방법",
                "caution": "",
                "steps": [],
                "img": "images/frame_16_delay-0.2s.webp"
            },
            {
                "symptom": "용지 잼 제거",
                "caution": "",
                "steps": [],
                "img": "images/frame_26_delay-0.2s.webp"
            },
            {
                "symptom": "인쇄 품질 이상",
                "caution": "",
                "steps": [],
                "img": "images/frame_27_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_28_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_30_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_31_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_32_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_33_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_34_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_35_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_36_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_37_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_38_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_39_delay-0.2s.webp"
            },
            {
                "symptom": "프린터인식 or 출력 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_40_delay-0.2s.webp"
            },
            {
                "symptom": "백지출력",
                "caution": "",
                "steps": [],
                "img": "images/frame_41_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "센서",
        "problems": [
            {
                "symptom": "센서레벨이상",
                "caution": "",
                "steps": [],
                "img": "images/frame_18_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "재확인대상",
        "problems": [
            {
                "symptom": "재확인대상으로 다량 빠짐",
                "caution": "",
                "steps": [
                    "1. [개표관리] – [조회] – [재확인대상내역조회]에서 재확인의 원인 확인"
                ],
                "img": "images/frame_19_delay-0.2s.webp"
            },
            {
                "symptom": "재확인대상으로 다량 빠짐",
                "caution": "",
                "steps": [],
                "img": "images/frame_20_delay-0.2s.webp"
            },
            {
                "symptom": "재확인대상으로 다량 빠짐",
                "caution": "",
                "steps": [],
                "img": "images/frame_21_delay-0.2s.webp"
            },
            {
                "symptom": "스캔이미지 줄 생김",
                "caution": "",
                "steps": [],
                "img": "images/frame_47_delay-0.2s.webp"
            },
            {
                "symptom": "스캔이미지 줄 생김",
                "caution": "",
                "steps": [],
                "img": "images/frame_48_delay-0.2s.webp"
            },
            {
                "symptom": "스캔이미지 줄 생김",
                "caution": "",
                "steps": [],
                "img": "images/frame_49_delay-0.2s.webp"
            },
            {
                "symptom": "스캔이미지 줄 생김",
                "caution": "",
                "steps": [],
                "img": "images/frame_50_delay-0.2s.webp"
            },
            {
                "symptom": "스캔이미지 줄 생김",
                "caution": "",
                "steps": [],
                "img": "images/frame_51_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "노트북",
        "problems": [
            {
                "symptom": "충전안됨,USB 연결실패",
                "caution": "",
                "steps": [],
                "img": "images/frame_42_delay-0.2s.webp"
            },
            {
                "symptom": "충전안됨,USB 연결실패",
                "caution": "",
                "steps": [],
                "img": "images/frame_43_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "투표용지등록",
        "problems": [
            {
                "symptom": "등록 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_44_delay-0.2s.webp"
            },
            {
                "symptom": "등록 안됨",
                "caution": "",
                "steps": [],
                "img": "images/frame_46_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "투입구",
        "problems": [
            {
                "symptom": "픽업불안정 및 재투입대상다량",
                "caution": "",
                "steps": [],
                "img": "images/frame_55_delay-0.2s.webp"
            },
            {
                "symptom": "픽업불안정 및 재투입대상다량",
                "caution": "",
                "steps": [],
                "img": "images/frame_56_delay-0.2s.webp"
            },
            {
                "symptom": "픽업불안정 및 재투입대상다량",
                "caution": "",
                "steps": [],
                "img": "images/frame_57_delay-0.2s.webp"
            },
            {
                "symptom": "픽업불안정 및 재투입대상다량",
                "caution": "",
                "steps": [],
                "img": "images/frame_58_delay-0.2s.webp"
            },
            {
                "symptom": "픽업불안정 및 재투입대상다량",
                "caution": "",
                "steps": [],
                "img": "images/frame_59_delay-0.2s.webp"
            },
            {
                "symptom": "픽업불안정 및 재투입대상다량",
                "caution": "",
                "steps": [],
                "img": "images/frame_60_delay-0.2s.webp"
            },
            {
                "symptom": "분리벨트 이물질 제거",
                "caution": "",
                "steps": [],
                "img": "images/frame_61_delay-0.2s.webp"
            },
            {
                "symptom": "픽아웃 가이드 이물질 제거",
                "caution": "",
                "steps": [],
                "img": "images/frame_62_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "적재함",
        "problems": [
            {
                "symptom": "용지 말림",
                "caution": "",
                "steps": [],
                "img": "images/frame_64_delay-0.2s.webp"
            },
            {
                "symptom": "적재함 진입 시 잼 발생",
                "caution": "",
                "steps": [],
                "img": "images/frame_65_delay-0.2s.webp"
            },
            {
                "symptom": "용지 말림",
                "caution": "",
                "steps": [],
                "img": "images/frame_69_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "모터",
        "problems": [
            {
                "symptom": "적재함 보조모터 동작 이상",
                "caution": "",
                "steps": [],
                "img": "images/frame_68_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "운영 트레이",
        "problems": [
            {
                "symptom": "Lock 파손",
                "caution": "",
                "steps": [],
                "img": "images/frame_70_delay-0.2s.webp"
            }
        ]
    }
];

// 2. DOM 요소 가져오기
const locationList = document.getElementById('location-list');
const problemList = document.getElementById('problem-list');
const problemCount = document.getElementById('problem-count');
const solutionSection = document.getElementById('solution-section');

// 3. 초기 화면: 위치 버튼들 생성하기
function init() {
    guideData.forEach((data, index) => {
        const btn = document.createElement('button');
        btn.textContent = data.location;
        btn.onclick = () => selectLocation(index, btn);
        locationList.appendChild(btn);
    });
}

// 4. 위치 선택 시 문제 리스트 노출
function selectLocation(index, targetBtn) {
    // 버튼 활성화 스타일 제어
    document.querySelectorAll('#location-list button').forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');

    const selectedData = guideData[index];
    problemCount.textContent = `${selectedData.problems.length}건`;
    problemList.innerHTML = ''; // 기존 리스트 초기화
    solutionSection.classList.add('hidden'); // 조치 화면은 숨김

    selectedData.problems.forEach(prob => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.textContent = 📌 ${prob.symptom};
        item.onclick = () => showSolution(prob);
        problemList.appendChild(item);
    });

    // 모바일 배려: 문제 선택 영역으로 부드럽게 스크롤
    problemList.scrollIntoView({ behavior: 'smooth' });
}

// 5. 문제 선택 시 조치 방법 및 PPT 이미지 출력
function showSolution(prob) {
    document.getElementById('selected-symptom').textContent = prob.symptom;
    document.getElementById('caution-text').textContent = prob.caution;
    
    // 조치 단계 할당
    const stepList = document.getElementById('step-list');
    stepList.innerHTML = '';
    prob.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepList.appendChild(li);
    });

    // 이미지 경로 지정
    document.getElementById('ppt-image').src = prob.img;
    
    // 숨겨진 조치 영역 노출 및 스크롤
    solutionSection.classList.remove('hidden');
    solutionSection.scrollIntoView({ behavior: 'smooth' });
}

// 앱 실행
init();