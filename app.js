// 1. PPT 내용 데이터 구조화 (정리된 데이터셋)
const guideData = [
    {
        "location": "행동수칙",
        "problems": [
            { "symptom": "기술지원", "caution": "", "steps": [], "img": "images/frame_02_delay-0.2s.webp" },
            { "symptom": "기술지원", "caution": "", "steps": [], "img": "images/frame_03_delay-0.2s.webp" },
            { "symptom": "장애처리확인서", "caution": "", "steps": [], "img": "images/frame_04_delay-0.2s.webp" },
            { "symptom": "기술지원", "caution": "", "steps": [], "img": "images/frame_66_delay-0.2s.webp" }
        ]
    },
    {
        "location": "LCD",
        "problems": [
            {
                "symptom": "LCD 글자깨짐",
                "caution": "",
                "steps": [ "1.투표지분류기 전원 재시작", "2.LCD 교체" ],
                "img": "images/frame_06_delay-0.2s.webp"
            }
        ]
    },
    {
        "location": "장비정보",
        "problems": [
            { "symptom": "센서위치", "caution": "", "steps": [], "img": "images/frame_08_delay-0.2s.webp" },
            { "symptom": "이송 모터 동작 구간", "caution": "", "steps": [], "img": "images/frame_09_delay-0.2s.webp" },
            { "symptom": "이송 모터 동작 구간", "caution": "", "steps": [], "img": "images/frame_10_delay-0.2s.webp" },
            { "symptom": "프린터", "caution": "", "steps": [], "img": "images/frame_14_delay-0.2s.webp" },
            { "symptom": "보드연결 구조도", "caution": "", "steps": [], "img": "images/frame_78_delay-0.2s.webp" },
            { "symptom": "드라이버보드", "caution": "", "steps": [], "img": "images/frame_79_delay-0.2s.webp" },
            { "symptom": "드라이버보드", "caution": "", "steps": [], "img": "images/frame_80_delay-0.2s.webp" }
        ]
    },
    {
        "location": "프린터",
        "problems": [
            { "symptom": "용지 장착방법", "caution": "", "steps": [], "img": "images/frame_15_delay-0.2s.webp" },
            { "symptom": "잉크,유지보수상자 교체방법", "caution": "", "steps": [], "img": "images/frame_16_delay-0.2s.webp" },
            { "symptom": "용지 잼 제거", "caution": "", "steps": [], "img": "images/frame_26_delay-0.2s.webp" },
            { "symptom": "인쇄 품질 이상", "caution": "", "steps": [], "img": "images/frame_27_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_28_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_30_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_31_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_32_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_33_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_34_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_35_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_36_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_37_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_38_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_39_delay-0.2s.webp" },
            { "symptom": "프린터인식 or 출력 안됨", "caution": "", "steps": [], "img": "images/frame_40_delay-0.2s.webp" },
            { "symptom": "백지출력", "caution": "", "steps": [], "img": "images/frame_41_delay-0.2s.webp" }
        ]
    },
    {
        "location": "센서",
        "problems": [
            { "symptom": "센서레벨이상", "caution": "", "steps": [], "img": "images/frame_18_delay-0.2s.webp" }
        ]
    },
    {
        "location": "재확인대상",
        "problems": [
            {
                "symptom": "재확인대상으로 다량 빠짐",
                "caution": "",
                "steps": [ "1. [개표관리] – [조회] – [재확인대상내역조회]에서 재확인의 원인 확인" ],
                "img": "images/frame_19_delay-0.2s.webp"
            },
            { "symptom": "재확인대상으로 다량 빠짐", "caution": "", "steps": [], "img": "images/frame_20_delay-0.2s.webp" },
            { "symptom": "재확인대상으로 다량 빠짐", "caution": "", "steps": [], "img": "images/frame_21_delay-0.2s.webp" },
            { "symptom": "스캔이미지 줄 생김", "caution": "", "steps": [], "img": "images/frame_47_delay-0.2s.webp" },
            { "symptom": "스캔이미지 줄 생김", "caution": "", "steps": [], "img": "images/frame_48_delay-0.2s.webp" },
            { "symptom": "스캔이미지 줄 생김", "caution": "", "steps": [], "img": "images/frame_49_delay-0.2s.webp" },
            { "symptom": "스캔이미지 줄 생김", "caution": "", "steps": [], "img": "images/frame_50_delay-0.2s.webp" },
            { "symptom": "스캔이미지 줄 생김", "caution": "", "steps": [], "img": "images/frame_51_delay-0.2s.webp" }
        ]
    },
    {
        "location": "노트북",
        "problems": [
            { "symptom": "충전안됨,USB 연결실패", "caution": "", "steps": [], "img": "images/frame_42_delay-0.2s.webp" },
            { "symptom": "충전안됨,USB 연결실패", "caution": "", "steps": [], "img": "images/frame_43_delay-0.2s.webp" }
        ]
    },
    {
        "location": "투표용지등록",
        "problems": [
            { "symptom": "등록 안됨", "caution": "", "steps": [], "img": "images/frame_44_delay-0.2s.webp" },
            { "symptom": "등록 안됨", "caution": "", "steps": [], "img": "images/frame_46_delay-0.2s.webp" }
        ]
    },
    {
        "location": "투입구",
        "problems": [
            { "symptom": "픽업불안정 및 재투입대상다량", "caution": "", "steps": [], "img": "images/frame_55_delay-0.2s.webp" },
            { "symptom": "픽업불안정 및 재투입대상다량", "caution": "", "steps": [], "img": "images/frame_56_delay-0.2s.webp" },
            { "symptom": "픽업불안정 및 재투입대상다량", "caution": "", "steps": [], "img": "images/frame_57_delay-0.2s.webp" },
            { "symptom": "픽업불안정 및 재투입대상다량", "caution": "", "steps": [], "img": "images/frame_58_delay-0.2s.webp" },
            { "symptom": "픽업불안정 및 재투입대상다량", "caution": "", "steps": [], "img": "images/frame_59_delay-0.2s.webp" },
            { "symptom": "픽업불안정 및 재투입대상다량", "caution": "", "steps": [], "img": "images/frame_60_delay-0.2s.webp" },
            { "symptom": "분리벨트 이물질 제거", "caution": "", "steps": [], "img": "images/frame_61_delay-0.2s.webp" },
            { "symptom": "픽아웃 가이드 이물질 제거", "caution": "", "steps": [], "img": "images/frame_62_delay-0.2s.webp" }
        ]
    },
    {
        "location": "적재함",
        "problems": [
            { "symptom": "용지 말림", "caution": "", "steps": [], "img": "images/frame_64_delay-0.2s.webp" },
            { "symptom": "적재함 진입 시 잼 발생", "caution": "", "steps": [], "img": "images/frame_65_delay-0.2s.webp" },
            { "symptom": "용지 말림", "caution": "", "steps": [], "img": "images/frame_69_delay-0.2s.webp" }
        ]
    },
    {
        "location": "모터",
        "problems": [
            { "symptom": "적재함 보조모터 동작 이상", "caution": "", "steps": [], "img": "images/frame_68_delay-0.2s.webp" }
        ]
    },
    {
        "location": "운영 트레이",
        "problems": [
            { "symptom": "Lock 파손", "caution": "", "steps": [], "img": "images/frame_70_delay-0.2s.webp" }
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
    if(!locationList) return; 
    locationList.innerHTML = ''; // 중복 생성 방지 초기화
    
    guideData.forEach((data, index) => {
        const btn = document.createElement('button');
        btn.textContent = data.location;
        btn.onclick = () => selectLocation(index, btn);
        locationList.appendChild(btn);
    });
}

// 4. 위치 선택 시 문제 리스트 노출
function selectLocation(index, targetBtn) {
    document.querySelectorAll('#location-list button').forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');

    const selectedData = guideData[index];
    if(problemCount) problemCount.textContent = `${selectedData.problems.length}건`;
    if(!problemList) return;
    
    problemList.innerHTML = ''; 
    if(solutionSection) solutionSection.classList.add('hidden'); 

    selectedData.problems.forEach(prob => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.textContent = `📌 ${prob.symptom}`; // 문법 오류 백틱(``) 수정 완료
        item.onclick = () => showSolution(prob);
        problemList.appendChild(item);
    });

    problemList.scrollIntoView({ behavior: 'smooth' });
}

// 5. 문제 선택 시 조치 방법 및 PPT 이미지 출력
function showSolution(prob) {
    const selectedSymptom = document.getElementById('selected-symptom');
    const cautionText = document.getElementById('caution-text');
    const stepList = document.getElementById('step-list');
    const pptImage = document.getElementById('ppt-image');

    if(selectedSymptom) selectedSymptom.textContent = prob.symptom;
    if(cautionText) cautionText.textContent = prob.caution || "없음";
    
    if(stepList) {
        stepList.innerHTML = '';
        if(prob.steps && prob.steps.length > 0) {
            prob.steps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                stepList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = "상세 조치 단계는 하단 PPT 가이드 이미지를 참조하세요.";
            stepList.appendChild(li);
        }
    }

    if(pptImage) pptImage.src = prob.img;
    if(solutionSection) {
        solutionSection.classList.remove('hidden');
        solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 앱 실행
init();